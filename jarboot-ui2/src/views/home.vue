<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router';
import { DOCS_URL } from '@/common/CommonConst';
import {useBasicStore, useUserStore} from '@/stores';
import { onMounted, reactive } from 'vue';
import { WsManager } from '@/common/WsManager';
import { pubsub } from '@/views/services/ServerPubsubImpl';
import type {MenuItem} from "@/types";
import routesConfig from "@/router/routes-config";
import StringUtil from "@/common/StringUtil";

const state = reactive({
  dialog: false,
  resetPassword: false,
});

const openDoc = () => window.open(DOCS_URL);
const user = useUserStore();
const route = useRoute();
const router = useRouter();
const basic = useBasicStore();

const subNameMap = new Map();

function checkPermission(config: any): boolean {
  if (!user?.permission) {
    return false;
  }
  if ('jarboot' === user.username) {
    return true;
  }
  if (config?.meta?.code) {
    return user.permission[config.meta.code] as boolean;
  }
  return true;
}

const filterMenu = (config: any): boolean => {
  const permission = checkPermission(config);
  if (!permission) {
    return false;
  }

  const children = config.children?.filter((c: any) => checkPermission(c));
  if (config.meta.menu && !children?.length) {
    return false;
  }
  return StringUtil.isNotEmpty(config.meta.module);
};

function createMenuData(config: any) {
  let subName = '';
  const filtered = config?.children?.filter((c: any) => checkPermission(c));
  if (filtered?.length) {
    const first = filtered[0];
    subName = first.name;
  }

  const menu: MenuItem = {
    name: config.name,
    path: config.path,
    module: config.meta.module,
    icon: config.meta.icon,
    code: config.meta.code,
    subName,
  }
  if (subName) {
    menu.children = filtered
        .map((child: any) => {
          const menuItem = {name: child.name, path: child.path, code: child.meta.code, icon: child.meta.icon};
          subNameMap.set(menuItem.name, menu)
          return menuItem;
        });
  }
  return menu;
}

const welcome = () => {
  console.log(`%c▅▇█▓▒(’ω’)▒▓█▇▅▂`, 'color: magenta');
  console.log(`%c(灬°ω°灬) `, 'color:magenta');
  console.log(`%c（づ￣3￣）づ╭❤～`, 'color:red');
  WsManager.initWebsocket();
  pubsub.init();
};

const isActive = (menu: MenuItem): boolean => {
  if (route.name === menu.name) {
    return true;
  }
  return route.meta.module === menu.module;
};

const goTo = (menu: any) => {
  if (route.name !== menu.name && !isActive(menu)) {
    router.push({ name: menu.subName || menu.name });
  }
};

function modifyUser() {
  state.resetPassword = false;
  state.dialog = true;
}
function resetPassword() {
  state.resetPassword = true;
  state.dialog = true;
}

onMounted(() => {
  const menus = routesConfig
      .filter(config => filterMenu(config))
      .map(config => createMenuData(config));
  basic.setMenus(menus);
  router.afterEach((to, _from) => {
    const name = to.name;
    const menu = subNameMap.get(name);
    if (menu) {
      menu.subName = name;
    }
  });
  welcome();
});
</script>

<template>
  <main>
    <header>
      <img alt="Jarboot logo" class="logo" src="@/assets/logo.png" />
      <div class="wrapper">
        <nav>
          <a
            v-for="(menu, i) in basic.menus"
            :key="i"
            :class="{ 'router-link-exact-active': isActive(menu) }"
            @click="goTo(menu)"
            >{{ $t(menu.module) }}</a
          >
        </nav>
      </div>
      <div style="flex: auto"></div>
      <div class="right-extra">
        <div class="tools-box">
          <div class="menu-button">
            <file-upload></file-upload>
          </div>
          <div class="menu-button">
            <jarboot-version></jarboot-version>
          </div>
          <div class="menu-button">
            <el-button size="small" link @click="openDoc">{{ $t('MENU_DOCS') }}</el-button>
          </div>
          <div class="menu-button">
            <theme-switch></theme-switch>
          </div>
          <div class="menu-button">
            <language-switch></language-switch>
          </div>
        </div>
        <div class="user-avatar">
          <el-dropdown>
            <div style="display: flex">
              <el-avatar>
                <img v-if="user.avatar" :src="user.avatar" height="40" width="40" alt="avatar" />
                <svg-icon v-else icon="icon-panda" style="width: 26px; height: 26px" />
              </el-avatar>
              <div class="user-name">
                <span>{{ user.fullName || user.username }}</span>
                <icon-pro icon="ArrowDown" class="el-icon--right"></icon-pro>
              </div>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item icon="UserFilled" @click="modifyUser">{{ user.fullName || user.username }}</el-dropdown-item>
                <el-dropdown-item icon="Edit" @click="resetPassword">{{ $t('MODIFY_PWD') }}</el-dropdown-item>
                <el-dropdown-item icon="Right" @click="user.logout()">{{ $t('SIGN_OUT') }}</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </header>
    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <keep-alive>
          <component :is="Component" :key="route.path" v-if="route.meta.keepAlive" />
        </keep-alive>
      </transition>
      <component :is="Component" :key="route.path" v-if="!route.meta.keepAlive" />
    </router-view>
    <modify-user-dialog v-model:visible="state.dialog" :reset-password="state.resetPassword" :username="user.username"></modify-user-dialog>
  </main>
</template>
<style lang="less" scoped>
header {
  display: flex;
  height: 50px;
  border-bottom: 1px solid var(--el-border-color);
  .logo {
    height: 38px;
    margin: 6px 15px;
  }
  nav {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    line-height: 46px;
    a {
      text-decoration: none;
      color: var(--el-text-color-regular);
      padding: 2px 16px;
      display: inline-block;
      cursor: pointer;
      &:hover {
        color: var(--el-color-primary-light-3);
      }
      &.router-link-exact-active {
        color: var(--el-color-primary);
        border-bottom: 2px solid var(--el-color-primary);
        cursor: default;
      }
      &:first-of-type {
        margin-left: 28px;
      }
    }
  }
  .right-extra {
    display: flex;
    .tools-box {
      display: flex;
      margin: auto 5px;
      border-right: var(--el-border);
    }
    .menu-button {
      margin-right: 15px;
    }
    .user-avatar {
      margin: auto 10px;
      .el-icon--right {
        margin-left: 6px;
        position: relative;
      }
    }
  }
  ._jarboot_username {
    line-height: 40px;
  }
  .user-name {
    line-height: 40px;
    margin-left: 5px;
    :hover {
      cursor: pointer;
      color: var(--el-color-primary);
    }
  }
}
</style>

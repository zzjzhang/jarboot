// src/locales/zh-CN.js
export default {
  'navbar.lang': 'English',

  //Tab标题
  SERVICES_MGR: '服务管理',
  ONLINE_DEBUG: '在线诊断',
  AUTH_CONTROL: '权限控制',
  PLUGINS: '插件',
  SETTING: '设置',
  ABOUT: '关于',
  MENU_DOCS: '文档',
  TERMINAL: '终端',
  TOOLS: '工具',
  FILE_MGR: '文件管理',

  //服务管理
  ONE_KEY_START: '一键启动',
  ONE_KEY_STOP: '一键停止',
  ONE_KEY_RESTART: '一键重启',
  START: '启动',
  STOP: '停止',
  RESTART: '重启',
  UPLOAD_NEW: '上传或新增',
  NAME: '名字',
  STATUS: '状态',
  CLEAR: '清空',
  CLOSE: '关闭',
  GROUP: '组',
  TREE_VIEW: '树',
  LIST_VIEW: '列表',
  CONSOLE_VIEW: '控制台',
  SERVICES_CONF: '配置',
  GROUP_PLACEHOLDER: '输入分组名，便于管理',
  CMD_PLACEHOLDER: '输入调试命令执行',
  SELECT_UPLOAD_SERVER_TITLE: '输入要更新或新增的服务的名称',
  UPLOAD_STAGE_TITLE: '上传{server}文件',
  UPLOAD_TIPS: '点击或拖拽文件到此区域上传',
  FILE_SIZE_OVER_TIPS: '文件大小必须小于{size}',
  COMMAND_PLACEHOLDER: '输入命令，示例：help',
  MORE_SETTING_INFO: '更多的配置信息，请到服务配置页面。',
  UPLOAD_ERROR: '更新服务失败！',
  UPLOAD_SUCCESS: '成功更新服务！',
  UPLOAD_HINT: '支持单个或批量上传。',
  DELETE_INFO: '该操作将会彻底删除服务的相关信息，是否继续？',
  UPLOAD_DESC: '点击或拖拽文件到此区域上传',
  LOCAL: '本地',
  REMOTE: '远程',
  DEFAULT_GROUP: '默认组',
  DETACH_MSG: 'Detach将断开远程连接，断开后将从列表中移除，是否继续？',
  //进程状态
  RUNNING: '运行中',
  STOPPED: '已停止',
  STARTING: '启动中',
  STOPPING: '停止中',
  SCHEDULING: '计划中',
  ATTACHED: 'Attached',
  NOT_ATTACHED: 'Not attached',
  // 主机状态
  ONLINE: '在线',
  OFFLINE: '离线',
  AUTH_FAILED: '鉴权失败',

  //通用
  TYPE: '类型',
  SUBMIT_BTN: '提交',
  RESET_BTN: '重置',
  SEARCH_BTN: '搜索',
  FILTER_BTN: '过滤',
  REFRESH_BTN: '刷新',
  NEXT_BTN: '下一步',
  DASHBOARD: '仪表盘',
  SERVER_EMPTY: '当前工作空间下未搜索到服务。',
  MODIFY: '编辑',
  SAVE: '保存',
  DELETE: '删除',
  CREATE: '新增',
  SUCCESS: '成功！',
  LOADING: '加载中...',
  SUBMITTING: '提交中...',
  WARN: '警告',
  CANCEL: '取消',
  EXPORT: '导出',
  IMPORT: '导入',
  OPERATOR: '操作',
  IMPORT_INFO: `导入的服务{name}已经存在，是否覆盖？`,
  UPLOAD_INFO: `上传更新{name}前是否备份服务，以便部署出错后恢复？`,
  START_UPLOAD_INFO: `开始上传文件{name}...`,
  TRUSTED_SUCCESS: '获取授权成功！',
  UNTRUSTED_MODEL_BODY: `未知的远程主机{host}，是否信任？`,
  TRUST_ONCE: '信任一次',
  TRUST_ALWAYS: '始终信任',
  TEXT_WRAP: '自动换行',
  AUTO_SCROLL_END: '自动滚动到底部',
  SCROLL_TO_TOP: '滚动到顶部',
  APP_TYPE: '应用类型',
  ADD_FILE: '新增文件',
  ADD_FOLDER: '新增文件夹',
  NOT_TEXT_FILE: '文件不是文本类型，是否继续编辑？',
  SAVE_CONFIG_AND_ENABLE_FILE: '保存配置以便启用文件管理',
  DOWNLOAD: '下载',
  FAILED: '失败',
  CREATE_TERM: '新建终端',
  USER_DIR: '用户目录',
  MODIFY_USER: '修改用户',
  AVATAR: '头像',
  CLICK_MODIFY: '点击修改',
  PREVIEW: '预览',
  SELECT_AVATAR: '选择头像',
  UPLOAD_IMG: '上传图片',
  RE_UPLOAD_IMG: '重新上传',
  SIZE: '大小',
  MODIFY_TIME: '修改时间',
  COUNT: '数量',
  TIP_UPLOAD_IMG: '请上传图片',
  CONNECT: '连接',
  FILE_NAME: '文件名',
  FINISHED: '完成',
  TRANSMITTING: '传输中',

  //服务配置
  SERVER_LIST_TITLE: '服务列表',
  COMMAND_LABEL: '启动命令',
  VM_OPT_LABEL: 'VM参数',
  MAIN_ARGS_LABEL: '程序传入参数',
  WORK_HOME_LABEL: '工作目录',
  ENV_LABEL: '环境变量',
  PRIORITY_LABEL: '启动优先级',
  DAEMON_LABEL: '进程守护',
  JAR_UPDATE_WATCH_LABEL: '文件路径监控',
  SCHEDULE_TYPE: '运行计划',
  SCHEDULE_ONCE: '单次执行',
  SCHEDULE_LONE_TIME: '长期运行',
  SCHEDULE_CRON: '定时任务',
  COMMAND_EXAMPLE: '示例： 1) -jar xx.jar    2) MainClassName    3) -cp xx.jar *.*.MainClass mainMethod    4) -classpath **.jar *.*ClassName',

  //插件
  UPLOAD_TITLE: '上传',
  FILE: '文件',
  UPLOAD_BUTTON: '点击上传',

  //全局配置
  SYSTEM_SETTING: '系统设置',
  SERVERS_PATH: '工作空间',
  DEFAULT_VM_OPT: '默认的VM参数',
  AUTO_START_AFTER_INIT: 'jarboot启动后自动启动服务',
  TRUSTED_HOSTS: '信任的服务器',
  EMPTY_INPUT_MSG: '输入的内容为空！',
  DELETE_HOST_MSG: '是否要删除信任的服务器？',
  MAX_START_TIME: '服务启动最长等待时间（毫秒）',
  MAX_EXIT_TIME: '服务优雅退出最长等待时间（毫秒）',
  AFTER_OFFLINE_EXEC: '服务异常退出后执行的脚本',
  FILE_SHAKE_TIME: '服务文件变更监控抖动时间（秒）',

  //用户登录
  USER_NAME: '用户',
  FULL_NAME: '姓名',
  PASSWORD: '密码',
  RE_PASSWORD: '确认密码',
  LOGIN: '登录',
  MODIFY_PWD: '修改密码',
  CREATE_USER: '创建用户',
  SIGN_OUT: '退出',
  INTERNAL_SYS_TIP: `内部系统，不可暴露到公网`,
  INTERNAL_SYS_TIP1: ` `,
  OLD_PASSWORD: '请输入旧密码',
  REPEAT_PASSWORD: '请输入确认密码',
  INPUT_PASSWORD: '请输入密码',
  INPUT_USERNAME: '请输入用户名',
  INPUT_FULL_NAME: '请输入姓名',
  INPUT_ROLE: '请输入角色',
  PWD_NOT_MATCH: '两次输入密码不一致!',
  USER_LIST: '用户列表',
  ROLE_MGR: '角色管理',
  PRIVILEGE_MGR: '权限管理',
  ROLE: '角色',
  BIND_ROLE: '绑定角色',
  DELETE_USER: `是否要删除该用户({user})？`,
  DELETE_ROLE: `是否要删除该角色？`,
  CAN_NOT_REMOVE_SELF: '不可以删除当前登录的用户！',
  PERMISSION_CONTROL_TITLE: `访问权限控制`,
  RESET_PASSWORD: '重置密码',
  PRIVILEGE_CONF: '权限配置',
  ACCESS_PRIVILEGE: '访问权限',

  //交互提示信息
  SELECT_ONE_SERVER_INFO: '请选择一个服务后操作',
  NAME_NOT_EMPTY: `名字不能为空`,
  UPLOAD_FILE_EMPTY: `成功上传的文件为空`,
  SELECT_ONE_OP: '请选择要操作的项',
  COMMAND_RUNNING: '正在执行命令："{command}"，请先停止命令再执行',
  SAVE_OR_CANCEL: '是否要保存对文件的更改？',
  PLEASE_INPUT: '请输入',
  CHANGE_SAVE_TIP: '文件已修改，是否保存！',
  RUNNING_DELETE_INFO: '删除的服务{name}正在运行中，请先终止！',

  //帮助
  HELP: '帮助',
  QUICK_START: '快速开始',
  ABOUT_TEXT: 'Jarboot 是一个Java进程启动、调试、诊断的平台，可以管理、监控及诊断运行的的Java进程。',
  THREAD: '线程',
  RUNNABLE: '运行中',
  BLOCKED: '阻塞中',
  TOTAL: '全部',
  OVERVIEW: '概览',
  ACTIVE_THREAD: '活动线程',
  HEAP_USED: '堆内存使用量',
  NON_HEAP_USED: '非堆内存使用量',
  HEAP: '堆内存',
  NON_HEAP: '非堆内存',
  CPU_USED: 'CPU占用率',
  ACTIVE: '活动',
  PEAK_VALUE: '峰值',
  USED: '已用',
  SUBMITTED: '已提交',
  MAX: '最大',
  RUNTIME_INFO: '运行时信息',
  MEMORY: '内存',
  MEMORY_INFO: '当前内存分代信息展示',
};

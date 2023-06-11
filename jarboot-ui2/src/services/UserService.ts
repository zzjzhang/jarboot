import Request from '@/common/Request';
import type { ResponseVo } from '@/types';

const urlBase = '/api/jarboot/user';

/**
 * 用户管理操作
 */
export default class UserService {
  public static createUser(username: string, password: string, roles: string, userDir: string) {
    const form: FormData = new FormData();
    form.append('username', username);
    form.append('password', password);
    form.append('roles', roles);
    form.append('userDir', userDir || '');
    return Request.post<ResponseVo>(urlBase, form);
  }

  public static updateUser(username: string, roles: string, userDir: string) {
    const form: FormData = new FormData();
    form.append('username', username);
    form.append('roles', roles);
    form.append('userDir', userDir || '');
    return Request.post<ResponseVo>(urlBase + '/update', form);
  }

  public static deleteUser(id: number) {
    const form: FormData = new FormData();
    form.append('id', '' + id);
    return Request.delete<ResponseVo>(urlBase, form);
  }

  public static updateUserPassword(username: string, password: string, oldPassword: string) {
    const form: FormData = new FormData();
    form.append('username', username);
    form.append('password', password);
    form.append('oldPassword', oldPassword || '');
    return Request.put<ResponseVo>(urlBase, form);
  }

  public static getUsers(username: string, role: string, pageNo: number, pageSize: number) {
    return Request.get(`${urlBase}/getUsers`, { username, role, pageNo, pageSize });
  }
}

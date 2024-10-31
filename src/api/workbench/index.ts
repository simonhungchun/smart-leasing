import { defHttp } from '/@/utils/http/axios';

export function getWorkbenchData() {
  return defHttp.get({ url: '/workbench' });
}

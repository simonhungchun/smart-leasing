import { MockMethod } from 'vite-plugin-mock';
import { fakerZH_CN } from '@faker-js/faker';
// import { resultError, resultSuccess, getRequestToken, requestParams } from '../_util';
import { resultSuccess } from '../_util';

function createAuditList() {
  return {
    auditManagement: {
      pendingApproval: '@integer(1, 100)',
      initiatedByMe: '@integer(1, 100)',
      copyMe: '@integer(1, 100)',
      avatar: fakerZH_CN.image.urlPlaceholder(),
      companyName: fakerZH_CN.company.name(),
    },
  };
}

export default [
  {
    url: '/basic-api/workbench',
    timeout: 1000,
    method: 'get',
    response() {
      // 没有异常
      return resultSuccess({
        // 审核管理
        ...createAuditList(),
      });
      // 存在异常
      // return resultError("出现了错误")
    },
  },
] as MockMethod[];

// fake

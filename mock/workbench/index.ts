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
function createFeatureList() {
  return {
    featureList: [
      {
        id: 1,
        name: '招商管理',
        desc: '潜在客户',
        icon: 'streamline:information-desk-customer',
        path: '',
      },
      { id: 2, name: '资产管理', desc: '各类资产', icon: 'hugeicons:gold', path: '' },
      { id: 3, name: '合约管理', desc: '约定/租客', icon: 'mdi:contract', path: '' },
      {
        id: 4,
        name: '财务管理',
        desc: '账单/明细/流水',
        icon: 'icon-park-outline:finance',
        path: '',
      },
      { id: 5, name: '营销推广', desc: '营销/推广', icon: 'nimbus:marketing', path: '' },
      {
        id: 6,
        name: '审批管理',
        desc: '合同/财务审批',
        icon: 'material-symbols:approval',
        path: '',
      },
      { id: 7, name: '物资管理', desc: '物质/仓储管理', icon: 'mdi:folder-key-outline', path: '' },
      {
        id: 8,
        name: '数据分析',
        desc: '用户画像/数据统计',
        icon: 'material-symbols:data-thresholding-outline',
        path: '',
      },
      {
        id: 9,
        name: '租后管理',
        desc: '换房/退房申请',
        icon: 'material-symbols:manage-history',
        path: '',
      },
      {
        id: 10,
        name: '智能设备',
        desc: '智能门锁',
        icon: 'material-symbols:smart-toy-outline-sharp',
        path: '',
      },
      { id: 11, name: '巡防管理', desc: '巡防检查', icon: 'gravity-ui:shield-check', path: '' },
      { id: 12, name: '业绩管理', desc: '员工业绩', icon: 'mingcute:performance-line', path: '' },
    ],
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
        ...createFeatureList(),
      });
      // 存在异常
      // return resultError("出现了错误")
    },
  },
] as MockMethod[];

// fake

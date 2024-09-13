import { Provider } from '@angular/core';

import { NZ_CONFIG, NzConfig } from 'ng-zorro-antd/core/config';

const ngZorroConfig: NzConfig = {
  // 注意组件名称没有 nz 前缀
  table: { nzSize: 'small', nzBordered: false, nzShowQuickJumper: true },
  descriptions: { nzSize: 'small', nzBordered: true },
  form: {
    nzAutoTips: {
      'zh-cn': {
        required: '必填项',
        validateName: '名称不可用',
        validateNo: '编码不可用',
      },
      default: {
        required: '必填',
        validateName: '名称不可用',
        validateNo: '编码不可用',
      },
    },
  },
  select: {
    nzBackdrop: true,
  },
  treeSelect: {
    nzBackdrop: true,
  },
  datePicker: {
    nzBackdrop: true,
  },
  cascader: {
    nzBackdrop: true,
  },
};

export const ZorroConfig: Provider = {
  provide: NZ_CONFIG,
  useValue: ngZorroConfig,
};

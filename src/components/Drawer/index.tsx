import React, { useState } from 'react';
import type { FC } from 'react';
import { Nav } from '@douyinfe/semi-ui';
import {
  IconUser,
  IconStar,
  IconUserGroup,
  IconSetting,
} from '@douyinfe/semi-icons';
import styles from './index.module.less';

const tab = [
  { itemKey: 'welcome', text: '用户管理', icon: <IconUser /> },
  { itemKey: 'echarts', text: 'Echarts', icon: <IconStar /> },
  {
    itemKey: 'union-management',
    text: '公会管理',
    icon: <IconUserGroup />,
    items: ['公告设置', '公会查询', '信息录入'],
  },
  {
    text: '任务平台',
    icon: <IconSetting />,
    itemKey: 'job',
    items: ['任务管理', '用户任务查询'],
  },
];

const Drawer: FC<{ onPageChange: (page: string) => void }> = ({
  onPageChange,
}) => {
  return (
    <div className={styles.Main}>
      <Nav
        defaultOpenKeys={['welcome']}
        defaultSelectedKeys={['信息录入']}
        defaultIsCollapsed={false}
        bodyStyle={{ flexBasis: 1, height: '100vh', width: '100%' }}
        onClick={({ itemKey }) => {
          onPageChange(itemKey as string);
        }}
        items={tab}
        header={{
          logo: (
            <img src='https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/webcast_logo.svg' />
          ),
          text: 'PLAYGROUND',
        }}
        footer={{
          collapseButton: true,
        }}
      />
    </div>
  );
};

export default Drawer;

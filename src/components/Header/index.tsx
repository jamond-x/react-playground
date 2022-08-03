import React from 'react';
import type { FC } from 'react';
import { Avatar } from '@douyinfe/semi-ui';
import { Divider } from '@douyinfe/semi-ui';
import styles from './index.module.less';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.avatarWrapper}>
        <div className={styles.avatar}>
          <Avatar
            size='small'
            style={{ color: '#f56a00', backgroundColor: '#fde3cf', margin: 4 }}
            alt='向兴强'
          >
            XXQ
          </Avatar>
        </div>
      </div>
      <Divider className={styles.divider} />
    </div>
  );
};

export default Header;

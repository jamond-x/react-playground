import React from 'react';
import type { FC } from 'react';
import { Typography } from '@douyinfe/semi-ui';
import Container from '../../components/Container/container';
import styles from './index.module.less';

const { Title } = Typography;

const Index: FC = () => {
  return (
    <>
      <Title heading={4}>动画</Title>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Container className={styles.container}>
          <div className={styles.main}>
            <img
              src={
                'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract.jpg'
              }
              alt=''
              width={100}
              height={70}
              className={styles.img}
            />
            <div className={styles.circle}></div>
            <div className={styles.triangle}></div>
            <div className={styles.square}></div>
          </div>
        </Container>
        <Container center>
          <div className={styles.tabBox}></div>
        </Container>
      </div>
    </>
  );
};

export default Index;

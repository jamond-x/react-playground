import React, { useState } from 'react';
import type { FC } from 'react';
import EchartsPlayground from './EchartsPlayground';
import Drawer from '../components/Drawer';
import Welcome from './Welcome';
import Header from '../components/Header';
import Css from './Css';
import styles from './index.module.less';

const PAGES = {
  welcome: <Welcome />,
  echarts: <EchartsPlayground />,
  css: <Css />,
};

const Main: FC = () => {
  const [currentPage, setCurrentPage] = useState('welcome');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };
  return (
    <div className={styles.Main}>
      <Drawer onPageChange={handlePageChange} />
      <div className={styles.content}>
        <Header />
        <div style={{ padding: 20 }}>{PAGES[currentPage]}</div>
      </div>
    </div>
  );
};

export default Main;

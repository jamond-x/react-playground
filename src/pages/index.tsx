import React, { useState } from 'react';
import type { FC } from 'react';
import Drawer from '../components/Drawer';
import Welcome from './Welcome';
import styles from './index.module.less';

const PAGES = {
  welcome: <Welcome />,
};

const Main: FC = () => {
  const [currentPage, setCurrentPage] = useState('welcome');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };
  return (
    <div className={styles.Main}>
      <Drawer onPageChange={handlePageChange} />
      {PAGES[currentPage]}
    </div>
  );
};

export default Main;

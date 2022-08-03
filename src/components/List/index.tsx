import React from 'react';
import type { FC } from 'react';
import styles from './index.module.less';

const List: FC<{ content: string[] }> = ({ content }) => {
  return (
    <div className={styles.list}>
      {content.map((el, index) => {
        return <div key={index}>{el}</div>;
      })}
    </div>
  );
};

export default List;

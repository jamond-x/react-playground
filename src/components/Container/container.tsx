import React, { ReactNode } from 'react';
import type { FC } from 'react';

const style = {
  width: 350,
  height: 300,
  borderRadius: 15,
  backgroundColor: '#F4F5F5',
  color: 'black'
};
const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return <div style={style}>{children}</div>;
};

export default Container;

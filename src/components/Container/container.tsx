import React, { ReactNode } from 'react';
import type { FC } from 'react';

const style = {
  position: 'relative',
  width: 350,
  height: 300,
  padding: 10,
  borderRadius: 15,
  backgroundColor: '#F4F5F5',
  color: 'black',
};
const Container: FC<{
  children: ReactNode;
  className?: string;
  center?: boolean;
}> = ({ children, className, center = false }) => {
  const centerStyle = center
    ? { display: 'flex', justifyContent: 'center', alignItems: 'center' }
    : {};
  return (
    <div className={className} style={{ ...style, ...centerStyle }}>
      {children}
    </div>
  );
};

export default Container;

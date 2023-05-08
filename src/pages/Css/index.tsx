import React from 'react';
import type { FC } from 'react';
import { Typography } from '@douyinfe/semi-ui';
import Container from '../../components/Container/container';

const { Title } = Typography;
const Index: FC = () => {
  return (
    <>
      <Title heading={4}>动画</Title>
      <div>
      <Container>
        THIS IS  A CSS  ANIMATION
      </Container>
      </div>
    </>
  );
};

export default Index;

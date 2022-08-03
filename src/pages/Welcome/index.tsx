// import React, { useEffect, useRef } from 'react';
// import type { FC } from 'react';
// import styles from './index.module.less';

// import * as echarts from 'echarts/core';

// const ops = {
//   xAxis: {
//     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//   },
//   yAxis: {},
//   series: [
//     {
//       type: 'bar',
//       data: [23, 24, 18, 25, 27, 28, 25],
//     },
//   ],
// };

// //记得提commit
// const Welcome: FC = () => {
//   const chartsRef: any = useRef();
//   useEffect(() => {
//     const chartsInstance = echarts.init(
//       chartsRef.current as unknown as HTMLElement
//     );
//     chartsInstance.setOption(ops);
//   }, []);
//   return (
//     <>
//       <div ref={chartsRef} className={styles.box}></div>
//     </>
//   );
// };

import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

function Welcome() {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = echarts.init(chartRef.current);
    const option = {
      xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: [23, 24, 18, 25, 27, 28, 25],
        },
      ],
    };
    chartInstance.setOption(option);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>React Echarts 柱状图</h2>
      <div ref={chartRef} style={{ height: '400px', width: 700 }}></div>
    </div>
  );
}

export default Welcome;

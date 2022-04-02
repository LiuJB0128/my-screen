import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import china from '../geo/china.json';
import {px} from '../shared/px';

export const Chart8 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap('CN', china);
    myChart.setOption({
      xAxis: {show: false},
      yAxis: {show: false},
      series: [
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          roam: false,
          aspectScale: 1,
          zoom: 1.2,
          selectedMode: false,
          label: {
            show: true,
            color: '#1cd8f5',
            fontSize: px(18),
          },
          itemStyle: {
            areaColor: '#101d2c',
            borderColor: '#01c7e3',
            emphasis: {
              label: {color: '#1cd8f5'},
              areaColor: '#0b2035',
            },
            select: {
              disabled: false
            },
          }
        }
      ]
    });
  }, []);
  return (
    <div className="chart8">
      <div ref={divRef} className="chart"/>
    </div>
  );
};
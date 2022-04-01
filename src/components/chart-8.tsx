import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import east from '../geo/data.json';
import {px} from '../shared/px';

export const Chart8 = () => {
  const divRef = useRef(null);
  echarts.registerMap('CN', east);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      xAxis: {show: false},
      yAxis: {show: false},
      series: [
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '江苏省', value: 1},
          ],
          label: {show: false, color: 'white'},
          itemStyle: {
            areaColor: '#010D3D',

            borderColor: '#01A7F7',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },


      ]
    });
  }, []);
  return (
    <div className="chart3">
      <div ref={divRef} className="chart"/>
    </div>
  )
};
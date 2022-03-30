import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';

export const Chart4 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    console.log(divRef.current);
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      series: [
        {
          name: 'Pressure',
          type: 'gauge',
          progress: {
            show: true
          },
          detail: {
            valueAnimation: true,
            formatter: '{value}'
          },
          data: [
            {
              value: 36.46,
              name: '可用率',
            }
          ]
        }
      ]
    });
  }, []);
  return (
    <div className="chart1">
      <div className="tag">
        <div className="num">4</div>
        <h2>Management Improvement 管理提升</h2>
      </div>
      <div className="content">
        <div ref={divRef} className="chart"/>
        <div className="data">
          <div className="square1"/>
          <div className="square2"/>
          <div className="square3"/>
          <div className="text">
            <div className="title">预算执行情况(万元)</div>
            <div className="number">5582</div>
            <div className="percentage">+90.6%</div>
          </div>
          <div className="text">
            <div className="title">本月运维费用(万元)</div>
            <div className="number">489</div>
            <div className="percentage">+10.4%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
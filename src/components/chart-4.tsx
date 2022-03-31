import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';

export const Chart4 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    console.log(divRef.current);
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      series: [
        {
          type: 'gauge',
          axisLine: {
            lineStyle: {
              width: px(10),
              color: [
                [0.3, '#fe6b93'],
                [0.7, '#12c4fd'],
                [1, '#9851eb']
              ]
            }
          },
          pointer: {
            width: px(3),
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            distance: px(-9),
            length: px(3),
            lineStyle: {
              color: '#191927',
              width: px(1)
            }
          },
          splitLine: {
            distance: px(-10),
            length: px(10),
            lineStyle: {
              color: '#191927',
              width: px(1)
            }
          },
          axisLabel: {
            color: 'auto',
            distance: px(15),
            fontSize: px(10)
          },
          detail: {
            valueAnimation: true,
            formatter: '{value} %',
            fontSize: px(16),
            color: 'auto',
            offsetCenter: [0, '65%']
          },
          title: { // 标题位置
            offsetCenter: [0, '40a%'],
            color: '#c6c7ca',
            fontSize: px(16)
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
    setInterval(function () {
      myChart.setOption({
        series: [
          {
            data: [
              {
                value: +(Math.random() * 100).toFixed(2),
                name: '可用率',
              }
            ]
          }
        ]
      });
    }, 2000);
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
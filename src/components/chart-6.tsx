import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';

export const Chart6 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      title: {
        text: '全网线损率',
        left: 'center',
        top: px(20),
        textStyle: {
          fontSize: px(16),
          color: '#aed3dd'
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        axisPointer: {
          show: true,
        },
        axisLine: {
          show: true,
        },
        axisTick: {
          show: true
        },
        axisLabel: {
          textStyle: {
            color: '#7a94a0',
            fontSize: px(12)
          }
        }
      },
      grid: {
        left: '0%',
        right: '4%',
        top: '30%',
        bottom: '16%',
        containLabel: true
      },
      yAxis: [
        {
          type: 'value',
          name: '网损率',
          nameTextStyle: {
            color: '#ffc86d',
            fontSize: px(12)
          },
          min: 0,
          max: 8,
          interval: 2,
          axisLine: {
            show: true
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: '#ffc86d',
              fontSize: px(12)
            }
          },
        },
        {
          type: 'value',
          name: '增长率',
          nameTextStyle: {
            color: '#12ccd9',
            fontSize: px(12)
          },
          min: -8,
          max: 0,
          interval: 2,
          axisLine: {
            show: true
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: '#12ccd9',
              fontSize: px(12)
            }
          }
        }
      ],
      series: [
        {
          data: [7, 4.3, 3.8, 4.1, 2.6, 2.3, 5.7, 2.3, 5.8, 6.8, 6, 3.6],
          type: 'line',
          name: '网损率',
          lineStyle: {
            color: '#855661'
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#312839' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#7e4f5b' // 100% 处的颜色
              }], false),
              label: {
                show: false,
              },
            }
          },
        },
        {
          data: [-1.9, -2.6, -3.8, -5.5, -4, -3.6, -4.2, -4.4, -2.8, -2.2, -2, -3],
          yAxisIndex: 1,
          type: 'line',
          name: '增长率',
          lineStyle: {
            color: '#2d5d8b'
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#161728' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#548e9f' // 100% 处的颜色
              }], false),
              label: {
                show: false,
              },
            }
          },
        },
      ]
    });
  }, []);
  return (
    <div className="chart1">
      <div className="tag">
        <div className="num">6</div>
        <h2>Grid Reliability 电网可靠性</h2>
      </div>

      <div className="content">
        <div ref={divRef} className="chart"/>
        <div className="data">
          <div className="square1"/>
          <div className="square2"/>
          <div className="square3"/>
          <div className="text">
            <div className="title">本年国网华东计划售电量</div>
            <div className="number">18956万千瓦时</div>
            <div className="percentage">+5.2%</div>
          </div>
          <div className="text">
            <div className="title">本月全网售电量</div>
            <div className="number">10368万千瓦时</div>
            <div className="percentage">+3.2%</div>
          </div>
          <div className="text">
            <div className="title">全网线损率</div>
            <div className="number">6.5%</div>
            <div className="percentage">-1.1%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
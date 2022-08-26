import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';

export const Chart6 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const Data = [
    {month: '1', rate1: 7, rate2: -1.9},
    {month: '2', rate1: 4.3, rate2: -2.6},
    {month: '3', rate1: 3.8, rate2: -3.8},
    {month: '4', rate1: 4.1, rate2: -5.5},
    {month: '5', rate1: 2.6, rate2: -4},
    {month: '6', rate1: 2.3, rate2: -3.6},
    {month: '7', rate1: 5.7, rate2: -4.2},
    {month: '8', rate1: 2.3, rate2: -4.4},
    {month: '9', rate1: 5.8, rate2: -3.8},
    {month: '10', rate1: 6.8, rate2: -2.2},
    {month: '11', rate1: 6, rate2: -2},
    {month: '12', rate1: 3.6, rate2: -3},
  ];
  const Echart = (data) => {
    myChart.current.setOption({
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
        data: data.map(i => i.month),
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
          data: data.map(i => i.rate1),
          type: 'line',
          name: '网损率',
          symbol: 'circle',
          symbolSize: px(5),
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
          data: data.map(i => i.rate2),
          yAxisIndex: 1,
          type: 'line',
          name: '增长率',
          symbol: 'circle',
          symbolSize: px(5),
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
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    Echart(Data);
    setInterval(() => {
      const newData = [...Data];
      for (let i = 0; i < 12; i++) {
        newData[i].rate1 = Number((Math.round(Math.random() * 6) + 1));
        newData[i].rate2 = Number((Math.round(Math.random() * -6) - 1));
      }
      Echart(newData);
    }, 2000);
  }, []);
  return (
    <div className="chart1">
      <div className="tag">
        <div className="num">6</div>
        <h2>Electricity Sales And Line Loss 售电及线损</h2>
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
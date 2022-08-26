import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';

export const Chart3 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const Data = [
    {province: '上海', electricity: 3264, rate: 3.2},
    {province: '江苏', electricity: 2623, rate: 4.6},
    {province: '浙江', electricity: 3678, rate: 5.0},
    {province: '安徽', electricity: 1324, rate: 6.8},
    {province: '福建', electricity: 2354, rate: 3.2},
  ];
  const Echart = (data) => {
    myChart.current.setOption({
      title: {
        text: '全社会用电量',
        left: 'center',
        top: px(20),
        textStyle: {
          fontSize: px(16),
          color: '#aed3dd'
        },
      },
      xAxis: [
        {
          type: 'category',
          data: data.map(i => i.province),
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
        }
      ],
      grid: {
        left: '2%',
        right: '2%',
        top: '30%',
        bottom: '16%',
        containLabel: true
      },
      yAxis: [
        {
          type: 'value',
          name: '用电量',
          nameTextStyle: {
            color: '#7a94a0',
            fontSize: px(12)
          },
          min: 0,
          max: 4000,
          interval: 1000,
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
              color: '#7a94a0',
              fontSize: px(12)
            }
          }
        },
        {
          type: 'value',
          name: '增长率',
          nameTextStyle: {
            color: '#7a94a0',
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
              color: '#7a94a0',
              fontSize: px(12)
            }
          }
        }
      ],
      series: [
        {
          name: '用电量',
          type: 'bar',
          data: data.map(i => i.electricity),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#5e3868' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#db8195' // 100% 处的颜色
              }], false),
              label: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#7a94a0',
                  fontSize: px(12)
                }
              }
            }
          },
          barWidth: px(24)
        },
        {
          name: '增长率',
          type: 'line',
          yAxisIndex: 1,
          data: data.map(i => i.rate),
          symbol: 'circle',
          symbolSize: px(5),
          itemStyle: {
            normal: {
              color: '#ffc86d',
              lineStyle: {
                color: '#855661'
              }
            }
          }
        },
      ]
    });
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    Echart(Data);
    setInterval(() => {
      const newData = [...Data];
      for (let i = 0; i < 5; i++) {
        newData[i].electricity = Number((Math.round(Math.random() * 4000) + 1));
        newData[i].rate = Number((Math.round(Math.random() * 7) + 1));
      }
      Echart(newData);
    }, 2000);
  }, []);
  return (
    <div className="chart1">
      <div className="tag">
        <div className="num">3</div>
        <h2>Power Consumption 用电情况</h2>
      </div>
      <div className="content">
        <div className="data">
          <div className="square1"/>
          <div className="square2"/>
          <div className="square3"/>
          <div className="text">
            <div className="title">本月全网用电量(亿千瓦时)</div>
            <div className="number">1233.68</div>
            <div className="percentage">+3.65%</div>
          </div>
          <div className="text">
            <div className="title">本年用电负荷(万千瓦时)</div>
            <div className="number">85498752</div>
            <div className="percentage">+3.4%</div>
          </div>
        </div>
        <div ref={divRef} className="chart"/>
      </div>
    </div>
  );
};
import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';

export const Chart5 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const Data = [
    {month: '1', num1: '6', num2: '0'},
    {month: '2', num1: '4', num2: '2'},
    {month: '3', num1: '5', num2: '0'},
    {month: '4', num1: '0', num2: '4'},
    {month: '5', num1: '7', num2: '4'},
    {month: '6', num1: '3', num2: '6'},
    {month: '7', num1: '3', num2: '3'},
    {month: '8', num1: '6.5', num2: '0'},
    {month: '9', num1: '2', num2: '2'},
    {month: '10', num1: '0', num2: '0'},
    {month: '11', num1: '2', num2: '2'},
    {month: '12', num1: '0', num2: '0'},
  ];
  const Echart = (data) => {
    myChart.current.setOption({
      title: {
        text: '设备及机组跳闸',
        left: 'center',
        top: px(20),
        textStyle: {
          fontSize: px(16),
          color: '#aed3dd'
        },
      },
      legend: {
        show: true,
        itemWidth: px(10),
        itemHeight: px(10),
        itemGap: px(10),
        textStyle: {
          color: '#90acb9',
          fontSize: px(12)
        },
        right: 0,
        top: '18%',
      },
      xAxis: [
        {
          type: 'category',
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
        }
      ],
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
          name: '数量',
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
        },
      ],
      series: [
        {
          name: '机组跳闸',
          type: 'bar',
          data: data.map(i => i.num1),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#3f3977' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#2799f9' // 100% 处的颜色
              }], false),
              label: {
                show: false,
              }
            }
          },
          barWidth: px(7)
        },
        {
          name: '设备调整',
          type: 'bar',
          data: data.map(i => i.num2),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#3d2454' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#bb429d' // 100% 处的颜色
              }], false),
              label: {
                show: false,
              }
            }
          },
          barWidth: px(7)
        },
      ],
    });
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    Echart(Data);
    setInterval(() => {
      const newData = [...Data];
      for (let i = 0; i <= 11; i++) {
        newData[i].num1 = (Math.round(Math.random() * 7) + 1).toString();
        newData[i].num2 = (Math.round(Math.random() * 7) + 1).toString();
      }
      Echart(newData);
    }, 2000);
  }, []);
  return (
    <div className="chart1">
      <div className="tag">
        <div className="num">5</div>
        <h2>Grid Reliability 电网可靠性</h2>
      </div>

      <div className="content">
        <div ref={divRef} className="chart"/>
        <div className="data">
          <div className="square1"/>
          <div className="square2"/>
          <div className="square3"/>
          <div className="text">
            <div className="title">本月1000KV线路跳闸条次</div>
            <div className="number">0次</div>
          </div>
          <div className="text">
            <div className="title">500KV系统设备跳闸事件数</div>
            <div className="number">1起</div>
          </div>
          <div className="text">
            <div className="title">300MW及以上跳闸次数</div>
            <div className="number">1台次</div>
          </div>
        </div>
      </div>
    </div>
  );
};
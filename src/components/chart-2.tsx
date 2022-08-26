import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';

export const Chart2 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const Data = [
    {name: '福建', num: 86.46},
    {name: '安徽', num: 125.58},
    {name: '浙江', num: 178.74},
    {name: '江苏', num: 219.67},
    {name: '上海', num: 295.58}
  ];
  const Echart = (data) => {
    myChart.current.setOption({
      title: {
        text: '固定资产投资完成情况',
        left: 'center',
        top: px(20),
        textStyle: {
          fontSize: px(16),
          color: '#aed3dd'
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '5%',
        right: '20%',
        top: '15%',
        bottom: '8%',
        containLabel: true
      },
      xAxis: {
        show: false,
        type: 'value',
        boundaryGap: [0, 0.01],
        axisPointer: {
          show: true,
        }
      },
      yAxis: {
        type: 'category',
        data: data.map(i => i.name),
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#7a94a0',
            fontSize: px(12)
          }
        }
      },
      series: [
        {
          type: 'bar',
          data: data.map(i => i.num),
          itemStyle: {
            normal: {
              borderRadius: [0, 20, 20, 0],
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#419cf8' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#11cdd6' // 100% 处的颜色
              }], false),
              label: {
                show: true,
                position: 'right',
                textStyle: {
                  color: '#7a94a0',
                  fontSize: px(12)
                }
              }
            }
          },
          barWidth: px(14)
        }
      ]
    });
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    Echart(Data);
    setInterval(() => {
      const newData = [...Data];
      for (let i = 0; i < 5; i++) {
        newData[i].num = Number((Math.random() * 200 + 1).toFixed(2));
      }
      Echart(newData);
    }, 2000);
  }, []);
  return (
    <div className="chart1">
      <div className="tag">
        <div className="num">2</div>
        <h2>Power Grid Construction 电网建设</h2>
      </div>
      <div className="content">
        <div className="data">
          <div className="square1"/>
          <div className="square2"/>
          <div className="square3"/>
          <div className="text">
            <div className="title">500KV线路长度(公里)</div>
            <div className="number">25695.1</div>
            <div className="percentage">+12.5%</div>
          </div>
          <div className="text">
            <div className="title">500KV变电功率(万千伏安)</div>
            <div className="number">23005</div>
            <div className="percentage">+10.6%</div>
          </div>
        </div>
        <div ref={divRef} className="chart"/>
      </div>
    </div>
  );
};
import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';

export const Chart2 = () => {
  const divRef = useRef(null);
  const data = [];
  for (let i = 0; i < 5; ++i) {
    data.push(Math.round(Math.random() * 200));
  }
  useEffect(() => {
    console.log(divRef.current);
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      title: {
        text: '固定资产投资完成情况',
        left: 'center',
        top: px(20),
        textStyle: {
          fontSize: px(16),
          color: '#fff'
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
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisPointer: {
          show: false,
        }
      },
      yAxis: {
        type: 'category',
        data: ['福建', '安徽', '浙江', '江苏', '上海']
      },
      series: [
        {
          type: 'bar',
          data: [186.46, 197.58, 208.74, 219.67, 265.58],
          itemStyle: {
            borderRadius: [0, 20, 20, 0]
          }
        }
      ]
    });
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
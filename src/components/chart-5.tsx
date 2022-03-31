import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';

export const Chart5 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    console.log(divRef.current);
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
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
        top: "18%",
      },
      xAxis: [
        {
          type: 'category',
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
          data: [6, 4, 5, 0, 7, 3, 3, 6.5, 2, 0, 2, 0],
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
          data: [0, 2, 0, 4, 4, 6, 3, 0, 2, 0, 2, 0],
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
      ]
    });
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
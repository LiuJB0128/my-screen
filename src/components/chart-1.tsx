import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

const px = (n) => n / 1920 * (window as any).pageWidth;
export const Chart1 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    console.log(divRef.current);
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      title: {
        text: '国内生产总值',
        subtext: '50.58 亿',
        left: 'center',
        top: px(20),
        textStyle: {
          fontSize: px(16),
          color: '#fff'
        },
        subtextStyle: {
          fontSize: px(16),
          color: '#afcfdc'
        },
        padding: px(16)
      },
      legend: {
        bottom: px(30),
        left: 'center',
        textStyle: {
          color: '#90acb9',
          fontSize: px(12)
        }
      },
      series: [
        {
          type: 'pie',
          data: [
            {
              value: 50,
              name: '第一产业',
              itemStyle: {
                color: '#0dd1d4'
              }
            },
            {
              value: 20,
              name: '第二产业',
              itemStyle: {
                color: '#7a64fd'

              }
            },
            {
              value: 30,
              name: '第三产业',
              itemStyle: {
                color: '#ff77a3'
              }
            }
          ],
          top: 'auto',
          radius: [px(45), px(60)],
          labelLine: {
            show: true,
            length: px(7),
            length2: px(7)
          },
          label: {
            color: '#fff',
            fontSize: px(12),
            overflow: 'break',
            position: 'outside'
          }
        }
      ]
    });
  }, []);
  return (
    <div className="chart1">
      <div className="tag">
        <div className="num">1</div>
        <h2>Social Condition 社会状况</h2>
      </div>
      <div className="content">
        <div className="data">
          <div className="square1"/>
          <div className="square2"/>
          <div className="square3"/>
          <div className="text">
            <div className="title">铁路货物运输量(万吨)</div>
            <div className="number">410244</div>
            <div className="percentage">+5.6%</div>
          </div>
          <div className="text">
            <div className="title">银行中长期贷款(亿元)</div>
            <div className="number">85498752</div>
            <div className="percentage">+3.4%</div>
          </div>
          <div className="text">
            <div className="title">耗电量(万千瓦时)</div>
            <div className="number">6582144</div>
            <div className="percentage">+9.7%</div>
          </div>
        </div>
        <div ref={divRef} className="chart"/>
      </div>
    </div>

  )
}
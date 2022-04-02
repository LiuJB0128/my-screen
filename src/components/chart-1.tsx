import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';

export const Chart1 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      tooltip: {
        trigger: 'item'
      },
      title: [{
        text: '国内生产总值',
        left: 'center',
        top: "12%",
        textStyle: {
          fontSize: px(16),
          color: '#aed3dd'
        }
      },{
        text: '50.58亿',
        subtext: '+10.6%',
        left: 'center',
        top: '45%',
        textStyle: {
          fontSize: px(18),
          color: '#aed3dd'
        },
        subtextStyle: {
          fontSize: px(14),
          color: '#afcfdc'
        }
      }],
      legend: {
        bottom: "15%",
        left: 'center',
        textStyle: {
          color: '#90acb9',
          fontSize: px(12)
        },
        itemWidth: px(10),
        itemHeight: px(10),
        itemGap: px(10),
      },
      series: [
        {
          type: 'pie',
          data: [
            {
              value: 50,
              name: '第一产业',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: '#12ccd8' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#409cf8' // 100% 处的颜色
                  }], false),
                }
              }
            },
            {
              value: 20,
              name: '第二产业',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: '#e388f2' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#7161fe' // 100% 处的颜色
                  }], false),
                }
              }
            },
            {
              value: 30,
              name: '第三产业',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: '#ff7aca' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#ff4277' // 100% 处的颜色
                  }], false),
                }
              }
            }
          ],
          top: 'auto',
          radius: [px(45), px(60)],
          labelLine: {
            show: true,
            length: px(7),
            length2: px(7),
          },
          label: {
            color: '#afcfdc',
            fontSize: px(12),
            overflow: 'break',
            position: 'outside',
            formatter: '{d} %'
          }
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
                name: '第一工厂',
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                      offset: 0,
                      color: '#12ccd8' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#409cf8' // 100% 处的颜色
                    }], false),
                  }
                }
              },
              {
                value: +(Math.random() * 100).toFixed(2),
                name: '第二工厂',
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                      offset: 0,
                      color: '#e388f2' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#7161fe' // 100% 处的颜色
                    }], false),
                  }
                }
              },
              {
                value: +(Math.random() * 100).toFixed(2),
                name: '第三工厂',
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                      offset: 0,
                      color: '#ff7aca' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#ff4277' // 100% 处的颜色
                    }], false),
                  }
                }
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
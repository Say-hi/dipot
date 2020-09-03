/*eslint-disable*/
export const option1 = {
  title: {
    text: '收益走势图',
    show: false
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    top: '5%',
    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '邮件营销',
      type: 'line',
      stack: '总量',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '联盟广告',
      type: 'line',
      stack: '总量',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '视频广告',
      type: 'line',
      stack: '总量',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: '直接访问',
      type: 'line',
      stack: '总量',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: '搜索引擎',
      type: 'line',
      stack: '总量',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
}

export const option2 = {
  title: {
    text: '收益走势图',
    show: false
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    top: '5%',
    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '邮件营销',
      type: 'line',
      stack: '总量',
      data: [110, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '联盟广告',
      type: 'line',
      stack: '总量',
      data: [20, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '视频广告',
      type: 'line',
      stack: '总量',
      data: [150, 232, 201, 54, 190, 330, 40]
    },
    {
      name: '直接访问',
      type: 'line',
      stack: '总量',
      data: [320, 32, 301, 34, 390, 330, 320]
    },
    {
      name: '搜索引擎',
      type: 'line',
      stack: '总量',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
}

export const option3 = {
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'cross',
          crossStyle: {
              color: '#999'
          }
      }
  },
  legend: {
      data: ['蒸发量', '降水量', '平均温度']
  },
  xAxis: [
      {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisPointer: {
              type: 'shadow'
          }
      }
  ],
  yAxis: [
      {
          type: 'value',
          name: '水量',
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
              formatter: '{value} ml'
          }
      },
      {
          type: 'value',
          name: '温度',
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
              formatter: '{value} °C'
          }
      }
  ],
  series: [
      {
          name: '蒸发量',
          type: 'bar',
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
      },
      {
          name: '降水量',
          type: 'bar',
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
      },
      {
          name: '平均温度',
          type: 'line',
          yAxisIndex: 1,
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }
  ]
}

export const option4 = {
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'cross',
          crossStyle: {
              color: '#999'
          }
      }
  },
  legend: {
      data: ['蒸发量', '降水量', '平均温度']
  },
  xAxis: [
      {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisPointer: {
              type: 'shadow'
          }
      }
  ],
  yAxis: [
      {
          type: 'value',
          name: '水量',
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
              formatter: '{value} ml'
          }
      },
      {
          type: 'value',
          name: '温度',
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
              formatter: '{value} °C'
          }
      }
  ],
  series: [
      {
          name: '蒸发量',
          type: 'bar',
          data: [2.0, 5, 7.0, 23.2, 25.6, 76.7, 45.6, 162.2, 32.6, 20.0, 6.4, 3.3]
      },
      {
          name: '降水量',
          type: 'bar',
          data: [2.6, 5.9, 3.0, 26.4, 28.7, 70.7, 175.6, 25.2, 48.7, 18.8, 6.0, 2.3]
      },
      {
          name: '平均温度',
          type: 'line',
          yAxisIndex: 1,
          data: [2.0, 2.2, 3.3, 2.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }
  ]
}

export const option5 = {
  color: ['#003366', '#006699', '#4cabce', '#e5323e'],
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'shadow'
      }
  },
  legend: {
      data: ['Forest', 'Steppe', 'Desert', 'Wetland']
  },
  // toolbox: {
  //     show: true,
  //     orient: 'vertical',
  //     left: 'right',
  //     top: 'center',
  //     feature: {
  //         mark: {show: true},
  //         dataView: {show: true, readOnly: false},
  //         magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
  //         restore: {show: true},
  //         saveAsImage: {show: true}
  //     }
  // },
  xAxis: [
      {
          type: 'category',
          axisTick: {show: false},
          data: ['2012', '2013', '2014', '2015', '2016']
      }
  ],
  yAxis: [
      {
          type: 'value'
      }
  ],
  series: [
      {
          name: 'Forest',
          type: 'bar',
          barGap: 0,
          // label: labelOption,
          data: [320, 332, 301, 334, 390]
      },
      {
          name: 'Steppe',
          type: 'bar',
          // label: labelOption,
          data: [220, 182, 191, 234, 290]
      },
      {
          name: 'Desert',
          type: 'bar',
          // label: labelOption,
          data: [150, 232, 201, 154, 190]
      },
      {
          name: 'Wetland',
          type: 'bar',
          // label: labelOption,
          data: [98, 77, 101, 99, 40]
      }
  ]
}

export const option6 = {
  color: ['#003366', '#006699', '#4cabce', '#e5323e'],
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'shadow'
      }
  },
  legend: {
      data: ['Forest', 'Steppe', 'Desert', 'Wetland']
  },
  // toolbox: {
  //     show: true,
  //     orient: 'vertical',
  //     left: 'right',
  //     top: 'center',
  //     feature: {
  //         mark: {show: true},
  //         dataView: {show: true, readOnly: false},
  //         magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
  //         restore: {show: true},
  //         saveAsImage: {show: true}
  //     }
  // },
  xAxis: [
      {
          type: 'category',
          axisTick: {show: false},
          data: ['2012', '2013', '2014', '2015', '2016']
      }
  ],
  yAxis: [
      {
          type: 'value'
      }
  ],
  series: [
      {
          name: 'Forest',
          type: 'bar',
          barGap: 0,
          // label: labelOption,
          data: [123, 332, 301, 334, 390]
      },
      {
          name: 'Steppe',
          type: 'bar',
          // label: labelOption,
          data: [220, 1, 191, 234, 290]
      },
      {
          name: 'Desert',
          type: 'bar',
          // label: labelOption,
          data: [150, 90, 201, 154, 190]
      },
      {
          name: 'Wetland',
          type: 'bar',
          // label: labelOption,
          data: [98, 77, 24, 99, 40]
      }
  ]
}
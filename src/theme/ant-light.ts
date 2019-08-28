import Theme from './theme';

const commonConfig = {
  defaultColor: '#3FA1FF',
  colors: [
    '#3FA1FF',
    '#85D1EC',
    '#33CBCC',
    '#80E0BF',
    '#4ACD70',
    '#ABE07E',
    '#FCD530',
    '#EDA671',
    '#F46179',
    '#DF7ED5',
  ],
  backgroundStyle: {
    fill: '#fff',
  },
  title: {
    /*tslint:disable*/
    fontFamily:
      "'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',SimSun, 'sans-serif'",
    fontSize: 26,
    fill: '#36415E',
  },
  description: {
    /*tslint:disable*/
    fontFamily:
      "'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',SimSun, 'sans-serif'",
    fontSize: 14,
    fill: '#676e7f',
  },
  axis: {
    y: {
      grid: {
        style: {
          stroke: '#dbe2e9',
        },
      },
      line: {
        style: {
          stroke: '#dbe2e9',
        },
      },
      tickLine: {
        style: {
          stroke: '#dbe2e9',
        },
      },
      label: {
        style: {
          fill: '#8f9aa7',
          fontSize: 12,
        },
      },
      title: {
        style: {
          fill: '#8f9aa7',
          fontSize: 12,
        },
      },
    },
    x: {
      grid: {
        visible: false,
        style: {
          stroke: '#dbe2e9',
        },
      },
      line: {
        visible: false,
        style: {
          stroke: '#dbe2e9',
        },
      },
      tickLine: {
        visible: true,
        style: {
          stroke: '#dbe2e9',
        },
      },
      label: {
        visible: true,
        style: {
          fill: '#8f9aa7',
          fontSize: 12,
        },
      },
      title: {
        visible: false,
        style: {
          fill: '#8f9aa7',
          fontSize: 12,
        },
      },
    },
    circle: {
      grid: {
        style: {
          stroke: '#dbe2e9',
        },
      },
      line: {
        style: {
          stroke: '#dbe2e9',
        },
      },
      tickLine: {
        style: {
          stroke: '#dbe2e9',
        },
      },
      label: {
        style: {
          fill: '#8f9aa7',
          fontSize: 12,
        },
      },
      title: {
        style: {
          fill: '#8f9aa7',
          fontSize: 12,
        },
      },
    },
  },
  defaultLegendPosition: 'top-left',
  shape: {
    area: {
      area: {
        default: {
          fill: '#3FA1FF',
        },
      },
      smooth: {
        default: {
          fill: '#3FA1FF',
        },
      },
      line: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      smoothLine: {
        default: {
          stroke: '#3FA1FF',
        },
      },
    },
    box: {
      box: {
        default: {
          stroke: '#3FA1FF',
        },
      },
    },
    edge: {
      line: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      vhv: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      smooth: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      arc: {
        default: {
          stroke: '#3FA1FF',
        },
      },
    },
    interval: {
      rect: {
        default: {
          fill: '#3FA1FF',
          fillOpacity: 1,
        },
      },
      hollowInterval: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      line: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      tick: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      funnel: {
        default: {
          fill: '#3FA1FF',
          fillOpacity: 1,
        },
      },
      pyramid: {
        default: {
          fill: '#3FA1FF',
          fillOpacity: 1,
        },
      },
      'top-line': {
        default: {
          fill: '#3FA1FF',
          fillOpacity: 1,
        },
      },
    },
    kline: {
      kline: {
        default: {
          fill: '#3FA1FF',
          stroke: '#3FA1FF',
        },
      },
    },
    line: {
      line: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      dot: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      dash: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      smooth: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      hv: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      vh: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      hvh: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      vhv: {
        default: {
          stroke: '#3FA1FF',
        },
      },
    },
    polygon: {
      polygon: {
        default: {
          fill: '#3FA1FF',
          fillOpacity: 1,
        },
      },
      hollow: {
        default: {
          stroke: '#3FA1FF',
        },
      },
    },
    point: {
      circle: {
        default: {
          fill: '#3FA1FF',
          fillOpacity: 1,
        },
      },
      square: {
        default: {
          fill: '#3FA1FF',
          fillOpacity: 1,
        },
      },
      bowtie: {
        default: {
          fill: '#3FA1FF',
          fillOpacity: 1,
        },
      },
      diamond: {
        default: {
          fill: '#3FA1FF',
          fillOpacity: 1,
        },
      },
      hexagon: {
        default: {
          fill: '#3FA1FF',
          fillOpacity: 1,
        },
      },
      triangle: {
        default: {
          fill: '#3FA1FF',
          fillOpacity: 1,
        },
      },
      triangleDown: {
        default: {
          fill: '#3FA1FF',
          fillOpacity: 1,
        },
      },
      hollowCircle: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      hollowSquare: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      hollowBowtie: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      hollowDiamond: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      hollowHexagon: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      hollowTriangle: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      hollowTriangleDown: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      cross: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      tick: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      plus: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      hyphen: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      line: {
        default: {
          stroke: '#3FA1FF',
        },
      },
      rect: {
        default: {
          fill: '#3FA1FF',
          fillOpacity: 1,
        },
      },
      image: {
        default: {
          fill: '#3FA1FF',
          fillOpacity: 1,
        },
      },
      path: {
        default: {
          fill: '#3FA1FF',
          fillOpacity: 1,
        },
      },
    },
    text: {
      text: {
        default: {
          fill: '#3FA1FF',
        },
      },
    },
  },
  label: {
    textStyle: {
      fontSize: 12,
      fill: '#8f9aa7',
      /*tslint:disable*/
      fontFamily:
        "'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',SimSun, 'sans-serif'",
    },
  },
  treemapLabels: {
    textStyle: {
      fill: '#8f9aa7',
      fontSize: 12,
      /*tslint:disable*/
      fontFamily:
        "'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',SimSun, 'sans-serif'",
    },
  },
  innerLabels: {
    textStyle: {
      fill: '#8f9aa7',
      fontSize: 12,
      /*tslint:disable*/
      fontFamily:
        "'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',SimSun, 'sans-serif'",
    },
  },
  legend: {
    right: {
      textStyle: {
        fill: '#8f9aa7',
        fontSize: 12,
        /*tslint:disable*/
        fontFamily:
          "'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',SimSun, 'sans-serif'",
      },
      titleStyle: {
        fill: '#8f9aa7',
        fontSize: 12,
        /*tslint:disable*/
        fontFamily:
          "'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',SimSun, 'sans-serif'",
      },
    },
    left: {
      textStyle: {
        fill: '#8f9aa7',
        fontSize: 12,
        /*tslint:disable*/
        fontFamily:
          "'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',SimSun, 'sans-serif'",
      },
      titleStyle: {
        fill: '#8f9aa7',
        fontSize: 12,
        fontFamily:
          "'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',SimSun, 'sans-serif'",
      },
    },
    top: {
      textStyle: {
        fill: '#8f9aa7',
        fontSize: 12,
        /*tslint:disable*/
        fontFamily:
          "'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',SimSun, 'sans-serif'",
      },
      titleStyle: {
        fill: '#8f9aa7',
        fontSize: 12,
        /*tslint:disable*/
        fontFamily:
          "'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',SimSun, 'sans-serif'",
      },
    },
    bottom: {
      textStyle: {
        fill: '#8f9aa7',
        fontSize: 12,
        /*tslint:disable*/
        fontFamily:
          "'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',SimSun, 'sans-serif'",
      },
      titleStyle: {
        fill: '#8f9aa7',
        fontSize: 12,
        /*tslint:disable*/
        fontFamily:
          "'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',SimSun, 'sans-serif'",
      },
    },
    html: {
      backgroundStyle: {
        fontSize: 12,
        /*tslint:disable*/
        fontFamily:
          "'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',SimSun, 'sans-serif'",
        color: '#8f9aa7',
      },
    },
  },
  tooltip: {
    useHtml: true,
    'g2-tooltip': {
      color: '#fff',
      fontSize: '12px',
      boxShadow: null,
      'background-color': 'rgba(77, 84, 105, 0.9)',
      /*tslint:disable*/
      fontFamily:
        "'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',SimSun, 'sans-serif'",
    },
  },
};

const theme = new Theme('ant-light');
theme.registerGlobalTheme(commonConfig);

theme.registerPlotTheme('liquid', {
  color: '#3B76FF',
  borderWidth: 10,
  borderOpacity: 0.2,
  fontColor: '#233F7E',
  fontOpacity: 1,
});

theme.registerPlotTheme('gauge', {
  stripWidth: 30,
  stripBackColor: '#ddd',
  tickInterval: 20,
  tickLabelPos: 'inner',
  tickLabelSize: 16,
  tickLabelColor: '#aaa',
  tickLineColor: '#aaa',
  subTickCount: 4,
  labelPos: ['50%', '80%'],
  labelColor: '#666',
  labelSize: 30,
});

export default theme;

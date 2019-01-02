<template>
  <div class='d3vs'>
    <!-- 水平柱状图 -->
    <d3-bar :data='data1'></d3-bar>

    <!-- 圆饼图 或者 甜甜圈 -->
    <d3-pie :data='data2'></d3-pie>

    <!-- 曲线图 -->
    <d3-line :data='data3'></d3-line>

    <!-- 垂直柱状图 -->
    <d3-bar :data='data4' :options='{ isVertical: true }'></d3-bar>

    <!-- Sankey 图，详见 -->
    <!-- https://github.com/d3/d3-sankey -->
    <d3-sankey-circular v-bind='dataSankey'></d3-sankey-circular>

    <!-- 时间轴图 -->
    <d3-timeline :data='dataTimeline'></d3-timeline>

    <!-- 仿 kibana timelion -->
    <d3-timelion :data='dataTimelion'></d3-timelion>
  </div>
</template>

<script>
import { d3Bar, d3Line, d3Pie, d3SankeyCircular, d3Timelion, d3Timeline } from 'd3-vs'

export default {
  name: 'app',
  components: {
    'd3-bar': d3Bar,
    'd3-pie': d3Line,
    'd3-line': d3Pie,
    'd3-sankey-circular': d3SankeyCircular,
    'd3-timeline': d3Timeline,
    'd3-timelion': d3Timelion
  },
  data () {
    return {
      data1: [
        {
          'key': 'jiang',
          'value': 80
        },
        {
          'key': 'zeng',
          'value': 30
        },
        {
          'key': 'ammar',
          'value': 60
        },
        {
          'key': 'tu',
          'value': 40
        }
      ],
      data2: [
        {
          'key': 'jiang',
          'value': 80
        },
        {
          'key': 'zeng',
          'value': 30
        },
        {
          'key': 'ammar',
          'value': 60
        },
        {
          'key': 'tu',
          'value': 40
        }
      ],
      data3: [
        {
          'key': 'jiang',
          'value': 80
        },
        {
          'key': 'zeng',
          'value': 30
        },
        {
          'key': 'ammar',
          'value': 60
        },
        {
          'key': 'tu',
          'value': 40
        }
      ],
      data4: [
        {
          'key': 'jiang',
          'value': 80
        },
        {
          'key': 'zeng',
          'value': 30
        },
        {
          'key': 'ammar',
          'value': 60
        },
        {
          'key': 'tu',
          'value': 40
        }
      ],
      dataSankey: {
        nodes: [
          {
            'name': 'OUTSIDE_ALL_ZONES'
          },
          {
            'name': 'sales'
          },
          {
            'name': 'tech'
          },
          {
            'name': 'coffee'
          }
        ],
        links: [
          {
            'source': 'sales',
            'target': 'OUTSIDE_ALL_ZONES',
            'userid': '67ea8ec6c040a5af',
            'value': 33
          },
          {
            'source': 'OUTSIDE_ALL_ZONES',
            'target': 'sales',
            'userid': '67ea8ec6c040a5af',
            'value': 28
          },
          {
            'source': 'tech',
            'target': 'sales',
            'userid': '231bed80cb5b7ce3',
            'value': 6
          },
          {
            'source': 'sales',
            'target': 'OUTSIDE_ALL_ZONES',
            'userid': '231bed80cb5b7ce3',
            'value': 9
          },
          {
            'source': 'tech',
            'target': 'OUTSIDE_ALL_ZONES',
            'userid': '67ea8ec6c040a5af',
            'value': 7
          },
          {
            'source': 'sales',
            'target': 'tech',
            'userid': '67ea8ec6c040a5af',
            'value': 4
          },
          {
            'source': 'tech',
            'target': 'sales',
            'userid': '67ea8ec6c040a5af',
            'value': 7
          },
          {
            'source': 'OUTSIDE_ALL_ZONES',
            'target': 'tech',
            'userid': '67ea8ec6c040a5af',
            'value': 6
          },
          {
            'source': 'tech',
            'target': 'OUTSIDE_ALL_ZONES',
            'userid': '231bed80cb5b7ce3',
            'value': 9
          },
          {
            'source': 'sales',
            'target': 'tech',
            'userid': '231bed80cb5b7ce3',
            'value': 6
          },
          {
            'source': 'OUTSIDE_ALL_ZONES',
            'target': 'sales',
            'userid': '231bed80cb5b7ce3',
            'value': 8
          },
          {
            'source': 'OUTSIDE_ALL_ZONES',
            'target': 'tech',
            'userid': '231bed80cb5b7ce3',
            'value': 12
          },
          {
            'source': 'tech',
            'target': 'coffee',
            'userid': '231bed80cb5b7ce3',
            'value': 2
          },
          {
            'source': 'coffee',
            'target': 'OUTSIDE_ALL_ZONES',
            'userid': '231bed80cb5b7ce3',
            'value': 4
          },
          {
            'source': 'sales',
            'target': 'OUTSIDE_ALL_ZONES',
            'userid': 'a826a473bfd66921',
            'value': 0
          },
          {
            'source': 'OUTSIDE_ALL_ZONES',
            'target': 'coffee',
            'userid': '231bed80cb5b7ce3',
            'value': 5
          },
          {
            'source': 'coffee',
            'target': 'sales',
            'userid': '231bed80cb5b7ce3',
            'value': 1
          },
          {
            'source': 'coffee',
            'target': 'tech',
            'userid': '231bed80cb5b7ce3',
            'value': 1
          }
        ],
        options: {
          'nodeWidth': 20,
          'nodeTextStyle': 'font-size: .8rem; font-weight: 600; font-family: sans-serif;',
          'circularLinkGap': 4,
          'circularLinkColor': 'red',
          'linkColor': 'black',
          'arrowLength': 10,
          'gapLength': 150,
          'arrowHeadSize': 4
        }
      },
      dataTimeline: [
        {
          'group': 'Name',
          'at': 1462032000000,
          'symbol': 'symbolCircle',
          'title': 'kjlqwjq',
          'className': 'entry--point--warn'
        },
        {
          'group': 'Name',
          'at': 1462032000000,
          'title': 'wlqjlw',
          'className': 'entry--point--success',
          'symbol': 'symbolWye'
        },
        {
          'group': 'Name',
          'at': 1467302400000,
          'className': 'entry--point--error',
          'title': 'lqwpqow',
          'symbol': 'symbolSquare'
        },
        {
          'group': 'Name',
          'at': 1469980800000,
          'className': 'entry--point--error',
          'symbol': 'symbolDiamond',
          'title': 'wopqowp'
        },
        {
          'group': 'Name',
          'at': 1472659200000,
          'title': 'qoiwiu',
          'className': 'entry--point--error',
          'symbol': 'symbolTriangle'
        },
        {
          'group': 'Name',
          'at': 1475251200000,
          'symbol': 'symbolSquare',
          'title': 'poiwsklajs'
        },
        {
          'group': 'Type',
          'at': 1462896000000,
          'title': 'owqpwpqw',
          'className': 'entry--point--success',
          'symbol': 'symbolSquare'
        },
        {
          'group': 'Type',
          'at': 1463241600000,
          'className': 'entry--point--success',
          'symbol': 'symbolCross',
          'title': 'qpwiqiwpo'
        },
        {
          'group': 'Type',
          'at': 1468080000000,
          'className': 'entry--point--success',
          'symbol': 'symbolCross',
          'title': 'wqpwipqw'
        },
        {
          'group': 'Type',
          'label': 'I am a label with a custom class',
          'from': 1464710400000,
          'to': 1467302400000,
          'title': 'This is my title'
        },
        {
          'group': 'Type',
          'at': 1475251200000,
          'title': 'wqwqwipqw',
          'className': 'entry--point--warn',
          'symbol': 'symbolStar'
        },
        {
          'group': 'Type',
          'symbol': 'symbolStar',
          'at': 1477929600000,
          'title': 'wqsjksals'
        },
        {
          'group': 'Imp',
          'label': 'I am a label of class entry--interval--error',
          'from': 1463241600000,
          'to': 1467302400000,
          'className': 'entry--interval--error'
        },
        {
          'group': 'Imp',
          'label': 'I am a label of class entry--interval--success',
          'from': 1469980800000,
          'to': 1473609600000,
          'className': 'entry--interval--success'
        }
      ],
      dataTimelion: [
        {
          'key': 1492256104916,
          'value': 24.92506528632471
        },
        {
          'key': 1460720104916,
          'value': 45.530455717461535
        },
        {
          'key': 1429184104916,
          'value': 24.99696518622455
        },
        {
          'key': 1397648104916,
          'value': 33.742346701920525
        },
        {
          'key': 1366112104916,
          'value': 50.885476964208124
        },
        {
          'key': 1334576104916,
          'value': 97.5477088909558
        },
        {
          'key': 1303040104916,
          'value': 33.382291611728334
        },
        {
          'key': 1271504104916,
          'value': 28.366296062876128
        },
        {
          'key': 1239968104916,
          'value': 29.342472731189762
        },
        {
          'key': 1208432104916,
          'value': 90.33312702499624
        },
        {
          'key': 1176896104916,
          'value': 59.940402493671584
        },
        {
          'key': 1145360104916,
          'value': 45.44284972156446
        },
        {
          'key': 1113824104916,
          'value': 39.22211220343625
        },
        {
          'key': 1082288104916,
          'value': 47.350360469506526
        },
        {
          'key': 1050752104916,
          'value': 82.17506150769812
        },
        {
          'key': 1019216104916,
          'value': 73.23478668070958
        },
        {
          'key': 987680104916,
          'value': 19.430658222096064
        },
        {
          'key': 956144104916,
          'value': 66.5497153800747
        },
        {
          'key': 924608104916,
          'value': 72.71574718462011
        },
        {
          'key': 893072104916,
          'value': 82.14376060333201
        },
        {
          'key': 861536104916,
          'value': 12.03999575121194
        },
        {
          'key': 830000104916,
          'value': 37.563018451724936
        },
        {
          'key': 798464104916,
          'value': 21.430084941162054
        },
        {
          'key': 766928104916,
          'value': 96.87931404425588
        },
        {
          'key': 735392104916,
          'value': 92.24499458760346
        },
        {
          'key': 703856104916,
          'value': 33.989890530846075
        },
        {
          'key': 672320104916,
          'value': 41.56191574651663
        },
        {
          'key': 640784104916,
          'value': 88.42507863314431
        },
        {
          'key': 609248104916,
          'value': 79.7337714588073
        },
        {
          'key': 577712104916,
          'value': 15.426651488665089
        },
        {
          'key': 546176104916,
          'value': 82.00658694240691
        },
        {
          'key': 514640104916,
          'value': 47.877006396984555
        },
        {
          'key': 483104104916,
          'value': 58.51417858515661
        },
        {
          'key': 451568104916,
          'value': 70.97849962601813
        },
        {
          'key': 420032104916,
          'value': 18.84709979159307
        },
        {
          'key': 388496104916,
          'value': 62.99109655054198
        },
        {
          'key': 356960104916,
          'value': 86.27531759375223
        },
        {
          'key': 325424104916,
          'value': 85.21505798341676
        },
        {
          'key': 293888104916,
          'value': 53.188691415121525
        },
        {
          'key': 262352104916,
          'value': 82.0492047136508
        },
        {
          'key': 230816104916,
          'value': 47.41213464562015
        },
        {
          'key': 199280104916,
          'value': 48.69480413928136
        },
        {
          'key': 167744104916,
          'value': 86.51890707255095
        },
        {
          'key': 136208104916,
          'value': 10.94680833660594
        },
        {
          'key': 104672104916,
          'value': 27.721588734413636
        },
        {
          'key': 73136104916,
          'value': 76.3437011339861
        },
        {
          'key': 41600104916,
          'value': 57.72031276286144
        },
        {
          'key': 10064104916,
          'value': 61.614975108268425
        },
        {
          'key': -21471895084,
          'value': 77.51061440096413
        },
        {
          'key': -53007895084,
          'value': 92.47637856894694
        }
      ]
    }
  },
  methods: {
  },
  mounted () {
    console.log(this.$refs)
    console.log('>>>', this.$Progress)
    this.$Progress.start()
    this.$refs.aaa.textContent = '6666666666'
  }
}
</script>
<style scoped>
  div {
    color: #f9494c;
  }
</style>

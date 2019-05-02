import Chartist from 'chartist'

import * as donut from 'chartist-plugin-fill-donut'

export const PERIOD = {
  WEEK: 'week',
  MONTH: 'month',
  TRIMESTER: 'trimester',
  SEMESTER: 'semester',
}

export const DEFAULT_PERIOD = PERIOD.WEEK

export const PERIOD_LIST = [
  [PERIOD.WEEK, 'Cette semaine'], 
  [PERIOD.MONTH, 'Ce mois'],
  [PERIOD.TRIMESTER, 'Ce trimestre'],
  [PERIOD.SEMESTER, 'Ce semestre'],
]

export const PROGRESS_CHART_LINE_OPTIONS = {
  chartPadding: { 
    top: 0,
    right: 0,
    bottom: 0,
    left: -25 
  },
  low: 0,
  fullWidth: true,
  lineSmooth: Chartist.Interpolation.cardinal({
    fillHoles: true,
  }),
  showArea: true,
  axisX: {
    showGrid: false,
    divisor: 5,
  },
  axisY: {
    showGrid: false,
  },
}

export const PROGRESS_CHART_PIE_OPTIONS = {
  width: 120,
  height: 120,
  donut: true,
  donutWidth: 20,
  donutSolid: true,
  startAngle: 90,
  showLabel: false,
  plugins: [
    Chartist.plugins.fillDonut({
        items: [{
            content: 
            `<div class='progress__pie--inside'>
              <div class='progress__value'>34</div>
              <div class='progress__unit'>kg/hab.</div>
            </div>`,
            offsetX: 0,
            offsetY : -5,
        }]
    })
],
}
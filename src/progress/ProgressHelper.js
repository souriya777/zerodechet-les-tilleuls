import Chartist from 'chartist'


export const DEFAULT_PERIOD = 'week'

export const PERIOD_LIST = [
  ['week', 'Cette semaine'], 
  ['month', 'Ce mois'],
  ['trimester', 'Ce trimestre'],
  ['semester', 'Ce semestre'],
]

export const PROGRESSION_CHART_OPTIONS = {
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
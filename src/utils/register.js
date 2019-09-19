import Star from 'base/star/index.js'
import Badge from 'base/badge/index.js'
import Switch from 'base/switch/index.js'
import Timeline from 'base/timeline/index.js'
import TimelineItem from 'base/timeline-item/index.js'
import Progress from 'base/progress/index.js'
import Steps from 'base/steps/index.js'
import StepItem from 'base/step-item/index.js'

const components = [
  Star,
  Badge,
  Switch,
  Timeline,
  TimelineItem,
  Progress,
  Steps,
  StepItem
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Star,
  Badge,
  Switch,
  Timeline,
  TimelineItem,
  Progress,
  Steps,
  StepItem
}
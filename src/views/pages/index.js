import locatorStrategy01 from './locatorStrategy01.vue'
import locatorStrategy02 from './locatorStrategy02.vue'
import locatorStrategy03 from './locatorStrategy03.vue'
import locatorStrategy04 from './locatorStrategy04.vue'
import locatorStrategy05 from './locatorStrategy05.vue'
import locatorStrategy06 from './locatorStrategy06.vue'
import locatorStrategy07 from './locatorStrategy07.vue'
import locatorStrategy08 from './locatorStrategy08.vue'
import locatorStrategy09 from './locatorStrategy09.vue'
import locatorStrategy10 from './locatorStrategy10.vue'
import locatorStrategy11 from './locatorStrategy11.vue'
import locatorStrategy12 from './locatorStrategy12.vue'
import locatorStrategy13 from './locatorStrategy13.vue'
import locatorStrategy14 from './locatorStrategy14.vue'
import locatorStrategy15 from './locatorStrategy15.vue'
import locatorStrategy16 from './locatorStrategy16.vue'
import locatorStrategy17 from './locatorStrategy17.vue'
import locatorStrategy18 from './locatorStrategy18.vue'
const pages = [
  {
    name: 'Page 1',
    meta: {
      title: 'Introduction to Locator Strategy for Test Automation'
    },
    component: locatorStrategy01
  },
  {
    name: 'Page 2',
    meta: {
      title: 'What locator strategy to use'
    },
    component: locatorStrategy02
  },
  {
    name: 'Page 3',
    meta: {
      title: 'Why xpath is not preferred'
    },
    component: locatorStrategy03
  },
  {
    name: 'Page 4',
    meta: {
      title: 'How to use xpath'
    },
    component: locatorStrategy04
  },
  {
    name: 'Page 5',
    meta: {
      title: 'XPATH is not cross platform'
    },
    component: locatorStrategy05
  },
  {
    name: 'Page 6',
    meta: {
      title: 'Accessibility in React Native'
    },
    component: locatorStrategy06
  },
  {
    name: 'Page 7',
    meta: {
      title: 'How to add the locator strategy'
    },
    component: locatorStrategy07
  },
  {
    name: 'Page 8',
    meta: {
      title: 'in iOS App'
    },
    component: locatorStrategy08
  },
  {
    name: 'Page 9',
    meta: {
      title: 'How to call the helper function?'
    },
    component: locatorStrategy09
  },
  {
    name: 'Page 10',
    meta: {
      title: 'In native component'
    },
    component: locatorStrategy10
  },
  {
    name: 'Page 11',
    meta: {
      title: 'Custom component'
    },
    component: locatorStrategy11
  },
  {
    name: 'Page 12',
    meta: {
      title: 'Set the accessibilityLabel as one of the props type'
    },
    component: locatorStrategy12
  },
  {
    name: 'Page 13',
    meta: {
      title: 'Add a props: AccessibilityLabel'
    },
    component: locatorStrategy13
  },
  {
    name: 'Page 14',
    meta: {
      title: 'Pass in the props to the child component'
    },
    component: locatorStrategy14
  },
  {
    name: 'Page 15',
    meta: {
      title: 'In the test automation code'
    },
    component: locatorStrategy15
  },
  {
    name: 'Page 16',
    meta: {
      title: 'Using accessibilityLabel as locator strategy for UI automation using appium'
    },
    component: locatorStrategy16
  },
  {
    name: 'Page 17',
    meta: {
      title: 'locator strategy for UI automation for web app'
    },
    component: locatorStrategy17
  },
  {
    name: 'Page 18',
    meta: {
      title: 'test automation code for web app'
    },
    component: locatorStrategy18
  },
  
]

pages.forEach((page, index) => page.path = `${index + 1}`)

export default pages
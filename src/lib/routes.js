import { getToken } from './api'
import { Home, RollerDerby, Dance, ParkSkate, StreetSkate } from '../pages'

export default {
  boot: (params) => {
    console.log(params)
    return new Promise((resolve, reject) => {
      getToken().then((token) => {
        resolve()
      })
    })
  },
  root: 'home',
  routes: [
    {
      path: 'home',
      component: Home,
      before() {
        console.log('before home!')
        return Promise.resolve()
      },
      widgets: ['Menu']
    },
    {
      path: 'rollerderby',
      component: RollerDerby,
      options: {
        preventStorage: false
      },
      widgets: ['Menu']
    },
    {
      path: 'dance',
      component: Dance,
      widgets: ['Menu']
    },
    {
      path: 'parkskate',
      component: ParkSkate,
      widgets: ['Menu']
    },
    {
      path: 'streetskate',
      component: StreetSkate,
      widgets: ['Menu']
    }
  ],
  beforeEachRoute: async (from, to) => {
    return true
  }
}

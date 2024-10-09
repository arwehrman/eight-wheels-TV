import { Router, Utils } from '@lightningjs/sdk'
import routes from './lib/routes'
import { Menu } from './widgets'

export default class App extends Router.App {
  static getFonts() {
    return [
      {
        family: 'Bold',
        url: Utils.asset('fonts/Sora-Bold.ttf'),
        descriptors: {}
      },
      {
        family: 'Regular',
        url: Utils.asset('fonts/Sora-Regular.ttf'),
        descriptors: {}
      }
    ]
  }

  _setup() {
    Router.startRouter(routes, this)
  }
  static _template() {
    return {
      ...super._template(),
      Widgets: {
        Menu: {
          type: Menu
        }
      }
    }
  }

  _handleAppClose() {
    this.application.closeApp()
  }
}

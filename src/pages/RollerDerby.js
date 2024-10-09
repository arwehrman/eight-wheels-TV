import { Lightning, Router, Utils } from '@lightningjs/sdk'

export default class RollerDerby extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0xff30be96,
      Header: {
        mount: 0.5,
        x: 960,
        y: 540,
        text: {
          text: 'Roller Derby Page',
          fontFace: 'Bold',
          fontSize: 75
        }
      },
      Arrows: {
        Left: {
          flex: {},
          mountY: 0.5,
          y: 540,
          Arrow: {
            flexItem: { marginRight: 20, marginLeft: 50 },
            rotation: Math.PI * 1.5,
            src: Utils.asset('images/arrow.png')
          },
          Label: {
            mountY: 0.5,
            y: 24,
            text: {
              text: 'Menu Widget',
              fontFace: 'Regular',
              textAlign: 'right',
              wordWrapWidth: 300,
              lineHeight: 48
            }
          }
        }
      }
    }
  }

  set persist(args) {
    console.log('we received data:', args)
  }

  _handleUp() {
    Router.navigate('home')
  }
  _handleLeft() {
    Router.focusWidget('Menu')
  }
  pageTransition() {
    return 'up'
  }
}

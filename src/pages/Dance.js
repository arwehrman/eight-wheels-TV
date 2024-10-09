import { Lightning, Router, Utils } from '@lightningjs/sdk'
import { FocusManager } from '@lightningjs/ui-components'
import ItemsRow from '../components/ItemsRow'

export default class Dance extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0xffff579f,
      Header: {
        mount: 0.5,
        x: 800,
        y: 140,
        text: {
          text: 'Dance Page',
          fontFace: 'Bold',
          fontSize: 75,
          textColor: 0xff14342b
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
          }
        }
      },
      SectionsContainter: {
        type: FocusManager,
        direction: 'row',
        wrapSelected: false,
        items: [
          {
            ref: 'ItemsRow',
            type: ItemsRow,
            w: 600,
            h: 200,
            y: 0
          },
          {
            ref: 'ItemsRow',
            type: ItemsRow,
            w: 600,
            h: 200,
            y: 300
          }
        ],
        w: 700,
        h: 800,
        y: 300,
        x: 200
      }
    }
  }

  set persist(args) {
    console.log('we received data:', args)
  }

  _handleLeft() {
    Router.focusWidget('Menu')
  }
  pageTransition() {
    return 'up'
  }
}

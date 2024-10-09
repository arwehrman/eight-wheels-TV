import { TitleRow, Tile } from '@lightningjs/ui-components'

// create a row of dummy items
// eventually this will come from a data api
const dummyItems = (length) => {
  return Array.from({ length }).map((_, index) => ({
    type: Tile,
    itemLayout: {
      ratioX: 16,
      ratioY: 9,
      upCount: 4
    },
    title: 'This is a Title',
    metadata: {
      title: 'Title',
      description: 'Description text goes here'
    },
    announce: 'Tile',
    announceContext: `${index + 1} of ${length}`
  }))
}

export default class ItemsRow extends TitleRow {
  static _template() {
    return {
      TitleRow: {
        type: TitleRow,
        title: 'Row Title',
        items: dummyItems(3),
        w: 700,
        h: 600
      }
    }
  }
  _getFocused() {
    return this.tag('TitleRow')
  }
}

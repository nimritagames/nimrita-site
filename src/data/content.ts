import { SiteContent } from '../types'

/* Single source of truth for the site.
   Shipping a game = add one entry to `games`. Nothing else needs touching. */

export const siteContent: SiteContent = {
  studio: {
    name: 'Nimrita Games',
    statement: 'A one-person studio making small 2D games for Android.',
    email: 'kamshu@nimritagames.com'
  },

  games: [],

  tools: [
    {
      title: 'FlowUI',
      blurb:
        'A Unity package for referencing UI elements by path instead of wiring them by hand. Scans the hierarchy, groups elements into categories, and keeps the references type-safe.',
      href: '/flowui/',
      install: 'Unity → Package Manager → Add from Git URL',
      meta: 'Unity package · documented'
    },
    {
      title: 'Build an Infinite Runner in Unity',
      blurb:
        'A full written guide to building a 3-lane runner from scratch — chunk streaming, object pooling, origin shifting, save system, and the architecture that holds it together.',
      href: '/infinite-runner/',
      meta: '25 chapters · free to read'
    }
  ]
}

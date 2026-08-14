export interface Game {
  /** Card title. */
  title: string
  /** One plain line. Describe the game, don't sell it. */
  blurb: string
  /** Play Store listing. Omit until the game is actually published. */
  playStoreUrl?: string
  /** Key art or screenshot under public/. Omit to show a flat panel. */
  art?: string
  status: 'Released' | 'In development'
}

export interface Tool {
  title: string
  blurb: string
  /** Where the thing actually lives. */
  href: string
  /** Optional install line, rendered in a mono panel. */
  install?: string
  /** Short factual label, e.g. "25 chapters". */
  meta: string
}

export interface SiteContent {
  studio: {
    name: string
    /** One factual sentence. Not a slogan. */
    statement: string
    email: string
  }
  games: Game[]
  tools: Tool[]
}

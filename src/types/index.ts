export interface SiteContent {
  hero: HeroContent
  origin: OriginContent
  principles: PrincipleContent[]
  projects: ProjectContent[]
  worlds: WorldContent[]
  footer: FooterContent
}

export interface HeroContent {
  tag: string
  title: string
  subtitle: string
  pillPoints: string[]
  ctaPrimary: string
  ctaSecondary: string
}

export interface OriginContent {
  title: string
  subtitle: string
  lead: string
  promises: Promise[]
  metrics: Metric[]
  photo: {
    src: string
    alt: string
    caption: string
  }
}

export interface Promise {
  text: string
}

export interface Metric {
  value: number
  suffix?: string
  label: string
  sublabel: string
}

export interface PrincipleContent {
  num: string
  title: string
  description: string
}

export interface ProjectContent {
  title: string
  status: string
  description: string
  features: string[]
}

export interface WorldContent {
  src: string
  alt: string
  caption: string
}

export interface FooterContent {
  socialLinks: SocialLink[]
  copyright: string
}

export interface SocialLink {
  name: string
  href: string
  label: string
}
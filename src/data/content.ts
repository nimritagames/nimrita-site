import { SiteContent } from '../types'

export const siteContent: SiteContent = {
  hero: {
    tag: 'INDEPENDENT • MULTIPLAYER-NATIVE',
    title: 'Unfair advantages.\nInfinite replayability.',
    subtitle: 'We\'re building the next generation of **multiplayer experiences** using proprietary tools that let us ship **faster, deeper, and more stable** than studios 10x our size.',
    pillPoints: ['Custom netcode', 'Proprietary pipeline', 'Zero-compromise quality'],
    ctaPrimary: 'Join Founders List',
    ctaSecondary: 'See our games ↓'
  },
  
  origin: {
    title: 'The unfair advantage factory',
    subtitle: 'Chapter 01 — Origin',
    lead: 'We started Nimrita with a simple thesis: **the right tools make impossible games possible**. While other studios fight with engines built for someone else\'s vision, we craft every system from scratch—giving us speed, precision, and capabilities that simply don\'t exist elsewhere.',
    promises: [
      { text: 'Our engine. Our rules. Our advantage.' },
      { text: 'Multiplayer isn\'t bolted on—it\'s the foundation.' },
      { text: 'Every tool serves the final player experience.' }
    ],
    metrics: [
      { value: 15, suffix: '+', label: 'proprietary tools', sublabel: 'Built in-house' },
      { value: 3, suffix: 'x', label: 'faster iteration', sublabel: 'Than industry standard' },
      { value: 99, suffix: '%', label: 'uptime', sublabel: 'Network stability' }
    ],
    photo: {
      src: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=1600&q=80',
      alt: 'Game development workstation with neon lighting, controllers, and code',
      caption: 'Our desk when we ship builds.'
    }
  },

  principles: [
    {
      num: '01',
      title: 'Build the engine, own the game',
      description: 'Every system is purpose-built for our vision. No compromises, no workarounds, no "that\'s just how Unity works."'
    },
    {
      num: '02',
      title: 'Multiplayer isn\'t a feature',
      description: 'It\'s the foundation. Lockstep precision, rollback smoothness, and networking that scales from 2 to 2000 players.'
    },
    {
      num: '03',
      title: 'Tools that think ahead',
      description: 'Our pipeline predicts what you need. Automated testing, instant iteration, one-click everything.'
    },
    {
      num: '04',
      title: 'Polish at the speed of prototypes',
      description: 'Our tools let us iterate on final-quality assets. What looks like magic is just better systems.'
    },
    {
      num: '05',
      title: 'Playtest with production builds',
      description: 'No separate "demo builds." Players test the real thing, with full telemetry and instant rollback.'
    },
    {
      num: '06',
      title: 'Scale or die trying',
      description: 'Every system is designed to handle 10x the load. Our architecture doesn\'t break—it bends and recovers.'
    }
  ],

  projects: [
    {
      title: 'Project Nexus',
      status: 'In Development',
      description: 'Competitive multiplayer arena with persistent progression. Built on our custom lockstep engine for zero-lag encounters.',
      features: ['60Hz netcode', 'Cross-platform play', 'Skill-based matchmaking']
    },
    {
      title: 'Void Runners',
      status: 'Prototype',
      description: 'Co-op exploration with procedural storytelling. Our narrative AI generates unique encounters every playthrough.',
      features: ['Dynamic story generation', 'Seamless drop-in/out', 'Persistent world state']
    },
    {
      title: 'Project Codename: Hive',
      status: 'Pre-Production',
      description: 'Large-scale strategy with real-time tactical combat. Our custom ECS handles 1000+ units without breaking a sweat.',
      features: ['Massive battles', 'Predictive simulation', 'Tournament infrastructure']
    },
    {
      title: 'Nimrita Engine',
      status: 'Core Technology',
      description: 'Our proprietary game engine and toolchain. What takes other studios months, we ship in weeks.',
      features: ['Instant iteration', 'Automated testing', 'One-click deployment']
    }
  ],

  worlds: [
    {
      src: 'https://images.unsplash.com/photo-1496284427489-f59461d8a8e6?w=1200&q=80',
      alt: 'Neon alley, rainy night, cyberpunk mood',
      caption: 'Neon economies & social stealth.'
    },
    {
      src: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=1200&q=80',
      alt: 'Futuristic UI dashboard with holographic panels',
      caption: 'Readable HUDs with zero cruft.'
    },
    {
      src: 'https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?w=1200&q=80',
      alt: 'Procedural geometry and crystalline structures',
      caption: 'Rules you learn by playing.'
    },
    {
      src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80',
      alt: 'Desert planet with monolithic structures',
      caption: 'Lonely biomes, generous systems.'
    },
    {
      src: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200&q=80',
      alt: 'Geometric abstract neon shapes',
      caption: 'Impact VFX that don\'t steal frames.'
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
      alt: 'Digital architecture tower',
      caption: 'Architecture as encounter design.'
    }
  ],

  footer: {
    socialLinks: [
      { name: 'Email', href: 'mailto:kamshu@nimritagames.com', label: 'Get early access updates' },
      { name: 'Twitter', href: '#', label: 'Follow our development' },
      { name: 'Discord', href: '#', label: 'Join the community' },
      { name: 'LinkedIn', href: '#', label: 'Connect with our team' }
    ],
    copyright: '© 2025 Nimrita Games. Built different. Photos via Unsplash.'
  }
}
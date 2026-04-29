# Credits & Acknowledgments

We want to thank everyone who has contributed to the development of Project Noon.

## Core Team

<VPTeamMembers :members="coreTeam" />

## Inspirations & Upstream

Project Noon was heavily influenced by these incredible developers and projects in the Linux ecosystem.

<VPTeamMembers size="small" :members="inspirations" />

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const coreTeam = [
  {
    avatar: 'https://github.com/pharmaracist.png',
    name: 'Pharmaracist',
    title: 'Lead Developer',
    desc: 'Architect of Project Project Noon and its ecosystem.',
    links: [{ icon: 'github', link: 'https://github.com/pharmaracist' }]
  },
  {
    avatar: 'https://github.com/aaabbbfff.png',
    name: 'Annoon',
    title: 'My GF',
    desc: 'Emotional Support 🫠.',
    links: [{ icon: 'github', link: 'https://github.com/aaabbbfff' }]
  }

]

const inspirations = [
  {
    avatar: 'https://github.com/outfoxxed.png',
    name: 'OutFoxxed',
    title: 'Quickshell Creator',
    desc: 'Provided the toolkit that makes QML desktop shells possible.',
    links: [{ icon: 'github', link: 'https://github.com/outfoxxed' }]
  },
  {
    avatar: 'https://github.com/end-4.png',
    name: 'end-4',
    title: 'dots-hyprland',
    desc: 'His Code Helped Me Learning Quickshell / AGS V1.',
    links: [{ icon: 'github', link: 'https://github.com/end-4' }]
  },
  {
    avatar: 'https://github.com/soramanew.png',
    name: 'Caelestia',
    title: 'Lead Dev of Caelestia Project',
    desc: 'Inspiration.',
    links: [{ icon: 'github', link: 'https://github.com/soramanew' }]
  },
  {
    avatar: 'https://github.com/Axenide.png',
    name: 'Axenide',
    title: 'Lead Dev of Ambxt',
    desc: 'Inspiration.',
    links: [{ icon: 'github', link: 'https://github.com/axenide' }]
  }
]
</script>

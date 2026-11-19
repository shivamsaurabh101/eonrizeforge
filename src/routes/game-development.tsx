import { createFileRoute } from '@tanstack/react-router'
import { SiteShell } from '@/components/SiteShell'
import content from '@/content/game-development.html?raw'

export const Route = createFileRoute('/game-development')({
  head: () => ({
    meta: [
      { title: 'Game Development — EonRize Forge' },
      { name: 'description', content: 'Game development for client projects: 2D and 3D experiences, gameplay mechanics, prototypes and interactive systems.' },
      { property: 'og:title', content: 'Game Development — EonRize Forge' },
      { property: 'og:description', content: 'Game development for client projects: 2D and 3D experiences, gameplay mechanics, prototypes and interactive systems.' },
    ],
  }),
  component: () => <SiteShell content={content} />,
})


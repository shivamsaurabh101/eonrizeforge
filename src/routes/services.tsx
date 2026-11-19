import { createFileRoute } from '@tanstack/react-router'
import { SiteShell } from '@/components/SiteShell'
import content from '@/content/services.html?raw'

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      { title: 'Services — EonRize Forge' },
      { name: 'description', content: 'Explore EonRize Forge services: game development, 3D art and assets, custom software and AI-powered applications.' },
      { property: 'og:title', content: 'Services — EonRize Forge' },
      { property: 'og:description', content: 'Explore EonRize Forge services: game development, 3D art and assets, custom software and AI-powered applications.' },
    ],
  }),
  component: () => <SiteShell content={content} />,
})


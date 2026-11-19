import { createFileRoute } from '@tanstack/react-router'
import { SiteShell } from '@/components/SiteShell'
import content from '@/content/portfolio.html?raw'

export const Route = createFileRoute('/portfolio')({
  head: () => ({
    meta: [
      { title: 'Portfolio & Concepts — EonRize Forge' },
      { name: 'description', content: 'Original concept studies and visual explorations from EonRize Forge. Client case studies will be added when available.' },
      { property: 'og:title', content: 'Portfolio & Concepts — EonRize Forge' },
      { property: 'og:description', content: 'Original concept studies and visual explorations from EonRize Forge. Client case studies will be added when available.' },
    ],
  }),
  component: () => <SiteShell content={content} />,
})


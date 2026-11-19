import { createFileRoute } from '@tanstack/react-router'
import { SiteShell } from '@/components/SiteShell'
import content from '@/content/about.html?raw'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About the Studio — EonRize Forge' },
      { name: 'description', content: 'Meet EonRize Forge, an independent technology and creative development studio focused on software, AI and interactive experiences.' },
      { property: 'og:title', content: 'About the Studio — EonRize Forge' },
      { property: 'og:description', content: 'Meet EonRize Forge, an independent technology and creative development studio focused on software, AI and interactive experiences.' },
    ],
  }),
  component: () => <SiteShell content={content} />,
})


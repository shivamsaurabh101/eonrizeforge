import { createFileRoute } from '@tanstack/react-router'
import { SiteShell } from '@/components/SiteShell'
import content from '@/content/home.html?raw'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'EonRize Forge — Technology & Creative Development Studio' },
      { name: 'description', content: 'EonRize Forge is an independent technology and creative development studio building custom software, AI-powered products and immersive games.' },
      { property: 'og:title', content: 'EonRize Forge — Technology & Creative Development Studio' },
      { property: 'og:description', content: 'EonRize Forge is an independent technology and creative development studio building custom software, AI-powered products and immersive games.' },
    ],
  }),
  component: () => <SiteShell content={content} />,
})


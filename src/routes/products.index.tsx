import { createFileRoute } from '@tanstack/react-router'
import { SiteShell } from '@/components/SiteShell'
import content from '@/content/products.html?raw'

export const Route = createFileRoute('/products/')({
  head: () => ({
    meta: [
      { title: 'Our Products — EonRize Forge' },
      { name: 'description', content: 'Explore products by EonRize Forge, including GrindOn, a habit and accountability app in development.' },
      { property: 'og:title', content: 'Our Products — EonRize Forge' },
      { property: 'og:description', content: 'Explore products by EonRize Forge, including GrindOn, a habit and accountability app in development.' },
    ],
  }),
  component: () => <SiteShell content={content} />,
})


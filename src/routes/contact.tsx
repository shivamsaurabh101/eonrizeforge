import { createFileRoute } from '@tanstack/react-router'
import { SiteShell } from '@/components/SiteShell'
import content from '@/content/contact.html?raw'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact — EonRize Forge' },
      { name: 'description', content: 'Contact EonRize Forge about a game, 3D art, software or AI development project.' },
      { property: 'og:title', content: 'Contact — EonRize Forge' },
      { property: 'og:description', content: 'Contact EonRize Forge about a game, 3D art, software or AI development project.' },
    ],
  }),
  component: () => <SiteShell content={content} />,
})


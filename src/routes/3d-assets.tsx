import { createFileRoute } from '@tanstack/react-router'
import { SiteShell } from '@/components/SiteShell'
import content from '@/content/3d-assets.html?raw'

export const Route = createFileRoute('/3d-assets')({
  head: () => ({
    meta: [
      { title: '3D Assets & Art — EonRize Forge' },
      { name: 'description', content: '3D development capabilities for games and interactive projects: characters, environments, props, materials and animation.' },
      { property: 'og:title', content: '3D Assets & Art — EonRize Forge' },
      { property: 'og:description', content: '3D development capabilities for games and interactive projects: characters, environments, props, materials and animation.' },
    ],
  }),
  component: () => <SiteShell content={content} />,
})


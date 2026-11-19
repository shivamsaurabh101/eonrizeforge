import { createFileRoute } from '@tanstack/react-router'
import { SiteShell } from '@/components/SiteShell'
import content from '@/content/ai-software.html?raw'

export const Route = createFileRoute('/ai-software')({
  head: () => ({
    meta: [
      { title: 'AI & Software Development — EonRize Forge' },
      { name: 'description', content: 'Custom software, web applications and practical AI-powered solutions for businesses, startups and entrepreneurs.' },
      { property: 'og:title', content: 'AI & Software Development — EonRize Forge' },
      { property: 'og:description', content: 'Custom software, web applications and practical AI-powered solutions for businesses, startups and entrepreneurs.' },
    ],
  }),
  component: () => <SiteShell content={content} />,
})


export interface Project {
  title: string
  description: string
  tech: string[]
  live: string
  github?: string
}

export const clientProjects: Project[] = [
  {
    title: 'Royal Foam — royalfoam.shop',
    description:
      'Shopify store for a US manufacturer of architectural foam products. Product variation filters, size and texture selectors without page reloads, SEO and redirect clean-up, page speed, GA4 and Zoho CRM integration. Ongoing development and support.',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'SEO', 'GA4'],
    live: 'https://royalfoam.shop/',
  },
  {
    title: 'Green Wall — greenwall.art',
    description:
      'WordPress site for a US construction and decor company. Product catalog with variation filters, category pages, author pages, Core Web Vitals and structured data, lead forms wired into Zoho CRM. Ongoing development and support.',
    tech: ['WordPress', 'Bricks Builder', 'PHP', 'JavaScript', 'SEO'],
    live: 'https://greenwall.art/',
  },
  {
    title: '3D Fabrication — 3dfabrication.studio',
    description:
      'WordPress site for a US 3D fabrication studio. Multi-select category and variation filters for the store, Spanish version of the site, texture swatches, page speed work, GA4 and GTM tracking. Ongoing development and support.',
    tech: ['WordPress', 'Bricks Builder', 'PHP', 'JavaScript', 'GTM'],
    live: 'https://3dfabrication.studio/',
  },
  {
    title: 'Royal Foam Art — royalfoam.art',
    description:
      'WooCommerce site for a US decor manufacturer. Catalog and blog, recommended products on service pages, layout and performance improvements. Ongoing development and support.',
    tech: ['WordPress', 'WooCommerce', 'Bricks Builder', 'PHP'],
    live: 'https://royalfoam.art/',
  },
]

export const personalProjects: Project[] = [
  {
    title: 'Match-3 Game',
    description:
      'Browser-based puzzle game with tile matching mechanics, animations, scoring, and a countdown timer.',
    tech: ['TypeScript', 'Pixi.js', 'GSAP', 'Webpack'],
    live: 'https://match-3-game-alpha.vercel.app/',
    github: 'https://github.com/madevil88/Match-3_game',
  },
  {
    title: 'Ukrainian Cuisine',
    description:
      'A website dedicated to traditional Ukrainian cuisine — recipes, dish descriptions, and cultural context.',
    tech: ['Next.js', 'TypeScript', 'React.js', 'PostgreSQL', 'Prisma ORM', 'Auth.js', 'Tailwind CSS', 'HeroUI'],
    live: 'https://ukrainian-cuisine-21njy71dm-madevil88-2469s-projects.vercel.app/',
    github: 'https://github.com/madevil88/Ukrainian_cuisine',
  },
  {
    title: 'Pool Game',
    description:
      'Browser-based billiards simulation with realistic physics and interactive gameplay.',
    tech: ['TypeScript', 'Matter.js', 'Canvas API', 'Webpack'],
    live: 'https://pool-game-gu1imetci-madevil88-2469s-projects.vercel.app/',
    github: 'https://github.com/madevil88/pool-game',
  },
]

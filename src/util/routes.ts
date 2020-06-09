export const routes = {
  about: 'about',
  contact: 'contact',
  blog: {
    base: 'blog',
    post: {
      template: 'post/:slug',
      link: (slug: string) => `/blog/post/${slug}`
    },
    category: {
      template: 'category/:slug',
      link: (slug: string) => `/blog/category/${slug}`
    },
    tag: {
      template: 'tag/:slug',
      link: (slug: string) => `/blog/tag/${slug}`
    }
  },
  project: {
    base: 'project',
    alloy: {
      base: 'alloy',
      link: '/project/alloy'
    },
    homebrewery: {
      base: 'homebrewery',
      link: '/project/homebrewery'
    }
  }
};

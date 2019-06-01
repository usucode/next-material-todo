module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/post/hello-nextjs": {
        page: "/post",
        query: { title: "Hello Next.js" },
      },
      "/post/learn-nextjs": {
        page: "/post",
        query: { title: "Learn Next.js is awesome" },
      },
      "/post/deploy-nextjs": {
        page: "/post",
        query: { title: "Deploy apps with Zeit" },
      },
    }
  },
}

export async function getStaticProps({ preview = false }) {
    const allPosts = await getAllPostsForHome(preview)
  
    return {
      props: { allPosts, preview },
      revalidate: 10,
    }
  }
  // Get the first 20 posts from WordPress, ordered by the date
export async function getAllPostsFromWordPress(preview) {
    const data = await fetchAPI(`
      query AllPosts {
        posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              slug
              date
            }
          }
        }
      }
    `)
  
    return data.posts
  }
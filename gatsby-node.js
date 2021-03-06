// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

exports.onCreateWebpackConfig = ({actions}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, `src`),
      },
    },
  });
};

exports.createPages = async ({actions, graphql, reporter}) => {
  const {createPage} = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
            title
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  // result.data.allMarkdownRemark.edges.forEach(({node}) => {
  //   createPage({
  //     path: node.frontmatter.path,
  //     component: blogPostTemplate,
  //     context: {},
  //   });
  // });
};

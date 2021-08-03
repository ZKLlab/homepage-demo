import {graphql, PageProps} from 'gatsby';
import * as React from 'react';

type IndexQueryProps = {
  allMarkdownRemark: {
    edges: {
      node: {
        id: string;
        frontmatter: {
          title: string;
          date: string;
          description: string;
        };
      };
    }[];
  };
  site: {
    buildTime: string;
    siteMetadata: {
      title: string;
    };
  };
};

type IndexPageProps = PageProps<IndexQueryProps>;

const IndexPage: React.FC<IndexPageProps> = ({data}) => {
  return (
    <div>
      <div className="text-green-500">{data.site.siteMetadata.title}</div>
      {
        data.allMarkdownRemark.edges.map(({node}) => (
          <div key={node.id}>{node.frontmatter.title}</div>
        ))
      }
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {
      fields: frontmatter___date,
      order: DESC
    }, limit: 5) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
          }
        }
      }
      totalCount
    }
    site {
      buildTime
      siteMetadata {
        title
      }
    }
  }
`;

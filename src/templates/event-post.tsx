import {graphql} from 'gatsby';
import React from 'react';

const EventPostTemplate: React.FC = ({data}) => {

};

export default EventPostTemplate;


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

import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const classes = {
  wrapper: 'mt-16 blog-content',
  title: 'mt-16 text-4xl text-gray-900 font-bold',
  description: 'text-gray-600 font-light',
};

const ProjectPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Header metadata={data.site.siteMetadata} />
      <SEO title={post.frontmatter.title} />
      <h1 className={classes.title}>{post.frontmatter.title}</h1>
      <p className={classes.description}>
        {post.frontmatter.description}
      </p>
      <div
        className={classes.wrapper}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  );
};

export default ProjectPost;

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        resume
        github
        linkedin
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;

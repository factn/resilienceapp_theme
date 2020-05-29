import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const PartnersPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="siteContent">
      <div className="siteContent-inner">
        <h1>{title}</h1>
        <PageContent className="content" content={content} />
      </div>
    </div>
  );
};

PartnersPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const PartnersPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PartnersPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

PartnersPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PartnersPage;

export const partnersPageQuery = graphql`
  query PartnersPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

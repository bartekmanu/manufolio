import React from 'react';
// import styled from 'styled-components';
import PageContentWrapper from '../components/PageContentWrapper';
import PageTitle from '../components/typography/PageTitle';
import GMaps from '../components/GMaps';

const Contact: React.FC = () => (
  <PageContentWrapper pageTitle={<PageTitle text="Contact" />} pageBodyRight={<GMaps />} />
);

export default Contact;

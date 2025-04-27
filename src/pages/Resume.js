import { Layout } from '@components';
import { usePrefersReducedMotion } from '@hooks';
import { navDelay } from '@utils';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import pao from '../../public/pao.jpeg';

const StyledResumeContainer = styled.main`
  display: flex;
  background-color: white;
  height: 29.7cm;
`;

const LeftColumn = styled.div`
  flex: 2;
  padding: 2.5rem;
  animation: fadeRight 1s ease;

  @keyframes fadeRight {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const RightColumn = styled.div`
  flex: 1;
  background-color: var(--sky-500, #0ea5e9);
  padding: 2.5rem 1.25rem;
  animation: fadeLeft 1s ease;

  @keyframes fadeLeft {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #3b82f6, #22c55e, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`;

const Section = styled.section`
  margin-top: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--sky-500, #0ea5e9);
  text-decoration: underline;
  text-underline-offset: 8px;
`;

const Paragraph = styled.p`
  font-size: 0.75rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
`;

const ExperienceBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const JobTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
`;

const CompanyName = styled.p`
  font-size: 0.75rem;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100%;
  max-width: 200px;
  transition: transform 0.3s ease;
  background-color: var(--sky-500, #0ea5e9);

  &:hover {
    transform: scale(1.1);
  }
`;

const ContactInfo = styled.ul`
  margin-top: 1rem;
`;

const ContactItem = styled.li`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;

const Resume = ({ location }) => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  const content = (
    <StyledResumeContainer>
      <LeftColumn>
        <Title>Pao Lersiripong</Title>
        <h3>Devops Engineer</h3>
        <hr />
        <Section>
          <SectionTitle>Summary</SectionTitle>
          <Paragraph>
            DevOps Engineer with expertise in a variety of technology stacks... [your summary here]
          </Paragraph>
        </Section>
        <Section>
          <SectionTitle>Experience</SectionTitle>
          <ExperienceBlock>
            <div>
              <JobTitle>Senior Devops Engineer</JobTitle>
              <CompanyName>NEOZO GmbH</CompanyName>
            </div>
            <p>May 2024 - Present</p>
          </ExperienceBlock>
          {/* Repeat for other experience blocks */}
        </Section>
        <Section>
          <SectionTitle>Technical Projects</SectionTitle>
          {/* Repeat your projects here using <h4> and <List> */}
        </Section>
      </LeftColumn>

      <RightColumn>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ProfileImage src={pao} alt="Profile" />
        </div>

        <Section>
          <SectionTitle>Contact</SectionTitle>
          <ContactInfo>
            <ContactItem>📧 p.lersiripong@gmail.com</ContactItem>
            <ContactItem>📱 081-996-5041</ContactItem>
            <ContactItem>📍 Phrakanong, Bangkok, 10260</ContactItem>
            <ContactItem>🔗 linkedin.com/pamnattharat</ContactItem>
          </ContactInfo>
        </Section>

        <Section>
          <SectionTitle>Skills</SectionTitle>
          {/* Your Skills Sections */}
        </Section>

        <Section>
          <SectionTitle>Certified</SectionTitle>
          {/* Your Certificates */}
        </Section>

        <Section>
          <SectionTitle>Education</SectionTitle>
          {/* Your Education */}
        </Section>
      </RightColumn>
    </StyledResumeContainer>
  );

  return (
    <Layout location={location}>
      <Helmet title="Resume | Pao Lersiripong" />

      {prefersReducedMotion ? (
        <>{content}</>
      ) : (
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition timeout={500} classNames="fadeup">
              {content}
            </CSSTransition>
          )}
        </TransitionGroup>
      )}
    </Layout>
  );
};

Resume.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Resume;

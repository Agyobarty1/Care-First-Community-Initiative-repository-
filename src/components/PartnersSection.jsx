import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Box, Container, Typography } from '@mui/material';

// Define the marquee animation
const marquee = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const MarqueeContainer = styled('div')({
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: '#f8f9fa',
  padding: '40px 0',
  margin: '60px 0 0',
});

const MarqueeTrack = styled('div')({
  display: 'flex',
  width: '200%',
  animation: `${marquee} 30s linear infinite`,
  '&:hover': {
    animationPlayState: 'paused',
  },
});

const PartnerItem = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: '300px',
  padding: '0 40px',
  margin: '0 20px',
  '&:hover': {
    '& img': {
      transform: 'scale(1.05)',
    },
  },
});

const PartnerLogo = styled('img')({
  width: '150px',
  height: 'auto',
  objectFit: 'contain',
  marginBottom: '15px',
  transition: 'transform 0.3s ease-in-out',
  filter: 'grayscale(100%)',
  opacity: 0.8,
  '&:hover': {
    filter: 'grayscale(0%)',
    opacity: 1,
  },
});

const Slogan = styled(Typography)({
  color: '#555',
  fontStyle: 'italic',
  textAlign: 'center',
  maxWidth: '250px',
  marginTop: '10px',
});

const partners = [
  {
    logo: '/assets/tcdi.jpeg',
    name: 'TCDI',
    slogan: 'Helping to make life better',
  },
  {
    logo: '/assets/nhf.jpeg',
    name: 'NHF',
    slogan: 'Building healthier communities',
  },
  {
    logo: '/assets/prodigy.jpeg',
    name: 'Prodigy',
    slogan: 'Excellence in innovation',
  },
  {
    logo: '/assets/wfp.jpeg',
    name: 'WFP',
    slogan: 'Fighting hunger worldwide',
  },
];

const PartnersSection = () => {
  return (
    <MarqueeContainer>
      <Container maxWidth="lg">
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{
            color: '#2c3e50',
            fontWeight: 600,
            marginBottom: '30px',
            position: 'relative',
            '&::after': {
              content: '""',
              display: 'block',
              width: '80px',
              height: '3px',
              background: '#3498db',
              margin: '15px auto 0',
            },
          }}
        >
          Our Valued Partners
        </Typography>
      </Container>
      
      <Box sx={{ overflow: 'hidden' }}>
        <MarqueeTrack>
          {[...partners, ...partners].map((partner, index) => (
            <PartnerItem key={`${partner.name}-${index}`}>
              <Box sx={{ 
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <PartnerLogo 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  loading="lazy"
                />
                <Slogan variant="subtitle1">
                  {partner.slogan}
                </Slogan>
              </Box>
            </PartnerItem>
          ))}
        </MarqueeTrack>
      </Box>
    </MarqueeContainer>
  );
};

export default PartnersSection;

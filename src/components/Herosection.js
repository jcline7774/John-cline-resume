import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import img from '../components/IMG_4246.jpg';
import infinity7 from '../components/infinity7.png';
import infinityV from '../components/infinityV.png';

const HeroSection = () => {
  return (
    <div className="clickable">
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ width: '70%' }}>
          <Typography variant="h4" component="div" gutterBottom>
            <i>Hi there,</i>
          </Typography>
          <Typography variant="h2" component="div" gutterBottom>
            <b>I'm <font color="#0da6ff"><a href="mailto:john7774@icloud.com" class="no-underline"> John Cline </a></font></b><img src={infinityV} alt="InfinityV" style={{ width: '50px', height: '35px', marginLeft: '15px' }} />
          </Typography>
          <Typography variant="h3" component="div" gutterBottom>
             <font color="#ffffff"> Full Stack Developer & Designer</font>...
          </Typography>
          <Typography variant="h4" component="div" gutterBottom>
            what I truly enjoy is building eye catching web apps that can grow as fast as your business.
          </Typography>
        </Box>
        <Box sx={{ width: '30%' }}>
          <img src={img} alt="Image" style={{ width: '100%', height: '100%', objectFit: 'contain' , opacity: 0.70, borderRadius: '50px' }} />
        </Box>
      </Container>
    </div>
  );
};

export default HeroSection;
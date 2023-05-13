import styled from "styled-components";
import { motion } from 'framer-motion';

export const TextHeroDiv = styled.div`
  height: 100vh; 
  width: 100%;
  position: relative;
  overflow: hidden; 
  display: flex;
  flex-direction: column; 
  color: white;
`;

export const BackgroundImg = styled.img`
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  position: absolute; 
  opacity: 0.8;
`;

export const Title = styled(motion.h1)`
  color: white; 
  font-size: 20em; 
  z-index: 1; 
  margin: 0; 
  white-space: nowrap; 
  margin-top: auto; 
  transition: all 2s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

export const Paragraph = styled.p`
  max-width: 900px; 
  font-size: 32px; 
  position: relative; 
  margin: 17vh;
`;

export const Img = styled.img`
  width: 25em; 
`;

export const Section = styled.div`
  height: 80vh; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  position: relative; 
  overflow: hidden; 
  padding: 10em 0; 
  color: white;
`;

const styles = {
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",
  
    heroHeadText:
      "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
    heroSubText:
      "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
  
    sectionHeadText:
      "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
      "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
  };
  
  export { styles };
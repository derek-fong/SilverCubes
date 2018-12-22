/* global tw */
import React from 'react';
import styled from 'react-emotion';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import SEO from '../components/SEO';
import SVG from '../components/SVG';
import { UpDown, UpDownWide } from '../styles/animations';
import { hidden } from '../styles/utils';
import '../styles/global';

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const BigTitle = styled.h1`
  ${tw('text-5xl lg:text-6xl font-mono text-teal-lighter mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const Subtitle = styled.p`
  ${tw('text-xl lg:text-2xl font-sans font-thin text-teal mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={1}>
      <Divider speed={0.2} offset={0}>
        <UpDown>
          <SVG icon="triangle" className={hidden} width={48} stroke="#cb4b16" left="10%" top="20%" />
          <SVG icon="hexa" width={48} stroke="#dc322f" left="60%" top="70%" />
          <SVG icon="box" width={6} fill="#586e75" left="60%" top="15%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill="#268bd2" left="80%" top="10%" />
          <SVG icon="triangle" width={12} stroke="#eee8d5" left="90%" top="50%" />
          <SVG icon="circle" width={16} fill="#586e75" left="70%" top="90%" />
          <SVG icon="triangle" width={16} stroke="#93a1a1" left="30%" top="65%" />
          <SVG icon="circle" width={6} fill="#93a1a1" left="75%" top="10%" />
          <SVG icon="upDown" className={hidden} width={8} fill="#93a1a1" left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" className={hidden} width={24} fill="#586e75" left="5%" top="70%" />
        <SVG icon="circle" width={6} fill="#93a1a1" left="4%" top="20%" />
        <SVG icon="upDown" width={8} fill="#93a1a1" left="95%" top="90%" />
        <SVG icon="upDown" className={hidden} width={24} fill="#586e75" left="40%" top="80%" />
        <SVG icon="triangle" width={8} stroke="#586e75" left="25%" top="5%" />
        <SVG icon="circle" width={64} fill="#2aa198" left="95%" top="5%" />
        <SVG icon="box" className={hidden} width={64} fill="#6c71c4" left="5%" top="90%" />
        <SVG icon="box" width={6} fill="#93a1a1" left="10%" top="10%" />
        <SVG icon="box" width={12} fill="#93a1a1" left="40%" top="30%" />
        <SVG icon="hexa" width={16} stroke="#586e75" left="10%" top="50%" />
        <SVG icon="hexa" width={8} stroke="#586e75" left="80%" top="70%" />
      </Divider>
      <Content speed={0.4} offset={0}>
        <Hero>
          <BigTitle>ALPPIX</BigTitle>
          <Subtitle>The best way to get a project done faster is to start sooner. </Subtitle>
        </Hero>
      </Content>
    </Parallax>
  </React.Fragment>
);

export default Index;

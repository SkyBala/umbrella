'use client';
import React from 'react';
import Main from '@/features/AboutUs/Main/Main';
import Founders from '@/features/AboutUs/Founders/Founders';
import OurMission from '@/features/AboutUs/OurMission/OurMission';
import OurValues from '@/features/AboutUs/OurValues/OurValues';
import Vacancies from '@/features/AboutUs/Vacancies/Vacancies';
import Footer from '@/UI/Footer/Footer';
import './AboutUsPage.scss';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <Main />
      <Founders />
      <OurValues />
      <OurMission />
      <Vacancies />
      <Footer />
    </div>
  );
};

export default AboutUsPage;

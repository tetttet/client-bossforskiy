"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  position: relative;

  display: flex;
  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
  /* justify-content: center;
  align-items: center; */
`;

const Left = styled.div`
  width: 50%;
  font-size: 16px;
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;
  color: #333;

  @media (max-width: 64em) {
    width: 80%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    margin-top: 16px;
    background-color: #f2f2f2;
    border-radius: 20px;
  }
  @media (max-width: 48em) {
    font-size: 14;
  }
  @media (max-width: 30em) {
    font-size: 12;
    padding: 2rem;
    width: 70%;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  /* min-height: 100vh; */

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    top: 30%;
  }
  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }

    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;

      position: absolute;
      left: 60%;
      bottom: 20%;
    }
  }
`;

const Title = styled.h1`
  font-size: 35px;
  font-family: "Montserrat";
  font-weight: 300;
  letter-spacing: 0rem;
  color: #333;
  /* text-transform: capitalize; */

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  span {
    display: inline-block;
  }

  @media (max-width: 64em) {
    font-size: 80px;
    font-weight: 400;
    top: 0;
    left: 0%;
  }
  @media (max-width: 48em) {
    font-size: 60px;
  }
`;

const About = () => {
  const t = useTranslations("About");

  const img1 = "https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=900&auto=format&fit=crop&q=60";
  // const img2 = "https://images.unsplash.com/photo-1541643600914-78b084683601?w=900&auto=format&fit=crop&q=60";
  const img3 = "https://plus.unsplash.com/premium_photo-1679106770086-f4355693be1b?w=900&auto=format&fit=crop&q=60";

  return (
    <div className="bg-gradient-to-b from-white to-gray-200 mt-5 md:mt-16">
      <Section id="fixed-target" className="about">
        <Title className="uppercase -ml-18">{t("title")}</Title>
        <Left className="mt-0 lg:!mt-20" data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
          <p>{t("text1")}</p>
          <br />
          <p>{t("text2")}</p>
          <br />
          <p>{t("text3")}</p>
          <br />
          <p>{t("text4")}</p>
        </Left>
        <Right>
          <Image width={400} height={600} src={img1} alt={t("title")} />
          {/* <Image width={400} height={600} className="small-img-1" src={img2} alt={t("title")} />
           */}
          <Image width={400} height={600} className="small-img-2" src={img3} alt={t("title")} />
        </Right>
      </Section>
    </div>
  );
};


export default About;

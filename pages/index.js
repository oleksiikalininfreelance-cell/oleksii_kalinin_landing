import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Oleksii Kalinin</title>
          <meta property="og:title" content="Oleksii Kalinin" />
        </Head>
        <div className="home-frame1">
          <span className="home-text10">Oleksii Kalinin</span>
          <span className="home-text11">
            Low-Code Developer from Kharkiv, Ukraine
          </span>
          <span className="home-text12">
            I work at the Relief Coordination Centre and freelance
          </span>
          <span className="home-text13">
            I`m not a designer -- I transform ready designs into real projects
            with Low-Code on TeleportHQ
          </span>
          <span className="home-text14">About Me</span>
          <span className="home-text15">
            I started learning low-code as a way to build projects faster and
            help others bring their ideas to life. Now, I focus on transforming
            designs into functional web pages using TeleportHQ. I also work at
            the Relief Coordination Centre, helping with humanitarian
            initiatives.
          </span>
          <div className="home-frame3">
            <div className="home-group1">
              <img
                alt="settings132"
                src="/external/settings132-e6ms.svg"
                className="home-settings1"
              />
              <span className="home-text16">Low-Code</span>
              <span className="home-text17">Low-Code</span>
            </div>
            <div className="home-group2">
              <img
                alt="puzzlepiece138"
                src="/external/puzzlepiece138-8x8.svg"
                className="home-puzzlepiece1"
              />
              <span className="home-text18">Automation</span>
            </div>
            <div className="home-group3">
              <img
                alt="box1310"
                src="/external/box1310-p94q.svg"
                className="home-box1"
              />
              <span className="home-text19">UI Desing</span>
            </div>
            <div className="home-group4">
              <img
                alt="zap1314"
                src="/external/zap1314-7sl.svg"
                className="home-zap1"
              />
              <span className="home-text20">Speed</span>
            </div>
          </div>
          <span className="home-text21">Projects</span>
          <span className="home-text22">
            Soon I`ll share websites I’ve built with TeleportHQ
          </span>
          <span className="home-text23">Socials &amp; Contact</span>
          <div className="home-frame4">
            <div className="home-group5">
              <img
                alt="instagramlogofacebook2svgrepocom1349"
                src="/external/instagramlogofacebook2svgrepocom1349-awq9.svg"
                className="home-instagramlogofacebook2svgrepocom1"
              />
              <a
                href="https://www.instagram.com/olexiy_kalinin"
                target="_blank"
                rel="noreferrer noopener"
                className="home-text24"
              >
                @olexiy_kalinin
              </a>
            </div>
            <div className="home-group6">
              <img
                alt="linkedinsvgrepocom1344"
                src="/external/linkedinsvgrepocom1344-isk.svg"
                className="home-linkedinsvgrepocom1"
              />
              <a
                href="https://www.linkedin.com/in/олексій-калінін-02a255312/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-text25"
              >
                Oleksii Kalinin
              </a>
            </div>
          </div>
          <div className="home-group7">
            <img
              alt="email1573svgrepocom1354"
              src="/external/email1573svgrepocom1354-d4x.svg"
              className="home-email1573svgrepocom1"
            />
            <a
              href="mailto:oleksii.kalinin.freelance@gmail.com?subject="
              className="home-text26"
            >
              oleksii.kalinin.freelance@gmail.com
            </a>
          </div>
          <img
            alt="Rectangle172"
            src="/external/rectangle172-58l-400h.png"
            className="home-rectangle1"
          />
        </div>
        <a href="https://play.teleporthq.io/signup" className="home-link">
          <div aria-label="Sign up to TeleportHQ" className="home-container2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="home-icon1"
            >
              <path
                d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
                fill="#B23ADE"
              ></path>
              <path
                d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
                fill="#FF5C5C"
              ></path>
              <path
                d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
                fill="#2874DE"
              ></path>
            </svg>
            <span className="home-text27">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              135deg,
              #1b0028 0%,
              #4a005d 50%,
              #9b0047 100%
            );
          }
          .home-frame1 {
            width: 100%;
            height: 2000px;
            display: flex;
            overflow: hidden;
            position: relative;
            background: linear-gradient(
              145deg,
              rgba(27, 0, 40, 1) 0%,
              rgba(74, 0, 93, 1) 50%,
              rgba(155, 0, 71, 1) 100%
            );
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-text10 {
            top: 74px;
            left: 267px;
            color: rgba(179, 156, 208, 1);
            width: 395px;
            height: auto;
            position: absolute;
            font-size: 80px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text11 {
            top: 275px;
            left: 265px;
            color: rgba(217, 70, 126, 1);
            width: 272px;
            height: auto;
            position: absolute;
            font-size: 25px;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text12 {
            top: 374px;
            left: 265px;
            color: rgba(179, 156, 208, 1);
            width: 479px;
            height: auto;
            position: absolute;
            font-size: 25px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text13 {
            top: 478px;
            left: 264px;
            color: rgba(179, 156, 208, 1);
            width: 794px;
            height: auto;
            position: absolute;
            font-size: 25px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text14 {
            top: 554px;
            left: 267px;
            color: rgba(217, 70, 126, 1);
            width: 493px;
            height: auto;
            position: absolute;
            font-size: 80px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text15 {
            top: 681px;
            left: 265px;
            color: rgba(179, 156, 208, 1);
            width: 794px;
            height: auto;
            position: absolute;
            font-size: 25px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-frame3 {
            gap: 29px;
            top: 868px;
            left: 265px;
            width: 814px;
            display: flex;
            position: absolute;
            align-items: center;
          }
          .home-group1 {
            width: 186px;
            height: 50px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-settings1 {
            top: 0px;
            left: 0px;
            width: 50px;
            height: 50px;
            position: absolute;
          }
          .home-text16 {
            top: 10px;
            left: 61px;
            color: rgba(179, 156, 208, 1);
            width: 125px;
            height: auto;
            position: absolute;
            font-size: 25px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text17 {
            top: 10px;
            left: 61px;
            color: rgba(179, 156, 208, 1);
            width: 125px;
            height: auto;
            position: absolute;
            font-size: 25px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-group2 {
            width: 206px;
            height: 50px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-puzzlepiece1 {
            top: 0px;
            left: 0px;
            width: 50px;
            height: 50px;
            position: absolute;
          }
          .home-text18 {
            top: 12px;
            left: 61px;
            color: rgba(179, 156, 208, 1);
            width: 145px;
            height: auto;
            position: absolute;
            font-size: 25px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-group3 {
            width: 186px;
            height: 50px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-box1 {
            top: 0px;
            left: 0px;
            width: 50px;
            height: 50px;
            position: absolute;
          }
          .home-text19 {
            top: 10px;
            left: 61px;
            color: rgba(179, 156, 208, 1);
            width: 125px;
            height: auto;
            position: absolute;
            font-size: 25px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-group4 {
            width: 149px;
            height: 50px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-zap1 {
            top: 0px;
            left: 0px;
            width: 50px;
            height: 50px;
            position: absolute;
          }
          .home-text20 {
            top: 12px;
            left: 66px;
            color: rgba(179, 156, 208, 1);
            width: 83px;
            height: auto;
            position: absolute;
            font-size: 25px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text21 {
            top: 959px;
            left: 264px;
            color: rgba(217, 70, 126, 1);
            width: 389px;
            height: auto;
            position: absolute;
            font-size: 80px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text22 {
            top: 1092px;
            left: 265px;
            color: rgba(179, 156, 208, 1);
            width: 606px;
            height: auto;
            position: absolute;
            font-size: 25px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text23 {
            top: 1161px;
            left: 265px;
            color: rgba(217, 70, 126, 1);
            width: 709px;
            height: auto;
            position: absolute;
            font-size: 80px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-frame4 {
            gap: 222px;
            top: 1286px;
            left: 271px;
            width: 689px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .home-group5 {
            width: 240px;
            height: 50px;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-group5:hover {
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 2;
            animation-timing-function: ease;
          }
          .home-instagramlogofacebook2svgrepocom1 {
            top: 0px;
            left: 0px;
            width: 50px;
            height: 50px;
            position: absolute;
          }
          .home-text24 {
            top: 10px;
            left: 50px;
            color: rgba(179, 156, 208, 1);
            width: 190px;
            height: auto;
            position: absolute;
            font-size: 25px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-group6 {
            width: 227px;
            height: 50px;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-group6:hover {
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 2;
            animation-timing-function: ease;
          }
          .home-linkedinsvgrepocom1 {
            top: 0px;
            left: 0px;
            width: 50px;
            height: 50px;
            position: absolute;
          }
          .home-text25 {
            top: 18px;
            left: 57px;
            color: rgba(179, 156, 208, 1);
            width: 170px;
            height: auto;
            position: absolute;
            font-size: 25px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-group7 {
            top: 1377px;
            left: 277px;
            width: 488px;
            height: 50px;
            display: flex;
            position: absolute;
            transition: 0.3s;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-group7:hover {
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 2;
            animation-timing-function: ease;
          }
          .home-email1573svgrepocom1 {
            top: 0px;
            left: 0px;
            width: 50px;
            height: 50px;
            position: absolute;
          }
          .home-text26 {
            top: 7px;
            left: 61px;
            color: rgba(179, 156, 208, 1);
            width: 427px;
            height: auto;
            position: absolute;
            font-size: 25px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-rectangle1 {
            top: 74px;
            left: 825px;
            width: 350px;
            height: 350px;
            position: absolute;
            border-color: rgba(158, 2, 80, 1);
            border-style: solid;
            border-width: 8px;
            border-radius: 175px;
          }
          .home-link {
            display: contents;
          }
          .home-container2 {
            right: 50px;
            border: 1px solid #ffffff5c;
            bottom: 30px;
            display: flex;
            z-index: 22;
            position: fixed;
            box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
            min-height: auto;
            align-items: center;
            padding-top: 8px;
            padding-left: 12px;
            border-radius: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            backdrop-filter: blur(6px);
            background-color: rgba(41, 41, 41, 0.41);
          }
          .home-icon1 {
            width: 24px;
            margin-right: 4px;
          }
          .home-text27 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          @media (max-width: 1400px) {
            .home-text26 {
              color: rgb(179, 156, 208);
              font-size: 25px;
              font-family: Inter;
              font-weight: 500;
              line-height: normal;
              text-decoration: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home

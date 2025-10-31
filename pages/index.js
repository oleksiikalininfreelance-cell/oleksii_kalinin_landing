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
        <div className="home-hero">
          <div className="home-container2">
            <h1 className="home-text10">Oleksii Kalinin</h1>
            <span className="home-text11">
              Low-Code Developer from Kharkiv, Ukraine
            </span>
            <span className="home-text12">
              I work at the Relief Coordination Centre and freelance
            </span>
          </div>
          <img
            id="avatar"
            alt="image"
            src="/photo_2025-10-26_17-18-39-300h.jpg"
            className="home-image"
          />
        </div>
        <div className="home-info">
          <h1 className="home-text13">
            I`m not a designer -- I transform ready designs into real projects
            with Low-Code on TeleportHQ
          </h1>
        </div>
        <div className="home-aboutme">
          <h1 className="home-text14">About Me</h1>
          <span className="home-text15">
            I started learning low-code as a way to build projects faster and
            help others bring their ideas to life. Now, I focus on transforming
            designs into functional web pages using TeleportHQ. I also work at
            the Relief Coordination Centre, helping with humanitarian
            initiatives.
          </span>
          <div className="home-container3">
            <div className="home-lowcode">
              <svg
                width="50"
                height="50"
                viewBox="0 0 32 32"
                className="home-icon10"
              >
                <path
                  d="M27 16.76v-1.53l1.92-1.68A2 2 0 0 0 29.3 11l-2.36-4a2 2 0 0 0-1.73-1a2 2 0 0 0-.64.1l-2.43.82a11 11 0 0 0-1.31-.75l-.51-2.52a2 2 0 0 0-2-1.61h-4.68a2 2 0 0 0-2 1.61l-.51 2.52a11.5 11.5 0 0 0-1.32.75l-2.38-.86A2 2 0 0 0 6.79 6a2 2 0 0 0-1.73 1L2.7 11a2 2 0 0 0 .41 2.51L5 15.24v1.53l-1.89 1.68A2 2 0 0 0 2.7 21l2.36 4a2 2 0 0 0 1.73 1a2 2 0 0 0 .64-.1l2.43-.82a11 11 0 0 0 1.31.75l.51 2.52a2 2 0 0 0 2 1.61h4.72a2 2 0 0 0 2-1.61l.51-2.52a11.5 11.5 0 0 0 1.32-.75l2.42.82a2 2 0 0 0 .64.1a2 2 0 0 0 1.73-1l2.28-4a2 2 0 0 0-.41-2.51ZM25.21 24l-3.43-1.16a8.9 8.9 0 0 1-2.71 1.57L18.36 28h-4.72l-.71-3.55a9.4 9.4 0 0 1-2.7-1.57L6.79 24l-2.36-4l2.72-2.4a8.9 8.9 0 0 1 0-3.13L4.43 12l2.36-4l3.43 1.16a8.9 8.9 0 0 1 2.71-1.57L13.64 4h4.72l.71 3.55a9.4 9.4 0 0 1 2.7 1.57L25.21 8l2.36 4l-2.72 2.4a8.9 8.9 0 0 1 0 3.13L27.57 20Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M16 22a6 6 0 1 1 6-6a5.94 5.94 0 0 1-6 6m0-10a3.91 3.91 0 0 0-4 4a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="home-text16">Low-Code</span>
            </div>
            <div className="home-automation">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                className="home-icon13"
              >
                <path
                  d="M17 22H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1a4 4 0 0 1 7.3-2.18A3.86 3.86 0 0 1 14 6h3a1 1 0 0 1 1 1v3a4 4 0 0 1 2.18 7.3A3.86 3.86 0 0 1 18 18v3a1 1 0 0 1-1 1M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11v-3.18a1 1 0 0 1 .42-.82a1 1 0 0 1 .91-.13a1.77 1.77 0 0 0 1.74-.23a2 2 0 0 0 .93-1.37a2 2 0 0 0-.48-1.59a1.89 1.89 0 0 0-2.17-.55a1 1 0 0 1-.91-.13a1 1 0 0 1-.42-.82V8h-3.2a1 1 0 0 1-1-1.33a1.77 1.77 0 0 0-.23-1.74a1.94 1.94 0 0 0-3-.43A2 2 0 0 0 8 6a1.9 1.9 0 0 0 .13.67A1 1 0 0 1 7.18 8Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="home-text17">Automation</span>
            </div>
            <div className="home-uidesign">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                className="home-icon15"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                    fill="currentColor"
                  ></path>
                  <path d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524"></path>
                  <path d="m20.5 16.722l-8.209-4.56a.6.6 0 0 0-.582 0L3.5 16.722m.028-9.428l8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 3v9m0 7.5V22"></path>
                </g>
              </svg>
              <span className="home-text18">UI Design</span>
            </div>
            <div className="home-speed">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                className="home-icon20"
              >
                <path
                  d="M13 2L3 14h9l-1 8l10-12h-9z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="home-text19">Speed</span>
            </div>
          </div>
        </div>
        <div className="home-projects">
          <h1 className="home-text20">Projects</h1>
          <span className="home-text21">
            Soon I`ll share websites I’ve built with TeleportHQ
          </span>
        </div>
        <div className="home-contacts">
          <h1 className="home-text22">Socials &amp; Contact</h1>
          <div className="home-container4">
            <a
              href="https://www.instagram.com/olexiy_kalinin"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link1"
            >
              <div className="home-insta">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 32 32"
                  className="home-icon22"
                >
                  <circle
                    r="1.44"
                    cx="22.406"
                    cy="9.594"
                    fill="currentColor"
                  ></circle>
                  <path
                    d="M16 9.838A6.162 6.162 0 1 0 22.162 16A6.16 6.16 0 0 0 16 9.838M16 20a4 4 0 1 1 4-4a4 4 0 0 1-4 4"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M16 6.162c3.204 0 3.584.012 4.849.07a6.6 6.6 0 0 1 2.228.413a3.98 3.98 0 0 1 2.278 2.278a6.6 6.6 0 0 1 .413 2.228c.058 1.265.07 1.645.07 4.85s-.012 3.583-.07 4.848a6.6 6.6 0 0 1-.413 2.228a3.98 3.98 0 0 1-2.278 2.278a6.6 6.6 0 0 1-2.228.413c-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07a6.6 6.6 0 0 1-2.228-.413a3.98 3.98 0 0 1-2.278-2.278a6.6 6.6 0 0 1-.413-2.228c-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849a6.6 6.6 0 0 1 .413-2.228a3.98 3.98 0 0 1 2.278-2.278a6.6 6.6 0 0 1 2.228-.413c1.265-.058 1.645-.07 4.849-.07M16 4c-3.259 0-3.668.014-4.948.072a8.8 8.8 0 0 0-2.912.558a6.14 6.14 0 0 0-3.51 3.51a8.8 8.8 0 0 0-.558 2.913C4.014 12.333 4 12.74 4 16s.014 3.668.072 4.948a8.8 8.8 0 0 0 .558 2.912a6.14 6.14 0 0 0 3.51 3.51a8.8 8.8 0 0 0 2.913.558c1.28.058 1.688.072 4.947.072s3.668-.014 4.948-.072a8.8 8.8 0 0 0 2.913-.558a6.14 6.14 0 0 0 3.51-3.51a8.8 8.8 0 0 0 .557-2.913C27.986 19.667 28 19.26 28 16s-.014-3.668-.072-4.948a8.8 8.8 0 0 0-.558-2.912a6.14 6.14 0 0 0-3.51-3.51a8.8 8.8 0 0 0-2.913-.557C19.667 4.013 19.26 4 16 4"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="home-text23">Instagram</span>
              </div>
            </a>
            <a
              href="https://t.me/olexiy_kalinin_rcc"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link2"
            >
              <div className="home-tg">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  className="home-icon26"
                >
                  <path
                    d="M22.265 2.428a2.05 2.05 0 0 0-2.078-.324L2.266 9.339a2.043 2.043 0 0 0 .104 3.818l3.625 1.261l2.02 6.682a1 1 0 0 0 .119.252c.008.012.019.02.027.033a1 1 0 0 0 .211.215l.07.05a1 1 0 0 0 .31.136l.013.001l.006.003a1 1 0 0 0 .203.02l.018-.003a1 1 0 0 0 .301-.052q.033-.014.064-.03a1 1 0 0 0 .205-.114l.152-.129l2.702-2.983l4.03 3.122a2.02 2.02 0 0 0 1.241.427a2.054 2.054 0 0 0 2.008-1.633l3.263-16.017a2.03 2.03 0 0 0-.693-1.97M9.37 14.736a1 1 0 0 0-.272.506l-.31 1.504l-.784-2.593l4.065-2.117Zm8.302 5.304l-4.763-3.69a1 1 0 0 0-1.353.12l-.866.955l.306-1.487l7.083-7.083a1 1 0 0 0-1.169-1.593L6.745 12.554L3.02 11.191L20.999 4Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="home-text24">Telegram</span>
              </div>
            </a>
            <a
              href="https://wa.me/380984850932"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link3"
            >
              <div className="home-whatsapp">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  className="home-icon28"
                >
                  <g fill="none">
                    <g clipPath="url(#akarIconsWhatsappFill0)">
                      <path
                        d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967s-.47-.148-.669.15c-.198.297-.767.966-.94 1.164c-.174.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.019-.458.13-.606c.134-.133.297-.347.446-.52s.198-.298.297-.497c.1-.198.05-.371-.025-.52c-.074-.149-.668-1.612-.916-2.207c-.241-.579-.486-.5-.668-.51c-.174-.008-.372-.01-.57-.01s-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074s2.095 3.2 5.076 4.487c.71.306 1.263.489 1.694.625c.712.227 1.36.195 1.872.118c.57-.085 1.758-.719 2.006-1.413s.247-1.289.173-1.413s-.272-.198-.57-.347m-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214l-3.742.982l.999-3.648l-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884a9.8 9.8 0 0 1 6.988 2.899a9.82 9.82 0 0 1 2.892 6.992c-.002 5.45-4.436 9.885-9.884 9.885m8.412-18.297A11.82 11.82 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.86 11.86 0 0 0 1.587 5.945L0 24l6.304-1.654a11.9 11.9 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.82 11.82 0 0 0-3.48-8.413"
                        fill="currentColor"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </g>
                    <defs>
                      <clippath id="akarIconsWhatsappFill0">
                        <path d="M0 0h24v24H0z" fill="#fff"></path>
                      </clippath>
                    </defs>
                  </g>
                </svg>
                <span className="home-text25">WhatsApp</span>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/олексій-калінін-02a255312/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link4"
            >
              <div className="home-linkedin">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  className="home-icon35"
                >
                  <path
                    d="M17.5 8.999a5.4 5.4 0 0 0-2.565.645A1 1 0 0 0 14 8.999h-4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5.5a1 1 0 1 1 2 0v5.5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7.5a5.507 5.507 0 0 0-5.5-5.5m3.5 12h-2v-4.5a3 3 0 1 0-6 0v4.5h-2v-10h2v.703a1 1 0 0 0 1.781.625A3.483 3.483 0 0 1 21 14.5Zm-14-12H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1m-1 12H4v-10h2ZM5.015 1.542a3.233 3.233 0 1 0-.057 6.457h.028a3.233 3.233 0 1 0 .029-6.457m-.029 4.457h-.028a1.222 1.222 0 0 1-1.37-1.228c0-.747.56-1.229 1.427-1.229A1.234 1.234 0 0 1 6.41 4.771c0 .746-.56 1.228-1.425 1.228"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="home-text26">LinkedIn</span>
              </div>
            </a>
            <a
              href="mailto:oleksii.kalinin.freelance@gmail.com?subject="
              className="home-link5"
            >
              <div className="home-mail">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  className="home-icon37"
                >
                  <path
                    d="M19.07 13.88L13 19.94V22h2.06l6.06-6.07m1.58-2.35l-1.28-1.28a.52.52 0 0 0-.38-.17c-.15.01-.29.06-.39.17l-1 1l2.05 2l1-1c.19-.2.19-.52 0-.72M11 18H4V8l8 5l8-5v2h2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7zm9-12l-8 5l-8-5z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="home-text27">
                  oleksii.kalinin.freelance@gmail.com
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            cursor: default;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-image: linear-gradient(
              135deg,
              #1b0028 0%,
              #4a005d 50%,
              #9b0047 100%
            );
          }
          .home-hero {
            flex: 0 0 auto;
            width: 90vw;
            height: auto;
            display: flex;
            margin-top: 30px;
            align-items: center;
            margin-bottom: 30px;
            justify-content: space-between;
          }
          .home-container2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text10 {
            fill: rgba(179, 156, 208, 1);
            color: rgb(179, 156, 208);
            font-size: 80px;
            font-family: 'Satoshi-Regular';
          }
          .home-text11 {
            fill: rgba(217, 70, 126, 1);
            color: rgb(217, 70, 126);
            font-size: 25px;
            font-family: 'Manrope-Regular';
          }
          .home-text12 {
            fill: rgba(179, 156, 208, 1);
            color: rgb(179, 156, 208);
            font-size: 25px;
          }
          .home-image {
            width: 280px;
            height: 280px;
            object-fit: cover;
            transition: 0.3s;
            perspective: 10000px;
            border-color: rgba(158, 2, 80, 1);
            border-width: 8px;
            border-radius: 200px;
            transform-style: preserve-3d;
          }
          .home-image:hover {
            animation: spin-clockwise 1s ease-in-out forwards;
          }
          .home-info {
            flex: 0 0 auto;
            width: 90vw;
            height: auto;
            display: block;
          }
          .home-text13 {
            fill: #b39cd0;
            color: rgb(179, 156, 208);
            width: auto;
            font-size: 25px;
            align-self: center;
            font-family: 'Manrope-Regular';
            line-height: 1.5;
            margin-bottom: 30px;
          }
          .home-aboutme {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 90vw;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: 30px;
            flex-direction: column;
          }
          .home-text14 {
            fill: #d9467e;
            color: rgb(217, 70, 126);
            font-size: 80px;
            font-family: 'Satoshi-Regular';
          }
          .home-text15 {
            fill: #b39cd0;
            color: #b39cd0;
            font-size: 25px;
            font-family: 'Manrope-Regular';
          }
          .home-container3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            align-self: flex-start;
            align-items: center;
            padding-top: 15px;
            border-color: #b39cd0;
            border-style: solid;
            border-width: 2px;
            padding-left: 15px;
            border-radius: 40px;
            padding-right: 15px;
            padding-bottom: 15px;
            justify-content: flex-start;
          }
          .home-lowcode {
            gap: var(--dl-layout-space-halfunit);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            perspective: 1000px;
            transform-style: preserve-3d;
          }
          .home-lowcode:hover {
            cursor: default;
            transform: rotateY(360deg);
            box-shadow: 0 10px 30px egba(0, 0, 0, 0.3);
            transition: transform 0.8s ease-in-out;
          }
          .home-icon10 {
            fill: rgb(217, 70, 126);
            color: rgb(217, 70, 126);
          }
          .home-text16 {
            fill: rgba(179, 156, 208, 1);
            color: rgb(179, 156, 208);
            font-size: 25px;
            align-self: center;
            font-family: 'Manrope-Regular';
          }
          .home-automation {
            gap: var(--dl-layout-space-halfunit);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            perspective: 1000px;
            transform-style: preserve-3d;
          }
          .home-automation:hover {
            cursor: default;
            transform: rotateY(360deg);
            box-shadow: 0 10px 30px egba(0, 0, 0, 0.3);
            transition: transform 0.8s ease-in-out;
          }
          .home-icon13 {
            fill: rgb(217, 70, 126);
            color: rgb(217, 70, 126);
          }
          .home-text17 {
            fill: rgba(179, 156, 208, 1);
            color: rgb(179, 156, 208);
            font-size: 25px;
            align-self: center;
            font-family: 'Manrope-Regular';
          }
          .home-uidesign {
            gap: var(--dl-layout-space-halfunit);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            perspective: 1000px;
            transform-style: preserve-3d;
          }
          .home-uidesign:hover {
            cursor: default;
            transform: rotateY(360deg);
            box-shadow: 0 10px 30px egba(0, 0, 0, 0.3);
            transition: transform 0.8s ease-in-out;
          }
          .home-icon15 {
            fill: rgb(217, 70, 126);
            color: rgb(217, 70, 126);
          }
          .home-text18 {
            fill: rgba(179, 156, 208, 1);
            color: rgb(179, 156, 208);
            font-size: 25px;
            align-self: center;
            font-family: 'Manrope-Regular';
          }
          .home-speed {
            gap: var(--dl-layout-space-halfunit);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            perspective: 1000px;
            transform-style: preserve-3d;
          }
          .home-speed:hover {
            cursor: default;
            transform: rotateY(360deg);
            box-shadow: 0 10px 30px egba(0, 0, 0, 0.3);
            transition: transform 0.8s ease-in-out;
          }
          .home-icon20 {
            fill: rgb(217, 70, 126);
            color: rgb(217, 70, 126);
          }
          .home-text19 {
            fill: rgba(179, 156, 208, 1);
            color: rgb(179, 156, 208);
            font-size: 25px;
            align-self: center;
            font-family: 'Manrope-Regular';
          }
          .home-projects {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 90vw;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: 30px;
            flex-direction: column;
          }
          .home-text20 {
            fill: #d9467e;
            color: rgb(217, 70, 126);
            font-size: 80px;
            font-family: 'Satoshi-Regular';
          }
          .home-text21 {
            fill: #b39cd0;
            color: rgb(179, 156, 208);
            font-size: 25px;
            font-family: 'Manrope-Regular';
          }
          .home-contacts {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 90vw;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: 30px;
            flex-direction: column;
          }
          .home-text22 {
            fill: #d9467e;
            color: rgb(217, 70, 126);
            font-size: 80px;
            font-family: 'Satoshi-Regular';
          }
          .home-container4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            align-self: flex-start;
            align-items: center;
            padding-top: 15px;
            border-color: #b39cd0;
            border-style: solid;
            border-width: 2px;
            padding-left: 15px;
            border-radius: 40px;
            padding-right: 15px;
            padding-bottom: 15px;
            justify-content: center;
          }
          .home-link1 {
            display: contents;
          }
          .home-insta {
            gap: var(--dl-layout-space-halfunit);
            flex: 0 0 auto;
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            text-decoration: none;
          }
          .home-insta:hover {
            cursor: pointer;
            transform: translateY(-4px);
          }
          .home-icon22 {
            fill: rgb(217, 70, 126);
            color: rgb(217, 70, 126);
            align-self: center;
          }
          .home-text23 {
            fill: rgba(179, 156, 208, 1);
            color: rgb(179, 156, 208);
            font-size: 25px;
            align-self: center;
            font-family: 'Manrope-Regular';
          }
          .home-link2 {
            display: contents;
          }
          .home-tg {
            gap: var(--dl-layout-space-halfunit);
            flex: 0 0 auto;
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            text-decoration: none;
          }
          .home-tg:hover {
            cursor: pointer;
            transform: translateY(-4px);
          }
          .home-icon26 {
            fill: rgb(217, 70, 126);
            color: rgb(217, 70, 126);
          }
          .home-text24 {
            fill: rgba(179, 156, 208, 1);
            color: rgb(179, 156, 208);
            font-size: 25px;
            align-self: center;
            font-family: 'Manrope-Regular';
          }
          .home-link3 {
            display: contents;
          }
          .home-whatsapp {
            gap: var(--dl-layout-space-halfunit);
            flex: 0 0 auto;
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            text-decoration: none;
          }
          .home-whatsapp:hover {
            cursor: pointer;
            transform: translateY(-4px);
          }
          .home-icon28 {
            fill: rgb(217, 70, 126);
            color: rgb(217, 70, 126);
          }
          .home-text25 {
            fill: rgba(179, 156, 208, 1);
            color: rgb(179, 156, 208);
            font-size: 25px;
            align-self: center;
            font-family: 'Manrope-Regular';
          }
          .home-link4 {
            display: contents;
          }
          .home-linkedin {
            gap: var(--dl-layout-space-halfunit);
            flex: 0 0 auto;
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            text-decoration: none;
          }
          .home-linkedin:hover {
            cursor: pointer;
            transform: translateY(-4px);
          }
          .home-icon35 {
            fill: rgb(217, 70, 126);
            color: rgb(217, 70, 126);
          }
          .home-text26 {
            fill: rgba(179, 156, 208, 1);
            color: rgb(179, 156, 208);
            font-size: 25px;
            align-self: center;
            text-align: center;
            font-family: 'Manrope-Regular';
          }
          .home-link5 {
            display: contents;
          }
          .home-mail {
            gap: var(--dl-layout-space-halfunit);
            flex: 0 0 auto;
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            text-decoration: none;
          }
          .home-mail:hover {
            cursor: pointer;
            transform: translateY(-4px);
          }
          .home-icon37 {
            fill: rgb(217, 70, 126);
            color: rgb(217, 70, 126);
          }
          .home-text27 {
            fill: rgba(179, 156, 208, 1);
            color: rgb(179, 156, 208);
            font-size: 25px;
            align-self: center;
            word-break: break-all;
            font-family: 'Manrope-Regular';
          }
          @media (max-width: 479px) {
            .home-hero {
              flex-direction: column-reverse;
            }
            .home-text14 {
              width: auto;
              align-self: center;
            }
            .home-text15 {
              align-self: center;
            }
            .home-container3 {
              align-self: center;
              flex-direction: column;
            }
            .home-lowcode {
              align-self: flex-start;
            }
            .home-automation {
              align-self: flex-start;
            }
            .home-uidesign {
              align-self: flex-start;
            }
            .home-speed {
              align-self: flex-start;
            }
            .home-text22 {
              color: rgb(217, 70, 126);
              font-size: 80px;
              font-family: Satoshi-Regular;
            }
            .home-container4 {
              align-self: center;
              align-items: flex-start;
              flex-direction: column;
            }
            .home-text27 {
              font-size: 23px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home

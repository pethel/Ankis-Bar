import React from 'react';
import { Trans } from 'react-i18next';

import './Footer.css';
import phoneSrc from './phone.svg'
import mapsSrc from './maps.svg'
import clockSrc from './clock.svg'

const Footer = () => {


  return (
    <div className="Footer">
      <a className="Footer__icon" href="tel:+4694210068">
        <img src={phoneSrc} alt="" />0942 10068
      </a>
      <a
        className="Footer__icon"
        href="https://goo.gl/maps/eCcnyQVjPtAxhits6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={mapsSrc} alt="" />
        <address>
          Storgatan 37<br />
          Dorotea
        </address>
      </a>
      <div
        className="Footer__icon"
        style={{ display: 'flex', alignItems: 'center' }}>
        <img src={clockSrc} alt="" />
        <span>
          <Trans i18nKey="Footer.openingHours">
            Man-fre: 11:00 - 21:00
          </Trans>
        </span>
      </div>
    </div>
  )
};

export default Footer;
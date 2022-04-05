import React, { useState, useEffect } from "react";
import axios from "axios";

import "./index.css";
import logo from "../../assets/currencies.png";

const Header = (props) => {
  const [eurValue, setEurValue] = useState(null);
  const [usdValue, setUsdValue] = useState(null);

  useEffect(() => {
    const uah = props.rate.UAH;
    setEurValue(uah);
  }, [props]);

  return (
    <header>
      <div className='logo-box'>
        <img src={logo} className='logo'></img>
      </div>
      <div className='rates-list'>
        <span className='rate-item'>USD:</span>
        <span className='rate-item'>
          EUR: {eurValue ? Math.round(parseFloat(eurValue) * 100) / 100 : "NaN"}
        </span>
      </div>
    </header>
  );
};

export default Header;

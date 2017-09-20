import React from 'react';
import data from './constant/data.json';

const Format = {
  getSymbol: function(currencyCode) {
    if (typeof currencyCode !== 'string') return undefined;
    const code = currencyCode.toUpperCase();
    const codeObj = data.hasOwnProperty(code) ? data[code] : undefined;
    return codeObj;
  }
};

export default Format;

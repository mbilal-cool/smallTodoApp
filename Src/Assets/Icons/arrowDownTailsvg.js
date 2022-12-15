import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';

const ArrowDownTailSvg = ({height, width, color}) => {
  const defaultWidth = width ? width : 6;
  const defaultHeight = height ? height : 10;
  const defaultColor = '#38B000';

  return (
    <SvgXml
      xml={`<svg width="${defaultWidth}" height="${defaultHeight}" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00039 0.625C3.08327 0.625 3.16276 0.657924 3.22137 0.716529C3.27997 0.775134 3.31289 0.85462 3.31289 0.9375V8.30813L5.27914 6.34125C5.33782 6.28257 5.41741 6.24961 5.50039 6.24961C5.58338 6.24961 5.66297 6.28257 5.72164 6.34125C5.78032 6.39993 5.81329 6.47952 5.81329 6.5625C5.81329 6.64548 5.78032 6.72507 5.72164 6.78375L3.22164 9.28375C3.19262 9.31285 3.15813 9.33594 3.12017 9.3517C3.0822 9.36745 3.0415 9.37556 3.00039 9.37556C2.95929 9.37556 2.91859 9.36745 2.88062 9.3517C2.84266 9.33594 2.80817 9.31285 2.77914 9.28375L0.279145 6.78375C0.220466 6.72507 0.1875 6.64548 0.1875 6.5625C0.1875 6.47952 0.220466 6.39993 0.279145 6.34125C0.337824 6.28257 0.41741 6.24961 0.500395 6.24961C0.58338 6.24961 0.662966 6.28257 0.721645 6.34125L2.68789 8.30813V0.9375C2.68789 0.85462 2.72082 0.775134 2.77942 0.716529C2.83803 0.657924 2.91751 0.625 3.00039 0.625Z" fill="${defaultColor}"/>
      </svg>
      
      
      
      
      
      
      
      
          
              
               `}
    />
  );
};

export default ArrowDownTailSvg;

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '900',
  },
  {
    value: 6.25,
  },
  {
    value: 12.5,
    label: '1000'
  },
  {
    value: 18.75,
  },
  {
    value: 25,
    label: '1100',
  },
  {
    value: 31.25,
  },
  {
    value: 37.5,
    label: '1200',
  },
  {
    value: 43.75,
  },
  {
    value: 50,
    label: '1300'
  },
  {
    value: 56.25,
  },
  {
    value: 62.5,
    label: '1400',
  },
  {
    value: 68.75,
  },
  {
    value: 75,
    label: '1500',
  },
  {
    value: 81.25,
  },
  {
    value: 87.5,
    label: '1600',
  },
  {
    value: 93.75,
  },
  {
    value: 100,
    label: '1700',
  },
];

function valuetext(value) {
  return `${value} AD`;
}

function dateConverter(value) {
    return ( (value * 8) + 900 );
}

function valueLabelFormat(value) {
//   return marks.findIndex((mark) => mark.value === value) + 1
    return dateConverter(value);
}

export default function DiscreteSliderMarks({changeYearValues}) {

  function handleOnChange(e) {
    changeYearValues( [dateConverter(e.target.value[0]), dateConverter(e.target.value[1])] );
  }

  return (
    <Box sx={{ width: '100%', height: '100%', 'z-index': '1000' }}>
      <Slider
        getAriaLabel={() => 'Date Range'}
        orientation="vertical"
        defaultValue={[0, 100]}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={handleOnChange}
      />
    </Box>
  );
}     
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';

// const marks = [
//   {
//     value: 0,
//     label: '0 AD',
//   },
//   {
//     value: 25,
//     label: '500 AD',
//   },
//   {
//     value: 50,
//     label: '1000 AD',
//   },
//   {
//     value: 75,
//     label: '1500 AD',
//   },
//   {
//     value: 100,
//     label: '2000 AD'
//   },
// ];

// function valuetext(value) {
//   return `${value} AD`;
// }

// function valueLabelFormat(value) {
//   return marks.findIndex((mark) => mark.value === value) + 1;
// }

// export default function DiscreteSliderMarks({changeYearValue}) {

//   function handleOnChange(e) {
//     changeYearValue(e.target.value * 20);
//   }

//   const defaultValue = 100;

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Slider
//         aria-label="Restricted values"
//         defaultValue={defaultValue}
//         valueLabelFormat={valueLabelFormat}
//         getAriaValueText={valuetext}
//         step={null}
//         valueLabelDisplay="auto"
//         marks={marks}
//         onChange={handleOnChange}
//       />
//     </Box>
//   );
// }     
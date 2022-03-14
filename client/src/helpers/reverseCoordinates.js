import React, { useState, useEffect } from 'react';

  export const reverseCoordinates = (array) => {

    console.log("array to be reversed", array);
    return array.map(firstInner=> {
      console.log("firstInner", firstInner);
      return firstInner.map( secondInner => {
        console.log("secondInner", secondInner);
        return secondInner.map( finalInner => {
        console.log("finalInner", finalInner);
          return finalInner.reverse()
          
        })
      })
    })
  }

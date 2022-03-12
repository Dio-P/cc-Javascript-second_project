import { useCallback, useMemo, useState, useEffect } from 'react'
// import entities from './data/test_data';
    

const fetchData = () => {
    let data;
    
    fetch("https://www.digital-land.info/entity.json?dataset=battlefield")
    .then(res=> res.json)
    .then(res=> data=res)
    console.log("data", data);
    return data

}

export default fetchData

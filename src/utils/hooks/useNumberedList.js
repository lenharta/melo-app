import { useEffect, useState } from "react";

export const useNumberedList = () => {
  const [numbered, setNumbered] = useState([]);

  const generateNumber = (count) => {
    const result = [];

    for (let i = 0; i < count; i++) {
      result.push([i]);
        
        setNumbered(result);
        console.log(numbered);
      // result.push(setNumbered[i]);
      // return result;
    }
  };
  // useEffect((result) => {
  // }, []);
  return [numbered, generateNumber,]
};

// var myArray = generateNumber(10);

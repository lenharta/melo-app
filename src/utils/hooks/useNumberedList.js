import { useEffect, useState } from "react";

export const useNumberedList = (countEnd) => {
  const result = [];
  
  for (let i = 1; i < countEnd; i++) {
    if (i <= 9) {
      result.push("0" + i)
    }
    else {
      result.push(i.toString())
    }
  }
  // console.log(result);
  return result;
};


// countStart
// countEnd
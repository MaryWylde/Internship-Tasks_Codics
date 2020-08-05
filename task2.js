const sameString = (str) => {
  const myStrings = [];

  const first = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  const last = {
    "]": true,
    "}": true,
    ")": true,
  };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (first[char]) {
      myStrings.push(char);
    } else if (last[char]) {
      if (first[myStrings.pop()] !== char) return false;
    }
  }
  return myStrings.length === 0;
};

// I have also second version of this code which is shorter

/*
// const sameString = (str) => {
  //   const correctOptions = {
  //     "[": "]",
  //     "{": "}",
  //     "(": ")",
  //   };
  
  //   return correctOptions[str[0]] === str[1];
  // };
   */

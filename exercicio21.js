function chars(string) {
  // it breaks a string into a array of characters
  return Array.from(String(string));
}

const blanks = (var1) => {
  //return how many blank spaces are in a string, meaning the amount of words
  let count = 0;
  for (a = 0; a < var1.length; a++) {
    if (var1[a] == " ") count++;
  }
  return count + 1;
};

console.log(blanks("teste unitario e teste ternario "));

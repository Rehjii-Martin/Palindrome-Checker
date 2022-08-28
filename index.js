function palindrome(str) {
  let polishedString = str.replace(/\W+|_/g, "").toLowerCase();
  let reveresedString = polishedString.split("").reverse().join("");

  console.log(polishedString)

  if (polishedString != reveresedString) {
  return false;
  }
  return true;
}

palindrome("A man, a plan, a canal. Panama");

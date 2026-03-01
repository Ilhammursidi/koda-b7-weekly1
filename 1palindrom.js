function wordPalindrom(word) {
  if (typeof word === "string") {
    let clean = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    let isPalindrom = clean === clean.split("").reverse().join("");
    if (isPalindrom === true) {
      console.log(word + " is palindrom");
    } else {
      console.log(word + " is not palindrom");
    }
  } else {
    console.log(word + " is not string");
  }
}

wordPalindrom(2); // 2 is not Palindrom
wordPalindrom("katak"); // katak is palindrom
wordPalindrom("batu"); // batu is not Palindrom
let str1 = prompt("Enter first string:");
let str2 = prompt("Enter second string:");
if (str1.length !== str2.length) {
  console.log("Not anagrams");
} else {
  let isAnagram = true;

  for (let i = 0; i < str1.length; i++) {
    let count1 = 0, count2 = 0;
    for (let j = 0; j < str1.length; j++) {
      if (str1[i] === str1[j]) count1++;
      if (str1[i] === str2[j]) count2++;
    }
    if (count1 !== count2) {
      isAnagram = false;
      break;
    }
  }
  if (isAnagram) {
    console.log("Strings are anagrams");
  } else {
    console.log("Strings are not anagrams");
  }
}

let str = prompt("Enter a string:");
let result = "";

for (let i = 0; i < str.length; i++) {
  let code = str.charCodeAt(i);

  // ASCII: a–z = 97–122, A–Z = 65–90
  if (code >= 97 && code <= 122) {
    result += String.fromCharCode(code - 32);
  } else {
    result += str[i]; 
  }
}

console.log("Uppercase string:", result);

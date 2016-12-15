//Take a string with 2 vowels and switch them.
//  apple becomes eppla
//  friend becomes freind

let a = 'apple';
let b = 'friend';

var findVowel = (v) => {
  let index = [];
  for(let i =0; i<v.length; i++)
  {
    if(v[i] ==='a' || v[i] === 'e' || v[i] === 'i' || v[i] === 'o' || v[i] === 'u') {
      index.push(i);
    }
  }
  return index;
};

swap = (str, indexVowel) => {
  let ans = '';
  for(let i =0; i<str.length; i++)
  {
    if(i === indexVowel[0]) {
      ans += str[indexVowel[1]];
    }
    else if(i === indexVowel[1]) {
      ans += str[indexVowel[0]];
    }
    else {
      ans += str[i];
    }
  }
  return ans;
}

console.log(swap(a, findVowel(a)));
console.log(swap(b, findVowel(b)));

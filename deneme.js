let text1 = "ahmet burak"
let arr = text1.split(/( )/).filter(x => x !== "")
let isOddNumber = text1.length % 2 == 0 ? false : true
let len = ""
for (let i = 0; i < arr.length; i++) {
  len += arr[i] === " " ? "0" : arr[i].length.toString(); 
} 
arr = arr.filter(item => item !== " ");
let str = arr.join("");
let a = 1
let b = 0
let yuri = ""
let sum = 0
for (let i = 0; i < Math.floor(str.length / 2) && a < str.length; i++) {
  yuri += str[a];
  a += 2;
}

for (let i = 0; i < Math.floor(str.length / 2) + isOddNumber && b < str.length; i++) {
  yuri += str[b]
  b += 2
}
let yuriArr = yuri.split("")
let spacePositions = []
let currentPos = 0

for (let i = 0; i < len.length; i++) {
  if (len[i] === "0") {
    spacePositions.push(currentPos)
  } else {
    currentPos += parseInt(len[i])
  }
}
spacePositions.reverse().forEach(pos => {
  yuriArr.splice(pos, 0, " ")
})
console.log(yuriArr.join(""))
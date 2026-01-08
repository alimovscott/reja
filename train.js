// TASK F

function findDoublers(a) {
  

let found = false
  for(let i = 0; i < a.length - 1; i++) {
    if(a[i] === a[i+1]) {
      found = true;
      

    }
  }
   return found;
}


console.log(findDoublers("hel"))
















// TASK E
// function string(a) {
//  return a.split("").reverse().join("");
  
//   };


// console.log(string("hello world"));

















//TASK D
// function word(a,b) {
//     if(a.length !== b.length){
//         return false;
//     } 
//     const checka = a.split("").sort().join("");
//     const checkb = b.split("").sort().join("");
//     return checka === checkb;

// }

// console.log(word("mitgroup", "puorgtim"))









/////////////////////////////////////////

// TASK C 

// // classlar 
// const moment = require('moment');
// const data = moment().format("hh:mm");


// class Shop {
// constructor(non,lagmon,cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;

// }
// qoldiq() {
// console.log(`Hozir sizda ${data}da ${this.non}ta non, ${this.lagmon} ta lagmon va ${this.cola} ta cola mavjud `);
// }

// sotish(mahsulot,minus) {
// if(mahsulot === "non"){
//     this.non -= minus;
// } else if(mahsulot === "lagmon") {
//     this.lagmon -= minus;
// } else if (mahsulot === "cola") {
//     this.cola -= minus;

// } else{
//     console.log("sizda mahsulot yuq")
// }
// }

// qabul(mahsulot,plus) {
//     if(mahsulot === "non"){
//         this.non += plus;
//     } else if(mahsulot === "lagmon") {
//         this.lagmon += plus
//     } else if (mahsulot === "cola") {
//         this.cola += plus
//     } else{
//         console.log("mahsulot qushmadingiz")
//     }
    
// }

// }

// const shop = new Shop(4,5,2);

// shop.qoldiq();
// shop.sotish("non", 2);
// shop.qabul("cola", 5);
// shop.qoldiq();


////////////////////////////////
// // TASK B 
// function string(value) {
//     let count = 0;
//     for(let i = 0; i < value.length; i++) {
//         if(!isNaN(value[i])) {
//             console.log(value)
//             count++;   
//         }
        
//     }
//     return count;

// }
// console.log(string("aa22"));



///////////////////////////

// TASK A


// function son(letter,word) {
// let count = 0;  
//     for(let i = 0; i <= word.length; i++){
//         if(word[i] === letter) {
//             count++;
//         }
//     }

//     return count;
// }
// console.log(son("a", "alimovabduqodir"));

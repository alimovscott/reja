// 21 dars Callback haqida tushuncha!!!
console.log("Jeck Ma maslahatlari")
const list = [
    "Yaxshi talaba boling", // 0-20
    "Togri boshliq tanlang va koproq xato qiling", // 20-30
    "Uzingizga ishlashni boshlang", // 30-40
    "Siz kuchli bolgan narsalarni qiling", // 40-50
    "Yoshlarga investitsiya qiling", // 50-60
    "Endi dam oling, foydasi yoq endi", // 60
]



// function malahatBering(son, callback){
//     if(typeof son !== 'number') callback("insert number please",null);
//     else if(son <= 20) callback(null, list[0]);
//     else if(son > 20 && son <= 30) callback(null, list[1]);
//     else if(son > 30 && son <= 40) callback(null, list[2]);
//     else if(son > 40 && son <= 50) callback(null, list[3]);
//     else if(son > 50 && son <= 60) callback(null, list[4]);
//     else {

//         setTimeout(() => {
//             callback(null, list[5]);
//         },5000);
        
//     }

// };
// console.log("A");
// malahatBering(65, (err, data) => {
//     if(err) console.log("ERROR:", err)
//     console.log("Javob:", data)        
// })

// console.log("B");


async function malahatBering(son){
    if(typeof son !== 'number') throw  new Error("insert number please");
    else if(son <= 20) return list[0];
    else if(son > 20 && son <= 30) return list[1];
    else if(son > 30 && son <= 40) return list[2];
    else if(son > 40 && son <= 50) return list[3];
    else if(son > 50 && son <= 60) return list[4];
    else {
        return new Promise((resolve, reject)=> {
            setTimeout(() => {
                resolve(list[5]);
            }, 5000)
        })
        
        // return list[5];
        // setTimeout(() => {
        //     return list[5];
        // },5000);

        // asyn hiron funtion ichida setinterval va settimeout ishlamaydi uni promises orqali qilish kerak
        
    }

};
console.log("A");

// bu then vs Catch yordamida 
// malahatBering(24)
// .then(data => {
//     console.log("Javob", data)
// })
// .catch(err => {
//     console.log("Error:",err)
// });
// console.log("B");


// asyn/ await

async function run() {
    let javob = await malahatBering(65);
    console.log(javob);
    javob = await malahatBering(31);
    console.log(javob);
    javob = await malahatBering(41);
    console.log(javob)

}

run()



// TASK A


function son(letter,word) {
let count = 0;  
    for(let i = 0; i <= word.length; i++){
        if(word[i] === letter) {
            count++;
        }
    }

    return count;
}
console.log(son("a", "alimovabduqodir"));

// 1. Membuat Variable
var name = 'Irfan Julian Ibrahim'
var email = 'ivan.lookkas@gmail.com'
var addres = {
    jalan: 'Sekepanjang 1',
    nomor: 70,
    kota: 'Bandung'
}
var isMarried = false 
var hoobies = ['mengaji', 'mendengarkan musik', 'membaca']


// 2. Membuat program ganjil genap
// for(let i=1; i<=10; i++){
//     if(i % 2 === 0){
//         console.log(`${i} adalah angka genap`);
//     }else{
//         console.log(`${i} adalah angka ganjil`);
//     }
// }


// 3. Membuat print segitiga

let pola = ''
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= i; j++){
        pola += i
    }
    pola += '\n'
}
console.log(pola);
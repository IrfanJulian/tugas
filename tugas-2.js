// 1. Membuat Variable
const biodata = () =>{
    const result = {
        name : 'Irfan Julian Ibrahim',
        email : 'ivan.lookkas@gmail.com',
        addres : {
            jalan: 'Sekepanjang 1',
            nomor: 70,
            kota: 'Bandung'
        },
        isMarried : false, 
        hoobies : ['mengaji', 'mendengarkan musik', 'membaca']
    }
    console.log(result);
}
biodata()


// 2. Membuat program ganjil genap
const ganjilGenap = (nilai) =>{
    for(let i=1; i<=nilai; i++){
        if(i % 2 === 0){
            console.log(`${i} adalah angka genap`);
        }else{
            console.log(`${i} adalah angka ganjil`);
        }
    }
}
ganjilGenap(5)


// 3. Membuat print segitiga
const segitiga = (angka) =>{
    let pola = ''
    for(let i = 1; i <= angka; i++){
        for(let j = 1; j <= i; j++){
            pola += i
        }
        pola += '\n'
    }
    console.log(pola); 
}
segitiga(7)
// 1.Algoritma membuat telur
// 1. Mulai
// 2. Siapkan telur
// 3. Siapkan Wajan 
// 4. Siapkan Minyak goreng
// 5. Nyalakan api kompor
// 6. Masukan minyak ke wajan 
// 7. Tunggu minyak sampai panas 
// 8. Pecahkan cangkang telur
// 9. Masukan isi telur ke dalam minyak panas
// 10. Angkat telur saat sudah di rasa matang
// 11. Tiriskan.
// 12. Selesai.

// 2. ReverseString
const string = (word) =>{
    let wordString = ''
    for(let i = word.length -1; i >= 0; i--){
        wordString += word[i]
    }
    console.log(wordString);
}
string('Javascript')
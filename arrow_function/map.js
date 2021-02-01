let mahasiswa = ['yayang','setiyawan','faqih','raqil'];

let tes = mahasiswa.map(function(nama){
    return nama.length
})
console.log(tes);

let testing = mahasiswa.map(nama => nama.length)
console.log(testing.reverse().toString());

let object = mahasiswa.map(nama=>({nama:nama, jumlahhuruf:nama.length}))
console.table(object);
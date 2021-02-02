// const angka = [-1,8,9,1,4,-5,-4,3,2,9];
// //mencari angka >= 3
// //for
// const newAngka = [];
// for (let i = 0; i< angka.length; i ++){
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i])
//     }
// }
// console.log(newAngka);

const Vidoes = Array.from(document.querySelectorAll('[data-duration]'));
let plugin = Vidoes.filter(vidio => vidio.textContent.includes('PLUGIN 007'))
.map(item => item.dataset.duration)
.map(waktu =>{
    const parts = waktu.split(':').map(part=> parseFloat(part))
    return (parts[0]* 60 + parts[1]);
})

.reduce((total,detik)=> total+detik);

const jam = Math.floor(plugin/3600);
plugin = plugin - jam*3600;
const menit = Math.floor(plugin/60);
const detik = Math.floor(plugin - menit*60);

const Durasi= document.querySelector('.durasi-video')
Durasi.textContent =`${jam}jam :${menit} menit:${detik} detik`
// const jumlahvidio = document.querySelector('.jumlah-video')
const jumlahvidio = Vidoes.filter(vidio=>vidio.textContent.includes('PLUGIN 007')).length
const jumlahvideos = document.querySelector('.jumlah-video');
jumlahvideos.textContent = `${jumlahvidio} videos`;
console.log(detik);
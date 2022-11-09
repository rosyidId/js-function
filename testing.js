const people = [
    {
        nama: 'budi',
        alamat: 'lembar',
        umur: 25,
    },
    {
        nama: 'dono',
        alamat: 'makassar',
        umur: 27,
    },
    {
        nama: 'jumanto',
        alamat: 'keruak',
        umur: 29,
    },
    {
        nama: 'lukman',
        alamat: 'porbolinggo',
        umur: 30,
    },
    {
        nama: 'joko',
        alamat: 'kuningan',
        umur: 30,
    },
];
// every
// mengecek keseluruhan data yang ada (true / false)
// const getEveryData = people.every((item) => {
    // apakah semua data yang ada umurnya lebih besar dari 15
//     return item.umur > 15
// })
// console.log(getEveryData);


// Some
// mengecek true atau false dari sebuah data hanya mengembalikan true atau false
// const getSomeData = people.some((item) => {
    // mengecek bahwa data dengan nama joko ada atau tidak
//     return item.nama === "kuning"
// })
// if(getSomeData === true){
//     console.log(`datanya ada`);
// }else if(getSomeData === false){
//     console.log(`Data tidak ada`);
// }
// console.log(getSomeData);

// forEach
// ini tidak mengembalikan apa2 berbeda halnya dengan find
// people.forEach((item) => console.log(`nama saya: ${item.nama}`));

// menggunakan find function
// mengembalikan object
// const getFindData = people.find((item) => item.umur === 30 && item.alamat === "kuningan")
// console.log(getFindData.nama);

// menggunakan filter function
// const getFilterData = people.filter((item) => {
//     return item.umur > 28
// })
// console.log(getFilterData);

// menggunakan map function
// mengembalikan data berbentuk array
// ini tidak memanipulasi data array yang asli misalkan kita log(people) hasil arraynya masih utuh
// const getMapData = people.map((item) => {
//     return (
//         item.umur > 27 && {
//             data: `nama: ${item.nama}, alamat : ${item.alamat}`,
//             umur: item.umur,
//         }
//     );
// });
// console.log(getMapData);

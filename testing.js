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
// includes
// ini berlaku untuk simple data array
// const items = [1,2,3,4,5,6,7]
// const x = items.includes(2)
// console.log(x);

// tidak berlaku
// const getIncludeData = people.includes((item) => {
//     return console.log(item.nama);
// })
// console.log(getIncludeData);

// reduce
// cocok untuk menghitung total harga dari masing2 product
// nahhhh disini mengggunakan dua parameter yaitu item saat ini dan item dirinya sendiri
// const getReduceData = people.reduce((currentItem, item) => {
//     return item.umur + currentItem;
// },0);
// console.log(getReduceData);

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

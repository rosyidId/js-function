// Callback, Promise, Async await
// yang di atas tujuan sama tapi beda penulisan aja yang berbeda
// ini digunakan ketika kita sudah mendapatkan sesuatu trus kita mau apain

// contoh
const users = [
    {username: "rosyid"},
    {username: "budi"},
    {username: "lukman"},
]
// yang kita mau ketika kita createdata nya 2 detik kita mau memunculkan datanya
// penulisan callback
// function createData(user, callback) {
//     setTimeout(() => {
//         users.push(user)
//         callback()
//         console.log(`ini callback: ${callback}`);
//     }, 2000)
// }
// createData({username: "alex"}, () => {
//     setTimeout(() => {
//         console.log(users);
//     }, 1000)
// })

// PENULISAN callback arrow function
// const createData = (user, callback) => {
//     setTimeout(() => {
//         users.push(user)
//         callback()
//         console.log(callback);
//     },1000)
// }
// createData({username: "data baru"}, () => {
//     setTimeout(() => {
//         console.log(users);
//     }, 2000)
// })

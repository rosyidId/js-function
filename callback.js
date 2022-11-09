// Callback, Promise, Async await
// yang di atas tujuan sama tapi beda penulisan aja yang berbeda
// ini digunakan ketika kita sudah mendapatkan sesuatu trus kita mau apain
// contoh
const users = [
    {username: "rosyid"},
    {username: "budi"},
    {username: "lukman"},
]

// ASYNC AWAIT
// lebih simple dari callback dan promise
const getUser = () => {
    setTimeout(() => {
        console.log(users);
    }, 1000);
}
const createUser = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            users.push(user);
            let error = false;
            if(!error){
                resolve()
            }else{
                reject('Ini error cuy')
            }
        }, 2000);
    })
}
// async function testing() {
// }
const testing = async () => {
    try {
        await createUser({username: "budi hartono"});
        getUser();
    } catch (error) {
        console.log(error);
    }
}
testing();

// PROMISE
// untuk promise itu membawa 2 parameter yaitu resolve dan reject
// const getUser = () => {
//     setTimeout(() => {
//         console.log(users);
//     }, 1000)
// }
// const createUser = (user) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             users.push(user);
//             let error = false;
//             if(!error){
//                 resolve()
//             }else {
//                 reject('Shomething went wrong...!')
//             }
//         }, 2000);
//     })
// }
// createUser({username: "guli lam"})
//     .then(getUser)
//     .catch((msg) => {
//         console.log(msg);
// })


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

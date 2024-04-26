import CryptoJS from "crypto-js"

const superKey = "ckczppom"
let num = 1

let hash = CryptoJS.MD5(`${superKey}${num}`).toString()

while (!hash.startsWith("000000")) {
    num++
    hash = CryptoJS.MD5(`${superKey}${num}`).toString()
}
console.log(hash)

console.log(num)
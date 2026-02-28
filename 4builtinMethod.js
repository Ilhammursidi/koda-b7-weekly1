// menjelaskan 5 built-in method, serta cara penggunaannya, dan perlihatkan input dan outpunya

// 1. pop
// berfungsi untuk menghapus elemen terakhir dari Array, dan mengembalikan elemen yang dihapus tersebut. pop juga mengubah panjang array
const number = [1,2,3] // disini terdapat array berisi 3 elemen
console.log(number) // output "[ 1, 2, 3 ]""

const lastNum = number.pop();// penggunaan pop
console.log(number)// output "[ 1, 2 ]"" berubah setelah pop 
console.log(lastNum)// output "3" memanggil kembali item yang sudah diambil dari number dengan menggunakan pop.

// 2. reverse
// berfungsi untuk membalikkan urutan elemen pada array, dimana elemen terakhir menjadi yang pertama dan sebaliknya
const arr = ["pertama","kedua","ketiga"] // disini terdapat array berisi 3 elemen
console.log(arr) // output "[ 'pertama', 'kedua', 'ketiga' ]"

arr.reverse(); // penggunaan reverse
console.log(arr) // output "[ 'ketiga', 'kedua', 'pertama' ]" menjadi terbalik setelah penggunaan reverse

// 3. shift
// berfungsi untuk menghapus elemen pertama dari Array, dan mengembalikan elemen yang dihapus tesebut. shift juga mengubah panjang array
const buah = ["apel","jeruk","pisang"] // disini terdapat array berisi 3 elemen
console.log(buah) // output "[ 'apel', 'jeruk', 'pisang' ]"

const buahPertama = buah.shift(); // penggunaan shift 
console.log(buah) // output "[ 'jeruk', 'pisang' ]"
console.log(buahPertama) // output "apel" memanggil kembali item yang sudah diambil dari buah dengan menggunakan shift.

// 4. slice
// berfungsi untuk mengambil sebagian elemen dari Array, dan mengembalikan elemen yang diambil tersebut dalam bentuk array baru. slice tidak mengubah panjang array aslinya

// syntax slice: array.slice(start, end) dimana start adalah index awal yang ingin diambil, dan end adalah index akhir yang ingin diambil (index end tidak termasuk dalam hasil slice)
const angka = [1,2,3,4,5] // disini terdapat array berisi 5 elemen
console.log(angka) // output "[ 1, 2, 3, 4, 5 ]"

const angkaBaru = angka.slice(1,4); // penggunaan slice, mengambil elemen dari index 1 sampai index 3 (index 4 tidak termasuk)
console.log(angka) // output "[ 1, 2, 3, 4, 5 ]" tidak berubah setelah penggunaan slice
console.log(angkaBaru) // output "[ 2, 3, 4 ]" hasil dari slice

// 5. freeze
// berfungsi untuk membuat objek menjadi immutable (tidak bisa diubah), dimana setelah objek di freeze, kita tidak bisa menambahkan, menghapus, atau mengubah properti dari objek tersebut. freeze juga mencegah perubahan pada nilai properti yang sudah ada pada objek tersebut. freeze tidak mengubah objek aslinya, tetapi membuat objek baru yang tidak bisa diubah.
const prop = {
    buah : "apel",
}
console.log(prop) // output "{ buah: 'apel' }" disini terdapat objek prop dengan properti buah yang memiliki nilai "apel"

Object.freeze(prop) // penggunaan freeze untuk membuat objek prop menjadi immutable (tidak bisa diubah)
prop.buah = "jeruk" // mencoba mengubah nilai properti buah pada objek prop
console.log(prop) // output "{ buah: 'apel' }" nilai properti buah tetap "apel" karena objek prop sudah di freeze sehingga tidak bisa diubah.   


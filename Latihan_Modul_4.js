/*
1. Buatlah fungsi yang dapat membuat pola segitiga sesuai dengan ketinggian yang kita berikan
seperti berikut ini:
01
02 03
04 05 06
07 08 09 10

Parameter: tinggi → tinggi segitiga
*/
function number(h) {
    let counter = 1
    for (let i = 1; i <= h; i++){
        let result = ""
        for (let j = 1; j <= i; j++){
            if(counter > 9){
                result += counter +" "
            } else {
                result += "0" + counter + " "
            }
            counter++
        }
        console.log(result)
    }
}
number(5)

/*
2. Buat fungsi yang dapat mengulang beberapa kali sesuai dengan input yang kita berikan, dan
akan mengganti kelipatan 3 dengan "Fizz", kelipatan 5 dengan "Buzz", kelipatan 3 dan 5
dengan "FizzBuzz".
● Parameter: n → total perulangan
○ Contoh: n = 6 →1, 2, Dengung, 4, Dengung, Dengung
○ Contoh: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz
*/
function input(n) {
    for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
  } 
}

input(10)

/*
3. Membuat fungsi untuk menghitung Indeks Massa Tubuh (BMI)
● Rumus : BMI = berat badan (kg) / (tinggi badan (meter))²
● Parameter: berat & tinggi
● Nilai pengembalian :
○ <18,5 kembali "berat badan kurang"
○ 18,5 - 24,9 kembali "ideal"
○ 25,0 - 29,9 kembali "kelebihan berat badan"
○ 30,0 - 39,9 kembali "sangat kelebihan berat badan"
○ > 39,9 kembali "obesitas"
*/
function berat (beratbadan,tinggibadan){
    var bmi = beratbadan / (tinggibadan/100 * tinggibadan/100)
    console.log(bmi)
    if (bmi < 18.5) {
        return "berat badan kurang"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "ideal"
    } else if (bmi >= 25.0 && bmi <=  29.9) {
        return "kelebihan berat badan"
    } else if (bmi >=  30.0 && bmi <=  39.9) {
        return "sangat kelebihan berat badan"
    } else if ( bmi > 39.9) {
        return "obesitas"
    }
} 
console.log(berat(85,175))

/*
4. Tulis fungsi untuk menghapus semua angka ganjil dalam larik dan mengembalikan larik baru yang
hanya berisi angka genap
○ Contoh: [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
*/
function Bilangan(nilai) {
    let nilaiBaru = [];
    for (let i = 0; i < nilai.length; i++) {
        if (nilai[i] % 2 === 0) {
            nilaiBaru.push(nilai[i]);
        }
    }
    return nilaiBaru;
}

const nilaiAwal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nilaiHasil = Bilangan(nilaiAwal);
console.log(nilaiHasil);

/*
5. Menulis fungsi untuk membagi string dan mengubahnya menjadi larik kata
○ Contoh: "Hello World" → ["Hello", "World"]
*/
function kata(kalimat) {
    return kalimat.split(" ");
}

const kalimat = "Hello World";
const hasilKata = kata(kalimat);
console.log(hasilKata);
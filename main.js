let angka = prompt("Masukkan sebuah angka:");

// Mengubah input menjadi tipe number
angka = Number(angka);

// Mengecek apakah angka tersebut ganjil atau genap
if (angka % 2 === 0) {
    alert("Angka ini adalah bilangan genap");
} else {
    alert("Angka ini adalah bilangan ganjil");
}
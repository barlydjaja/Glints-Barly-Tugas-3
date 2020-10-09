// 1. Besok Hari Apa?
let hari =["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"]


let sekarang = "senin"

for (let i = 0; i < hari.length; i++) {
    if (i<hari.length-1 && sekarang == hari[i]) {
        console.log(`${hari[i+1]}`)
    } else if(sekarang == hari[i]){
        console.log(hari[0])
    }
}


/* 2. kasih nilai 
90-100 = A
75-89 = B
60-74 = C
50-59 = D
<50 = F*/
let nilai = Number("64");

if (!nilai){
    console.log("bukan angka")
} else{
    if (nilai>=90 && nilai <=100) {
        console.log("Nilai A")
    }else if (nilai >= 75 && nilai <= 89) {
        console.log("Nilai B")
    }else if (nilai >= 60 && nilai <= 74) {
        console.log("Nilai C")
    }else if (nilai >= 50 && nilai <= 59) {
        console.log("Nilai D")
    }else if (nilai < 50){
        console.log(nilai+" Nilai F")
    }
}


// 3. perulangan genap
let angkaGenap = 20;

for (let index = 0; index < angkaGenap+1; index+=2) {
    console.log (index);
}


// 4. perulangan ganjil
let angkaGanjil = 15;

for (let index = 1; index < angkaGanjil+1; index+=2) {
    console.log(index)
}
// 1. Besok Hari Apa?
function soal1(){
    // buat variabel 
    let hari =["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"]
    let sekarang = document.getElementById("hari").value;
    // masuk ke loop 
    for (let i = 0; i < hari.length; i++) {
        // jika senin-sabtu
        if (i<hari.length-1 && sekarang == hari[i]) {
            document.getElementById("besokHari").value = hari[i+1]
        // jika minggu
        } else if(sekarang == hari[i]){
            document.getElementById("besokHari").value = hari [0]
        }
    }
}


/* 2. kasih nilai 
90-100 = A
75-89 = B
60-74 = C
50-59 = D
<50 = F*/
function soal2(){
    let nilai = document.getElementById("nilai").value;
    
    if (!nilai){
        document.getElementById("konversiHuruf").innerHTML = "bukan angka"
        console.log("bukan angka")
    } else if (nilai>=0 && nilai<=100){
        if (nilai>=90 && nilai <=100) {
            document.getElementById("konversiHuruf").innerHTML = `nilai${nilai} dapat A`
            console.log("Nilai A")
        }else if (nilai >= 75 && nilai <= 89) {
            document.getElementById("konversiHuruf").innerHTML = `nilai ${nilai} dapat B`
            console.log("Nilai B")
        }else if (nilai >= 60 && nilai <= 74) {
            document.getElementById("konversiHuruf").innerHTML = `nilai ${nilai} dapat C`
            console.log("Nilai C")
        }else if (nilai >= 50 && nilai <= 59) {
            document.getElementById("konversiHuruf").innerHTML = `nilai ${nilai} dapat D`
            console.log("Nilai D")
        }else if (nilai < 50){
            document.getElementById("konversiHuruf").innerHTML = `nilai ${nilai} GAK LULUS`
            console.log(" Gak lulus")
        }
    } else if(nilai<0 || nilai>0){
        document.getElementById("konversiHuruf").innerHTML = "nilai hanya dari 0-100"
        console.log("nilai hanya dari 0-100")
    }
}


// 3. perulangan genap
function soal3(){
    let angkaGenap = document.getElementById("angkaGenap").value;
    angkaGenap = Number(angkaGenap)
    listAngkaGenap = []

    if (angkaGenap<0 || angkaGenap>50){
        document.getElementById("listAngkaGenap").innerHTML = "angka harus antara 0-50"
    } else {
        for (let index = 0; index<angkaGenap+1; index+=2) {
            listAngkaGenap.push(index)
            console.log (index);
        }
        console.log(listAngkaGenap)
        document.getElementById("listAngkaGenap").innerHTML = listAngkaGenap

    }
}


// 4. perulangan ganjil
function soal4(){
    let angkaGanjil = document.getElementById("angkaGanjil").value;
    angkaGanjil = Number(angkaGanjil)
    listAngkaGanjil = []
    
    if (angkaGanjil<0 || angkaGanjil>50){
        document.getElementById("listAngkaGanjil").innerHTML = "angka harus antara 0-50"
    } else {
        for (let index = 1; index<angkaGanjil+1; index+=2) {
            listAngkaGanjil.push(index)
            console.log (index);
        }
        console.log(listAngkaGanjil)
        document.getElementById("listAngkaGanjil").innerHTML = listAngkaGanjil
    }
}

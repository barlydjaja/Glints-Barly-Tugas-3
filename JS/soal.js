// 1. Besok hari apa ya?
function fixSoal1(){
    // buat list nama hari
    let hari =  ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"]
    // tarik data html untuk hari yang dipilih
    let sekarang = document.getElementById("hari").value;
    // masukin ke loop jika sesuai
    if (hari.includes(sekarang)){
        for (let index = 0; index < hari.length; index++) {
            // jika hari senin-sabtu (hari[0-5])
            if (index <hari.length-1 && sekarang == hari[index]){
                document.getElementById("besokHari").value = hari[index+1]
            // jika hari minggu, kembalikan ke senin
            } else if (sekarang == hari[index]){
                document.getElementById("besokHari").value = hari[0]
            } 
        }
    // display jika tidak sesuai nama hari
    } else{
        document.getElementById("besokHari").value = (`${sekarang} bukan hari yang valid`)
    }
}


// 2. kasih nilai 
function fixSoal2(){
    // ambil data dari html
    let inputHtml = (document.getElementById("nilai").value)
    let nilai = Number(inputHtml)
    // jika bukan angka
    if (isNaN(nilai)){
        document.getElementById("konversiHuruf").innerHTML = `${inputHtml} bukan angka`
    //jika angka 0-100
    } else if (nilai>=0 && nilai<=100){
        if (nilai>=90 && nilai <=100) {
            // 90-100 = A
            document.getElementById("konversiHuruf").innerHTML = `Nilai ${nilai} dapat A`
        }else if (nilai >= 75 && nilai <= 89) {
            // 75-89 = B
            document.getElementById("konversiHuruf").innerHTML = `Nilai ${nilai} dapat B`
        }else if (nilai >= 60 && nilai <= 74) {
            // 60-74 = C
            document.getElementById("konversiHuruf").innerHTML = `Nilai ${nilai} dapat C`
        }else if (nilai >= 50 && nilai <= 59) {
            // 50-60 = D
            document.getElementById("konversiHuruf").innerHTML = `Nilai ${nilai} dapat D`
        }else if (nilai < 50){
            // <50 = gak lulus
            document.getElementById("konversiHuruf").innerHTML = `Nilai ${nilai} GAK LULUS`
        }
    // jika angka diluar 0-100
    } else {
        document.getElementById("konversiHuruf").innerHTML = "nilai hanya dari 0-100"
    }
}


// 3. perulangan genap
function fixSoal3(){
    // ambil data dari HTML
    let inputHtml = document.getElementById("angkaGenap").value
    // konversi ke number type
    let angkaGenap = Number(inputHtml)
    // buat list untuk masukin angka
    listAngkaGenap = []
    // jika bukan number type
    if(isNaN(angkaGenap)){
        document.getElementById("listAngkaGenap").innerHTML = `${inputHtml} bukan angka`
    // jika number type
    } else{
        // jika angka diluar 0-50
        if (angkaGenap<0 || angkaGenap>50){
            document.getElementById("listAngkaGenap").innerHTML = "angka harus antara 0-50"
        // jika angka antara 0-50
        } else {
            for (let index = 0; index<angkaGenap+1; index+=2) {
                // masukin angka ke list yang dibuat
                listAngkaGenap.push(index)
            }
            // print list ke html
            document.getElementById("listAngkaGenap").innerHTML = listAngkaGenap
        }
    }
}


// 4. perulangan ganjil
function fixSoal4(){
    // ambil data dari HTML
    let inputHtml = document.getElementById("angkaGanjil").value
    // konversi ke number type
    let angkaGanjil = Number(inputHtml)
    console.log(angkaGanjil)
    // buat list untuk masukin angka
    listAngkaGanjil = []
    // jika bukan number type
    if(isNaN(angkaGanjil)){
        document.getElementById("listAngkaGanjil").innerHTML = `${inputHtml} bukan angka`
    // jika number type
    }else{
        // jika angka diluar 0-50
        if (angkaGanjil<0 || angkaGanjil>50){
            document.getElementById("listAngkaGanjil").innerHTML = "angka harus antara 0-50"
        // jika 0
        }else if (angkaGanjil === 0){
            document.getElementById("listAngkaGanjil").innerHTML = "mulai dari 1"
        // jika angka antara 1-50
        }else {
            for (let index = 1; index<angkaGanjil+1; index+=2) {
                listAngkaGanjil.push(index)
            }
            // print list ke HTML
            document.getElementById("listAngkaGanjil").innerHTML = listAngkaGanjil
        }
    }
}

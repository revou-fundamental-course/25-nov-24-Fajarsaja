


   
function hasilBmi() {
    let bb = parseFloat(document.getElementById('bb').value);
    let age = parseFloat(document.getElementById('age').value);
    let tb = parseFloat(document.getElementById('tb').value)/100;

    if (isNaN(bb) || isNaN(tb) || isNaN(age) || bb <= 0 || tb <= 0 || age <= 0) {
        alert("Harap masukkan nilai untuk berat badan, tinggi badan, dan usia.");
        return;
    }
    
    let bmi = bb / (tb*tb);

    let kategori;
    let keterangan


  
    if (bmi < 18.5) {
        kategori = "Kekurangan berat badan";
        keterangan = "anda berada dalam kategori kekurangan berat badan"
    } else if (bmi >= 18.5 && bmi < 24.9) {
        kategori = "Normal (ideal)";
        keterangan = "anda berada dalam kategori berat badan yang ideal"
    } else if (bmi >= 25.0 && bmi < 29.9) {
        kategori = "Kelebihan berat badan";
        keterangan = "anda berada dalam kategori berat badan berlebih"
    } else {
        kategori = "Obesitas";
        keterangan = "anda berada dalam kategori overwight atau berat badan berlebih. <br> jika BMi anda dalam kategori ini maka anda dianjurkan menurunkan berat badan hingga batas normal."
    }

    
    document.getElementById('result').textContent = bmi.toFixed(1);    
    document.getElementById('kategoriBmi').textContent = kategori; 
    document.getElementById('keteranganBmi').innerHTML= keterangan; 
       

}

function reset(){
    window.location.reload(true)
}
var name = prompt("Siapa namamu?");
var studentWish = prompt("Mau masuk universitas? (mau/tidak)");

if (studentWish === "mau") {
  var nilaiSMA = prompt("Berapa nilai akhir SMA/SMKmu?");

  if (nilaiSMA < 30) {
    alert("Tidak mungkin masuk universitas.");
  } else if (nilaiSMA < 50) {
    var chanceGetUniv = Math.random() * 100;
    if (chanceGetUniv < 50) {
      alert("Hmmm, kemungkinan kamu " + name + " kecil masuk universitas.");
    } else {
      alert("Hmmm, kemungkinan kamu " + name + " bisa masuk universitas.");
    }
  } else {
    if (chanceGetUniv > 70 && nilaiSMA > 60) {
      alert(
        "Hei " +
          name +
          ", pasti masuk universitas dengan nilai SMA " +
          nilaiSMA +
          " mu yang besar itu."
      );
    } else if (chanceGetUniv > 70 || nilaiSMA > 80) {
      alert(
        "Hei " +
          name +
          ", pasti masuk universitas dengan nilai SMA " +
          nilaiSMA +
          " mu yang besar itu."
      );
    } else {
      alert("Hmmm, kemungkinan kamu " + name + " bisa masuk universitas.");
    }
  }
} else {
  alert("Oke, semoga sukses! " + name);
}

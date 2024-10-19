let dizi = ["betül", "seviye", "güneş", "ati", "nur", "gürkan", "burak"];
let birleşik = dizi.join("<>");
console.log(birleşik);
console.log("dizi uzunluğu: " + dizi.length);
console.log("ilk eleman: " + dizi[0]);
console.log("son eleman: " + dizi[dizi.length - 1]);

for (let i = 0; i < dizi.length; i++) {
      console.log(i + " " + dizi[i]);

}
console.log("-----------------------------");

dizi.forEach(function (value, index) {
      console.log(index + " : " + value);

})
console.log("-----------------------------");

for (let i = dizi.length - 1; i >= 0; i--) {
      console.log(i + " * " + dizi[i]);

}

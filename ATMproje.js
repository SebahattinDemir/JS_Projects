let yeniSatir = "\r\n";
let bakiye = 1000;
let metin = "1-Bakiye Görüntüleme"+yeniSatir
+"2-Para Çekme"+yeniSatir
+"3-Para Yatırma"+yeniSatir
+"4-Çıkış"+yeniSatir
+"Lütfen bir değer seçiniz.";

//alert(metin);

let secim = prompt(metin);
switch(secim){
    case "1":
        alert("Bakiyeniz : "+bakiye);
        break;
    case "2":
        let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz :"));    
        if (cekilecekTutar<bakiye) {
            bakiye=bakiye-cekilecekTutar;
            alert( "Kalan bakiyeniz : "+bakiye)
        } else {
            alert("Bakiyenizden yetersizdir!"+yeniSatir
            +"Bakiyeniz : "+bakiye);
        }
        break;
    case "3":
        let yatirilacakTutar = Number(prompt("Yatırılacak tutarı giriniz : "));
        bakiye+=yatirilacakTutar;
        alert("Güncel bakiyeniz : "+bakiye);
        break;
    case "4":
        console.log("Sistemden başarıyla çıkış yapılmıştır.");
        break;
    default:
        console.log("lütfen 1 - 4 arasında bir değer giriniz!");
        break;

}

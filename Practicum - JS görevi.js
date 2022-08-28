//Akbank Web3 Practicum - JS görevi

var sayi = prompt("Test için bir sayı girmeniz gerek: ");
//kullanıcıdan sayı almak için prompt method'unu kullanıyoruz.
var parseEt = oddMuEvenMi(sayi);
//Hazırladığımız fonksiyon ile işlem yaptık.


//Fonksiyonu oluşturuyoruz.
function oddMuEvenMi(girilenSayi) {
//parametre atadık
  let Sayi = girilenSayi.toString();
  //Sayı üzerinde tam hakimiyet kurabilmek için str türüne çevirdik.
  let rakamlarToplami = 0;
  //Henüz bir toplama yapmadık fakat daha sonra kullanacağımız için bir değişken oluşturduk ve değerini "0" olarak ayarladık.
  for (let i = 0; i < Sayi.length; i++) {
    //Girilen sayının karakter uzunluğunu alacağımız bir döngü oluşturduk.
    rakamlarToplami += parseInt(Sayi[i]);
    //Eğer girilmişse ondalıklı kısmı sayımızdan çıkardık ve tam kısım için index taraması yaptık. Daha sonra bu sayıları toplayarak rakamlarToplami değişkenimize atadık.
  }
  if (rakamlarToplami % 2 === 1) {
    console.log("Odd")
  } else {
    console.log("Even")
  }
   //Eğer Mod'umuz 1 ise ODD değil ise Even döndürdük.
}

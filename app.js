let definition = [
  "MEVSİMLER",
  "İlkbahar",
  "Yaz",
  "Sonbahar",
  "Kış",
  "AYLAR",
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
  "HAFTA GÜNLERİ",
  "Pazartesi",
  "Sali",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
  "ajanda",
  "akıl",
  "anma",
  "ateş",
  "balayı",
  "biricik",
  "birlikte",
  "birliktelik",
  "boya",
  "buçuk",
  "cimri",
  "çeşitli",
  "çeyrek",
  "çorba",
  "çoşku",
  "dakika",
  "dilek",
  "dini",
  "dişçi",
  "dolunay",
  "düğüm",
  "egemenlik",
  "evlilik",
  "galeri",
  "gelecek",
  "gençlik",
  "geveze",
  "harf",
  "hazırlık",
  "hece",
  "heyecan",
  "kaza",
  "kurum",
  "kutlama",
  "kültür",
  "marş",
  "mavi",
  "mezuniyet",
  "milli",
  "mola",
  "mor",
  "nice",
  "nikah",
  "odun",
  "ömür",
  "palto",
  "program",
  "randevu",
  "resmi",
  "rezervasyon",
  "saniye",
  "sarı",
  "saygıdeğer",
  "sevgili",
  "sürpriz",
  "toplantı",
  "ulusal",
  "vakit",
  "yeşil",
  "yılbaşı",
  "yıldönümü",
  "zafer",
  "zorluk"
];

let words = [
  "Máwsimler",
  "Báhár",
  "Jaz",
  "Gúz",
  "Qıs",
  "AYLAR",
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "İyun",
  "İyul",
  "Avgust",
  "Sentyabr",
  "Oktyabr",
  "Noyabr",
  "Dekabr",
  "HÁPTE KÚNLERI",
  "Dúyshembi",
  "Siyshembi",
  "Sárshembi",
  "Piyshembi",
  "Juma",
  "Shembi",
  "Ekshembi",
  "Kún tártibi",
  "aqıl" ,
  "eskertip ótiw",
  "órt (gúlxan)",
  "asal oyı",
  "tek",
  "birge",
  "awızbirshilik",
  "boyaw",
  "yarımı",
  "ashkóz",
  "hár túrlı", 
  "sherek",
  "sorpa",
  "qızıǵıwshılıq",
  "minut",
  "tilek",
  "diniy",
  "stomatolog",
  "to'linoy",
  "halqa" ,
  "suverenliitet",
  "neke",
  "galereya" ,
  "keleshek",
  "jaslar" ,
  "sáwbetlesiw",
  "hárip",
  "tayarlaw",
  "buwın" ,
  "tınıshsızlanıw" ,
  "baxtsız hádiyse",
  "shólkem",
  "bayram" ,
  "mádeniyat" ,
  "gimn",
  "kók",
  "Pitkeriw",
  "Milliy",
  "tánepis",
  "sıyarang",
  "jaqsı",
  "toy",
  "aǵash" ,
  "múddet",
  "palto",
  "programma" ,
  "ushırasıw" ,
  "rásmiy",
  "bron qılıw" ,
  "sekund",
  "sarı" ,
  "húrmetli",
  "muhabbatım",
  "syurpriz",
  "jiynalis" ,
  "Milliy",
  "waqıt",
  "jasıl" ,
  "jańa Jıl" ,
  "yubiley",
  "jeńis",
  "qıyınshılıq" 

];



let currentIndex = -1;

function nextWord() {
  let newIndex = currentIndex;
  while (newIndex === currentIndex) {
    newIndex = Math.floor(Math.random() * words.length);
  }
  

  var checkBox = document.getElementById("myCheck");

  if (checkBox.checked == true){
    currentIndex = newIndex;
  
    let word = words[currentIndex];
    let def = definition[currentIndex];
    document.getElementById('wordt').innerText = word;
    document.getElementById('trans').innerText = def;
  }


}
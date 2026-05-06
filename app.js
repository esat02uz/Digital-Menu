// --- ÜRÜN DİZİSİ OLUŞTURMA ---

// Projede kullanılacak tüm içerik 'urunler' isimli bir dizi (Array) içinde, 
// her bir ürün ise birer nesne (Object) olarak tanımlanmıştır. 
// Bu yapı, verinin tek bir merkezden yönetilmesini ve kolayca güncellenmesini sağlar.
// Sabit bir veri yapısı olduğu için 'const' kullanılmıştır.

const urunler = [
    // Kahvaltı
    {
        id: 1,
        category: "kahvalti",
        name: "Kahvaltı-1",
        desc: "Kahvaltı-1 bilgisi...",
        price: 350,
        img: "image/kahvalti.png"
    },
    {
        id: 2,
        category: "kahvalti",
        name: "Kahvaltı-2",
        desc: "Kahvaltı-2 bilgisi...",
        price: 300,
        img: "image/kahvalti.png"
    },
    {
        id: 3,
        category: "kahvalti",
        name: "Kahvaltı-3",
        desc: "Kahvaltı-3 bilgisi...",
        price: 250,
        img: "image/kahvalti.png"
    },
    {
        id: 4,
        category: "kahvalti",
        name: "Kahvaltı-4",
        desc: "Kahvaltı-4 bilgisi...",
        price: 200,
        img: "image/kahvalti-icon.png"
    },
    {
        id: 5,
        category: "kahvalti",
        name: "Kahvaltı-5",
        desc: "Kahvaltı-5 bilgisi...",
        price: 150,
        img: "image/kahvalti-icon.png"
    },
    {
        id: 6,
        category: "kahvalti",
        name: "Kahvaltı-6",
        desc: "Kahvaltı-6 bilgisi...",
        price: 100,
        img: "image/kahvalti-icon.png"
    },


    // Aperatif
    {
        id: 7,
        category: "aperatif",
        name: "Aperatif-1",
        desc: " Aperatif-1 bilgi...",
        price: 225,
        img: "image/aperatif.png"
    },
    {
        id: 8,
        category: "aperatif",
        name: "Aperatif-2",
        desc: " Aperatif-2 bilgi...",
        price: 200,
        img: "image/aperatif.png"
    },
    {
        id: 9,
        category: "aperatif",
        name: "Aperatif-3",
        desc: " Aperatif-3 bilgi...",
        price: 175,
        img: "image/aperatif.png"
    },
    {
        id: 10,
        category: "aperatif",
        name: "Aperatif-4",
        desc: " Aperatif-4 bilgi...",
        price: 150,
        img: "image/aperatif-icon.png"
    },
    {
        id: 11,
        category: "aperatif",
        name: "Aperatif-5",
        desc: " Aperatif-5 bilgi...",
        price: 125,
        img: "image/aperatif-icon.png"
    },
    {
        id: 12,
        category: "aperatif",
        name: "Aperatif-6",
        desc: " Aperatif-6 bilgi...",
        price: 100,
        img: "image/aperatif-icon.png"
    },


    // Tatlı
    {
        id: 13,
        category: "tatli",
        name: "Tatlı-1",
        desc: " Tatlı-1 bilgisi...",
        price: 150,
        img: "image/tatli.png"
    },
    {
        id: 14,
        category: "tatli",
        name: "Tatlı-2",
        desc: " Tatlı-2 bilgisi...",
        price: 135,
        img: "image/tatli.png"
    },
    {
        id: 15,
        category: "tatli",
        name: "Tatlı-3",
        desc: " Tatlı-3 bilgisi...",
        price: 120,
        img: "image/tatli.png"
    },
    {
        id: 16,
        category: "tatli",
        name: "Tatlı-4",
        desc: " Tatlı-4 bilgisi...",
        price: 105,
        img: "image/tatli-icon.png"
    },
    {
        id: 17,
        category: "tatli",
        name: "Tatlı-5",
        desc: " Tatlı-5 bilgisi...",
        price: 90,
        img: "image/tatli-icon.png"
    },
    {
        id: 18,
        category: "tatli",
        name: "Tatlı-6",
        desc: " Tatlı-6 bilgisi...",
        price: 75,
        img: "image/tatli-icon.png"
    },


    // İçecek
    {
        id: 19,
        category: "icecek",
        name: "İçecek-1",
        desc: "İçecek-1 bilgisi...",
        price: 150,
        img: "image/icecek.png"
    },
    {
        id: 20,
        category: "icecek",
        name: "İçecek-2",
        desc: "İçecek-2 bilgisi...",
        price: 125,
        img: "image/icecek.png"
    },
    {
        id: 21,
        category: "icecek",
        name: "İçecek-3",
        desc: "İçecek-3 bilgisi...",
        price: 100,
        img: "image/icecek.png"
    },
    {
        id: 22,
        category: "icecek",
        name: "İçecek-4",
        desc: "İçecek-4 bilgisi...",
        price: 75,
        img: "image/icecek-icon.png"
    },
    {
        id: 23,
        category: "icecek",
        name: "İçecek-5",
        desc: "İçecek-5 bilgisi...",
        price: 50,
        img: "image/icecek-icon.png"
    },
    {
        id: 24,
        category: "icecek",
        name: "İçecek-6",
        desc: "İçecek-6 bilgisi...",
        price: 25,
        img: "image/icecek-icon.png"
    }

];


// --- GLOBAL DEĞİŞKENLER VE İLK HAZIRLIK ---

// Filtreleme hızını artırmak için her kategoriye ait HTML bloklarını tutacak 
// string (metin) tipinde boş değişkenler tanımlanmıştır. 
let urunListe = "";      // Tüm ürünler için
let kahvaltiListe = "";  // Sadece kahvaltı kategorisi için
let aperatifListe = "";  // Sadece aperatif kategorisi için
let tatliListe = "";     // Sadece tatlı kategorisi için
let icecekListe = "";    // Sadece içecek kategorisi için

// 'menu' ID'li kapsayıcı eleman, dinamik içerik eklenmeden önce temizlenir.
document.getElementById("menu").innerHTML = "";
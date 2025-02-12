let kullaniciadlari = {
    admin: {
        isim: "admin",
        sifre: "1234"
    }
}

let selectedAlgorithm = 'ahmet'

function processText() {
    const inputText = document.getElementById("inputText").value
    let result

    if (selectedAlgorithm === 'ahmet') {
        result = ahmet(inputText)
    } else if (selectedAlgorithm === 'burak') {
        result = burak(inputText)
    } else if (selectedAlgorithm === 'hk416') {
        result = hk416(inputText)
    } else if (selectedAlgorithm === 'mp5sd') {
        result = mp5sd(inputText)
    }

    document.getElementById("output").innerText = result;
}

function burak(text) {
    let kelime = text
    let a = 0
    let b = 0
    let yuri = ""
    kelime = kelime.replace(/\s+/g, '').toLowerCase()
    let c = kelime.length
    let t = c
    if(c % 2 == 1){
        c--
    }
    while(a != c / 2){
        yuri = `${yuri}${kelime[b]}${kelime[t-1]}`
        a++
        b++
        t--
    }
    if(kelime.length != yuri.length){
        let q = c / 2
        yuri = `${yuri}${kelime[q]}`
    }
    return yuri
}

function ahmet(text) {
    let kelime = text
    let yuri = ""
    let ku
    let sp = 0

    kelime = kelime.replace(/\s+/g, '').toLowerCase()

    if (kelime.length % 2 == 1) {
        ku = kelime.length - 1
    } else {
        ku = kelime.length
    }

    while (kelime.length > sp) {
        yuri = `${yuri}${kelime[sp]}`
        sp += 2;
    }

    sp = ku - 1;
    while (sp >= 1) {
        yuri = `${yuri}${kelime[sp]}`
        ku--
        sp -= 2
    }

    return yuri
}

function hk416(text) {
    let arr = text.split(/( )/).filter(x => x !== "")
    let isOddNumber = text.length % 2 === 0 ? false : true
    let len = ""
    for (let i = 0; i < arr.length; i++) {
      len += arr[i] === " " ? "0" : arr[i].length.toString(); 
    } 
    arr = arr.filter(item => item !== " ");
    let str = arr.join("");
    let a = 1
    let b = 0
    let yuri = ""
    let sum = 0
    for (let i = 0; i < Math.floor(str.length / 2) && a < str.length; i++) {
      yuri += str[a];
      a += 2;
    }
    
    for (let i = 0; i < Math.floor(str.length / 2) + isOddNumber && b < str.length; i++) {
      yuri += str[b]
      b += 2
    }
    let yuriArr = yuri.split("")
    let spacePositions = []
    let currentPos = 0
    
    for (let i = 0; i < len.length; i++) {
      if (len[i] === "0") {
        spacePositions.push(currentPos)
      } else {
        currentPos += parseInt(len[i])
      }
    }
    spacePositions.reverse().forEach(pos => {
      yuriArr.splice(pos, 0, " ")
    })
    let yazı = yuriArr.join("")
    let alfabe = ["a", "b", "c", "ç", "d", "e", "f", "g", "ğ", "h", "ı", "i", "j", "k", "l", "m", "n", "o", "ö", "p", "r", "s", "ş", "t", "u", "ü", "v", "y", "z"]
    let ahmetalfabe = ["*|_", ".**", "_|.", "||_", "*..", "__|", "*_*", "*|.", "*|.", "_|*", "***", "..*", ".|*", "__.", ".*.", "||.", "._|", "*||", ".||", "|||",  "|**", "*.|", "_**", "...", "|.*", ".__", "||*", "__*", "|_|", "___"]
    
    function harf(harf){
        let index = alfabe.indexOf(harf)
        return ahmetalfabe[index]
    }
    function sifre(yazı){
        let arr = yazı.split(" ")
        for (let i = 0; i< arr.length ; i++) {
            arr[i] = arr[i].split("").map(harf).join("")
        }
        return arr.join(" ")
    }
    return sifre(yazı)
}

function mp5sd(text){
    let yazı = text
    let alfabe = ["a", "b", "c", "ç", "d", "e", "f", "g", "ğ", "h", "ı", "i", "j", "k", "l", "m", "n", "o", "ö", "p", "r", "s", "ş", "t", "u", "ü", "v", "y", "z"]
    let ahmetalfabe = ["*|_", ".**", "_|.", "||_", "*..", "__|", "*_*", "*|.", "*|.", "_|*", "***", "..*", ".|*", "__.", ".*.", "||.", "._|", "*||", ".||", "|||",  "|**", "*.|", "_**", "...", "|.*", ".__", "||*", "__*", "|_|", "___"]
    
    function decrypt(yazı){
        let sonuc = []
        let kelime = yazı.split(" ")
    
        kelime.forEach(kelime => {
            let word = kelime.match(/.{1,3}/g)
            let decryptedWord = word.map(parca => {
                let index = ahmetalfabe.indexOf(parca)
                return alfabe[index]
            }).join("")
            sonuc.push(decryptedWord)
        })
        return sonuc.join(" ")
    }
    yuri = decrypt(yazı)
    return yuri
}
function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdownContent")
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block"
}
function selectOption(option) {
    document.getElementById("dropdownButton").textContent = option
    document.getElementById("dropdownContent").style.display = "none"

    selectedAlgorithm = option.toLowerCase()
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content")
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i]
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none"
            }
        }
    }
}

function yuri() {
    window.location.href = "kayit.html"
}

function login() {
    const kullaniciadi = document.getElementById("username").value
    const sifre = document.getElementById("password").value

    if (kullaniciadlari[kullaniciadi].isim == kullaniciadi && kullaniciadlari[kullaniciadi].sifre == sifre) {
        alert("Başarıyla Giriş Yapıldı")
        window.location.href = "ana.html"
    } else {
        alert("Kullanıcı adı veya parola yanlış!")
    }
}

function register() {
    const kullaniciadi = document.getElementById("kullaniciadi").value
    const sifre1 = document.getElementById("sifre1").value
    const sifre2 = document.getElementById("sifre2").value

    if (sifre1 !== sifre2) {
        alert("Girdiğiniz Şifreler Farklı!")
        return
    }

    if (kullaniciadlari[kullaniciadi]) {
        alert("Bu kullanıcı adı zaten mevcut!")
        return
    }

    kullaniciadlari[kullaniciadi] = {
        isim: kullaniciadi,
        sifre: sifre1
    }

    alert("Başarıyla Kayıt Olundu")
    window.location.href = "index.html"
}
const kelime = ["y","u","r","i"]
let basilanlar = []

document.addEventListener("keydown", function(event) {
    basilanlar.push(event.key)

    if (basilanlar.length > kelime.length) {
        basilanlar.shift()
    }

    if (JSON.stringify(basilanlar) === JSON.stringify(kelime)) {
        window.location.href = "https://github.com/TheAhmett/vidictiom/blob/main/ahmet.png?raw=true", "_blank"
        basilanlar = []
    }
})
function randomPhoto() {
    let random = ""
    let time = Date.now()
    let sec = Math.floor(time % 10)
    let min = (Math.floor(time % 100) - sec) / 10
    if(min % 2 == 0){
        switch (sec) {
            case 0:
                random = "a"
                break;
            case 1:
                random = "b"
                break;
            case 2:
                random = "c"
                break;
            case 3:
                random = "d"
                break;
            case 4:
                random = "e"
                break;
            case 5:
                random = "f"
                break;
            case 6:
                random = "g"
                break;
            case 7:
                random = "h"
                break;
            case 8:
                random = "i"
                break;
            case 9:
                random = "j"
                break;
        
            default:
                random = "kys nigga"
                break;
        }
    } 
    else if(min % 2 == 1){
        switch (sec) {
            case 0:
                random = "k"
                break;
            case 1:
                random = "l"
                break;
            case 2:
                random = "m"
                break;
            case 3:
                random = "n"
                break;
            case 4:
                random = "o"
                break;
            case 5:
                random = "p"
                break;
            case 6:
                random = "r"
                break;
            case 7:
                random = "s"
                break;
            case 8:
                random = "t"
                break;
            case 9:
                random = "u"
                break;
        
            default:
                random = "kys nigga"
                break;
        }
    } 
    else {
        random = "kys nigga"
    }
    window.location.href = `./sorgulama/${random}.html`
}
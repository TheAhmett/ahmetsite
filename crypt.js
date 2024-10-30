let kullaniciadlari = {
    admin: {
        isim: "admin",
        sifre: "1234"
    }
}

let selectedAlgorithm = 'cabbar'

function processText() {
    const inputText = document.getElementById("inputText").value;
    let result;

    if (selectedAlgorithm === 'cabbar') {
        result = cabbar(inputText);
    } else if (selectedAlgorithm === 'yurah') {
        result = yurah(inputText);
    }

    document.getElementById("output").innerText = result;
}

function yurah(text) {
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

function cabbar(text) {
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

document.getElementById('foto').addEventListener('click', async (event) => {
    event.preventDefault()

    try {
        const response = await fetch('/api/photos')
        const photos = await response.json()

        if (photos.length === 0) {
            alert('Klasörde fotoğraf bulunamadı.')
            return
        }

        const randomPhoto = photos[Math.floor(Math.random() * photos.length)]
        const photoPath = `randomfoto/${randomPhoto}`

        const photoContainer = document.getElementById('randomPhotoContainer')
        photoContainer.innerHTML = `<img src="${photoPath}" alt="Rastgele Fotoğraf" style="width: 100%; max-width: 600px;">`
    } catch (error) {
        console.error('Fotoğraflar alınamadı:', error)
        alert('Fotoğraflar alınırken bir hata oluştu.')
    }
})
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

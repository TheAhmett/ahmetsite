let alfabe = ["a", "b", "c", "ç", "d", "e", "f", "g", "ğ", "h", "ı", "i", "j", "k", "l", "m", "n", "o", "ö", "p", "r", "s", "ş", "t", "u", "ü", "v", "y", "z"]
let ahmetalfabe = ["*|_", ".**", "_|.", "||_", "*..", "__|", "*_*", "*|.", "*|.", "_|*", "***", "..*", ".|*", "__.", ".*.", "||.", "._|", "*||", ".||", "|||",  "|**", "*.|", "_**", "...", "|.*", ".__", "||*", "__*", "|_|", "___"]

function decrypt(text){
    let sonuc = []
    let kelime = text.split(" ")

    kelime.forEach(kelime => {
        let word = kelime.match(/.{1,3}/g)
        let decryptedWord = word.map(parca => {
            let index = ahmetalfabe.indexOf(parca)
            return index = alfabe[index]
        }).join("")
        sonuc.push(decryptedWord)
    })
    return sonuc.join(" ")
}
return (decrypt(text))
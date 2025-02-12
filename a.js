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
console.log(random)
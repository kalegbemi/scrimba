const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwd1El = document.getElementById("passwd1")
let passwd2El = document.getElementById("passwd2")

function gerenateRandumNum() {
    let i = Math.floor(Math.random() * characters.length)
    return i
}

function generatePassword(){
    let pwrd1 = ("")
    let pwrd2 = ("")
    let num = 0
    let z = parseInt(prompt("Specify the number of digit you want "))
    for(let x = 0; x < z; x++){
        num = gerenateRandumNum()
        pwrd1 += characters[num]
    }
    for(let y = 0; y < z; y++){
        num = gerenateRandumNum()
        pwrd2 += characters[num]
    }
    passwd1El.textContent = pwrd1
    passwd2El.textContent = pwrd2
}
let say = "16DTS@O(]ZTztM7`vU#Zo5D285)p?M"
console.log(say.length)




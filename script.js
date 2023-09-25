console.log("halo")
let generatebtn = document.querySelector(".generatebtn")
let password = document.querySelector(".password")
let length = document.querySelector("#length")
let uppercase = document.querySelector("#Uppercase")
let copy = document.querySelector(".passwordContainer i")
let lowercase = document.querySelector("#Lowercase")
let Special = document.querySelector("#Special")

const capstr = "ABCDEFGHIJKLOMNPQRSTUVWXYZ"
const smallstr = "abcdefghijklomnpqrstuvwxyz"
const numstr = "1234567890"
const spcstr = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"
const generatePass = () => {
    
    let pass = "";
    if (length.value == 0) {
        alert("Please enter the length of passwrod")
    } else if (!(Special.checked) && !(lowercase.checked) && !(uppercase.notchecked)) {
        alert("Pease tick one of the boxes")
    } else {
        let str = "";
        if (uppercase.checked) {
            str = str.concat(str, capstr);
        }
        if (lowercase.checked) {
            str = str.concat(str, smallstr);
        }
        if (Special.checked) {
            str = str.concat(str, spcstr);
        }
        for (let i = 0; i < length.value; i++) {
            pass += str.charAt((Math.floor(Math.random() * str.length)))
            console.log(str.length)

        }
    }
    
    return pass

}

generatebtn.addEventListener("click", () => {
    console.log(uppercase.checked)
    console.log(lowercase.checked)
    console.log(Special.checked)
    let pass = generatePass();
    password.value = pass

})
copy.addEventListener("click", () => {
    password.select();
    navigator.clipboard.writeText(password.value);
    // alert("Copied the text: " + password.value);
    generatebtn.innerHTML="Copied the text : "+password.value
})
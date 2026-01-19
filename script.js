let turnA = false;
let turnB = false;
let turnC = false;
let turn1 = true;
let turn2 = true;
let turn3 = true;
let laters = "abcdefghijklmnopkrstyvwxyzABCDEFGHIJKLMNOPQRSTUVWXUZ";
let numbers = "0123456789";
let symbols = "!@#$%^&*()?";
let chars = "";
let out = document.getElementById("out");
let length = document.getElementById("length");
function add_laters() {
    chars += laters;
}
function remove_laters() {
    chars = chars.replaceAll(laters,"");
}
function later() {
    changeA("laters");
    if (turn1 == true) {
        add_laters();
        turn1 = false;
    } else if (turn1 == false) {
        remove_laters();
        turn1 = true;
    }
}
function add_numbers() {
    chars += numbers;
}
function remove_numbers() {
    chars = chars.replaceAll(numbers,"");
}
function number() {
    changeB("numbers");
    if (turn2 == true) {
        add_numbers();
        turn2 = false;
    } else if (turn2 == false) {
        remove_numbers();
        turn2 = true;
    }
}
function add_symbols() {
    chars += symbols;
}
function remove_symbols() {
    chars = chars.replaceAll(symbols,"");
}
function symbol() {
    changeC("symbols");
    if (turn3 == true) {
        add_symbols();
        turn3 = false;
    } else if (turn3 == false) {
        remove_symbols();
        turn3 = true;
    }
}
function changeA(id) {
    let element = document.getElementById(id);
    if (turnA == false) {
        element.classList.add("change");
        turnA = true;
    } else {
        element.classList.remove("change");
        turnA = false;
    }
}
function changeB(id) {
    let element = document.getElementById(id);
    if (turnB == false) {
        element.classList.add("change");
        turnB = true;
    } else {
        element.classList.remove("change");
        turnB = false;
    }
}
function changeC(id) {
    let element = document.getElementById(id);
    if (turnC == false) {
        element.classList.add("change");
        turnC = true;
    } else {
        element.classList.remove("change");
        turnC = false;
    }
}
function random() {
    let password = "";
    let arr = new Uint32Array(length.value);
    window.crypto.getRandomValues(arr);
    if (length.value >= 4 && length.value <= 32) {
        if (chars != "") {
            for (let i = 0; i<length.value; ++i) {
                let random_index = arr[i] % chars.length;
                password += chars[random_index];
            }
            out.textContent = password;
        } else {
            out.classList.add("border");
            out.innerHTML = `
            <div class='Error'>
                <p dir='rtl'>اختر نوعاً واحداً على الأقل</p>
            </div>`;
            setTimeout(() => {
                out.classList.remove("border");
                out.innerHTML = ``;
            }, 2000);
        }
    } else if(length.value < 4) {
            out.classList.add("border");
            out.innerHTML = `
            <div class='Error'>
            <p dir='rtl'>خطأ : طول كلمة المرور أصغر من 4</p>
            </div>`;
            setTimeout(() => {
                out.classList.remove("border");
                out.innerHTML = ``;
            }, 2000);
    } else if(length.value > 12) {
            out.classList.add("border");
            out.innerHTML = `
            <div class='Error'>
            <p dir='rtl'>خطأ : طول كلمة المرور أكبر من 32</p>
            </div>`;
            setTimeout(() => {
                out.classList.remove("border");
                out.innerHTML = ``;
            }, 2000);
    }
}
let btn = document.getElementById("btn");
let type = false;
function sun() {
    document.documentElement.style.setProperty("--main","#dfdfdfff");
    document.documentElement.style.setProperty("--all","#fff");
    document.documentElement.style.setProperty("--white","#000");
    document.documentElement.style.setProperty("--black","#7a7a7aff");
    document.documentElement.style.setProperty("--borderHover","#3b3b3bff");
    document.documentElement.style.setProperty("--buttonHover","#dbdbdbff");
    document.documentElement.style.setProperty("--bgHover","#d1d1d1ff");
    btn.textContent = "☽";
}
function moon() {
    document.documentElement.style.setProperty("--main","#111");
    document.documentElement.style.setProperty("--all","#1d1d1d");
    document.documentElement.style.setProperty("--white","#fff");
    document.documentElement.style.setProperty("--black","#000");
    document.documentElement.style.setProperty("--borderHover","#696969");
    document.documentElement.style.setProperty("--buttonHover","#0e0e0e");
    document.documentElement.style.setProperty("--bgHover","#181818");
    btn.textContent = "☀"
}
function mode() {
    if (type == false) {sun(); type = true;}
    else {moon(); type = false}
}
function copy() {
    navigator.clipboard.writeText(out.textContent);
}
const ngosiMgbako = document.getElementById("ngosi-mgbako")

function ziAnyaMgbako(value){
    ngosiMgbako.value +=  value
}

const otu = document.getElementById("otu").addEventListener("click", () => ziAnyaMgbako('1'));
const abuo = document.getElementById("abuo").addEventListener("click", () => ziAnyaMgbako('2'));
const ato = document.getElementById("ato").addEventListener("click", () => ziAnyaMgbako('3'));
const ano = document.getElementById("ano").addEventListener("click", () => ziAnyaMgbako('4'));
const ise = document.getElementById("ise").addEventListener("click", () => ziAnyaMgbako('5'));
const ishi = document.getElementById("ishi").addEventListener("click", () => ziAnyaMgbako('6'));
const asaa = document.getElementById("asaa").addEventListener("click", () => ziAnyaMgbako('7'));
const asato = document.getElementById("asato").addEventListener("click", () => ziAnyaMgbako('8'));
const ntoolu = document.getElementById("ntoolu").addEventListener("click", () => ziAnyaMgbako('9'));
const efu = document.getElementById("efu").addEventListener("click", () => ziAnyaMgbako('0'));
const efuAbuo = document.getElementById("efu-abuo").addEventListener("click", () => ziAnyaMgbako('00'));

const hichahanile = document.getElementById("hichahanile").addEventListener("click", hichahanileFunc);
const hichapu = document.getElementById("hichapu").addEventListener("click", hichapuFunc);

const kewa = document.getElementById("kewa").addEventListener("click", () => ziAnyaMgbako('/'));
const mubaa = document.getElementById("mubaa").addEventListener("click", () => ziAnyaMgbako('*'));
const wepu = document.getElementById("wepu").addEventListener("click", () => ziAnyaMgbako('-'));
const tinye = document.getElementById("tinye").addEventListener("click", () => ziAnyaMgbako('+'));
const kpom = document.getElementById("kpom").addEventListener("click", () => ziAnyaMgbako('.'));

const nhata = document.getElementById("nhata-btn").addEventListener("click", nhataFunc);



function hichahanileFunc(){
    ngosiMgbako.value = ''
}
function hichapuFunc(){
    const x = ngosiMgbako.value.toString().slice(0, -1)
    ngosiMgbako.value = x
}

function nhataFunc(){
    const ọdịnaya = ngosiMgbako.value
    const onuOgugu = eval(ọdịnaya)
    ngosiMgbako.value = onuOgugu
}

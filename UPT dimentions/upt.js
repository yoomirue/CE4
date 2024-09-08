UPT = 1;

fc = 1; //가격
fc2 = 0; //개수

sc = 1000; //1k
sc2 = 0;

tc = 100000; //100k
tc2 = 0;

function UPT1() {
    const target = document.querySelector("h2#Title2");
    if (UPT >= 1000 && UPT < 1000000){
      target.innerHTML = "UPT " + (UPT/1000) + "K개를 보유중입니다.";
      }
    else if (UPT < 1000){
      target.innerHTML = "UPT " + UPT + "개를 보유중입니다.";
    }
    else if (UPT >= 1000000) {
      target.innerHTML = "UPT " + (UPT/1000000) + "M개를 보유중입니다.";
    }
    

    }
    

function UPT2() {
    const target = document.querySelector("h2#upt1cw2");
    if (UPT >= 1000 && UPT < 1000000){
      target.innerHTML = "가격 : " + (fc/1000) + "K개";
    
    }
    else if (UPT < 1000){
      target.innerHTML = "가격 : " + fc + "개";
    }
    else if (UPT >= 1000000) {
      target.innerHTML = "가격 : " + (fc/1000000) + "M개";
    }
}

function UPT3() {
  const target = document.querySelector("h2#upt1cw3");
  target.innerHTML = "현재 소유량 : " + fc2 + "개";
}

function UPT4() {
  if (UPT >= fc){
    const a = document.querySelector("img#upt10");
    a.setAttribute("src", "upt.webp");

  }
  else if (UPT < fc){
    const a = document.querySelector("img#upt10");
    a.setAttribute("src", "glerm.webp");
  }
}

function UPT4_2() {
  if (UPT >= sc){
    const a = document.querySelector("img#upt20");
    a.setAttribute("src", "upt.webp");

  }
  else if (UPT < sc){
    const a = document.querySelector("img#upt20");
    a.setAttribute("src", "glerm.webp");
  }
}

function UPT4_3() {
  if (UPT >= tc){
    const a = document.querySelector("img#upt30");
    a.setAttribute("src", "upt.webp");

  }
  else if (UPT < tc){
    const a = document.querySelector("img#upt30");
    a.setAttribute("src", "glerm.webp");
  }
}

function UPT2_2() {
  const target = document.querySelector("h2#upt2cw2");
  target.innerHTML = "가격 : " + sc + "개";
}

function UPT3_2() {
const target = document.querySelector("h2#upt2cw3");
target.innerHTML = "현재 소유량 : " + sc2 + "개";
}

function UPT2_3() {
  const target = document.querySelector("h2#upt3cw2");
  target.innerHTML = "가격 : " + tc + "개";
}

function UPT3_3() {
const target = document.querySelector("h2#upt3cw3");
target.innerHTML = "현재 소유량 : " + tc2 + "개";
}


function upt1cw() {
  if (UPT < fc){
    alert("UPT가 부족합니다!");
  }
  else if (UPT >= fc) {
    UPT -= fc;
    loop = setInterval(() => {upt1cwhp();}, 1000);
    fc += 10;
    fc2 += 1;

  }
}

function upt2cw() {
  if (UPT < sc){
    alert("UPT가 부족합니다!");
  }
  else if (UPT >= sc) {
    UPT -= sc;
    loop = setInterval(() => {upt2cwhp();}, 1000);
    sc += 1000;
    sc2 += 1;

  }
}

function upt3cw() {
  if (UPT < tc){
    alert("UPT가 부족합니다!");
  }
  else if (UPT >= tc) {
    UPT -= tc;
    loop = setInterval(() => {upt3cwhp();}, 1000);
    tc += 100000; //100k
    tc2 += 1;

  }
}

function upt1cwhp() {

    UPT += (1*fc2);
}

function upt2cwhp() {
    UPT += (1*sc2);
    fc2 += (1+sc2);
}

function upt3cwhp() {
  UPT += (1*tc2);
  sc2 += (1+tc2);
}



loop1 = setInterval(() => {UPT1(); UPT2(); UPT3(); UPT4(); UPT4_2(); UPT2_2(); UPT3_2(); UPT2_3(); UPT3_3(); UPT4_3();}, 1);
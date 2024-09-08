UPT = 1;

fc = 1;
fc2 = 0;


function UPT1() {
    const target = document.querySelector("h2#Title2");
    target.innerHTML = "UPT " + UPT + "개를 보유중입니다.";
  }

function UPT2() {
    const target = document.querySelector("h2#upt1cw2");
    target.innerHTML = "가격 : " + fc + "개";
}

function UPT3() {
  const target = document.querySelector("h2#upt1cw3");
  target.innerHTML = "현재 소유량 : " + fc2 + "개";
}

function UPT4() {
  
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


function upt1cwhp() {
    UPT += (1*fc2)
}

loop1 = setInterval(() => {UPT1(); UPT2(); UPT3(); UPT4();}, 1);
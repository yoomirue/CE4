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

function upt1cw() {
  if (fc >= upt) {
    alert("UPT가 부족합니다");
  } 
  else{
    fc2 += 1;
    
    UPT = UPT + (UPT * fc2);
    fc += 100;
  }
    
    
}


loop1 = setInterval(() => {UPT1(); UPT2()}, 1)
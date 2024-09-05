UPT = 1;


function UPT1() {
    const target = document.querySelector("h2#Title2");
    target.innerHTML = "UPT " + UPT + "개를 보유중입니다.";
  }

loop1 = setInterval(() => {UPT1();}, 1)
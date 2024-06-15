bananastock = 329;
applestock = 6300;
soudon = 1000;
soubananastock = 0;
bananazehan = 10;
souapplestock = 0;
applezehan = 20;


function getrandomnum() {
    let randomnumber = Math.floor(Math.random() * 201) -101;
    while (randomnumber == -100) {
        function rdc2() {
            const target = document.querySelector( "h3#bananaboxfont");
            target.innerHTML = "상장 폐지";
        }
    }
    return randomnumber;
}

function soudonlive() {
    const target = document.querySelector("h1#soudon");
    target.innerHTML = "현재 소유 금액 : " + soudon +"원";
}


function aaa() {
    const target = document.querySelector("h3#bananaboxfont");
    const value = getrandomnum();
    if (value > 0){
        document.getElementById('appleboxfont').style.borderColor="red";
    }
    else{
        document.getElementById('appleboxfont').style.borderColor="blue";
    }
    target.innerHTML = "버내너 주식" + " : " + value + "%";
    const target2 = document.querySelector("h3#bananaboxfont2");
    nowbananstock = Math.floor(bananastock * value / 100);
    target2.innerHTML = "현재 가격" + " : " + nowbananstock + "원";
}

function aab() {
    const target = document.querySelector("h3#appleboxfont");
    const value = getrandomnum();
    if (value > 0){
        document.getElementById('bananaboxfont').style.borderColor="red";
    }
    else{
        document.getElementById('bananaboxfont').style.borderColor="blue";
    }
    target.innerHTML = "솨가 주식" + " : " + value + "%";
    const target2 = document.querySelector("h3#appleboxfont2");
    nowapplestock = Math.floor(applestock * value / 100);
    target2.innerHTML = "현재 가격" + " : " + nowapplestock + "원";
}

function soubananastocklive() {
    if (soudon < nowbananstock){
        alert("현재 소유하신 돈이 버내너 주식을 살만큼 충분하지 않습니다!");
    }
    else{
        soudon -= nowbananstock;
        if(soubananastock >= bananazehan){
            alert("더 이상 살 수 없습니다");
        }
        else{
            soubananastock += 1;
            const target = document.querySelector("h4#bananastocksou");
            target.innerHTML = "현재 주식 소유 수" +" : " + soubananastock + "개";
        }
    }
}

function soubananastocklive2() {
    if (soubananastock <= 0){
        alert("가지고 있는 주식이 버내너 주식이 없습니다!");
    }
    else{
        soudon += nowbananstock;
        soubananastock -= 1;
        const target = document.querySelector("h4#bananastocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + soubananastock + "개";
        
    }
    
}

function souapplestocklive() {
    if (soudon < nowapplestock){
        alert("현재 소유하신 돈이 솨가 주식을 살만큼 충분하지 않습니다!");
    }
    else{
        soudon -= nowapplestock;
        if(souapplestock >= applezehan){
            alert("더 이상 살 수 없습니다");
        }
        else{
            souapplestock += 1;
            const target = document.querySelector("h4#applestocksou");
            target.innerHTML = "현재 주식 소유 수" +" : " + souapplestock + "개";
        }
    }
}

function souapplestocklive2() {
    if (souapplestock <= 0){
        alert("가지고 있는 주식이 솨가 주식이 없습니다!");
    }
    else{
        soudon += nowapplestock;
        souapplestock -= 1;
        const target = document.querySelector("h4#applestocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + souapplestock + "개";
        
    }
    
}
function addbananastockcount() {
    if (soudon < 100000){
        alert("돈이 부족합니다!");
    }
    else{
        bananazehan += 1;
    }
    
}

function addapplestockcount() {
    if (soudon < 100000){
        alert("돈이 부족합니다!");
    }
    else{
        applezehan += 1;
    }
    
}
setInterval(() => {aaa(); aab();}, 3000);
setInterval(() => {soudonlive();}, 1)
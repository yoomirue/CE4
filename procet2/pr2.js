soilstock = 500;
woodstock = 1000;
stonestock = 2000;
wattermellonstock = 2620;
soudon = 1000;  

souwoodstock = 0;
woodzehan = 10;

soustonestock = 0;
stonezehan = 10;

souwattermellonstock =0;
wattermellonzehan = 20;


sousoilstock = 0;
soilzehan = 100;

stick = 0;
function getrandomnum() {
    let randomnumber = Math.floor(Math.random() * 201) -101;
    return randomnumber;
}

function soudonlive() {
    const target = document.querySelector("h1#soudon");
    target.innerHTML = "현재 소유 금액 : " + soudon +"원";
}


function aaa() {
    const target = document.querySelector("h3#woodboxfont");
    const value = getrandomnum();
    if (value > 0){
        document.getElementById('woodboxfont').style.borderColor="red";
    }
    else{
        document.getElementById('woodboxfont').style.borderColor="blue";
    }
    target.innerHTML = "나무 주식" + " : " + value + "%";
    const target2 = document.querySelector("h3#woodboxfont2");
    nowbananstock = Math.floor(woodstock + (woodstock * value / 100));
    target2.innerHTML = "현재 가격" + " : " + nowbananstock + "원";
}

function aab() {
    const target = document.querySelector("h3#stoneboxfont");
    const value = getrandomnum();
    if (value > 0){
        document.getElementById('stoneboxfont').style.borderColor="red";
    }
    else{
        document.getElementById('stoneboxfont').style.borderColor="blue";
    }
    target.innerHTML = "똘 주식" + " : " + value + "%";
    const target2 = document.querySelector("h3#stoneboxfont2");
    nowstonestock = Math.floor(stonestock + (stonestock * value / 100));
    target2.innerHTML = "현재 가격" + " : " + nowstonestock + "원";
}

function aac() {
    const target = document.querySelector("h3#wattermellonboxfont");
    const value = getrandomnum();
    if (value > 0){
        document.getElementById('wattermellonboxfont').style.borderColor="red";
    }
    else{
        document.getElementById('wattermellonboxfont').style.borderColor="blue";
    }
    target.innerHTML = "수봑 주식" + " : " + value + "%";
    const target2 = document.querySelector("h3#wattermellonboxfont2");
    nowwattermellonstock = Math.floor(wattermellonstock + (wattermellonstock * value / 100));
    target2.innerHTML = "현재 가격" + " : " + nowwattermellonstock + "원";
}

function aad() {
    const target = document.querySelector("h3#soilboxfont");
    const value = getrandomnum();
    if (value > 0){
        document.getElementById('soilboxfont').style.borderColor="red";
    }
    else{
        document.getElementById('soilboxfont').style.borderColor="blue";
    }
    target.innerHTML = "훍 주식" + " : " + value + "%";
    const target2 = document.querySelector("h3#soilboxfont2");
    nowsoilstock = Math.floor(soilstock + (soilstock * value / 100));
    target2.innerHTML = "현재 가격" + " : " + nowsoilstock + "원";
}

function souwoodstocklive() {
    if (soudon < nowbananstock){
        alert("현재 소유하신 돈이 나무 주식을 살만큼 충분하지 않습니다!");
    }
    else{
        soudon -= nowbananstock;
        if(souwoodstock >= woodzehan){
            alert("더 이상 살 수 없습니다");
        }
        else{
            souwoodstock += 1;
            const target = document.querySelector("h4#woodstocksou");
            target.innerHTML = "현재 주식 소유 수" +" : " + souwoodstock + "개";
            
        }
        soudonlive();
    }
}

function souwoodstocklive2() {
    if (souwoodstock <= 0){
        alert("가지고 있는 주식이 놔무 주식이 없습니다!");
    }
    else{
        soudon += nowbananstock;
        souwoodstock -= 1;
        const target = document.querySelector("h4#woodstocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + souwoodstock + "개";
        soudonlive();
    }
    
}

function soustonestocklive() {
    if (soudon < nowstonestock){
        alert("현재 소유하신 돈이 솨가 주식을 살만큼 충분하지 않습니다!");
    }
    else{
        soudon -= nowstonestock;
        if(soustonestock >= stonezehan){
            alert("더 이상 살 수 없습니다");
        }
        else{
            soustonestock += 1;
            const target = document.querySelector("h4#stonestocksou");
            target.innerHTML = "현재 주식 소유 수" +" : " + soustonestock + "개";
        }
        soudonlive();
    }
}

function soustonestocklive2() {
    if (soustonestock <= 0){
        alert("가지고 있는 주식이 솨가 주식이 없습니다!");
    }
    else{
        soudon += nowstonestock;
        soustonestock -= 1;
        const target = document.querySelector("h4#stonestocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + soustonestock + "개";
        soudonlive();
    }
    
}

function souwattermellonstocklive() {
    if (soudon < nowwattermellonstock){
        alert("현재 소유하신 돈이 수봑 주식을 살만큼 충분하지 않습니다!");
    }
    else{
        soudon -= nowwattermellonstock;
        if(souwattermellonstock >= wattermellonzehan){
            alert("더 이상 살 수 없습니다");
        }
        else{
            souwattermellonstock += 1;
            const target = document.querySelector("h4#wattermellonstocksou");
            target.innerHTML = "현재 주식 소유 수" +" : " + souwattermellonstock + "개";
        }
        soudonlive();
    }
}

function souwattermellonstocklive2() {
    if (souwattermellonstock <= 0){
        alert("가지고 있는 주식이 수봑 주식이 없습니다!");
    }
    else{
        soudon += nowwattermellonstock;
        souwattermellonstock -= 1;
        const target = document.querySelector("h4#wattermellonstocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + souwattermellonstock + "개";
        soudonlive();
    }
    
}


function sousoilstocklive() {
    if (soudon < nowsoilstock){
        alert("현재 소유하신 돈이 훍 주식을 살만큼 충분하지 않습니다!");
    }
    else{
        soudon -= nowsoilstock;
        if(sousoilstock >= soilzehan){
            alert("더 이상 살 수 없습니다");
        }
        else{
            sousoilstock += 1;
            const target = document.querySelector("h4#soilstocksou");
            target.innerHTML = "현재 주식 소유 수" +" : " + sousoilstock + "개";
        }
        soudonlive();
    }
}

function sousoilstocklive2() {
    if (sousoilstock <= 0){
        alert("가지고 있는 주식이 훍 주식이 없습니다!");
    }
    else{
        soudon += nowsoilstock;
        sousoilstock -= 1;
        const target = document.querySelector("h4#soilstocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + sousoilstock + "개";
        soudonlive();
    }
    
}

function addsoilstockcount() {
    if (soudon < 100000){
        alert("돈이 부족합니다!");
    }
    else{
        soilzehan += 1;
    }
    
}

function makestick() {
    if (souwoodstock < 2){
        alert("나무" + (2 - souwoodstock) + "개가 부족합니다!");
    }
    else{
        souwoodstock -= 2;
        stick += 1;
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

function addwattermellonstockcount() {
    if (soudon < 50000){
        alert("돈이 부족합니다!");
    }
    else{
        wattermellonzehan += 1;
    }
    
}

function aba() {
    const target = document.querySelector("h3#stick");
    target.innerHTML = "막대기 : " + stick + "개";
}
setInterval(() => {aaa(); aab(); aac(); aad();}, 3000);
setInterval(() => {aba();}, 1)
// setInterval(() => {soudonlive();}, 1)
soilstock = 500;
woodstock = 1000;
stonestock = 2000;
ironstock = 3000;
soudon = 1000;  
//https://static.wikia.nocookie.net/minecraft_ko_gamepedia/images/1/19/Iron_Ore_JE6_BE4.png/revision/latest/scale-to-width-down/150?cb=20220918083530 철 광석 새이미지
souwoodstock = 0;

soustonestock = 0;

souironstock = 0;

sousoilstock = 0;

plank = 0;
stick = 0;
craft = 0;
stonepick = 0;
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
    target.innerHTML = "돌 주식" + " : " + value + "%";
    const target2 = document.querySelector("h3#stoneboxfont2");
    nowstonestock = Math.floor(stonestock + (stonestock * value / 100));
    target2.innerHTML = "현재 가격" + " : " + nowstonestock + "원";
}

function aac() {
    const target = document.querySelector("h3#ironboxfont");
    const value = getrandomnum();
    if (value > 0){
        document.getElementById('ironboxfont').style.borderColor="red";
    }
    else{
        document.getElementById('ironboxfont').style.borderColor="blue";
    }
    target.innerHTML = "철 주식" + " : " + value + "%";
    const target2 = document.querySelector("h3#ironboxfont2");
    nowironstock = Math.floor(ironstock + (ironstock * value / 100));
    target2.innerHTML = "현재 가격" + " : " + nowironstock + "원";
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
    target.innerHTML = "흙 주식" + " : " + value + "%";
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
        souwoodstock += 1;
        const target = document.querySelector("h4#woodstocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + souwoodstock + "개";
            
        soudonlive();
    }
}

function souwoodstocklive2() {
    if (souwoodstock <= 0){
        alert("가지고 있는 주식이 나무 주식이 없습니다!");
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
        alert("현재 소유하신 돈이 돌 주식을 살만큼 충분하지 않습니다!");
    }
    else{
        soudon -= nowstonestock;
        
        soustonestock += 1;
        const target = document.querySelector("h4#stonestocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + soustonestock + "개";
        
        soudonlive();
    }
}

function soustonestocklive2() {
    if (soustonestock <= 0){
        alert("가지고 있는 주식이 돌 주식이 없습니다!");
    }
    else{
        soudon += nowstonestock;
        soustonestock -= 1;
        const target = document.querySelector("h4#stonestocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + soustonestock + "개";
        soudonlive();
    }
    
}

function souironstocklive() {
    if (soudon < nowironstock && stonepick < 1){
        alert("현재 소유하신 돈과 돌곡괭이가 철 주식을 살만큼 충분하지 않습니다!");
    }
    else if (soudon > nowironstock && stonepick < 1){
        alert("현재 돌곡괭이가 모자랍니다!")
    }
    else if (soudon < nowironstock && stonepick >= 1){
        alert("현재 돈이 모자랍니다!")
    }
    else{
        soudon -= nowironstock;
        stonepick -= 1;
        souironstock += 1;
        const target = document.querySelector("h4#ironstocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + souironstock + "개";
    
        soudonlive();
    }
}

function souironstocklive2() {
    if (souironstock <= 0){
        alert("가지고 있는 주식이 철 주식이 없습니다!");
    }
    else{
        soudon += nowironstock;
        souironstock -= 1;
        const target = document.querySelector("h4#ironstocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + souironstock + "개";
        soudonlive();
    }
    
}


function sousoilstocklive() {
    if (soudon < nowsoilstock){
        alert("현재 소유하신 돈이 훍 주식을 살만큼 충분하지 않습니다!");
    }
    else{
        soudon -= nowsoilstock;
    
        sousoilstock += 1;
        const target = document.querySelector("h4#soilstocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + sousoilstock + "개";
    
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

function makeplank() {
    if (souwoodstock < 1){
        alert("나무 1개가 부족합니다!");
    }
    else{
        souwoodstock -= 1;
        plank += 4;
        const target = document.querySelector("h4#woodstocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + souwoodstock + "개";
    }
    
}
function makestick() {
    if (plank < 2){
        alert("나무" + (2 - plank) + "개가 부족합니다!");
    }
    else{
        plank -= 2;
        stick += 4;
    }
    
}
function makecraft() {
    if (plank < 4){
        alert("나무" + (4 - plank) + "개가 부족합니다!");
    }
    else{
        plank -= 4;
        craft += 1;
    }
    
}


function makestonepick() {
    if (stick < 2 && soustonestock < 3 ){
        alert("막대기 " + (2 - stick) + "개와 돌 " + (3 - soustonestock) + "개가 부족합니다!");
    }
    else if (stick < 2 && soustonestock >= 3){
        alert("막대기 " + (2 - stick) + "개가 부족합니다");
    }
    else if (stick >= 2 && soustonestock < 3){
        alert("돌 " + (3 - soustonestock) + "개가 부족합니다!")
    }
    else{
        stonepick += 1;
        stick -= 2;
        soustonestock -= 3;
        craft -= 1;
    }
    
}

function aba() {
    const target = document.querySelector("h3#plank");
    target.innerHTML = "나무 판자 : " + plank + "개";
}
function abb() {
    const target = document.querySelector("h3#stick");
    target.innerHTML = "막대기 : " + stick + "개";
}
function abc() {
    const target = document.querySelector("h3#craft");
    target.innerHTML = "작업대 : " + craft + "개";
}
function abd() {
    const target = document.querySelector("h3#stonepick");
    target.innerHTML = "돌 곡괭이 : " + stonepick + "개";
}
setInterval(() => {aaa(); aab(); aac(); aad();}, 3000);
setInterval(() => {aba(); abb(); abc(); abd();}, 1)
// setInterval(() => {soudonlive();}, 1)
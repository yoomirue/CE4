soilstock = 500;
woodstock = 1000;
stonestock = 2000;
ironstock = 3000;
diamondstock = 10000;
obsidianstock = 1000000;
soudon = 1000;  

souwoodstock = 0;

soustonestock = 0;

souironstock = 0;

sousoilstock = 0;

soudiamondstock = 0;

souobsidianstock = 0;

plank = 0;
stick = 0;
craft = 0;
stonepick = 0;
ironpick = 0;
diamondpick = 0;
buynewironimg = 0;
function getrandomnum() {
    let randomnumber = Math.floor(Math.random() * 201) -100;
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

function aae() {
    const target = document.querySelector("h3#diamondboxfont");
    const value = getrandomnum();
    if (value > 0){
        document.getElementById('diamondboxfont').style.borderColor="red";
    }
    else{
        document.getElementById('diamondboxfont').style.borderColor="blue";
    }
    target.innerHTML = "다이아몬드 주식" + " : " + value + "%";
    const target2 = document.querySelector("h3#diamondboxfont2");
    nowdiamondstock = Math.floor(diamondstock + (diamondstock * value / 100));
    target2.innerHTML = "현재 가격" + " : " + nowdiamondstock + "원";
}

function aaf() {
    const target = document.querySelector("h3#obsidianboxfont");
    const value = getrandomnum();
    if (value > 0){
        document.getElementById('obsidianboxfont').style.borderColor="red";
    }
    else{
        document.getElementById('obsidianboxfont').style.borderColor="blue";
    }
    target.innerHTML = "흑요석 주식" + " : " + value + "%";
    const target2 = document.querySelector("h3#obsidianboxfont2");
    nowobsidianstock = Math.floor(obsidianstock + (obsidianstock * value / 100));
    target2.innerHTML = "현재 가격" + " : " + nowobsidianstock + "원";
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
    
    else if (soudon > nowironstock && diamondpick >= 1 && ironpick >= 1 && stonepick >= 1){
        stonepick -= 1;
        soudon -= nowironstock;
        souironstock += 1;
        const target = document.querySelector("h4#ironstocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + souironstock + "개";
        soudonlive();
    }

    else if (soudon > nowironstock && diamondpick >= 1 && ironpick >= 1 && stonepick < 1){
        ironpick -= 1;
        soudon -= nowironstock;
        souironstock += 1;
        const target = document.querySelector("h4#ironstocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + souironstock + "개";
        soudonlive();
    }

    else if (soudon > nowironstock && diamondpick >= 1 && ironpick < 1 && stonepick >= 1){
        stonepick -= 1;
        soudon -= nowironstock;
        souironstock += 1;
        const target = document.querySelector("h4#ironstocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + souironstock + "개";
        soudonlive();
    }
        
    else if (soudon > nowironstock && diamondpick >= 1 && ironpick < 1 && stonepick < 1){
            diamondpick -= 1;
            soudon -= nowironstock;
            souironstock += 1;
            const target = document.querySelector("h4#ironstocksou");
            target.innerHTML = "현재 주식 소유 수" +" : " + souironstock + "개";
            
            soudonlive();
        }

    else if (soudon > nowironstock && diamondpick < 1 && ironpick >= 1 && stonepick < 1){
            ironpick -= 1;
            souironstock += 1;
            const target = document.querySelector("h4#ironstocksou");
            target.innerHTML = "현재 주식 소유 수" +" : " + souironstock + "개";
            soudonlive();
        }

    else if (soudon > nowironstock && diamondpick < 1 && ironpick < 1 && stonepick >= 1){
            stonepick -= 1;
            souironstock += 1;
            const target = document.querySelector("h4#ironstocksou");
            target.innerHTML = "현재 주식 소유 수" +" : " + souironstock + "개";
            soudonlive();
        }

        
        
        soudonlive();
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

function souobsidianstocklive() {
    if (soudon < nowobsidianstock){
        alert("현재 소유하신 돈이 흑요석 주식을 살만큼 충분하지 않습니다!");
    }
    else if (soudon > nowobsidianstock && diamondpick >= 1){
        soudon -= nowobsidianstock;
        souobsidianstock += 1;
        const target = document.querySelector("h4#obsidianstocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + souobsidianstock + "개";
        soudonlive();
    }
    else if (soudon > nowobsidianstock && diamondpick < 1){
        soudon -= nowobsidianstock;
        souobsidianstock += 1;
        const target = document.querySelector("h4#obsidianstocksou");
        alert("다이아몬드 곡괭이가 없습니다!");
        target.innerHTML = "현재 주식 소유 수" +" : " + souobsidianstock + "개";
        soudonlive();
    }
}

function souobsidianstocklive2() {
    if (souobsidianstock <= 0){
        alert("가지고 있는 주식이 훍 주식이 없습니다!");
    }
    else{
        soudon += nowobsidianstock;
        souobsidianstock -= 1;
        const target = document.querySelector("h4#obsidianstocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + souobsidianstock + "개";
        soudonlive();
    }
    
}

function soudiamondstocklive() {
    if (soudon < nowdiamondstock && ironpick < 1){
        alert("현재 소유하신 돈과 철곡괭이가 철 주식을 살만큼 충분하지 않습니다!");
    }
    else if (soudon > nowdiamondstock && ironpick < 1){
        alert("현재 철곡괭이가 모자랍니다!")
    }
    else if (soudon < nowdiamondstock && ironpick >= 1){
        alert("현재 돈이 모자랍니다!")
    }
    else if (soudon > nowdiamondstock && diamondpick < 1 && ironpick >= 1){
        soudon -= nowdiamondstock;
        ironpick -= 1;
        soudiamondstock += 1;
        const target = document.querySelector("h4#diamondstocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + soudiamondstock + "개";
        soudonlive();
    }
    else if (soudon > nowdiamondstock && diamondpick >= 1 && ironpick >= 1){
        soudon -= nowdiamondstock;
        ironpick -= 1;
        soudiamondstock += 1;
        const target = document.querySelector("h4#diamondstocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + soudiamondstock + "개";
        soudonlive();
    }
    else if (soudon > nowdiamondstock && diamondpick >= 1 && ironpick < 1){
        soudon -= nowdiamondstock;
        daimondpick -= 1;
        soudiamondstock += 1;
        const target = document.querySelector("h4#diamondstocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + soudiamondstock + "개";
        soudonlive();
    }
}

function soudiamondstocklive2() {
    if (soudiamondstock <= 0){
        alert("가지고 있는 주식이 다이아몬드 주식이 없습니다!");
    }
    else{
        soudon += nowdiamondstock;
        soudiamondstock -= 1;
        const target = document.querySelector("h4#diamondstocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + soudiamondstock + "개";
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
    if (soustonestock < 3 && stick < 2 && craft < 1){
        alert("돌" + (3 - soustonestock) + "개와 막대기 " + (2 - stick) + "개와 작업대 1개가 부족합니다.");
    }
    else if (soustonestock < 3 && stick >= 2 && craft >= 1){
        alert("돌" + (3 - soustonestock) + "개가 부족합니다.");
    }
    else if (soustonestock >= 3 && stick < 2 && craft >= 1){
        alert("막대기 " + (2 - stick) + "개가 부족합니다.");
    }
    else if ( soustonestock >= 3 && stick >= 2 && craft < 1){
        alert("작업대 1개가 부족합니다.");
    }
    else if (soustonestock < 3 && stick < 2 && craft >= 1){
        alert("돌 " + (3 - soustonestock) + "개와 막대기 " + (2 - stick) + "개가 부족합니다.");
    }
    else if (soustonestock < 3 && stick >= 2 && craft < 1){
        alert("돌 " + (3 - soustonestock) + "개와 작업대 1개가 부족합니다.");
    }
    else if (soustonestock >= 3 && stick < 2 && craft < 1){
        alert("막대기 " + (2 - stick) + "개와 작업대 1개가 부족합니다")
    }
    else if (soustonestock >= 3 && stick >= 2 && craft >= 1){
        soustonestock -= 3;
        stick -= 2;
        craft -= 1;
        stonepick += 10;
        const target = document.querySelector("h4#stonestocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + soustonestock + "개";
    }
}



function newironcore() {
    if (soudon < 100000){
        alert("돈이 부족합니다!");
    }
    if(buynewironimg == 1){
        alert("이미 구매하셨습니다. 더이상 구매할 수 없습니다.");
        
    }
    else if(soudon > 100000){
        soudon -= 100000;
        buynewironimg = 1;
        alert("구매가 완료 되었습니다");
        const target = document.querySelector("img#stock4");
        target.setAttribute("src", "새철.webp");
        const target2 = document.querySelector("img#newironcoreimg");
        target2.setAttribute("src", "확인.avif");
        const target3 = document.querySelector("h3#ironbuyend");
        target3.innerHTML = "구매 완료"
        const target4 = document.querySelector("button#ironbuyend2");
        target4.innerHTML = "구매 완료"

        
        
    }
    soudonlive();
}

function makediamondpick() {
    if (soudiamondstock < 3 && stick < 2 && craft < 1){
        alert("다이아몬드 " + (3 - soudiamondstock) + "개와 막대기 " + (2 - stick) + "개와 작업대 1개가 부족합니다.");
    }
    else if (soudiamondstock < 3 && stick >= 2 && craft >= 1){
        alert("다이아몬드 " + (3 - soudiamondstock) + "개가 부족합니다.");
    }
    else if (soudiamondstock >= 3 && stick < 2 && craft >= 1){
        alert("막대기 " + (2 - stick) + "개가 부족합니다.");
    }
    else if ( soudiamondstock >= 3 && stick >= 2 && craft < 1){
        alert("작업대 1개가 부족합니다.");
    }
    else if (soudiamondstock < 3 && stick < 2 && craft >= 1){
        alert("다이아몬드 " + (3 - soudiamondstock) + "개와 막대기 " + (2 - stick) + "개가 부족합니다.");
    }
    else if (soudiamondstock < 3 && stick >= 2 && craft < 1){
        alert("다이아몬드 " + (3 - soudiamondstock) + "개와 작업대 1개가 부족합니다.");
    }
    else if (soudiamondstock >= 3 && stick < 2 && craft < 1){
        alert("막대기 " + (2 - stick) + "개와 작업대 1개가 부족합니다")
    }
    else if(soudiamondstock >= 3 && stick >= 2 && craft >= 1){
        soudiamondstock -= 3;
        stick -=2;
        craft -=1;

        diamondpick += 1000;
        const target = document.querySelector("h4#diamondstocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + soudiamondstock + "개";
    }
}

function makeironpick() {
    if (souironstock < 3 && stick < 2 && craft < 1){
        alert("철 " + (3 - souironstock) + "개와 막대기 " + (2 - stick) + "개와 작업대 1개가 부족합니다.");
    }
    else if (souironstock < 3 && stick >= 2 && craft >= 1){
        alert("철 " + (3 - souironstock) + "개가 부족합니다.");
    }
    else if (souironstock >= 3 && stick < 2 && craft >= 1){
        alert("막대기 " + (2 - stick) + "개가 부족합니다.");
    }
    else if ( souironstock >= 3 && stick >= 2 && craft < 1){
        alert("작업대 1개가 부족합니다.");
    }
    else if (souironstock < 3 && stick < 2 && craft >= 1){
        alert("철 " + (3 - soudiamondstock) + "개와 막대기 " + (2 - stick) + "개가 부족합니다.");
    }
    else if (souironstock < 3 && stick >= 2 && craft < 1){
        alert("철" + (3 - soudiamondstock) + "개와 작업대 1개가 부족합니다.");
    }
    else if (souironstock >= 3 && stick < 2 && craft < 1){
        alert("막대기 " + (2 - stick) + "개와 작업대 1개가 부족합니다")
    }
    else if (souironstock >= 3 && stick >= 2 && craft >= 1){
        souironstock -= 3;
        stick -= 2;
        craft -= 1;
        ironpick += 100;
        const target = document.querySelector("h4#ironstocksou");
        target.innerHTML = "현재 주식 소유 수" +" : " + souironstock + "개";
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
function abe() {
    const target = document.querySelector("h3#ironpick");
    target.innerHTML = "철 곡괭이 : " + ironpick + "개";
}
function abf() {
    const target = document.querySelector("h3#diamondpick");
    target.innerHTML = "다이아 곡괭이 : " + diamondpick + "개";
}

function cleargame(){
    if (souobsidianstock >= 10){
        document.body.innerHTML = ' ';
        const congrat = document.createElement("button");
        congrat.innerText = "엔딩보기" 
        congrat.setAttribute("onclick", "ending();");
        document.body.appendChild(congrat);
    }
}
function ending(){
    clearInterval(loop2);
    clearInterval(cleargame);
    document.body.innerHTML = ' ';
    const congrat = document.createElement("h1");
    congrat.innerText = "게임을 깨셨군요 축하합니다"
    const congrat2 = document.createElement("h2");
    congrat2.innerText = "플레이타임 : " + (time / 60) + "분 " + (time - ((time/60)*60)) + "초"
    const congrat3 = document.createElement("h1");
    congrat3.innerText = "하드모드 하러 가기.. https://ce4ec.github.io/CE4/procet2hard/pr2hard.html"

    document.body.appendChild(congrat);
    document.body.appendChild(congrat2);
    document.body.appendChild(congrat3);
}
time = 0;
function timer() {
    time += 1;
}

loop1 = setInterval(() => {aaa(); aab(); aac(); aad(); aae(); aaf();}, 3000);
loop2 = setInterval(() => {timer();}, 1000);
loop3 = setInterval(() => {aba(); abb(); abc(); abd(); abe(); abf(); cleargame();}, 1)
// setInterval(() => {soudonlive();}, 1)

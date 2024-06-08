var gibon = 50000;
var isopen = [false, false, false, false, false];

var cnt = 2;
function nowtier() {
  const target = document.querySelector("h2#tier");

  target.innerHTML = "현재 당신의 티어" + " : " + "아이언";
}
function tier2() {
  if (gibon < 100001){
    alert("돈이 부족합니다 \n(10만원일 떄도 작동합니다.)");
  }
  else{
  gibon -= 100000;
  const target = document.querySelector("h2#tier");

  target.innerHTML = "현재 당신의 티어" + " : " + "브론즈";
  target.style.color = "brown" ;
  const tier = document.querySelector("#basictier");

  tier.setAttribute("src", "https://i.namu.wiki/i/Jdc_mVeVM9WVBKCV3A5CYFN3Ss-hbpCBW6OOC8ml33d-bI1dGtPPCN0WAEP1wH9WaVT9U--u7Isay1TGmf4Ftg.webp")
  setmoney();
  leftchance();
  }
}
function tier3() {
  if (gibon < 300001){
    alert("돈이 부족합니다 \n(30만원일 떄도 작동합니다.)");
  }
  else{
  gibon -= 300000;
  const target = document.querySelector("h2#tier");

  target.innerHTML = "현재 당신의 티어" + " : " + "실버";
  target.style.color = "lightgray" ;
  const tier = document.querySelector("#basictier");

  tier.setAttribute("src", "https://i.namu.wiki/i/brsYYkyP4XAm-Gx7e_gbal5eMsvAnsRB38sTO1JIepSXF0tIldD60E570Zop2IVs2-_BUUwQl1ijoNL1N-M3lA.webp")
  setmoney();
  leftchance();
  }
}
function tier4() {
  if (gibon < 700001){
    alert("돈이 부족합니다 \n(70만원일 떄도 작동합니다.)");
  }
  else{
  gibon -= 700000;
  const target = document.querySelector("h2#tier");

  target.innerHTML = "현재 당신의 티어" + " : " + "골드";
  target.style.color = "yellow" ;
  target.style.webkitTextStroke = "1px black";

  const tier = document.querySelector("#basictier");

  tier.setAttribute("src", "https://i.namu.wiki/i/_U6NDRSwxfC_QD4pglomFcU2jdHC-LatFe82BciRJUXY8teLazyiipl0RBYoq0fRxIgXNlqys1nl94F67i8JIg.webp")
  setmoney();
  leftchance();
  }
}
function tier5() {
  if (gibon < 1500001){
    alert("돈이 부족합니다 \n(70만원일 떄도 작동합니다.)");
  }
  else{
  gibon -= 1500000;
  const target = document.querySelector("h2#tier");

  target.innerHTML = "현재 당신의 티어" + " : " + "플레";
  target.style.color = "skyblue" ;
  const tier = document.querySelector("#basictier");

  tier.setAttribute("src", "https://i.namu.wiki/i/SyhhVDi0nCg0lorF8HfS_nFMgXFBy02ZRTBX9jM2wPOotjgwkHd14fdlBd6WbjdgsDQ9SpQnNFpocKj0r-DJ2w.webp")
  setmoney();
  leftchance();
  }
}
function tier6() {
  if (gibon < 3000001){
    alert("돈이 부족합니다 \n300만원일 떄도 작동합니다.)");
  }
  else{
  gibon -= 3000000;
  const target = document.querySelector("h2#tier");

  target.innerHTML = "현재 당신의 티어" + " : " + "다이아";
  target.style.color = "purple" ;
  const tier = document.querySelector("#basictier");

  tier.setAttribute("src", "https://i.namu.wiki/i/b2En01b9RIufl5PPzDb4LAtlcdkxWGICfYfhD0f8qYgWPXKi2LDfb4Efha0jW0e-myY_JVPsq0tmw44zkh-kpw.webp")
  setmoney();
  leftchance();
  }
}
function tier7() {
  if (gibon < 9000001){
    alert("돈이 부족합니다 \n900만원일 떄도 작동합니다.)");
  }
  else{
  gibon -= 9000000;
  const target = document.querySelector("h2#tier");

  target.innerHTML = "현재 당신의 티어" + " : " + "초월자";
  target.style.color = "lightgreen" ;
  const tier = document.querySelector("#basictier");

  tier.setAttribute("src", "https://i.namu.wiki/i/wfLry9aPlJ9JieBGa7ZiyiOMGa6jRf_pOYQtE4GDqhBctzUtj36ZakUugXlvwIaw1VDDlaMW6lf2G-QT3Ir39g.webp")
  setmoney();
  leftchance();
  }
}
function tier8() {
  if (gibon < 40000001){
    alert("돈이 부족합니다 \n4000만원일 떄도 작동합니다.)");
  }
  else{
  gibon -= 40000000;
  const target = document.querySelector("h2#tier");

  target.innerHTML = "현재 당신의 티어" + " : " + "불멸";
  target.style.color = "rgb(204, 50, 50)" ;
  const tier = document.querySelector("#basictier");

  tier.setAttribute("src", "https://i.namu.wiki/i/mlmxRXwNvk1dbrUNj2DzoIBJc1vx2A8faG9-MQhTNiMKSIGQ5q3nIt34nvNio3Kmc_DssfOqESyZfQfmAI7zig.webp")
  setmoney();
  leftchance();
  }
}
function tier9() {
  if (gibon < 1000000001){
    alert("돈이 부족합니다 \n10억일 떄도 작동합니다.)");
  }
  else{
  gibon -= 100000000;
  const target = document.querySelector("h2#tier");

  target.innerHTML = "현재 당신의 티어" + " : " + "아티팩트";
  target.style.color = "rgb(166, 255, 0)" ;
  const tier = document.querySelector("#basictier");

  tier.setAttribute("src", "https://i.namu.wiki/i/2VSxw0SKGMTj86ACwvjj8I7yAmzCU8VkF-4RR8HNh7Ggs8eIKldeCP1GCFoWh_3ct6ZjRCEDhy2OFOgE71TA1Q.webp")
  setmoney();
  leftchance();
  }
}
function setmoney() {
  const target = document.querySelector("h2#target");

  target.innerHTML = "현재 소지금 : " + gibon;
  if (gibon <= 0) {
    gibon = 0;
    target.innerHTML = "현재 소지금 : " + gibon;
    alert("돈을 탕진했습니다\n재구성을 눌러도 상자를 뽑으실 수 없습니다");

    // window.location.reload();
    isopen = [true, true, true, true, true];
  }
}
function leftchance() {
  const target = document.querySelector("h3#left");

  target.innerHTML = "남은 기회 : " + cnt + "번";
  if (cnt == 0) {
    target.innerHTML = "더이상 할 수 없습니다!";
  }
}

function clickImage() {
  let images = document.querySelectorAll("img.box");

  for (let i = 0; i < images.length; i++) {
    console.log(images[i].id);

    images[i].addEventListener("click", function () {
      if (isopen[i] == false && cnt > 0) {
        isopen[i] = true;
        cnt--;
        if (i == num2) {
          images[i].setAttribute(
            "src",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCuPR4r3m-ctKuzvAd9_-XU9XU_mQ0ti_WI9mDZjlYMA&s"
          );
          gibon *= 0.5;
          gibon = Math.floor(gibon);
        } else if (i == num1) {
          images[i].setAttribute(
            "src",
            "https://cdn-icons-png.flaticon.com/512/7946/7946019.png"
          );
          gibon *= 2;
        } else {
          images[i].setAttribute(
            "src",
            "https://cdn-icons-png.flaticon.com/512/5899/5899516.png"
          );
          gibon -= 5000;
        }

        setmoney();
        leftchance();
      }
    });
  }
}

function getrandomnum() {
  let randomnumber = Math.floor(Math.random() * 5);
  while (randomnumber == 5) {
    randomnumber = Math.floor(Math.random() * 5);
  }
  return randomnumber;
}
function getrandomnum2() {
  let randomnumber2 = Math.floor(Math.random() * 99);
}

function storeitem2() {
  if (gibon < 30001) {
    alert("돈이 부족합니다! 더 모아오세요\n(딱 30000원 일때도 작동 안됩니다)");
  } else {
    gibon -= 30000;
    cnt += 1;
    setmoney();
    leftchance();
  }
}

function storeitem() {
  if (gibon < 50001){
    alert("돈이 부족합니다! 더 모아오세요\n(딱 50000원 일때도 작동 안됩니다");
  }
  gibon -= 50000;

  let images = document.querySelectorAll("img.box");

  images[num1].setAttribute(
    "src",
    "https://cdn-icons-png.flaticon.com/512/7946/7946019.png"
  );
  images[num2].setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCuPR4r3m-ctKuzvAd9_-XU9XU_mQ0ti_WI9mDZjlYMA&s"
  );
  cnt = 0;
  setTimeout(function() {  
    images[num1].setAttribute(
      "src",
      "https://cdn.pixabay.com/photo/2015/11/02/15/00/box-1018503_960_720.png"
    );
    images[num2].setAttribute(
      "src",
      "https://cdn.pixabay.com/photo/2015/11/02/15/00/box-1018503_960_720.png"
    );
    cnt = 2;
  }, 2000);


  
  

  setmoney();
  leftchance();

}
function reset() {
  // https://cdn.pixabay.com/photo/2015/11/02/15/00/box-1018503_960_720.png
  let images = document.querySelectorAll("img.box");

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute(
      "src",
      "https://cdn.pixabay.com/photo/2015/11/02/15/00/box-1018503_960_720.png"
    );
  }
  cnt = Math.max(2, cnt);
  isopen = [false, false, false, false, false];
  num1 = getrandomnum();
  num2 = getrandomnum();
  setmoney();
  leftchance();
  nowtier();
}

document.addEventListener("DOMContentLoaded", function () {
  clickImage();
  reset();
});

function sm() {
  gibon = 50000;
  reset();
}

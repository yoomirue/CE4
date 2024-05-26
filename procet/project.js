var gibon = 300001;
var isopen = [false, false, false, false, false];

var cnt = 2;

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

function storeitem2() {
  if (gibon <= 30001) {
    alert("돈이 부족합니다! 더 모아오세요\n(딱 30000원 일때도 작동 안됩니다)");
  } else {
    gibon -= 30000;
    cnt += 1;
    setmoney();
    leftchance();
  }
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
}

document.addEventListener("DOMContentLoaded", function () {
  clickImage();
  reset();
});

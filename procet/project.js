var gibon = 10000;
if (gibon == 0){
    alert("돈을 탕진했습니다");
}

function setmoney() {
  const target = document.querySelector("h2#target");

  target.innerHTML = "현재 소지금 : " + gibon;
}

function clickImage(){
    let images = document.querySelectorAll("img");

    for(let i =0 ;i < images.length; i++){
        console.log(images[i].id);
        
        images[i].addEventListener("click", function () {
            if( i == 3){
                images[i].setAttribute("src", "https://cdn-icons-png.flaticon.com/512/7946/7946019.png");
                gibon *= 2;
                setmoney();
            }
            else{

                images[i].setAttribute("src", "https://cdn-icons-png.flaticon.com/512/5899/5899516.png");
                gibon -= 5000;
                setmoney();
            }
        });
    }
}


document.addEventListener("DOMContentLoaded", function () {
  setmoney();
  clickImage();
});

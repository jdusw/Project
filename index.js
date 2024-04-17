// 맨 위로 이동 버튼
let moveToTop = function () {
  document.body.scrollIntoView({ behavior: "smooth" });
};

// 타이핑 효과
const $txt = document.querySelector(".txt-title");
const content = "안녕하세요 :)\n 저희는 MBTI의 F와 J로\n이루어진 First JS조\n입니다.";
let contentIndex = 0;

let typing = function () {
  $txt.innerHTML += content[contentIndex];
  contentIndex++;
  if (content[contentIndex] === "\n") {
    $txt.innerHTML += "<br />";
    contentIndex++;
  }
  if (contentIndex > content.length) {
    $txt.textContent = "";
    contentIndex = 0;
  }
};

setInterval(typing, 180);

// 이미지 슬라이드
let imgIndex = 0;
let position = 0;
const IMG_WIDTH = 500;
const $btnPrev = document.querySelector(".btn-prev");
const $btnNext = document.querySelector(".btn-next");
const $slideImgs = document.querySelector(".slide-images");

let prev = function () {
  if (imgIndex > 0) {
    $btnNext.removeAttribute("disabled");
    position += IMG_WIDTH;
    $slideImgs.style.transform = `translateX(${position}px)`;
    imgIndex = imgIndex - 1;
  }
  if (imgIndex == 0) {
    $btnPrev.setAttribute("disabled", "true");
  }
};

let next = function () {
  if (imgIndex < 2) {
    $btnPrev.removeAttribute("disabled");
    position -= IMG_WIDTH;
    $slideImgs.style.transform = `translateX(${position}px)`;
    $slideImgs.style.transition = "transform .5s ease-out";
    imgIndex = imgIndex + 1;
  }
  if (imgIndex == 2) {
    $btnNext.setAttribute("disabled", "true");
  }
};

let init = function () {
  $btnPrev.setAttribute("disabled", "true");
  $btnPrev.addEventListener("click", prev);
  $btnNext.addEventListener("click", next);
};

init();


let imgIndex1 = 0;
let position1 = 0;
const IMG_WIDTH1 = 500;
const $btnPrev1 = document.querySelector(".btn-prev1");
const $btnNext1 = document.querySelector(".btn-next1");
const $slideImgs1 = document.querySelector(".slide-images1");

let prev1 = function () {
  if (imgIndex1 > 0) {
    $btnNext1.removeAttribute("disabled");
    position1 += IMG_WIDTH1;
    $slideImgs1.style.transform = `translateX(${position1}px)`;
    imgIndex1 = imgIndex1 - 1;
  }
  if (imgIndex1 == 0) {
    $btnPrev1.setAttribute("disabled", "true");
  }
};

let next1 = function () {
  if (imgIndex1 < 2) {
    $btnPrev1.removeAttribute("disabled");
    position1 -= IMG_WIDTH;
    $slideImgs1.style.transform = `translateX(${position1}px)`;
    $slideImgs1.style.transition = "transform .5s ease-out";
    imgIndex1 = imgIndex1 + 1;
  }
  if (imgIndex1 == 2) {
    $btnNext1.setAttribute("disabled", "true");
  }
};

let init1 = function () {
  $btnPrev1.setAttribute("disabled", "true");
  $btnPrev1.addEventListener("click", prev1);
  $btnNext1.addEventListener("click", next1);
};

init1();


let imgIndex2 = 0;
let position2 = 0;
const IMG_WIDTH2 = 500;
const $btnPrev2 = document.querySelector(".btn-prev2");
const $btnNext2 = document.querySelector(".btn-next2");
const $slideImgs2 = document.querySelector(".slide-images2");

let prev2 = function () {
  if (imgIndex2 > 0) {
    $btnNext2.removeAttribute("disabled");
    position2 += IMG_WIDTH2;
    $slideImgs2.style.transform = `translateX(${position2}px)`;
    imgIndex2 = imgIndex2 - 1;
  }
  if (imgIndex2 == 0) {
    $btnPrev2.setAttribute("disabled", "true");
  }
};

let next2 = function () {
  if (imgIndex2 < 2) {
    $btnPrev2.removeAttribute("disabled");
    position2 -= IMG_WIDTH;
    $slideImgs2.style.transform = `translateX(${position2}px)`;
    $slideImgs2.style.transition = "transform .5s ease-out";
    imgIndex2 = imgIndex2 + 1;
  }
  if (imgIndex2 == 2) {
    $btnNext2.setAttribute("disabled", "true");
  }
};

let init2 = function () {
  $btnPrev2.setAttribute("disabled", "true");
  $btnPrev2.addEventListener("click", prev2);
  $btnNext2.addEventListener("click", next2);
};
init2();

/*
*/
let imgIndex4 = 0;
let position4 = 0;
const IMG_WIDTH4 = 500;
const $btnPrev4 = document.querySelector(".btn-prev4");
const $btnNext4 = document.querySelector(".btn-next4");
const $slideImgs4 = document.querySelector(".slide-images4");

let prev4 = function () {
  if (imgIndex4 > 0) {
    $btnNext4.removeAttribute("disabled");
    position4 += IMG_WIDTH4;
    $slideImgs4.style.transform = `translateX(${position4}px)`;
    imgIndex4 = imgIndex4 - 1;
  }
  if (imgIndex4 == 0) {
    $btnPrev4.setAttribute("disabled", "true");
  }
};

let next4 = function () {
  if (imgIndex4 < 2) {
    $btnPrev4.removeAttribute("disabled");
    position4 -= IMG_WIDTH;
    $slideImgs4.style.transform = `translateX(${position4}px)`;
    $slideImgs4.style.transition = "transform .5s ease-out";
    imgIndex4 = imgIndex4 + 1;
  }
  if (imgIndex4 == 2) {
    $btnNext4.setAttribute("disabled", "true");
  }
};

let init4 = function () {
  $btnPrev4.setAttribute("disabled", "true");
  $btnPrev4.addEventListener("click", prev4);
  $btnNext4.addEventListener("click", next4);
};
init4();


/*
*/


/*
*/
let imgIndex3 = 0;
let position3 = 0;
const IMG_WIDTH3 = 500;
const $btnPrev3 = document.querySelector(".btn-prev3");
const $btnNext3 = document.querySelector(".btn-next3");
const $slideImgs3 = document.querySelector(".slide-images3");

let prev3 = function () {
  if (imgIndex3 > 0) {
    $btnNext3.removeAttribute("disabled");
    position3 += IMG_WIDTH3;
    $slideImgs3.style.transform = `translateX(${position3}px)`;
    imgIndex3 = imgIndex3 - 1;
  }
  if (imgIndex3 == 0) {
    $btnPrev3.setAttribute("disabled", "true");
  }
};

let next3 = function () {
  if (imgIndex3 < 2) {
    $btnPrev3.removeAttribute("disabled");
    position3 -= IMG_WIDTH;
    $slideImgs3.style.transform = `translateX(${position3}px)`;
    $slideImgs3.style.transition = "transform .5s ease-out";
    imgIndex3 = imgIndex3 + 1;
  }
  if (imgIndex3 == 2) {
    $btnNext3.setAttribute("disabled", "true");
  }
};

let init3 = function () {
  $btnPrev3.setAttribute("disabled", "true");
  $btnPrev3.addEventListener("click", prev3);
  $btnNext3.addEventListener("click", next3);
};

init3();

// 스크롤바
let scrollTop = 0;
let bar = document.getElementsByClassName("bar-ing")[0];

window.addEventListener(
  "scroll",
  () => {
    scrollTop = document.documentElement.scrollTop;
    let per = Math.ceil(
      (scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100
    );
    bar.style.width = per + "%";
  },
  false
);



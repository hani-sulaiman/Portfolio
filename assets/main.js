let ciruclarProgress = document.querySelectorAll(".circular-progress");
let progressValue = document.querySelectorAll(".progress-value");
for (let i = 0; i < ciruclarProgress.length; i++) {
    let startValue = 0,
        endValue = ciruclarProgress[i].dataset.end,
        speed = 20;
    let progress = setInterval(() => {
        startValue++;
        ciruclarProgress[i].style.background = `conic-gradient(var(--main-color) ${startValue * 3.6}deg,#010164 0deg)`;
        progressValue[i].textContent = `${startValue}%`;
        if (startValue == endValue) {
            clearInterval(progress);
        }
    }, speed);
}

img_head = document.querySelector('.img-head');
let header_img = setInterval(() => {
    img_head.style = `background-image:url(icons/h${i}.jpg);
    `;
    if (i == 4) {
        i = 0;
        clearInterval(img_head);
    }
    i++;
}, 6000, i = 2);
let bubble_wrap = document.querySelector('.bubble-wrap');
let icon = ['html', 'css', 'js', 'php', 'mysql', 'laravel'];
for (let i = 0; i < icon.length; i++) {
    bubble_wrap.innerHTML += `<img src="icons/${icon[i]}.png" class="bubble">`;
}



let startRand = 40;
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
let coding_per = [100, 90, 70, 70, 100, 80, 90, 100,70,80,40,70];
let stroke = document.querySelectorAll('.prog-stroke');
var root = document.querySelector(':root');
for (let i = 0; i <= stroke.length; i++) {
    root.style.setProperty(`--strok_${i}`, coding_per[i]);
}
document.querySelector('#scroll-btn').addEventListener('click',backToTop);
function backToTop() {
    let container = document.querySelector('.container-identity');
    container.scrollBy(0, -container.scrollHeight);
}
let doc_year = document.querySelector('#countYear');
let doc_proj = document.querySelector('#countProject');
let doc_client = document.querySelector('#countClinet');
let item_achv = [doc_year, doc_proj, doc_client];
let endVal = [
    doc_year.dataset.year,
    doc_proj.dataset.project,
    doc_client.dataset.client
];
for (let i = 0; i < item_achv.length; i++) {
    let startValue = 0;
    let counter_achv = setInterval(() => {
        item_achv[i].textContent = `${startValue}`;
        if (startValue == endVal[i]) {
            clearInterval(counter_achv);
        }
        startValue++;
    }, 100);
}
document.querySelector('section').addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.card');

    for (let i = 0; i < reveals.length; i++) {
        for (let j = 0; j < 3; j++) {
            var card = document.querySelector(`.card:nth-child(${j + 1})`);
            card.style = `transition-delay: ${i / 15}s;`;
        }
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 250;
        if (revealTop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveal[i].classList.remove('active');
        }
    }
}

document.querySelector('.container-menu').addEventListener('click',menu_btn);
function menu_btn() {
    document.querySelector('.container-menu').classList.toggle("change");
    let aside = document.querySelector('aside');
    if (aside.classList.contains('show-up')) {
        aside.style="left:-300px;";
        setTimeout(() => {   
            aside.classList.toggle("show-up");
            document.querySelector('.sidebar').style="background:#181c44e0;";
        }, 500);
    } else {
        aside.style="left:0px;";
        aside.classList.add('show-up');
        document.querySelector('.sidebar').style="background:transparent!important;";
    }

}
function menu_btn_window() {

    let aside = document.querySelector('aside');
    if (aside.classList.contains('show-up')) {
        document.querySelector('.container-menu').classList.toggle("change");
        aside.classList.toggle("show-up");
        document.querySelector('.sidebar').style="background:#181c44e0;";
    }

}
document.querySelector('section').addEventListener('click',menu_btn_window)
document.querySelector('img').setAttribute('loading','lazy');

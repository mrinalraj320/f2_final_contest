const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const form = document.getElementById("form");
const userInfo = document.getElementById("user-info");
const dice = document.getElementById("dice");
const coupon = document.getElementById("coupon");
const congrats = document.getElementById("congrats");
const displayName = document.getElementById("display-name");
const displayUsername = document.getElementById("display-username");
const displayCoupon = document.getElementById("display-coupon");
const result = document.getElementById("result");
img2.style.pointerEvents = "none";
img3.style.pointerEvents = "none";
img4.style.pointerEvents = "none";
img1.addEventListener("click", function () {   
    form.style.display = "flex";
    img1.style.pointerEvents = "none"
});
let name, username;
form.addEventListener('submit', function (event) {
    img2.style.pointerEvents = "auto";
    event.preventDefault();
    name = document.querySelector('#name').value;
    username = document.querySelector('#username').value;
    document.querySelector('#display-name').textContent = name;
    document.querySelector('#display-username').textContent = username;
});
img2.addEventListener('click', function () {   
    form.style.display = "none";
    img3.style.pointerEvents = "auto";
    userInfo.style.display = "flex";
    img2.style.pointerEvents = "none";
});
let attempts = 0;
let sum = 0;
let count = 0;
img3.addEventListener('click', function () {
    userInfo.style.display = "none";   
    dice.style.display = "flex";
    img3.style.pointerEvents = "none";
});
dice.addEventListener('click', function () {
    let value = Math.floor(Math.random() * 6) + 1;
    result.textContent += value + ' ';
    sum += value;
    count++;
    if (count === 3) {
        attempts++;
        if (sum > 10) {
            result.textContent += ' Click On 4th Image. ';
            img4.style.pointerEvents = "auto";
            dice.style.pointerEvents = "none";       
        } else if (attempts === 2) {
            result.textContent += 'Bad luck. ';
            attempts = 0;
            dice.style.pointerEvents = "none";
        } else {
            result.textContent += 'Try again. ';
            count = 0;
            sum = 0;
        }
    }
});
img4.addEventListener('click', function () {
    dice.style.display = "none";
    let text = '';
    for (let i = 0; i < 12; i++) {
        text += Math.floor(Math.random() * 10);
    }
    displayCoupon.textContent = text;
    coupon.style.display = "flex";
    congrats.style.display = 'block';
    img4.style.pointerEvents = "none"

});
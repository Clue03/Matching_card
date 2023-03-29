const Card_img = ['cat', 'cow', 'dog', 'monkey', 'whale', 'sheep', 'fox', 'pig'];
const Board  = 16;
const gameBoard = document.getElementsByClassName("game_borad")[0];
const cardBack = document.getElementsByClassName("card_back");
const cardFront = document.getElementsByClassName("card_front");


let time = 60;
let timer = 0;
let isFlip = false;

let Card_Deck = [];

function startGame() {
    makeCardDeck();
    settingCards();
    showCards();
}

function restart() {
    initGame();
    startGame();
}

function stopGame() {

}

function initGame() {
    time = 60;
    isFlip = false;
    Card_Deck = [];
}

function makeCardDeck() {
    let randomNumberArr = [];

    for (let i = 0; i < Board / 2; i++) {
        let randomNumber = getRandom(8, 0);

        // 중복 검사
        // cardDeckImgArr 안에 random 값이 없다면 cardDeckImgArr에 추가
        // cardDeckImgArr 안에 random 값이 있으면 인덱스 1 감소
        if (randomNumberArr.indexOf(randomNumber) === -1) {
            randomNumberArr.push(randomNumber);
        } else {
            i--;
        }
    }

    randomNumberArr.push(...randomNumberArr);
    shuffle(randomNumberArr);

    for (let i = 0; i < Board; i++) {
        Card_Deck.push({card: Card_img[randomNumberArr[i]], isOpen: false, isMatch: false});
    }

    return Card_Deck;
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5) ;
}

function startTimer() {
    timer = setInterval(() => {
        playerTime.innerHTML = --time;

        if(time === 0){
            clearInterval(timer);
            stopGame();
        }
    }, 1000);
}

function showCards() {
    let cnt = 0;
    
    let showCardPromise = new Promise((resolve, reject) => {
        let showCardTimer = setInterval(() => {
            cardBack[cnt].style.transform = "rotateY(180deg)";
            cardFront[cnt++].style.transform = "rotateY(0deg)";

            if (cnt === Card_Deck.length) {
                clearInterval(showCardTimer);

                resolve();
            }
        }, 200);
    });

    showCardPromise.then(() => {
        // showCardPromise 성공인 경우 실행할 코드
        setTimeout(hideCardDeck, 2000);
    })
}

function hideCardDeck() {
    for (let i = 0; i < Card_Deck.length; i++) {
        cardBack[i].style.transform = "rotateY(0deg)";
        cardFront[i].style.transform = "rotateY(-180deg)";
    }

    // 전체 카드 숨기고 0.1초 뒤 isFlip = true, 게임 타이머 시작
    // 바로 클릭이 가능하도록 할 때(isFlip = true 값을 바로 줬을 때) 에러가 나는 경우가 있어 0.1초 후 부터 카드 뒤집기가 가능하도록 설정
    setTimeout(() => {
        isFlip = true;

        // 게임 타이머 시작
        startTimer();
    }, 100);
}
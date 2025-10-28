let winstat=0,losestat=0,tiestat=0;
let mymove;
// Read saved score from localStorage. Don't assign console.log's return value (it's undefined).
let score = JSON.parse(localStorage.getItem('score')) || {
    winstat: 0,
    losestat: 0,
    tiestat: 0
};

function score_dis(){
    document.querySelector('.js-score')
        .innerHTML = `Win : ${score.winstat} , Lose : ${score.losestat} , Tie : ${score.tiestat}`;
}
score_dis();

function moves(mymove){
    document.querySelector('.js-moves')
    .innerHTML = 
    `You <img src="icons/${mymove}-emoji.png" class="icons"> <img src="icons/${compmove}-emoji.png" class="icons"> Computer`;
}

function outcome(result){
    const resultElement = document.querySelector('.js-result');
    resultElement.innerHTML=result;
    resultElement.classList.add('reslt')

}
    // console.log(score);
// if (!score) {
//     score = {
//         winstat: 0,
//         losestat: 0,
//         tiestat: 0
//     };
// }

// console.log(JSON.parse(localStorage.getItem('score')));
// let winstat=0,losestat=0,tiestat=0;
function game(mymove,c){
    if(c==1){
        compmove='Rock';
    }
    else if(c==3){
        compmove='Scissors';
    }
    else{
        compmove='Paper';
    }

    if(mymove===compmove){
        // alert(`You chose ${mymove}. Computer chose ${compmove}. Tie`);
        score.tiestat+=1;
        outcome('Tie');
    } else if(mymove==='Rock'){
        if(compmove==='Scissors'){
            // alert(`You chose ${mymove}. Computer chose ${compmove}. You Win`);
            score.winstat+=1;
            outcome('You Win');
        }
        else{
            // alert(`You chose ${mymove}. Computer chose ${compmove}. You Lose`);
            score.losestat+=1;
            outcome('You Lose');
        }
    } else if(mymove==='Scissors'){
        if(compmove==='Paper'){
            // alert(`You chose ${mymove}. Computer chose ${compmove}. You Win`);
            score.winstat+=1;
            outcome('You Win');
        }
        else{
            // alert(`You chose ${mymove}. Computer chose ${compmove}. You Lose`);
            score.losestat+=1;
            outcome('You Lose');
        }
    }else if(mymove==='Paper'){
        if(compmove==='Rock'){
            // alert(`You chose ${mymove}. Computer chose ${compmove}. You Win`);
            score.winstat+=1;
            outcome('You Win');
        }
        else{
            // alert(`You chose ${mymove}. Computer chose ${compmove}. You Lose`);
            score.losestat+=1;
            outcome('You Lose');
        }
    }
    localStorage.setItem('score', JSON.stringify(score));

    score_dis();
}
// function stats(){
//     alert(`Win : ${score.winstat} | Lose : ${score.losestat} | Tie : ${score.tiestat}`);
// }
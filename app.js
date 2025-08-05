let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let btns=["red","yellow","purple","green"];
let highScore=[];

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelUp();
    }
})

function gameflash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },300);
}

function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },300);
}








function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    //random-flash

    let randIndex=Math.floor(Math.random()*4);
    let randColor=btns[randIndex];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);

    gameflash(randbtn);
};


function checkAns(idx){
    // console.log(level);
  
    if( userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length)
         {
            setTimeout(levelUp,1000);
        }
    }
    else{
        highScore.push(gameSeq.length-1);

        h2.innerHTML=`game over your score was <b>${level-1}</b>! Highscore is ${Math.max(...highScore)} <br>
        <br>Press any key to start`
        console.log(highScore);
        
        document.querySelector('body').style.backgroundColor='red';

        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';
        },150)
        
        reset();
    }

}


function btnPress(){
    let btn=this;
  
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    userFlash(btn);
}

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset(){
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
   

}






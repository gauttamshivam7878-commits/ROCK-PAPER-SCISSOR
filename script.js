let userscore = 0 ;
let compuscore  = 0;


let choices = document.querySelectorAll(".choice");
let myscore = document.querySelector(".myscore");
let compuscoreEl = document.querySelector(".compuscore");
let result = document.querySelector(".result");




choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });

});

const  gencompchoice = () => {
    const options = [ "paper" , "rock" , "scissors" ];
    const rdm = Math.floor(Math.random() *3 );
    console.log(`compu choics ${options[rdm]}`);
    return options[rdm];
};



const playgame = (userchoice) => {
    let compuchoice = gencompchoice();   
    console.log( `player choice ${userchoice}`);

    if( userchoice === compuchoice ){
        result.innerText = "Game was Draw!";
        console.log("Game was Draw!");
    }else{

        let userwin = true;
        if(userchoice === `scissors`){
           if( compuchoice === `rock` ){
                userwin = false;  
            }else {
                userwin = true;   
            }

        }else if( userchoice=== `rock`){
            userwin = compuchoice === `scissors` ? true : false;

        }else if( userchoice === `paper`){
            userwin = compuchoice === `rock` ? true : false ;
        }
        showwinner (userwin , userchoice , compuchoice );

        if (userwin){
            userscore++
            myscore.innerText = userscore ;

        }else{
            compuscore++
            compuscoreEl.innerText = compuscore ;
        }
    };
};


const showwinner = (userwin , userchoice , compuchoice ) => {
    if(userwin){
        
        console.log(`😃 you win! ${userchoice} beats ${compuchoice}`);
        result.innerText = `😃 you win! ${userchoice} beats ${compuchoice}`;
    }else{

        console.log(`😞 you lose! ${compuchoice} beats ${userchoice}`);
        result.innerText = `😞 you lose! ${compuchoice} beats ${userchoice}`;

    }
};

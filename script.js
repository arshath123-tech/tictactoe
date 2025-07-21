let login=document.querySelector(".userInput");
let rules=document.querySelector(".rulesBox");
let name1=document.querySelector(".head1");
let name2=document.querySelector(".head2");
let screen=document.querySelector(".overLay");
let container=document.querySelector(".container");
let cells=document.querySelectorAll(".board >div")
let winner=document.querySelector(".container span");
let rulesBut=document.querySelector(".container button");
let heading=document.querySelector("h1");
let choice="X";

let winCondtion= [[0,1,2],
                 [3,4,5],
                 [6,7,8],
                 [0,3,6],
                 [1,4,7],
                 [2,5,8],
                 [0,4,8],
                 [2,4,6] ];
let options = ["","","","","","","","",""];
let pop=document.querySelector(".winnerPop");
let winPop=document.querySelector(".winnerPop span");






function submit(){

let user1=document.querySelector(".player1 input").value;
let user2=document.querySelector(".player2 input").value;
let error1=document.querySelector(".player1 span");
let error2=document.querySelector(".player2 span");



if ((user1=="")&& (user2=="")){
    name1.textContent="Player 1";
    name2.textContent="Player 2";
    ("Both the players didn't Enter the name!!");
    error1.textContent="* Must fill the name";
    error2.textContent="* Must fill the name";
    
}
else if (user1==""){
    name1.textContent="Player 1";
    name2.textContent=user2;
    error1.textContent="* Must fill the name";
    error2.textContent="";
}

else if(user2==""){
    name1.textContent=user1;
    name2.textContent="Player 2";
    error2.textContent="* Must fill the name";
    error1.textContent="";
    

}
else{
    name1.textContent=user1;
    name2.textContent=user2;
    screen.style.display="block";
    login.style.display="none";
    rules.style.display="flex";
    container.style.display="flex";
    heading.style.display="none";
  
}

statusBar(user1,user2);
again(user1);
 
 
}

function wrongBox(){
    rules.style.display="none";
    screen.style.display="none";
}



function statusBar(user1,user2){
      winner.textContent=user1;
      
    
    cells.forEach(function(cell) {

      
     
    cell.addEventListener("click",function(){
         this.textContent=choice;
         let index=this.getAttribute("cellIndex");
         options[index]=choice;
         choice=(choice=="X")? "O":"X";
       
            if(winner.textContent==user1){
            winner.textContent=user2;
            this.style.color="red";
            }
             else
             {
               winner.textContent=user1;
               this.style.color="green";
             }
        


        for(let i=0;i < winCondtion.length; i++){
        let condition= winCondtion[i];
        
        let cellA =options[condition[0]];
        console.log(cellA);
        let cellB =options[condition[1]];
        console.log(cellB);
        let cellC =options[condition[2]];
        console.log(cellC);

        if (cellA == "" || cellB == "" || cellC == ""){
            continue;
        }

        else if ((cellA =="X") && (cellB =="X") && (cellC=="X")){
            pop.style.display="block";
            screen.style.display="block";
            winPop.textContent=user1;
             choice="X";
            winner.textContent=user1;
            console.log("Player 1 won");
            break;
        }

        else if((cellA =="O") && (cellB =="O") && (cellC=="O")){
            pop.style.display="block";
            screen.style.display="block";
            winPop.textContent=user2;
             choice="X";
                winner.textContent=user1;
            console.log("Player2 Won");
            break;
        }

        else if(!options.includes("")){
          
                  cells.forEach(function(cell){
        cell.textContent="";
     })
     options=["","","","","","","","",""]
                 alert("Match Draw, Restart the Game");    
                choice="X";
                winner.textContent=user1;
              
        }
    }
        
         
    
       
    })  
   
});

}



function but(){
    screen.style.display="block";
    rules.style.display="flex";

}


screen.addEventListener("click",function(){
     rules.style.display="none";
     screen.style.display="none";
     pop.style.display="none";
     cells.forEach(function(cell){
        cell.textContent="";
     })
     options=["","","","","","","","",""]
});;

function again(user1){

let reagain=document.querySelector(".rest");

reagain.addEventListener("click",function(){
     cells.forEach(function(cell){
        cell.textContent="";
     })
     options=["","","","","","","","",""]
     winner.textContent=user1;
     choice="X";
})

}


function relogin(){
    location.reload();
}







      




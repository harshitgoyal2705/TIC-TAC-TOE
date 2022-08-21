let turn="X";
let bool=false;
//function to change the turn
const changeTurn=()=>{
    return turn==="X"?"O":"X";
}
//function to check win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,7,8]];
    wins.forEach(e=>{
          if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!==""))
          {
                   document.querySelector('.info').innerText=boxtext[e[0]].innerText + " Won";  
                   bool=true;
          }
            
    })
}
//main logic starts
let boxes=document.getElementsByClassName("box");//return collection of elements with class="box" 
Array.from(boxes).forEach(function(element){
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',function(){
        if(boxtext.innerText===""){
            boxtext.innerText=turn;
            turn=changeTurn();
            checkWin();
            if(bool===false){
           document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
            }
        }
    })       
})

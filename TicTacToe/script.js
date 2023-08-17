let count=1
let turn =false;
var arr=[['','',''],
         ['','',''],
         ['','','']]

for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        arr[i][j]=document.querySelector(`.tiles:nth-child(${count})`);
        count++;
    }
}

for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        if(j!=2)
        arr[i][j].style.cssText+='border-right: 2px solid rgb(236, 76, 76);';
        if(i!=2)
        arr[i][j].style.cssText+='border-bottom: 2px solid rgb(236, 76, 76);';
    }
}

var event1=document.querySelectorAll(".tiles");
event1.forEach(ev=>{
ev.addEventListener("click",
function(detail){
    var a=detail.target;
    count--;
    if(a.innerHTML=='X'||a.innerHTML=='O'){
    }
    else if(turn == false){
        a.innerHTML="X"
        let st=false;
        st=check_win();
        if(st==false){
            console.log(count);
            if(count == 1){
                document.querySelector("h2").innerHTML="Draw";
                document.querySelector("button").style.display="block";
            }
            else
            document.querySelector("h2").innerHTML="Player 2";
        }
        turn = true;
    }
    else if(turn == true){
        a.innerHTML="O";
        let st=false;
        st=check_win();
        if(st==false){
            document.querySelector("h2").innerHTML="Player 1";
            
        }

        turn = false;
    }
});});
let anim=` animation-name: colors;
               animation-duration: 0.5s;
               animation-iteration-count: infinite;`;
function check_win(){
    
    if(arr[0][0].innerHTML==arr[1][1].innerHTML&&arr[0][0].innerHTML==arr[2][2].innerHTML&&arr[2][2].innerHTML!=""){
        document.getElementById("msg").style.cssText=' background-image: url("Congratulations-Gifs-Transparent-Images.gif");background-size: cover;';
        document.querySelector("h2").innerHTML+=' Won' ;
        document.querySelector("button").style.display="block";
        arr[0][0].style.cssText+=anim;
        arr[1][1].style.cssText+=anim;
        arr[2][2].style.cssText+=anim;
        return true;
    }
    else if(arr[2][0].innerHTML==arr[1][1].innerHTML&&arr[2][0].innerHTML==arr[0][2].innerHTML&&arr[0][2].innerHTML!=""){
        document.getElementById("msg").style.cssText=' background-image: url("Congratulations-Gifs-Transparent-Images.gif");background-size: cover;';
        document.querySelector("h2").innerHTML+=' Won' ;
        document.querySelector("button").style.display="block";
        arr[2][0].style.cssText+=anim;
        arr[1][1].style.cssText+=anim;
        arr[0][2].style.cssText+=anim;
        return true;
    }
    
    else if(arr[0][0].innerHTML==arr[0][1].innerHTML&&arr[0][0].innerHTML==arr[0][2].innerHTML&&arr[0][2].innerHTML!=""){
        document.getElementById("msg").style.cssText=' background-image: url("Congratulations-Gifs-Transparent-Images.gif");background-size: cover;';
        document.querySelector("h2").innerHTML+=' Won' ;
        document.querySelector("button").style.display="block";
        arr[0][0].style.cssText+=anim;
        arr[0][1].style.cssText+=anim;
        arr[0][2].style.cssText+=anim;
        return true;
    }
    else if(arr[1][0].innerHTML==arr[1][1].innerHTML&&arr[1][0].innerHTML==arr[1][2].innerHTML&&arr[1][2].innerHTML!=""){
        document.getElementById("msg").style.cssText=' background-image: url("Congratulations-Gifs-Transparent-Images.gif");background-size: cover;';
        
        document.querySelector("h2").innerHTML+=' Won' ;
        document.querySelector("button").style.display="block";
        arr[1][0].style.cssText+=anim;
        arr[1][1].style.cssText+=anim;
        arr[1][2].style.cssText+=anim;
        return true;
    }
    else if(arr[2][0].innerHTML==arr[2][1].innerHTML&&arr[2][0].innerHTML==arr[2][2].innerHTML&&arr[2][2].innerHTML!=""){
        document.getElementById("msg").style.cssText=' background-image: url("Congratulations-Gifs-Transparent-Images.gif");background-size: cover;';
        document.querySelector("h2").innerHTML+=' Won' ;
        document.querySelector("button").style.display="block";
        arr[2][0].style.cssText+=anim;
        arr[2][1].style.cssText+=anim;
        arr[2][2].style.cssText+=anim;
        return true;
    }
    else if(arr[0][0].innerHTML==arr[1][0].innerHTML&&arr[0][0].innerHTML==arr[2][0].innerHTML&&arr[2][0].innerHTML!=""){
        document.getElementById("msg").style.cssText=' background-image: url("Congratulations-Gifs-Transparent-Images.gif");background-size: cover;';
        document.querySelector("h2").innerHTML+=' Won' ;
        document.querySelector("button").style.display="block";
        arr[0][0].style.cssText+=anim;
        arr[1][0].style.cssText+=anim;
        arr[2][0].style.cssText+=anim;
        return true;
    }
    else if(arr[0][1].innerHTML==arr[1][1].innerHTML&&arr[0][1].innerHTML==arr[2][1].innerHTML&&arr[2][1].innerHTML!=""){
        document.getElementById("msg").style.cssText=' background-image: url("Congratulations-Gifs-Transparent-Images.gif");background-size: cover;';
        document.querySelector("h2").innerHTML+=' Won' ;
        document.querySelector("button").style.display="block";
        arr[0][1].style.cssText+=anim;
        arr[1][1].style.cssText+=anim;
        arr[2][1].style.cssText+=anim;
        return true;
    }
    else if(arr[0][2].innerHTML==arr[1][2].innerHTML&&arr[0][2].innerHTML==arr[2][2].innerHTML&&arr[2][2].innerHTML!=""){
        document.getElementById("msg").style.cssText=' background-image: url("Congratulations-Gifs-Transparent-Images.gif");background-size: cover;';
        document.querySelector("h2").innerHTML+=' Won' ;
        document.querySelector("button").style.display="block";
        arr[0][2].style.cssText+=anim;
        arr[1][2].style.cssText+=anim;
        arr[0][2].style.cssText+=anim;
        return true;

    }
    return false;

}
function reset(){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            arr[i][j].innerHTML="";
            arr[i][j].style.removeProperty("animation-name");
        }
    }
    document.querySelector("h2").innerHTML="Player 1";
    document.getElementById("msg").style.removeProperty("background-image");
    document.querySelector("button").style.display="none";
    turn =false;
}
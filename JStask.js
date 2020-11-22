/*--------Task One--------- */


function changeColors(){
    var x=document.getElementById('inputColor').value;
    document.body.style.backgroundColor = x;

}

/*--------Task One--------- */


/*--------Task two--------- */
function ShowAnswer(){
    document.getElementById("ans1").style.color="red"
    document.getElementById("ans2").style.color="green"
    document.getElementById("ans3").style.color="red"
    document.getElementById("ans4").style.color="red"
}
/*--------Task two--------- */


/*--------Task three--------- */
function Contries(){
var v =document.getElementById("country").value;
if(v==1){
    document.getElementById('city').style.display="inline"
    document.getElementById('USA').style.display="none"  
}else{
    document.getElementById('city').style.display="none"
    document.getElementById('USA').style.display="inline"  
}
}
/*--------Task three--------- */



/*--------Task four--------- */
function UP(){

    document.documentElement.scrollTop=0;
}


function Scroll(){
        document.getElementById('up').style.display="block";
        if(document.documentElement.scrollTop==0)
        {
          document.getElementById('up').style.display="none";
        }
}
/*--------Task four--------- */



/*--------Task five--------- */
function math1(){
document.getElementById("field3").value= parseInt(document.getElementById("field1").value)+parseInt(document.getElementById("field2").value);
}
function math2(){
document.getElementById("field3").value= parseInt(document.getElementById("field1").value)-parseInt(document.getElementById("field2").value);
}
function math3(){
document.getElementById("field3").value= parseInt(document.getElementById("field1").value)*parseInt(document.getElementById("field2").value);
}
function math4(){
document.getElementById("field3").value= parseInt(document.getElementById("field1").value)/parseInt(document.getElementById("field2").value);
}


/*--------Task five--------- */


/*--------Task six--------- */
function subM(){


var f1=document.getElementById("name").value;
var f2=document.getElementById("pass").value;
var f3=document.getElementById("pass1").value;
var f4=document.getElementById("mail").value;
var f5=document.getElementById("number").value;

var divs = document.getElementsByClassName('req');

if(f1.length || f2.length || f3.length || f4.length ||f5.length == 0){
    for(i=0;i<divs.length;i++){
    document.getElementsByClassName("req")[i].style.display="inline";
}
}


if(f2 !== f3){
    document.getElementById("dif").style.display="block"
}



var matchs=new RegExp("[a-zA-Z0-9]@[a-zA-Z].[a-zA-Z]");
var results=matchs.test(f4);
if(results === false){
document.getElementById("mailError").style.display="block";
}
if(f4.length == 0 ){
 document.getElementById("mailError").style.display="none";
}

var matchsNum=new RegExp("[0-9]");
var resultsNum=matchsNum.test(f5);
if(resultsNum === false){
document.getElementById("mobile").style.display="block";
}
if(f5.length == 0 ){
 document.getElementById("mobile").style.display="none";
}




document.getElementById("name").value=""
document.getElementById("pass").value=""
document.getElementById("pass1").value=""
document.getElementById("mail").value="";
document.getElementById("number").value="";
} 
    /*--------Task six--------- */
    
    

    
    /*--------Task seven--------- */
function Check(){

    var answers=[];

    var q1=document.getElementsByName("ques1");
    var q1Final;
    for(i=0;i<q1.length;i++){
        if(document.getElementsByName("ques1")[i].checked){
            q1Final=document.getElementsByName("ques1")[i].value;
            answers.push(q1Final);
        }
    }


    var q2=document.getElementsByName("ques2");
    var q2Final;
    for(i=0;i<q2.length;i++){
        if(document.getElementsByName("ques2")[i].checked){
            q2Final=document.getElementsByName("ques2")[i].value;
            answers.push(q2Final);
        }
    }


    var q3=document.getElementsByName("ques3");
    var q3Final;
    for(i=0;i<q3.length;i++){
        if(document.getElementsByName("ques3")[i].checked){
            q3Final=document.getElementsByName("ques3")[i].value;
            answers.push(q3Final);
        }
    }


        var trueAnswers =["B","B","C"];
        var counter=0;
        for(i=0;i<answers.length;i++){
            if(trueAnswers[i]==answers[i]){
                counter++;
            }
        }

    document.getElementById("tes").innerHTML="Your Result Is : "+counter+"/3";

}
    /*--------Task seven--------- */

    




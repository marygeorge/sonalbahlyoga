 $("#name").on("click",function(){
     window.location.href="home.html";
 });
    var myAudio=document.getElementById('introAudio')
    myAudio.onload=function(){
        myAudio.currentTime = 7;
        this.play();
    }
    setTimeout(function(){
        document.getElementById('intro').style.display='none';
        document.getElementById('skip').innerHTML="";
    },12*1000);
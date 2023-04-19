function highlight(shape){
    $("#"+shape).css("border", "solid lightblue");
}
function unlight(shape){

    $("#"+shape).css("border", "hidden");  

}
function infoon(){
    $("#info").removeClass("hidden").addClass("overlay");
}
function infooff(){
    $("#info").addClass("hidden").removeClass("overlay");
}
//Uncomment this later on

    var inarr=[];   //array of user input on imgs
    var outarr=[]; //array of outputs random imgs
   // var midarr=[];
function game(){ 
    

    var flag=true;
    var i=0;
    var incnt=0;
    var l=0;
   randcnt(i);
   /*$("form img").click(function(){ 
    incnt = $(this).attr("alt");
     midarr.push(incnt);})*/

    $("form img").click(function(){ 
        incnt = $(this).attr("alt");
         inarr.push(incnt);
       
    
    if(inarr.length==outarr.length){

        for( l=0;l<outarr.length && flag==true;l++){
            if(inarr[l]==outarr[l]){
                
                flag=true;
            }else{
                flag=false;
                 $("#over").removeClass("hidden").addClass("overlay");// Game over
                // GAME OVER additional info
                 alert("Big Sad:("+"\n Your sequence: "+inarr.join()+"\n Correct Sequence: "+outarr.join()); //Game over
               
            }
        }
        i++;
        if(flag == true){
            randcnt(i);
            inarr.length=0;
        }
    }
    
    });

    }
function randcnt(a){
    for(var k=0;k<outarr.length;k++){
       // $("img[alt='"+outarr[k]+"'").css("border","solid red"); 
        preimgvisi(k,outarr);
    }
    var j=a;
    do {
        
            var rand=Math.floor(Math.random()*4);
            imgvisi(rand);
            //$("img[alt='"+rand+"'").css("border","solid red");
            outarr.push(rand);
            j++;
    } while (j<a+1);


}
function preimgvisi(b,lenth){
    if(lenth[b]==0)
    {$("img[alt='"+lenth[b]+"'").hide(00001,function(){
     $("img[alt='"+lenth[b]+"'").attr("src","images/triangle fill.svg").show().animate({opacity:'0'},(500),function(){
                     $("img[alt='"+lenth[b]+"'").attr("src","images/triangle.svg").animate({opacity:'1'});});
    });}

    if(lenth[b]==1)
    {$("img[alt='"+lenth[b]+"'").hide(00001,function(){
     $("img[alt='"+lenth[b]+"'").attr("src","images/circlefill.svg").show().animate({opacity:'0'},(500),function(){
                     $("img[alt='"+lenth[b]+"'").attr("src","images/circle.svg").animate({opacity:'1'});});
    });}

    if(lenth[b]==2)
    {$("img[alt='"+lenth[b]+"'").hide(00001,function(){
     $("img[alt='"+lenth[b]+"'").attr("src","images/starfill.svg").show().animate({opacity:'0'},(500),function(){
                     $("img[alt='"+lenth[b]+"'").attr("src","images/star.svg").animate({opacity:'1'});});
    });}

    if(lenth[b]==3)
    {$("img[alt='"+lenth[b]+"'").hide(00001,function(){
     $("img[alt='"+lenth[b]+"'").attr("src","images/squarefill.svg").show().animate({opacity:'0'},(500),function(){
                     $("img[alt='"+lenth[b]+"'").attr("src","images/square.svg").animate({opacity:'1'});});
    });}
}


function imgvisi(r){
  if(r==0)
   {$("img[alt='"+r+"'").hide(00001,function(){
    $("img[alt='"+r+"'").attr("src","images/triangle fill.svg").show().animate({opacity:'0'},3000,function(){
                    $("img[alt='"+r+"'").attr("src","images/triangle.svg").animate({opacity:'1'});});
   });}
   if(r==1)
   {$("img[alt='"+r+"'").hide(00001,function(){
    $("img[alt='"+r+"'").attr("src","images/circlefill.svg").show().animate({opacity:'0'},3000,function(){
                    $("img[alt='"+r+"'").attr("src","images/circle.svg").animate({opacity:'1'});});
   });}
   if(r==2)
   {$("img[alt='"+r+"'").hide(00001,function(){
    $("img[alt='"+r+"'").attr("src","images/starfill.svg").show().animate({opacity:'0'},3000,function(){
                    $("img[alt='"+r+"'").attr("src","images/star.svg").animate({opacity:'1'});});
   });}
   if(r==3)
   {$("img[alt='"+r+"'").hide(00001,function(){
    $("img[alt='"+r+"'").attr("src","images/squarefill.svg").show().animate({opacity:'0'},3000,function(){
                    $("img[alt='"+r+"'").attr("src","images/square.svg").animate({opacity:'1'});});
   });}

   


}




































































/*
By PRABH DHIlLON
*/
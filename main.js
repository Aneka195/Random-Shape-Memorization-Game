/*function highlight(shape){
    $("#"+shape).css("border", "solid lightblue");
}
function unlight(shape){

    $("#"+shape).css("border", "hidden");  

}
Uncomment this later on
*/
    var inarr=[];   //array of user input on imgs
    var outarr=[]; //array of outputs random imgs
function game(){ 
    
  
   var flag=true;
    var i=0;
    var incnt=0;
   randcnt(i);

    $("form img").click(function(){ 
        incnt = $(this).attr("alt");
         inarr.push(incnt);

    
    if(inarr.length==outarr.length){

        for(var l=0;l<outarr.length && flag==true;l++){
            if(inarr[l]==outarr[l]){
                
                flag=true;
            }else{
                flag=false;
                alert("u lost"+"\n"+inarr.join()+"\n"+outarr.join()+"\n");
            }
        }
        i++;
        if(flag == true){
            randcnt(i);
        }
    }
    })

    }
function randcnt(a){
    for(var k=0;k<outarr.length;k++){
        $("img[alt='"+outarr[k]+"'").css("border","solid red"); 
    }
    var j=a;
    do {
        
            var rand=Math.floor(Math.random()*4);
            $("img[alt='"+rand+"'").css("border","solid red");
            outarr.push(rand);
            j++;
    } while (j<a+1);


}






/*function highlight(shape){
    $("#"+shape).css("border", "solid lightblue");
}
function unlight(shape){

    $("#"+shape).css("border", "hidden");  

}
Uncomment this later on
*/

function game(num){
    var flag=true;
    var i=0;
    var inarr=[];
    var outarr=[];
    var incnt;
   while(flag==true){

     for(var j=1;j<=i+1;j++){
     var rand= Math.floor(Math.random()*4);
     $("img[alt='"+rand+"'").css("border", "solid red");
    outarr.push(rand);
    }

    for(var k=1;k<=outarr.length;k++){ 
        $("form img").click(function() { 
        incnt = $(this).attr("alt");
    })
    inarr.push(parseInt(incnt));
    }
    for(var l=0;l<outarr.length&& flag==true;l++){
        if(outarr[l]==inarr[l]){
            flag=true;
        }else{flag=false;}
    }
i++;
}
alert("u lost");
    }

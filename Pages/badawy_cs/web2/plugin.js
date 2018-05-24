$(document).ready(function(){
    
$(".but1").click(function()
{

    $(".signin").animate({
        top:'100px'
        },1500);
    $(".signin").animate({
        width:'450px'
        },1000);
    $(".signin").animate({
        borderRadius:'10px'
        },1);
    $(".signin").animate({
        height:'330px'
        },1000);
});

$(".exi").click(function()
{
    
$(".signin").animate({
        height:'3px'      //top
        },1000);
$(".signin").animate({
        borderRadius:'0px'    //width
        },1);
$(".signin").animate({
        width:'4px'  //rad
        },1000);
$(".signin").animate({     //height
        top:'-350px'
        },1500);
    
    
    


});
        
    });
var clicked = false;
var id = 0;

$(".btn").click(function(){

  if(!clicked){
    $("#" + this.id ).addClass("click");
    id = this.id;
    clicked = true;
  }else{
    $(".btn").removeClass("click");

    $("#" + this.id ).addClass("click");
    id = this.id;
    clicked = true;
  }
});

$(".submit").click(function(){
  $("#selected").text("You selected " + id +" out of 5")
  $(".box").addClass("hide");
  $(".box-2").removeClass("hide");
});

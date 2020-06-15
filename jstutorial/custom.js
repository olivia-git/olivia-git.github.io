
$(document).ready(function(){
/*
  alert("I am loaded");
  console.log("Hello World");
  */
  var firstName ="Don";
  var lastName='Shine';
  console.log('Hello ' + firstName + ' ' +lastName);
  firstName = 'Tom';
  console.log('Hello '+firstName);

  var is_an_excellent_teacher = true
  if(is_an_excellent_teacher == true){
    firstName='Don';
  }else{
    firstName='Tom';
  }
  console.log('Hello '+firstName+' '+lastName+'you are great');

  var foods=['pizza','past','chocolate','apples']
  /*console.log(foods.length)
  console.log(foods[0]);*/

  for(var i=0;i<foods.length;i=i++){
    /*console.log(foods[i]);*/
    $('#thingsIlike').append('<li>'+foods[i]+'</li>')
  }

  $.each(foods.fnction(key,value){
    console.log(key+':'+value);
  })
  $('#tvtower').mouseover(function(){
    console.log('mouse is over tv tower');
    $(this).hide();
  })
  $('#tvtower').mouseleave(function(){
    console.log('mouse has left tv tower');
    $(this).show();
  }
$('#hidepicture').mouseover(function(){
  console.log("Hide button clicked");
  $('#tvtower').hide();
})
$('#showpicture').click(function(){
  console.log("Show button clicked");
  $('#tvtower').show();
})
)
    $('#hidepicture').on('click', function(){
      $('#tvtower').hide();
    });
    $('#showpicture').on('click', function(){
      $('#tvtower').fadeIn(3000);
    });
    $('#changecolor').on('click',function(){
      $('thingsIlike').fadeIn().css('background-color','red').css('color','blue');
      $('#firstheading').append(' Welcome to our class');
      $('#firstheading').html(' Welcome to our class');
    })

    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function(data) {
        console.log(data);
        $.each(data.results,function(key,person){
          console.log(person.name.title+''+person.name.first+''+person.name.last);
          $('#users').append('<div class="col-md-2")'+ person.name.title+''+person.name.first+''+person.name.last+'</div>');
        })
  }
});

});

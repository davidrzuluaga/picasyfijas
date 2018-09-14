function numbergenerate () {
    random4numbers = []
    while(random4numbers.length < 4){
        randomnumber = Math.floor(Math.random()*9) + 1;
        if(random4numbers.indexOf(randomnumber) > -1) continue;
        random4numbers[random4numbers.length] = randomnumber;
    }
    return random4numbers;
};

var numbermachine = numbergenerate();

$('.modal-footer a').on('click', function(){ 
    $("tbody").empty();
    numbermachine = numbergenerate();
    console.log(numbermachine);
    $('.modal').fadeOut();
});

console.log(numbermachine);


$('input').on('keyup', function (e) {
    var number = $('#number').val();
    var numberarray = number.split("");
    
    function unique4 (){
        sorted_arr = numberarray.slice().sort(); 
        results = [];
        for (var i = 0; i < sorted_arr.length - 1; i++) {
            if (sorted_arr[i + 1] == sorted_arr[i]) {
                results.push(sorted_arr[i]);
            }
        }
        return results.length == 0;
    }
    
    function fijas (){
       fijas = 0;
       for (i = 0; i < 4; i++){
           numberarray[i] == numbermachine[i] ? fijas++ : 0;
       }
       return fijas;
    };
    
    function picas (){
        picas = 0;
        for (i=0; i < 4; i++){
            var match = function(element) {
                return element == numbermachine[i];
              };
            numberarray.some(match) ? picas++ : 0;
        };
        return picas;
    };

    if (e.which == 13) {
        if (numberarray.length == 4 && unique4()) {

            $('.howto span').css('color', 'black');  
            $('input').css('border-color', 'initial');
            $('.table').show();

            $('tbody').append('<tr><td>'+number+'</td><td>'+Math.abs((+fijas())-(+picas()))+'</td><td>'+fijas+'</td></tr>');
           
            if (fijas == 4) {
                $('.modal').fadeIn(); 
            };
            
            $('input').val("");
            
        } else {
           $('.howto span').css('color', 'red');
           $('input').css('border-color', 'red');
        }
    };
});

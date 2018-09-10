function numbergenerate () {
    random4numbers = []
    while(random4numbers.length < 4){
        randomnumber = Math.floor(Math.random()*9) + 1;
        if(random4numbers.indexOf(randomnumber) > -1) continue;
        random4numbers[random4numbers.length] = randomnumber;
    }
    return random4numbers;
};

numbergenerate();

$('input').on('keyup', function (e) {
    numberarray = $(this).val().split("");
    
    for (i=0; i < numberarray.length; i++) {
        numberarray[i] != numberarray[0]
        numberarray[i] != numberarray[1]
        numberarray[i] != numberarray[2]
        numberarray[i] != numberarray[3]
    }

   if (e.which == 13) {
       if (numberarray.length == 4) {
        $('.howto span').css('color', 'black');           
        $('.table').show();
        
       } else {
           $('.howto span').css('color', 'red');
       }

   };
});
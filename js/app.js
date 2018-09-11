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
console.log(numbermachine);

$('input').on('keyup', function (e) {
    var number = $(this).val();
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

   if (e.which == 13) {
        if (numberarray.length == 4 && unique4()) {
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
                    var even = function(element) {
                        return element == numbermachine[i];
                      };
                    numberarray.some(even) ? picas++ : 0;
                };
                return picas;
            };
           

            $('.howto span').css('color', 'black');           
            $('.table').show();

            $('tbody').append('<tr>');           
            $('tbody').append('<td>'+number+'<td>');
            $('tbody').append('<td>'+Math.abs((+fijas())-(+picas()))+'</td>');
            $('tbody').append('<td>'+fijas+'</td>');
            $('tbody').append('</tr>');
            
            $('input').val("");
       } else {
           $('.howto span').css('color', 'red');
       }

   };
});
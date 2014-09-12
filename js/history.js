var arrayofselecteditems = new Array();


    
//var history = window.localStorage;


function update_arrayofselecteditems(name,quantity,cost){
    var fooddetail = {
        'name':name,
        'quantity':quantity,
        'cost':cost
    };
    arrayofselecteditems.push(fooddetail);
}
    
function updatehistory(){

    
    var wholedates = '';
    var w1 = '';
    var w2 = '';
    var cost = 0;
    var total = 0;
    
    var nohistory = 1;
    
    
    
    for(var i in window.localStorage){

        i = $.trim(i);

        var temp = JSON.parse( window.localStorage.getItem( i ) );

        if( i.indexOf(' ') == -1 ){
            continue;
        }
        nohistory = 0;

        var date = i.split(" ");
        var time = coverttotime(date[4]);

        w1 += '<div class="onedate">';
        w1 += '<div class="fooditem fooditem-date">';
        w1 += '<span class="name" id="name">'+time+' '+date[2]+' '+date[1]+' '+date[3]+'</span><span class="cost" id="cost">';
        w2 += ' Rs</span><span class="glyphicon glyphicon-chevron-down icon"></span></div>'; // FOODITEM-date DIV closed
        w2 += '<div class="fooditem-subs-cont">';
            for( var j=0; j<temp.length; j++ ){
                w2 += '<div class="fooditem-subs"><span class="name">'+temp[j].name+' x '+temp[j].quantity+'</span><span class="cost">'+temp[j].cost+' Rs</span></div>';
                cost += temp[j].cost;
            }
        w2 += '</div>';
        w2 += '</div>';


        total += cost;
        wholedates += w1+cost+w2;
        w1 = '';
        w2 = '';
        cost = 0;
    }
    
    
    wholedates += '<div class="fooditem total-css"><span class="name" id="name">Total</span><span class="cost" id="cost">'+total+' Rs</span></div>';
    
    if( nohistory == 1 ){
        wholedates = '<div class="fooditem no-margin"><span class="name" id="name">No Saved History!<br>Are you sure you clicked save button after confirming the menu?</span></div>';
    }
    $('#history').html(wholedates);
}

function savehistory(){
    
    if( arrayofselecteditems.length == 0){
        alert('No Items to save!');
    }
    else {
        var currentTime = new Date();
        window.localStorage.setItem(currentTime, JSON.stringify(arrayofselecteditems) );
        alert('Saved!');
    }
    
}
    
function clearhistory(){
    
    window.localStorage.clear();
    arrayofselecteditems = [];
    
    
}
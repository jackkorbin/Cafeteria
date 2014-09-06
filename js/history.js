var arrayofselecteditems = new Array();


    
var history = window.localStorage;


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
    var cost = 0;;
    var total = 0;
    if( history.length == 0 ){
        wholedates = '<div class="onedate">No History. <br>Are you sure You Saved your order?</div>';
    }
    else{
        for(var i in history){
            
            alert(i);
            
            var temp = JSON.parse( history.getItem( i ) );
            var date = i.split(" ");
            
            if( date.length != 9){
                continue;
            }
            
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
    }
    
    wholedates += '<div class="fooditem total-css"><span class="name" id="name">Total</span><span class="cost" id="cost">'+total+' Rs</span></div>';
    
    
    $('#history').html(wholedates);
}

function savehistory(){
    
    var currentTime = new Date();
    history.setItem(currentTime, JSON.stringify(arrayofselecteditems) );
    
}
    
function clearhistory(){
    
    history.clear();
    arrayofselecteditems = [];
    hidehistorytab();
}
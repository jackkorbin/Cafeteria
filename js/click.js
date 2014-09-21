$(document).on("click", ".onedate", function() {
    $(this).find('.fooditem-subs-cont').slideToggle(200);
    $(this).find('.fooditem-date .icon').slideToggle(200);
    
});


$(document).on('click','#hidehistorytab',function(){
    hidehistorytab();
});

$(document).on('click','#btn-history',function(){
    showhistorytab();
    updatehistory();
});

$(document).on("click", "#clearhistory", function() {
    var confrm = confirm('Erase all the History?');
    if( confrm == true ){
        clearhistory();
        updatehistory();
        hidehistorytab();
    }
});
    
$(document).on("click", "#savehistory", function() {
    savehistory();
    clearall();
});



var showselitems = 0;
$(document).on("click", "#showselecteditems", function() {
    if( showselitems == 0 ){
        showselecteditems();
        showselitems = 1;
        $('#showselecteditems span').html('Show All Items');
    }
    else{
        showallitems();
        showselitems = 0;
        $('#showselecteditems span').html('Show Only Selected Items');
    }
});

// CLEAR ALL -->    
$(document).on("click", "#clear", function() {
    
    if( historytab == 0 ){
        clearall();
        hideselected();
    }
    else{
        hidehistorytab();
    }
});


// SELECTED BOX SLIDES -->    
var togglebool = 1;    
$(document).on("click", "#confirm", function(e) {
    
////    if( booleanconfirm == 0 ){
////        e.preventDefault;
////    }
//    else{
    if( togglebool == 1 ){
        showselected();
    }
    else{
        hideselected();
        togglebool = 1;
    }
    
    
});
$(document).on("click", ".bottom-tab-button-back.back", function() {
    hideselected();
});


$(document).on("click", ".reset", function() {
    
    var id = $(this).attr('id');
    var i = id.replace('reset','');
    $('#quan'+i).val(0).trigger('change');
    
});
    

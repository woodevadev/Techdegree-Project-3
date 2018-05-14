//When the page loads this gives focus
//to the name text field and hides the
//other job role text fiel
$(document).ready(function(){
    $('#name').focus();
    $('#other-title').hide();
});

//This hides or shows the other job role 
//text field based on what is picked in the
//select field
$('#title').on('click', function(event){
    if($(event.target).val() == 'other'){
        $('#other-title').show();
    }else{
        $('#other-title').hide();
    }
});


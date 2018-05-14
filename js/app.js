//Selects color select field and places
//a new option in it.  The value is then
//switched to show this selection
let $colorPlaceHolder = $('<option value="please"><-- Please select a T-shirt theme</option>');
$('#color').prepend($colorPlaceHolder);
$('#color').val('please');

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

//Select the options in the color select field
let $colorOptions = $('#color').children();

function hideColors(designSelection){
    $colorOptions.hide();
    if(designSelection == 'js puns'){
        $($colorOptions[1]).show();
        $($colorOptions[2]).show();
        $($colorOptions[3]).show();
    }else if(designSelection == 'heart js'){
        $($colorOptions[4]).show();
        $($colorOptions[5]).show();
        $($colorOptions[6]).show();
    }else if(designSelection == 'select'){
        $($colorOptions[0]).show();
    }
}

$('#design').on('click', function(event){
    if($(event.target).val() == 'js puns'){
        hideColors($(event.target).val());
        $('#color').val('cornflowerblue');
    }else if( $(event.target).val() == 'heart js'){
        hideColors($(event.target).val());
        $('#color').val('tomato');
    }else{
        hideColors('select');
        $('#color').val('please');
    }
});
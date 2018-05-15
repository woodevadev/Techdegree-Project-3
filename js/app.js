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

//Hides the appropraite colors based on
//the selection sent to the function
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

//Handles changing the color options
//based on design selection
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

//Selects all inputs within activities class
let $inputSelector = $('.activities label input');

//Selects all labels within activites class
let $labelSelector = $('.activities label');

function disableEnable(index, eOrD){
    if(eOrD == 'enable'){
        $($inputSelector[index]).removeAttr('disabled');
        $($labelSelector[index]).css('color','black');
    }else if(eOrD == 'disable'){
        $($inputSelector[index]).attr('disabled', 'true');
        $($labelSelector[index]).css('color', 'gray');
    }
}

//Appends an h4 tag to the bottom of the 
//activities fieldset and hides it
const anh4 = $('<h4 class="total">Total:</h4>');
$('.activities').append(anh4);
let $totalh4 = $('.total');
$($totalh4).hide();

//This function checks to see if any of the
//activities are checked.  If not then the total
//h5 will hide and vise versa
function anyChecked(){
    let isTrue = false;
    $($inputSelector).each(function(index){
        if($($inputSelector[index]).is(":checked")){
            console.log('one is checked');
            isTrue = true;
        }
    });
    return isTrue;
}

//Initialize total to zero
let total = 0;

$('.activities').on('click', 'input', function(event){
    //This block handles the disabling of same time
    //events if there is a conflict
    let boxIndex = ($(event.target).parent().index());
    if(boxIndex == 2){;
        if($($inputSelector[1]).is(":checked") == true){
            disableEnable(3, 'disable');
        }else if($($inputSelector[1]).is(":checked") == false){
            disableEnable(3, 'enable');
        }
    } 
    if(boxIndex == 4){
        if($($inputSelector[3]).is(":checked") == true){
            disableEnable(1, 'disable');
        }else if($($inputSelector[3]).is(":checked") == false){
            disableEnable(1, 'enable');
        } 
    }
    if(boxIndex == 3){;
        if($($inputSelector[2]).is(":checked") == true){
            disableEnable(4, 'disable');
        }else if($($inputSelector[2]).is(":checked") == false){
            disableEnable(4, 'enable');
        }
    } 
    if(boxIndex == 5){
        if($($inputSelector[4]).is(":checked") == true){
            disableEnable(2, 'disable');
        }else if($($inputSelector[2]).is(":checked") == false){
            disableEnable(2, 'enable');
        } 
    }

    //This block controls the total amount shown
    //if the amount is zero then the total identifier
    //is hidden
    if(anyChecked){
        $($totalh4).show();
        if(boxIndex == 1){
            if($($inputSelector[boxIndex - 1]).is(':checked') == true){
                total = total + 200;
            }else{
                total = total - 200;
            }
        }else if(boxIndex > 1){
            if($($inputSelector[boxIndex - 1]).is(':checked') == true){
                total = total + 100;
            }else{
                total = total - 100;
            }
        }
        if(total == 0){
            $($totalh4).hide();    
        } 
        $($totalh4).html(`<h4>Total: $${total}</h4>`);
    }else{
        $($totalh4).hide();
        total = 0;
    }   
});

//Selectors for the different payment methods
//information
const $divCreditCard = $('#credit-card');
const $divPaypal = $($divCreditCard).next();
const $divBitcoin = $($divPaypal).next();

//Hide each element to be shown when a 
//selection is made
$divCreditCard.hide();
$divPaypal.hide();
$divBitcoin.hide();

//Handles the showing of different payment
//informations
$('#payment').on('click',function(event){
    if($(event.target).val() == 'select_method'){
        $divCreditCard.hide();
        $divPaypal.hide();
        $divBitcoin.hide();
    }else if($(event.target).val() == 'credit card'){
        $divCreditCard.show();
    }else if($(event.target).val() == 'paypal'){
        $divPaypal.show();
    }else if($(event.target).val() == 'bitcoin'){
        $divBitcoin.show();
    }
});
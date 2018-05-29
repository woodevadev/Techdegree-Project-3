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
$('#title').on('change', function(event){
    if($(event.target).val() == 'other'){
        $('#other-title').show();
    }else{
        $('#other-title').hide();
    }
});

//Select the options in the color select field
let $colorOptions = $('#color').children();
$colorOptions.hide();
$($colorOptions[0]).show();

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
$('#design').on('change', function(event){
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

//This handles the events on the activities field
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
$('#payment').on('change',function(event){
    if($(event.target).val() == 'select_method'){
        $divCreditCard.hide();
        $divPaypal.hide();
        $divBitcoin.hide();
    }else if($(event.target).val() == 'credit card'){
        $divCreditCard.show();
        $divPaypal.hide();
        $divBitcoin.hide();
    }else if($(event.target).val() == 'paypal'){
        $divPaypal.show();
        $divCreditCard.hide();
        $divBitcoin.hide();
    }else if($(event.target).val() == 'bitcoin'){
        $divBitcoin.show();
        $divCreditCard.hide();
        $divPaypal.hide();
    }
});

//Selects all the neccessary fields for validation
const $nameField = $('#name');
const $emailField = $('#mail');
const $paymentField = $('#payment');
const $ccField = $('#cc-num');
const $zipField = $('#zip');
const $cvvField = $('#cvv');

//Selects all labels to change to red
const $labelName = $('label[for="name"]');
const $labelEmail = $('label[for="mail"]');
const $labelActivities = $('.activities legend');
const $labelPayment = $('label[for="payment"]');
const $labelCCnum = $('label[for="cc-num"]');
const $labelZip = $('label[for="zip"]');
const $labelCvv = $('label[for="cvv"]');

//Function for showing off which field is 
//incorrect also alerts based on certain
//inputs
function showMissed(indexOfMissed){
    if(indexOfMissed == 0){
        alert('Invalid name');
        $labelName.css('color', 'red');
    }
    if(indexOfMissed == 1){
        alert('Invalid email address');
        $labelEmail.css('color', 'red');
    }
    if(indexOfMissed == 2){
        alert('Please choose atleast one activity')
        $labelActivities.css('color', 'red');
    }
    if(indexOfMissed == 3){
        alert('Please choose a payment method');
        $labelPayment.css('color', 'red');
    }
    if(indexOfMissed == 4 || indexOfMissed == 5){
        alert('Invalid credit card number');
        $labelCCnum.css('color', 'red');
    }
    if(indexOfMissed == 6 || indexOfMissed == 7){
        alert('Invalid zip code');
        $labelZip.css('color', 'red');
    }
    if(indexOfMissed == 8 || indexOfMissed == 9){
        alert('invalid cvv number');
        $labelCvv.css('color', 'red');
    }
}

//Initializes missed to 0
let missed = 0;

//Regular expressions for testing inputs
let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
let numReg = /^[0-9]+$/;

//This block provides form validation
$('button').on('click', function(event){
    //Validates name field
    if($nameField.val() == ''){
        event.preventDefault();
        missed ++;
        showMissed(0);
    }
    //Validates email field by checking agains
    //emailReg regular expression
    if(emailReg.test($($emailField).val()) == false || $($emailField).val() == ''){
        event.preventDefault();
        missed ++;
        showMissed(1);
    }
    //Validates that any activities have been checked
    if (anyChecked() == false){
        event.preventDefault();
        missed ++;
        showMissed(2);
    }
    //Validates that select payment method isnt chosen
    if($($paymentField).val() == 'select_method'){
        event.preventDefault();
        missed ++;
        showMissed(3);
    }
    //This block validates all of the credit card information
    //checking for both length of numbers and that they are 
    //indeed numbers
    if($($paymentField).val() == 'credit card'){
        if(numReg.test($($ccField).val()) == false){
            event.preventDefault();
            missed ++;
            showMissed(4);
        }else if($($ccField).val().length > 16 || $($ccField).val().length < 13){
            event.preventDefault();
            missed ++;
            showMissed(5);
        }
        if(numReg.test($($zipField).val()) == false){
            event.preventDefault();
            missed ++;
            showMissed(6);
        }else if($($zipField).val().length != 5){
            event.preventDefault()
            missed ++;
            showMissed(7);
        }
        if(numReg.test($($cvvField).val()) == false){
            event.preventDefault();
            missed ++;
            showMissed(8);
        }else if($($cvvField).val().length != 3){
            event.preventDefault();
            missed ++;
            showMissed(9);
        }
    }
    //If atleast one field is missing alerts user
    if(missed > 1){
        alert('Please complete the sections marked in red');
    }

    missed = 0;
});
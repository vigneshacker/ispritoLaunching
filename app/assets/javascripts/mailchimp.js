$(document).ready(function(){
 
  $('form#invite')
    .bind("ajax:beforeSend", function(evt, xhr, settings){
      var $divResponse = $('#msubmit');
 
      // Update the text of the submit button to let the user know stuff is happening.
      // But first, store the original text of the submit button, so it can be restored when the request is finished.
      $divResponse.data( 'origText', $divResponse.val() );
      $divResponse.val( "PLease wait...." );
 
    })
    .bind("ajax:success", function(evt, data, status, xhr){
      var $form = $(this);
       var $divResponse = $('.success-message');
 
      // Reset fields and any validation errors, so form can be used again, but leave hidden_field values intact.
      $form.find('input[type="email"]').val("");
      $form.find('input[type="submit"]').val("Sign up");
      $divResponse.closest("div.success").addClass("db");
      $divResponse.html(data.message);
    })
    .bind('ajax:complete', function(evt, xhr, status){
      var $divResponse = $('#msubmit');
    })
    .bind("ajax:error", function(evt, xhr, status, error){
       var $divResponse = $('.error-message'),
          errors,
          errorText,
      errorList;
 
      try {
        // Populate errorText with the comment errors
        errors = $.parseJSON(xhr.responseText);
      } catch(err) {
        // If the responseText is not valid JSON (like if a 500 exception was thrown), populate errors with a generic error message.
        errors = {message: "Please reload the page and try again"};
      }
 
      // Build an unordered list from the list of errors
      errorText = "Something went wrong.";
      // errorList = "<ul>"
      // for ( error in errors ) {
      //   errorList += "<li>" + error + ': ' + errors[error] + "</li> ";
      // }
 
      // errorList += "</ul>";
 
      // Insert error list into form
      $divResponse.html(errorText);
      $form.find('input[type="submit"]').val("Sign up");
      $divResponse.closest("div.error").addClass("db");
    });
 
});
(function($) {
  "use strict";

  function trackContact() {
    var $contacForm = $(this);

    woopra.track("Contact", {
      company: $contacForm.find('[id="contact[company]"]').val(),
      username: $contacForm.find('[id="contact[name]"]').val(),
      email: $contacForm.find('[id="contact[email]"]').val(),
      message: $contacForm.find('[id="contact[message]"]').val()
    });
  }

  $('#contact_form').on('submit', trackContact);

  $('#wish').on('click', function() {
    woopra.track("Wish", {});
    return false;
  });

  $('#wish_navbar').on('click', function() {
    woopra.track("Wish Navigation Bar", {});
    return false;
  });
}(jQuery));

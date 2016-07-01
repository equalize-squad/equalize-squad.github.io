
(function() {
  var $contactForm = $('#contact_form');

  function showError(field, message) {
    var $field = $('#contact_'+field);

    var $wrapper = $field.parent();
    $wrapper
      .addClass('has-error')
      .prepend(
        $('<label class="control-label" for="contact_'+field+'"></label>').text(message)
      );
  }

  function cleanErrors() {
    $contactForm.find('.form-group').each(function() {
      $(this)
        .removeClass('has-error')
        .find('.control-label')
          .remove();
    })
  }

  function onSubmitContactForm(e) {
    cleanErrors();

    $.ajax({
      beforeSend: function () {
        $('.pre-loader').fadeIn('600');
      },
      complete: function () {
        $('.pre-loader').fadeOut();
      },
      type: 'POST',
      url: 'https://equalizei.herokuapp.com/contacts',
      data: $(this).serialize()
    })
      .done(function() {
        $contactForm.remove();
        $('#thank_you_message').removeClass('hide');
      })
      .fail(function(res) {
        var errors = res.responseJSON.errors;
        for (var field in errors) {
          showError(field, errors[field][0]);
        }
      });

    e.preventDefault();
    e.stopPropagation();
  }

  $contactForm.on('submit', onSubmitContactForm);
})();

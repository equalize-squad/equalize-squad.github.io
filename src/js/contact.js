
(function() {
  var $contactForm = $('#contact_form'),
    $message = $('#message');

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
        $('#preloader').fadeIn(function() {$('#status').fadeIn();})
      },
      complete: function () {
        $('#status').fadeOut(function () {
          $('#preloader').delay(350).fadeOut('slow');
        });
      },
      type: 'POST',
      url: 'https://app.equalize.io/contacts',
      data: $(this).serialize()
    })
      .done(function() {
        $contactForm.slideUp('slow');
        $message.slideDown('hide');
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

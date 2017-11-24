(function() {
  var $masked = $("[data-plugin='mask']");
  var i, input, len, ref;
  for (i = 0, len = $masked.length; i < len; i++) {
    input = $masked[i];
    if ($(input).data("pattern") === "phone-number" && $(input).data("country-code") === "BR") {
      var phoneNumberBehavior = function(val) {
        var phoneNumber = val.replace(/\D/g, "");
        if (phoneNumber.length === 11) {
          return "(00) 00000-00009";
        } else if (phoneNumber.length === 12) {
          return "(+00) 00 0000-00009";
        } else if (phoneNumber.length === 13) {
          return "(+00) 00 00000-0000";
        } else {
          return "(00) 0000-00009";
        }
      };
      var opts = {
        onKeyPress: function(val, e, field, options) {
          field.mask(phoneNumberBehavior.apply({}, arguments), options);
        }
      };
      $(input).mask(phoneNumberBehavior, opts);
    }
  }
})();

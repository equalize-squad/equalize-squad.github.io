// Event snippet for Landing Page conversion page
// In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
function gtag_report_conversion(url) {
    var callback = function () {
        if (typeof(url) != 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-879638781/EnJ1CMfYoHkQ_fG4owM',
        'event_callback': callback
    });
    return false;
}

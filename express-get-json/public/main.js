
/* global $ */
$.ajax({
  url: '/api/grades',
  dataType: 'json',
  success: function (data) {
    // eslint-disable-next-line no-console
    console.log(data);
  },
  error: function (data) {
    // eslint-disable-next-line no-console
    console.log(data);
  }

});

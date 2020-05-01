$(function () {
  // Inch Input Field Snippets
  // upon selecting input field, selects all current text so that users new input will clear it
  $('#inches').click(function () {$(this).select();});

  // converts user's inch input to millimeters and displays in millimeters input field
  $('#inches').keyup(function () {
    $('#milli').val(($('#inches').val() * 25.4).toFixed(3));
  });

  // Millimeter Input Field Snippets
  // upon selecting input field, selects all current text so that users new input will clear it
  $('#milli').click(function () {$(this).select();});

  // converts user's millimeter input to inchess and displays in inches input field
  $('#milli').keyup(function () {
    $('#inches').val(($('#milli').val() * 0.039370).toFixed(3));
  });
});

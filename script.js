// 0. before changing to jquery
// var btn = document.getElementById('request');
// var bio = document.getElementById('bio');
// var url = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/Bio.txt";
// var request = new XMLHttpRequest();

// btn.addEventListener('click', function() {
//   this.style.display = 'none';
//   request.open('GET', url);
//   request.send();
// });

// request.onreadystatechange = function() {
//   if(request.readyState === 4) {
//     bio.style.border = '1px solid #e8e8e8';
//     if(request.status === 200) {
//       bio.innerHTML = request.responseText;
//     } else {
//       bio.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
//     }
//   }
// }

(function($) {


  // 2. changing to jquery format, notice we don't define the XHR class anymore
  var $btn = $('#request');
  var $bio = $('#bio');
  var $loader = $('.loader');

  $btn.on('click', function(e) {
    e.preventDefault();

    var server_url = 'https://yoda.p.mashape.com/yoda';
    var sentence = encodeURI($('#yoda').val());
    var yoda_url = server_url + '?sentence=' + sentence;

    $.ajax({
      url: yoda_url,
      headers: {'X-Mashape-Key': 'PKKkfvpJJlmsh0DCqZgR7QghqloUp1QSMVwjsnp0wTzfE52ZkO'},
      dataType: 'html',
      // show the loader before making the request
      beforeSend: function() {
        $loader.show();
      }
    }).done(successFunction)
      .fail(failFunction)
      .always(alwaysFunction);
  });

    function successFunction(data) {
    $bio.css('border', '1px solid #e8e8e8');
    // if data exists
    if (data.length > 0) {
      console.log(data);

      $bio.text(data);

    }
  }

  function failFunction(request, textStatus, errorThrown){
    $bio.text('An error occurred during your request: ' +  request.status + ' ' + textStatus + ' ' + errorThrown);
  }

  // always function
  function alwaysFunction() {
    // hide the loader
    console.log('lala')
    $loader.hide();
    // $body.css('overflow', 'hidden');
  }

})(jQuery);

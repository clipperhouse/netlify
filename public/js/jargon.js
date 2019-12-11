(function() {
  $("form").on("submit", function(e) {
    var url = this.action + $('input[name=format]:checked').val();
    var data = $(this).find('textarea').val();
    var result = $(this).find(".result");
    $.ajax({
      type: "POST",
      url: url,
      crossDomain: false,
      data: data,
      success: function(html) {
        result.html(html);
        html ? result.show() : result.hide();
      }
    });
    e.preventDefault();
  });

  var radios = $("input[name=format]");
  var examples = $("#examples");
  radios.on("click", function(e) {
    var ex = examples.find("#" + this.id).find("code");
    var form = $(this.form);
    var input = form.find("textarea");
    var result = form.find(".result");
    var val = ex.html().trim();
    
    input.val(htmlDecode(val));
    result.html("").hide();
  });

  setTimeout(() => {
    radios.first().click();    
  }, 1);

  if (location.hostname == "localhost") {
   $("form").attr("action", "//localhost:8080/");
  }

  function htmlDecode(value){
    return $('<div/>').html(value).text();
  }

  // ping for warmup
  var ping = $("form").attr("action") + $('input[name=format]:checked').val();
  $.get(ping, function(data){
    console.log(data);
  });
})();

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
  radios.on("change", function(e) {
    var ex = examples.find("#" + this.id);
    var form = $(this.form);
    var input = form.find("textarea");
    var result = form.find(".result");
    var val = htmlEncode(ex.html().trim())
    
    input.val(htmlDecode(val));
    result.html("").hide();
  });
  radios.first().click();

  if (location.hostname == "localhost") {
    $("form").attr("action", "//localhost:8080");
  }

  function htmlEncode(value){
    //create a in-memory div, set it's inner text(which jQuery automatically encodes)
    //then grab the encoded contents back out.  The div never exists on the page.
    return $('<div/>').text(value).html();
  }

  function htmlDecode(value){
    return $('<div/>').html(value).text();
  }

  // ping for warmup
  var ping = $("form").attr("action") + "/jargon/text";
  $.get(ping, function(data){
    console.log(data);
  });
})();

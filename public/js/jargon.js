(function() {
  $("form").on("submit", function(e) {
    var url = this.action;
    var data = $(this).serialize();
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
  var examples = $("#text-examples");
  radios.on("change", function(e) {
    var ex = examples.find("#" + this.id);
    var form = $(this.form);
    var input = form.find("textarea");
    var result = form.find(".result");
    input.val(ex.text().trim());
    result.html("").hide();
  });
  radios.first().click();

  if (location.hostname == "localhost") {
    $("form").attr("action", "//localhost:8080");
  }
})();

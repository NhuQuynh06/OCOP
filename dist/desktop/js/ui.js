
var chapterItem = $(".list-chapter .item");
$(chapterItem).click(function (e) {
  e.preventDefault();
  var data = $(this).attr("data");
  $("html, body").animate(
    {
      scrollTop: $("." + data).offset().top,
    },
    800
  );
});

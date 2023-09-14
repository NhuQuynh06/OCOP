// scroll chapter
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

// toggle product
var title = $(".grid-one .title");
title.click(function (e) {
  e.preventDefault();
  var content = $(this).siblings();
  content.slideToggle();
});

// nav-tab
const $navTabLink = $(".nav-tabs .link a");
const $navTabContent = $(".nav-tabs .content ");

$(".nav-tabs .link a").click(function (e) {
  // INFO: prevent hash-jumping from anchor element
  e.preventDefault();
  const $this = $(e.target);
  const chosenTab = $this.attr("data-link");
  $navTabLink.removeClass("active");
  $this.addClass("active");
  $navTabContent.find(".tab-pane").removeClass("active");
  $(".nav-tabs .content ." + chosenTab).addClass("active");
});

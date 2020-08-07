// Create a new list item when clicking on the "Add" button
var saveBtn = document.getElementById("#saveBtn");
var textarea = document.getElementById("#textarea1");
$(document).ready(function(){
  $("*[data-store]").each(function () {
    $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
  });
  $("#saveBtn1").on("click", function (itm) {
    localStorage.setItem ("item-" + $("#textarea1").attr("data-store"), textarea1.value);
  });
  $("#saveBtn2").on("click", function (itm) {
    localStorage.setItem ("item-" + $("#textarea2").attr("data-store"), textarea2.value);
  });
  $("#saveBtn3").on("click", function (itm) {
    localStorage.setItem ("item-" + $("#textarea3").attr("data-store"), textarea3.value);
  });
  $("#saveBtn4").on("click", function (itm) {
    localStorage.setItem ("item-" + $("#textarea4").attr("data-store"), textarea4.value);
  });
  $("#saveBtn5").on("click", function (itm) {
    localStorage.setItem ("item-" + $("#textarea5").attr("data-store"), textarea5.value);
  });
  $("#saveBtn6").on("click", function (itm) {
    localStorage.setItem ("item-" + $("#textarea6").attr("data-store"), textarea6.value);
  });
  $("#saveBtn7").on("click", function (itm) {
    localStorage.setItem ("item-" + $("#textarea7").attr("data-store"), textarea7.value);
  });
  $("#saveBtn8").on("click", function (itm) {
    localStorage.setItem ("item-" + $("#textarea8").attr("data-store"), textarea8.value);
  });
  $("#saveBtn9").on("click", function (itm) {
    localStorage.setItem ("item-" + $("#textarea9").attr("data-store"), textarea9.value);
  });
  $("#saveBtn10").on("click", function (itm) {
    localStorage.setItem ("item-" + $("#textarea10").attr("data-store"), textarea10.value);
  });
})
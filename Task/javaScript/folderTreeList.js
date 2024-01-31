document.addEventListener("DOMContentLoaded", function () {
  var folderIcons = document.querySelectorAll(".fa-folder");

  folderIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      icon.classList.toggle("fa-folder-open");
    });
  });
});

var mainTree = document.getElementsByClassName("folderTreeList")[0];
var branchTree = document.getElementsByClassName("folderTree")[0];
var branch_1 = document.getElementsByClassName("branch1")[0];
var branch_2 = document.getElementsByClassName("branch2")[0];
var branch_3 = document.getElementsByClassName("branch3")[0];

mainTree.addEventListener("click", function () {
  branch_1.classList.toggle("hidden1");
  branch_2.classList.toggle("hidden1");
});
branchTree.addEventListener("click", function () {
  branch_3.classList.toggle("hidden2");
});

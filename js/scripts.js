// Business Logic

function UserInfo() {
  this.details = [],
  this.currentId = 0
}

UserInfo.prototype.addDetails = function(detail) {
  this.details.push(detail);
}


function Details(name, balance) {
  this.name = name,
  this.balance = balance
}

function displayUserDetails(detailsToDisplay) {
  var detailList = $("ul#users-and-balances");
  var htmlForUserInfo = "";
  detailsToDisplay.details.forEach(function(detail) {
    htmlForUserInfo += "<li id=" + detail.id + ">" + "Name: " + detail.name + "<br>" + "Balance: " + detail.balance + "</li>";
  })
  detailList.html(htmlForUserInfo);
}

//User Interface Logic
var userInfo = new UserInfo();

$(document).ready(function() {
  $("form#initial-form").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var initialDeposit = $("input#initial-deposit").val();
    var newDetail = new Details(name, initialDeposit);
    userInfo.addDetails(newDetail);
    displayUserDetails(userInfo);


  })
  $("form#balance-change-form").submit(function(event){
    event.preventDefault();

  })
})

// Business Logic

function UserInfo() {
  this.details = [],
  this.currentId = 0
  console.log(this.details);
}

UserInfo.prototype.addDetails = function(detail) {
  detail.id = this.assignId();
  this.details.push(detail);
  // console.log(this.details);

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

UserInfo.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}



function modifiedBalance(balance, amount) {
  return balance + newBalance;

}


//User Interface Logic
var userInfo = new UserInfo();

$(document).ready(function() {
  $("form#initial-form").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var initialDeposit = parseInt($("input#initial-deposit").val());
    var newDetail = new Details(name, initialDeposit);
    userInfo.addDetails(newDetail);
    displayUserDetails(userInfo);


  })




  $("form#balance-change-form").submit(function(event){
    event.preventDefault();

    var amount = parseInt($("input#amount").val());
    $("ul#users-and-balances").html("");
      displayUserDetails(userInfo);
      console.log(userInfo.details);






  })
})

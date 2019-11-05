// Business Logic

function UserInfo() {
  this.details = []
}

UserInfo.prototype.addDetails = function(detail) {
  this.details.push(detail);
}


function Details(name, balance) {
  this.name = name,
  this.balance = balance
}

//User Interface Logic
var userInfo = new UserInfo();

$(document).ready(function() {
  $("form#initial-form").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var initialDeposit = $("input#initial-deposit").val();
    var newDetail = new Details(name, initialDeposit);
    console.log(newDetail);
    userInfo.addDetails(newDetail);
    console.log(userInfo.addDetails(newDetail));


  })
  $("form#balance-change-form").submit(function(event){
    event.preventDefault();

  })
})

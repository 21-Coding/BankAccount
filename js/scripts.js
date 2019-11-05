function UserInfo() {
  this.details = []
}

UserInfo.prototype.addDetails = function(detail) {
  this.details.push(detail);
}

function Details(firstName, lastName, balance) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.balance = balance
}

Details.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}


var user = new UserInfo();
var details = new Details("Ada", "Lovelace", "503-555-0100");
var details2 = new Details("Grace", "Hopper", "503-555-0199");
user.addDetails(details);
user.addDetails(details2);

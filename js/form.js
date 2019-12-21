// JavaScript Document

function getData() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email");
	var message = document.getElementById("message");
	var request = {
		name,
		surname,
		email,
		date,
		message
	};
	this.Request = request;
	console.log(this.Request);
	this.sendEmail();
}

function sendEmail() {
  var mail =
    "mailto:" +
    Request.email +
    "?subject=" +
    Request.name +
    " " +
    Request.surname +
    "&body=" +
    "Vielen Dank für deine Nachricht." +
    " " +
    Request.surname +
    "%0D%0A" +
    "%0D%0A" +
    Request.message;
  var a = document.createElement("a");
  a.href = mail;
  a.click();
}
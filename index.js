var usernamePassword = new Object();
usernamePassword["demo@demo.com"] = "demo";

function checkLogin() {
  var userName = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;
  if (usernamePassword[userName] == password) {
    window.location.replace("mainUI.html");
  } else {
    $("#loginFailAlert").css("display","block");
  }
}

function register() {
  var userName = document.getElementById("registerEmail").value;
  var password = document.getElementById("registerPassword").value;
  if (usernamePassword.hasOwnProperty(userName)) {
    $("#regisOverlapAlert").css("display","block");
  } else {
    usernamePassword[userName] = password;
    $("#regisSuccessAlert").css("display","block");
  }
}
function search() {
  document.location = "searchResult.html";
}

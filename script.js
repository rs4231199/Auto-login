function sleep (seconds) {
  var start = new Date().getTime();
  while (new Date() < start + seconds*1000) {}
  return 0;
}
var els = document.getElementsByName("username");
els[0].value = "USERNAME";
var els = document.getElementsByName("password");
els[0].value = "PASSWORD";
var x = document.getElementsByName('login_form');
x[0].submit();
sleep(2);
window.close();

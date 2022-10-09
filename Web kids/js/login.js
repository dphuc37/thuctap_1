var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("pwd").value;
    var users =  JSON.parse(localStorage.getItem('users'));
    var user = users?.find(x=> username == username && password == x.username);
    if(user){
        window.alert("Dang nhap thanh cong")
        window.location.href = 'index.html';
    } else{
        window.alert("Dang nhap that bai")
    }
}
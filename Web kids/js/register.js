function register(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("pwd").value;
    var email = document.getElementById('email').value;
    var objectUser = {username:username,password:password,email:email};
    var dataLocal = JSON.parse(localStorage.getItem("users"));
    if(dataLocal && dataLocal.length){
        var userExist = dataLocal.find(x=>x.username == objectUser.username);
        
        if(userExist){         
            window.alert("Tai khoan da ton tai");
        }else{
            dataLocal.push(objectUser);
            localStorage.setItem('users',JSON.stringify(dataLocal));
            window.location.href = '../../login.html';
            window.alert("Tao thanh cong")
           
        }
    }else{
        localStorage.setItem('users', JSON.stringify([objectUser]));
        window.location.href = '../../login.html';
        window.alert("Tao thanh cong")
       
    }
}

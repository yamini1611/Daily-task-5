function Validate() {
    const userName = document.getElementById("form1Example13").value;
    const password = document.getElementById("form1Example23").value;
    const confirmPass = document.getElementById("form1Example24").value;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,15}$/;


    console.log(userName);

    if (!userName || !password || !confirmPass)
    {
        alert("Fields can`t be empty");
        return false;
    }
    else if (!/^[a-zA-Z\s]+$/.test(userName))
    {
        alert("User name should contain only numbers");
    }
    else if (password != confirmPass)
    {
        alert("Both Password and Confirm password does`t match");
        return false;
    }
    else if (!passwordRegex.test(password))
    {
        alert("Password should contain atleast 1 upper case 1 lowercase 1 numberic and 1 letter with min 8 char");
    }
    else
    {
        alert("Login successfully..!");
        return true;
    }

    
}
function validateForm()
{
	//var form = document.getElementsByTagName('regform');
	var surname = document.getElementById("surname").value;
	if(surname.length == 0)
	{
		window.alert("Surname field value not entered");
		return false;	
	}
	else
	{
		if(surname.length > 15)
		{
			window.alert("Surname entered is too long / invalid");
			return false;
		}
	}

	var first_name = document.getElementById("first_name").value;
	if(first_name.length == 0)
	{
		window.alert("First name field value not entered");
		return false;	
	}
	else
	{
		if(first_name.length > 15)
		{
			window.alert("First name entered is too long / invalid");
			return false;
		}
	}

	var middle_name = document.getElementById("middle_name").value;
	if(middle_name.length == 0)
	{
		window.alert("Middle name field value not entered");
		return false;	
	}
	else
	{
		if(middle_name.length > 15)
		{
			window.alert("Middle name entered is too long / invalid");
			return false;
		}
	}

	var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	var regex = new RegExp(pattern, 'i');
	var email = document.getElementById('email_id').value;
	if(regex.test(email) == false)
	{
		window.alert("Please enter a valid email");
		return false;
	}

	var mobile = document.getElementById("mobile_number").value;
	var mobile_pattern = new RegExp(/^((?!(0))[0-9]{10})$/, 'i');
	if(mobile_pattern.test(mobile) == false)
	{
		window.alert("Invalid mobile number entered. Please re-enter this value");
		return false;
	}

	var pswd = document.getElementById("psw").value;
	var pswd_confirm = document.getElementById("psw_confirm").value;
	if(pswd != pswd_confirm)
	{
		window.alert("Passwords entered do not match. Please enter these again");
		return false;
	}
	else
	{
		var pswd_pattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/);
		if(pswd_pattern.test(pswd) == false)
		{
			window.alert("Password must contain all the constraints mentioned in the above details.");
			return false;
		}
	}

	return true;
}
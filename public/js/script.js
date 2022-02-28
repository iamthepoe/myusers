//Script goes here!

let check = (()=>{
	password = document.getElementById('password').value;
	confirmPassword = document.getElementById('confirmPassword').value;
	if((password!=confirmPassword) || (!password || !confirmPassword)){
		document.getElementById('sendaccount').disabled = true;
	}else{
		document.getElementById('sendaccount').disabled = false;
	}
});
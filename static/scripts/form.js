function validate() {
	var form = document.getElementById('form1');
	
	var valid = 0
	
	//Validate Name Field
	if(form.username.value == '') {
		form.username.value = 'Anonymous';
	}
	else if(form.username.value.length > 20) {
		form.username.style.border = "1px solid #A11";
		form.username.value = '';
		form.username.maxlength = '20';
		valid = 1;
	}
	
	//Validate Title Field
	if(form.title.value.length > 20) {
		form.title.style.border = "1px solid #A11";
		form.title.value = '';
		form.title.maxlength = '20';
		valid = 1;
	}
	
	//Validate Body Field
	if(form.body.value == '') {
		form.body.style.border = "1px solid #A11";
		form.body.placeholder = 'This Field is Required.';
		valid = 1;
	}
	else if(form.body.value.length > 160) {
		form.body.style.border = "1px solid #A11";
		form.body.value = 'Please use 160 characters or less';
		form.body.maxlength = '160';
		valid = 1;
	}
	
	if(valid != 0) {
		return false;
	}	
	
	form.innerHTML = '<p>Saved.</p>';
	
	return;
}

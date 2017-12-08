// JavaScript Validation For Sheridan UI Test
$('document').ready(function() {
	// check for custom valid handler
	// default - check if long enough and only alphbets and space
	var nameregex = /^[a-zA-Z ]+$/;
	$.validator.addMethod("validname", function(value, element) {
		return this.optional(element) || nameregex.test(value);
	});
	// check for valid e-mail formatting
	var eregex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	$.validator.addMethod("validemail", function(value, element) {
		return this.optional(element) || eregex.test(value);
	});

	var sinregex = /^\d{9}$/;
	$.validator.addMethod("validSIN", function(value, element) {
		return this.optional(element) || sinregex.test(value);
	});
	
	var dateregex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
	$.validator.addMethod("validDate", function(value, element) {
		return this.optional(element) || dateregex.test(value);
	});
	$("#register-form-mobile").validate({
		rules: {
			fnameMobile: {
				required: true,
				validname: true,
				minlength: 2
			},
			lnameMobile: {
				required: true,
				validname: true,
				minlength: 2
			},
			emailMobile: {
				required: true,
				validemail: true
			}
		},
		messages: {
			fnameMobile: {
				required: "Please Enter First Name",
				validname: "Name must contain only alphabets and space",
				minlength: "Your Name is Too Short"
			},
			lnameMobile: {
				required: "Please Enter Last Name",
				validname: "Name must contain only alphabets and space",
				minlength: "Your Name is Too Short"
			},
			emailMobile: {
				required: "Please Enter Email Address",
				validemail: "Enter Valid Email Address"
			}
		},
		// functions for error display
		errorPlacement: function(error, element) {
			$(element).closest('.form-group-mobile').find('.help-block').html(error.html());
		},
		highlight: function(element) {
			$(element).closest('.form-group-mobile').removeClass('has-success').addClass('has-error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).closest('.form-group-mobile').removeClass('has-error').addClass('has-success');
			$(element).closest('.form-group-mobile').find('.help-block').html('');
		},
		//submit alert
		submitHandler: function(form) {
			var fname = document.getElementById('fnameMobile').value;
			var lname = document.getElementById('lnameMobile').value;
			var email = document.getElementById('emailMobile').value;
			alert("FirstName: " + fnameMobile + "\n" + "LastName: " + lnameMobile + "\n" + "Email: " + emailMobile);
			form.submit();
		}
	});
});
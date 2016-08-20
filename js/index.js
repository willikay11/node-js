<script>
	function login(){
		var fname = document.getElementById("fname").value;
		var	lname = document.getElementById("lname").value;
		var	email = document.getElementById("email").value;
		var	phone = document.getElementById("number").value;
			
	  var x = new info(fname,lname,email,phone);
      var name = x.firstName +" "+x.lastName;
      var other = x.email +" "+ x.phone;
      getValue(name, other);
	}
	
	function info(fname, lname, email, phone) {
		this.firstName = fname;
		this.lastName  = lname;
		this.email  = email;
		this.phone  = phone;
	}
	
	function getValue(name, other){
		var retVal = alert("Personal Info: "+ name +" Basic Info: "+ other);
	}

</script>
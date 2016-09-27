function validate()
{
	//alert("check");
	var title=document.getElementById("title").value;
	var firstname=document.getElementById("firstname").value;
	var middle=document.getElementById("middle").value;
	var lastname=document.getElementById("lastname").value;
	var emailadd=document.getElementById("emailadd").value;
	var number=document.getElementById("number").value;
	var destination=document.getElementById("destination").value;
	var carrent=document.getElementById("carrent").value;
	var hotel=document.getElementById("hotel").value;
	var meal=document.getElementById("meal").value;
	var air=document.getElementById("air").value;
	var msg=documentr.getElementById("msg").value;
	
	var titlepattern=/^[a-z]+$/;
	var firstnamepattern=/^[A-Z]+[a-z]/;
	var middlepattern=/^[A-Z]+[a-z]/;
	var lastnamepattern=/^[A-Z]+[a-z]/;
	var emailaddpattern=/^[a-z]+[a-z0-9\.\_]+[@]+[a-z]+[.]+[a-z]+$/;
	var numberpattern=/^[0-9]/;
	var destinationpattern=/^[a-z]+$/;
	var carrentpattern=/^[a-z]/;
	var hotelpattern=/^[a-z]/;
	var mealpattern=/^[a-z]/;

	
	if(title.length==0)
	 {
		 alert("please enter title");
		 document.getElementById("title").focus();
		 return false;
		 
	 }
	 if(!title.match(titlepattern))
	 {
		 alert("Please enter name and small characters only.");
		 document.getElementById("title").focus();
		 return false;
		 
	 }
	 if(firstname.length==0)
	 {
		 alert("please enter firstname");
		 document.getElementById("firstname").focus();
		 return false;
		 
	 }
	 if(!firstname.match(firstnamepattern))
	 {
		 alert("Please enter characters with first capital only.");
		 document.getElementById("firstname").focus();
		 return false;
		 
	 }

	 if(middle.length==0)
	 {
		 alert("please enter middle initial");
		 document.getElementById("middle").focus();
		 return false;
	 }
	 if(!middle.match(middlepattern))
	 {
		 alert("Please enter characters with first capital in middle name only.");
		 document.getElementById("middle").focus();
		 return false;
		 
	 }
	 if(lastname.length==0)
	 {
		 alert("please enter last name");
		 document.getElementById("lastname").focus();
		 return false;
	 }
	  if(!lastname.match(lastnamepattern))
	 {
		 alert("Please enter characters with first capital only in lastname.");
		 document.getElementById("lastname").focus();
		 return false;
		 
	 }
	 if(emailadd.length==0)
	 {
		 alert("please enter email id");
		 document.getElementById("emailadd").focus();
		 return false;
	 }
	  if(!emailadd.match(emailaddpattern))
	 {
		 alert("Please enter email id ex: abc@xyz.com.");
		 document.getElementById("middle").focus();
		 return false;
		 
	 }
	 if(number.length!=10)
	 {
		 alert("please enter phone number");
		 document.getElementById("number").focus();
		 return false;
	 }
	  if(!number.match(numberpattern))
	 {
		 alert("Please enter mobile number.");
		 document.getElementById("number").focus();
		 return false;
		 
	 }
	 if(air=='Select an airline')
	 {
		 alert("please select air");
		 document.getElementById("air").focus();
		 return false;
		 
	 }
	 if(destination.length==0)
	 {
		 alert("please enter destination");
		 document.getElementById("destination").focus();
		 return false;
	 }
	 if(!destination.match(destinationpattern))
	 {
		 alert("Please enter your destination in small letters");
		 document.getElementById("destination").focus();
		 return false;
		 
	 } 
	
	 
	 if(carrent.length==0)
	 {
		 alert("please enter car rental field");
		 document.getElementById("carrent").focus();
		 return false;
	 }
	  if(!carrent.match(carrentpattern))
	 {
		 alert("Please type yes/no for car rental");
		 document.getElementById("carrent").focus();
		 return false;
		 
	 }
	 if(hotel.length==0)
	 {
		 alert("please enter for hotel");
		 document.getElementById("hotel").focus();
		 return false;
	 }
	  if(!hotel.match(hotelpattern))
	 {
		 alert("Please enter yes/no for hotel");
		 document.getElementById("hotel").focus();
		 return false;
		 
	 }
	 if(meal.length==0)
	 {
		 alert("please enter for meal type");
		 document.getElementById("meal").focus();
		 return false;
	 }
	  if(!meal.match(mealpattern))
	 {
		 alert("Please enter the meal type.");
		 document.getElementById("meal").focus();
		 return false;
		 
	 }
	 
	 if(msg.length==0)
	 {
		 alert("please enter purpose of visit");
		 document.getElementById("msg").focus();
		 return false;
		 
	 }
	 
	 
}
function disp(val){
				if(val=='cash')
				{	
					document.getElementById("cashForm").style.display='';
					document.getElementById("credit cardForm").style.display='none';
					document.getElementById("checkForm").style.display='none';
				}
				else if(val=='credit card'){	
					document.getElementById("cashForm").style.display='none';
					document.getElementById("credit cardForm").style.display='';
					document.getElementById("checkForm").style.display='none';
				}
				
				else{
					document.getElementById("cashForm").style.display='none';
					document.getElementById("credit cardForm").style.display='none';
					document.getElementById("checkForm").style.display='';
				}
			}
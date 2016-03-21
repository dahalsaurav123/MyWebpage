
function validate()
{ 
  if( document.welcome.studentid.value == "" )
   {
     alert( "Please provide your University assigned ID" );
     document.welcome.studentid.focus() ;
     return false;
   }
   if( document.welcome.studentfirstname.value == "" )
   {
     alert( "Please provide your  First Name!" );
     document.welcome.studentfirstname.focus() ;
     return false;
   }
  
   if( document.welcome.studentlastname.value == "" )
   {
     alert( "Please provide your  Last Name!" );
     document.welcome.studentlastname.focus() ;
     return false;
   }
   if( document.welcome.dob.value == "" )
   {
     alert( "Please provide your DOB!" );
     document.welcome.dob.focus() ;
     return false;
   }
     if ( ( welcome.sex[0].checked == false ) && ( welcome.sex[1].checked == false ) )
   {
   alert ( "Please choose your Gender: Male or Female" );
   return false;
   } 
   if( document.welcome.paddress.value == "" )
   {
     alert( "Please provide a Valid Address!" );
     document.welcome.paddress.focus() ;
     return false;
   }
   
   
   if( document.welcome.City.value == "-1" )
   {
     alert( "Please provide your City!" );
     document.welcome.City.focus() ;
     return false;
   } 
if( document.welcome.State.value == "-1" )
   {
     alert( "Please choose your State!" );
     
     return false;
   }   
   if( document.welcome.Major.value == "-1" )
   {
     alert( "Please Choose your Major Field of Study" );
    
     return false;
   }   
      
   
   if( document.welcome.zipcode.value == "" ||
           isNaN( document.welcome.zipcode.value) ||
           document.welcome.zipcode.value.length != 6 )
   {
     alert( "Please provide a zipcode in the format ######." );
     document.welcome.zipcode.focus() ;
     return false;
   }
 var email = document.welcome.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct university email ID")
     document.welcome.emailid.focus() ;
     return false;
 }
  

  if( document.welcome.phonenumber.value == "" ||
           isNaN( document.welcome.phonenumber.value) ||
           document.welcome.phonenumber.value.length != 10 )
   {
     alert( "Please provide a phone number in a valid number format" );
     document.welcome.phonenumber.focus() ;
     return false;
   }
   return( true );
}

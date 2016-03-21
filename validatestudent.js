
function validate()
{ 
  if( document.StudentRegistration.studentid.value == "" )
   {
     alert( "Please provide your University assigned ID" );
     document.StudentRegistration.studentid.focus() ;
     return false;
   }
   if( document.StudentRegistration.studentfirstname.value == "" )
   {
     alert( "Please provide your  First Name!" );
     document.StudentRegistration.studentfirstname.focus() ;
     return false;
   }
  
   if( document.StudentRegistration.studentlastname.value == "" )
   {
     alert( "Please provide your  Last Name!" );
     document.StudentRegistration.studentlastname.focus() ;
     return false;
   }
   if( document.StudentRegistration.dob.value == "" )
   {
     alert( "Please provide your DOB!" );
     document.StudentRegistration.dob.focus() ;
     return false;
   }
     if ( ( StudentRegistration.sex[0].checked == false ) && ( StudentRegistration.sex[1].checked == false ) )
   {
   alert ( "Please choose your Gender: Male or Female" );
   return false;
   } 
   if( document.StudentRegistration.paddress.value == "" )
   {
     alert( "Please provide a Valid Address!" );
     document.StudentRegistration.paddress.focus() ;
     return false;
   }
   
   
   if( document.StudentRegistration.City.value == "-1" )
   {
     alert( "Please provide your City!" );
     document.StudentRegistration.City.focus() ;
     return false;
   } 
if( document.StudentRegistration.State.value == "-1" )
   {
     alert( "Please choose your State!" );
     
     return false;
   }   
   if( document.StudentRegistration.Major.value == "-1" )
   {
     alert( "Please Choose your Major Field of Study" );
    
     return false;
   }   
      
   
   if( document.StudentRegistration.zipcode.value == "" ||
           isNaN( document.StudentRegistration.zipcode.value) ||
           document.StudentRegistration.zipcode.value.length != 6 )
   {
     alert( "Please provide a zipcode in the format ######." );
     document.StudentRegistration.zipcode.focus() ;
     return false;
   }
 var email = document.StudentRegistration.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct university email ID")
     document.StudentRegistration.emailid.focus() ;
     return false;
 }
  

  if( document.StudentRegistration.phonenumber.value == "" ||
           isNaN( document.StudentRegistration.phonenumber.value) ||
           document.StudentRegistration.phonenumber.value.length != 10 )
   {
     alert( "Please provide a phone number in a valid number format" );
     document.StudentRegistration.phonenumber.focus() ;
     return false;
   }
   return( true );
}
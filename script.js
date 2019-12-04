    //Function that executes 'Copy to Clipboard' button on click
    function copyToClip(){
        var copyResult = document.getElementById('exampleFormControlTextarea6');
        copyResult.select();
        copyResult.setSelectionRange(0, 999999);
        document.execCommand("copy"); 
      }

    //Function that executes 'Generate Password' button on click
    function generate() {
        //prompt user character length
        var passLength = prompt("How many characters would you like your password to be? (Between 8-128 characters!)");
            //Check to see if between character parameter
            if (passLength < 8 || passLength > 128) {
                alert("Character count not accepted! Must be between 8 and 128 Characters!");
                return;
            }
            else if(isNaN(passLength) === true) {
                alert("Character count must be in number format!")
                return;
            }
            else {}
    
    //empty string
    var holder = "";   
    //string of special characters, took out 'space' and 'quotation mark' to avoid confusion
    var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    //string of possible numbers
    var numericChar = "01234567890123456789";
    //string of uppercase letters
    var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //string of lowercase letters
    var lowerChar = "abcdefghijklmnopqrstuvwxyz";
        
    //Confirm what characters the user wants in password 
    var spec = confirm("Do you want your password to include Special Characters?");
    var numeric = confirm("Do you want your password to include Numeric Characters?");
    var upper = confirm("Do you want your password to include Uppercase Characters?");
    var lower = confirm("Do you want your password to include Lowercase Characters?");
        
    //Create function that will need 'length' and 'what characters desired' in order to create random password
    function password(passLength, holder) {
        var passwordRandom = "";
  
        for (var i = 0; i < passLength; i++) {
        passwordRandom += holder.charAt(Math.floor(Math.random() * holder.length)); 
        }
        return passwordRandom;
    }
      
      //User choice possibilities
      if((spec === false) && (numeric === false) && (upper === false) && (lower === false)) {
        alert("You must choose at least one type of character to build a password!")
      }
      if(spec) {
          var holder = holder += specialChar;
      }
      if(numeric) {
          var holder = holder += numericChar;
      }
      if(upper) {
          var holder = holder += upperChar;
      }
      if(lower) {
          var holder = holder += lowerChar;
      }
      document.getElementById('exampleFormControlTextarea6').textContent= password(passLength, holder);
      }
  
  
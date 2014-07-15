  // Dependencies: will put LoginID in an element with an ID='LoginID'.
  //<!-- See: https://developers.google.com/+/web/signin/javascript-flow -->
      (function() {
       var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
       po.src = 'https://apis.google.com/js/client:plusone.js?onload=render';
       var s = document.getElementsByTagName('script')[0]; 
       s.parentNode.insertBefore(po, s);
     })();
  
    function signinCallback(authResult) {
      if (authResult['status']['signed_in']) {
        // Update the app to reflect a signed in user
        // Hide the sign-in button now that the user is authorized, for example:
        document.getElementById('signinButton').setAttribute('style', 'display: none');
        /*
        var ar = document.getElementById('authResult');
        for (var field in authResult) {
          ar.innerHTML +=' ' + field + ': ' +
              authResult[field] + '<br/>';
        }
        */
        gapi.client.load('plus','v1', function(){
         var request = gapi.client.plus.people.get({
           'userId': 'me'
         });
         request.execute(function(resp) {
            var ar = document.getElementById('LoginID');
            ar.value = resp.displayName;
            //ar.innerHTML = "<p>Logged in as " + resp.displayName + "</p>";
           console.log('Retrieved profile for:' + resp.displayName);
         });
        });
      } else {
        // Update the app to reflect a signed out user
        // Possible error values:
        //   "user_signed_out" - User is signed-out
        //   "access_denied" - User denied access to your app
        //   "immediate_failed" - Could not automatically log in the user
        console.log('Sign-in state: ' + authResult['error']);
      }
    }
    /* Executed when the APIs finish loading */
   function render() {
  
     // Additional params including the callback, the rest of the params will
     // come from the page-level configuration.
     var additionalParams = {
       'callback': signinCallback
     };
     gapi.auth.signIn(additionalParams); // Will use page level configuration
  
    /*
     var signinButton = document.getElementById('signinButton');
     signinButton.addEventListener('click', function() {
       console.log('click called.');
       gapi.auth.signIn(additionalParams); // Will use page level configuration
     });
     */
   }

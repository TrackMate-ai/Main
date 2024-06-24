


function signInFirebase(){


    var firebaseConfig = {
      apiKey: "AIzaSyD09GeejzBofXCWBs_GBj8rDtIEDHd0O98",
      authDomain: "https://www.google.com",
      projectId: "masele-33a46",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "200216185593",
      appId: "YOUR_APP_ID"
    };
    firebase.initializeApp(firebaseConfig);
    
      var email = document.getElementById("username").value;
      var password = document.getElementById("passwordIn").value;

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user) {
            
            
            
          alert("Successful");
          
            
        })
        .catch(function(error) {
          console.log(error.message);
            alert("Login failed,make sure you have an active Account");
        });
    
    
    


    
}




    
        














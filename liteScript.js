
function track1(){
    card=document.getElementById("trackCard");
    card.style.display=("block");
}




function track(){
    
    
     card=document.getElementById("trackCard");
     card.style.display=("block");

        
        var subject = document.getElementById("input1").value;
        var body = document.getElementById("input2").value;
        var email = document.getElementById("input3").value;
        
        
        const secretKey = '$2b$10$5.GD5IWqNSL2RsbiNWZdbeQGJ3wkUk/t3ZxfbbLn2ddvAPibpWpr.';
        const binName= 'myBin';



      
        const data = {
        IMEi: subject,
        LastLocation: body,
        MailTo: email
      };

      
       fetch('https://api.jsonbin.io/v3/b', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "X-Master-Key": secretKey,
              "X-Bin-Private": true,
              'X-Bin-Name': email
            },
            body: JSON.stringify(data)
          })
         .then(response => response.json())
         .then(jsonData => console.log(jsonData))
         .catch(error => console.error(error));
      




            alert("Recieved,processing may take up to an hour.Keep on checking Tracking Results");

    
    
    card=document.getElementById("trackCard");
    card.style.display=("none");
    
    
}


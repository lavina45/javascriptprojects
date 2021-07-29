function sendmail() {
    let x = sessionStorage.getItem("all")
    // var name = document.getElementById("name").value;
    // var s=document.getElementById("subject").value;
    // var c=document.getElementById("message").value;
    // var to= document.getElementById("semail").value;
    // var z= 'Name: '+name+ '<br> Subject: '+s+'<br>Message: '+c;
    Email.send({
        Host:"smtp.gmail.com",
        Username: "lavina@binmile.com",
        Password: '9568532043',
        To: "rishabh@binmile.com",
        From: "lavina@binmile.com",
        Subject: "successfully submitted",
        Body:x,
        //SecureToken:"1dba0bd5-6820-426b-860d-b33c89bfcc81",
           //To: '',
           //From: "aarushi.sharma@binmilecom",
           //Subject:"sucessfully submitted" ,
           //Body: x
    })
    .then(function(message){
        alert("mail sent successfully")
    });
}
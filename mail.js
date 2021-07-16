
function sendEmail(){
    var a= document.getElementById("Name").value;
    var b=document.getElementById("reciver").value;
    var c=document.getElementById("Subject").value;
    var d=document.getElementById("Message").value;
    var e= 'name'+a+'<br> message'+d;

    Email.send(
        {
        Host:"smtp.gmail.com",
        Username: "lavina@binmile.com",
        Password: '9568532043',
        To: b,
        From: "lavina@binmile.com",
        Subject: c,
        Body:e,
    }).then(
        message =>{
            alert('mail sent');
            


        });
    }
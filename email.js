function emailSending(){
    document.getElementById("d1").value = a;
    var a=document.getElementById("d2").value = b;
    var b=   document.getElementById("d3").value = c;
    var c=   document.getElementById("d4").value = d;
    var d=   document.getElementById("d5").value = d;
    var e=  document.getElementById("d6").value = e;
    var f=  document.getElementById("d7").value = f;
    var g= document.getElementById("d8").value = g;
    var h=  document.getElementById("d9").value = h;
    var i=   document.getElementById("d10").value = i;
    var j=  document.getElementById("d11").value = j;
    
    var e= 'name'+a+'<br> name'+b+'<br> name'+c+'<br> name'+d+'<br> name'+e+'<br> name'+f+'<br> name'+g+'br> name'+h+'<br> name'+i+'<br> name'+j+'<br> ';

    Email.send(
        {
        Host:"smtp.gmail.com",
        Username: "lavina@binmile.com",
        Password: '',
        To: b,
        From: "lavina@binmile.com",
        Subject: c,
        Body:e,
    }).then(
        message =>{
            alert('mail sent');
            


        });
    }
$(document).ready(function() {

    $('#button').click(function() {
      if ($('#firstName').val() == '') {
        $('#error').html('Please fill the FirstName details.');
        $('#error').css('color', 'red');
      } else if ($('#lastName').val() == '') {
        $('#error').html('Please fill the LastName details.');
        $('#error').css('color', 'red');
      } else if ($('#DOB').val() == '') {
        $('#error').html('Please fill  the date of birth details.');
        $('#error').css('color', 'red');
      } else if ($('#image').val() == '') {
        $('#error').html('Please upload the image');
        $('#error').css('color', 'red');
      } else {
  
        $('#error').html('');
  
  
        var firstname = document.getElementById('firstName').value;
        var lastname = document.getElementById('lastName').value;
        var dob = document.getElementById('DOB').value;
        var image = document.getElementById('image');
        var imgName = image.files[0].name;
  
        var id = 0;
  
        var table = {
          firstName: firstname,
          lastName: lastname,
          dob: dob,
          image: imgName
        };
  
        var tableContaint = [];
  
        tableContaint.push(table);
  
        for (var i = 0; i < tableContaint.length; i++) {
          $('#list tbody').prepend("<tr><td>" + id + "</td><td>" + tableContaint[0].firstName + "</td><td>" + tableContaint[0].lastName + "</td><td>" + tableContaint[0].dob + "</td><td>" + tableContaint[0].image + "</td><td>" + "<input type='button' id='edit' value='edit' onclick ='ValidateEdit()'>&nbsp&nbsp<input type='button' id='delete' value='delete'/>" + "</td></tr>")
        }
        $('.form').val('');
      }
      $('.form').val('');
    });
  
  });
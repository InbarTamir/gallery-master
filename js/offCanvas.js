function openCanvas(){
    document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
    document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');    
}

function sendMessage(ev) {
    ev.preventDefault();
    
    var subject = document.querySelector('.offcanvas-aside input[name="subject"]').value;
    var message = document.querySelector('.message').value;
    var email = 'inbartamir92@gmail.com';

    $('#contact form').trigger('reset');
    openCanvas();
    message = message.replace(/\n/g, '%0D%0A');
    window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}&su=${subject}&body=${message}`);

  }
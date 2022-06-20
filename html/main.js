//function to display section on adventure page
function getText() {

    const x = document.getElementById('sect_explore')

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//function to display video on cinema page
function getTrailer() {

    const y = document.getElementById('cinema_video')

    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

//form logic on contact page
function validateNames() {

        event.preventDefault()
        const errors = []
        const firstName = document.getElementById('firstName').value
        const lastName = document.getElementById('lastName').value
        const phone = document.getElementById('phone').value
        const email_add = document.getElementById('email').value
        const errors_display = document.getElementById('error_messages')

        if (firstName.length < 1 || firstName == "" || firstName == null) {
            errors.push('first name error')
            errors_display.innerHTML = 'First name must be at least two letters.'
        }

        else if (lastName.length < 1 || lastName == "" || lastName == null) {
            errors.push('last name error')
            errors_display.innerHTML = 'Last name must be at least two letters.'
        }

        else if (!lastName.match(/[a-zA-Z]/i) || !firstName.match(/[a-zA-Z]/i)) {
            errors.push('non alpha')
            errors_display.innerHTML = 'Please enter only alpha characters.'
        }

        else if (!phone.match(/^(\+\d{1,3}[- ]?)?\d{10}$/i)) {
            errors.push('Method non alpha')
            errors_display.innerHTML = 'Please enter a valid phone number.'
        }

        else if (!email_add.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i)) {
            errors.push('Method non alpha')
            errors_display.innerHTML = 'Please enter a valid email address.'
        }

        else if (errors.length == 0) {
            window.alert('Thank you entering all data correctly')
            document.getElementById('form').submit();
        }
        
    }

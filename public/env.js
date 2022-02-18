var username
var password
var user

// send data to server
const submitUser=(user)=>{
    $.ajax({
        url: '/api/users',
        contentType: 'application/json',
        data: JSON.stringify(user),
        type: 'POST',
        success: function(result) {
            alert('User added successfully')
        }
    });
}

// Create a new user
const newUser=()=>{
    let username = $('#username').val()
    let password = $('#password').val()
    let email = $('#email').val()
    let mobile = $('#mobile').val()
    let appliances = $('#appliances').val()

    let user={username,password,email,mobile,appliances}

    console.log(user)
    submitUser(user)
}

// form user from login details to verify the user
const formUser=()=>{
    username = $('#username').val()
    password = $('#password').val()

    user={username,password}

    console.log(user)
}


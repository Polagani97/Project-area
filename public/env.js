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

// get data from the server
const checkUser=(user)=>{
    $.ajax({
        url: '/api/users',
        contentType: 'application/json',
        type: 'GET',
        success: function(result) {
            alert('User data',user.username)
            console.log(result)
        }
    });
}

const formUser=()=>{
    let username = $('#username').val()
    let password = $('#password').val()

    let user={username,password}

    console.log(user)
    checkUser(user)
}

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
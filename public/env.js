<<<<<<< HEAD
var username
var password
var user
=======
>>>>>>> 12c86d77f0bfac0f7672af1d82597982512afbdf
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

<<<<<<< HEAD
=======
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

>>>>>>> 12c86d77f0bfac0f7672af1d82597982512afbdf
const newUser=()=>{
    let username = $('#username').val()
    let password = $('#password').val()
    let email = $('#email').val()
    let mobile = $('#mobile').val()
    let appliances = $('#appliances').val()

    let user={username,password,email,mobile,appliances}

    console.log(user)
    submitUser(user)
<<<<<<< HEAD
}

const formUser=()=>{
    username = $('#username').val()
    password = $('#password').val()

    user={username,password}

    console.log(user)
}


//connect to socket
/*let socket = io();

socket.on('number',(msg) => {
    console.log('Random number: '+msg);
    $('#socketOut').html(msg)
})*/

//appends the comment row with the objects of type comment
/*listComments=(comments)=>{
    comments.forEach(comment => {
        console.log(comment)
        let item ='<div class="card">'+
        '<div class="card-content">'+
        '<span class="card-title activator grey-text text-darken-4">'+comment.name+'</span>'+
        '</div>'+
        '<div class="card-reveal">'+
        '<p>'+comment.description+'</p>'+
     '</div>'+
     '</div>'          
    
    $('#listComments').append(item)
    });
}*/

// INITIALIZATION 
/*const dummyComment={
    name:'priyanka',
    description:'This is a great example for personal portfolio'
}*/

//let dummyData=[dummyComment,dummyComment]

/*$(document).ready(function(){
    console.log('Ready')
  
    // get data and build the ui component
    //listComments(dummyData)
  
    //bind the button
    //$('#testButton').click(testButtonFunction)
  
    //requestComments()

  })
*/
=======
}
>>>>>>> 12c86d77f0bfac0f7672af1d82597982512afbdf

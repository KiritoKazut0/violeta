
function validateUsername (){
    let username = document.getElementById('Username').value;
    let errorMessage = document.getElementById('error-message');
    console.log(username)
    if (username === undefined || username===null){
        errorMessage.textContent = 'Error: El nombre de usuario no puede estar vacío';
        errorMessage.style.display = 'block'; 
    }
}
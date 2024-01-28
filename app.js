let alluser = []
let signin = () =>{
    let email = document.getElementById('e')
    let password = document.getElementById('p')
    let obj = {
        email : email.value,
        password : password.value
    }
    let data =  localStorage.setItem('user',obj)

}
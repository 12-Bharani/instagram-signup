const form=document.querySelector('#signup');
const email=document.querySelector('#email')
const fullname=document.querySelector('#fullname')
const username=document.querySelector('#username')
const password=document.querySelector('#password')
const cpassword=document.querySelector('#cpassword')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    signup();
})

function signup() {


    const emailVal=email.value.trim()
    const fullnameVal=fullname.value.trim()
    const usernameVal=username.value.trim()
    const passwordVal=password.value.trim()
    const cpasswordVal=cpassword.value.trim()
    let sucess=true



    if(emailVal===''){
        sucess=false
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        sucess=false
        setError(email,'enter valid of email')

    }
    else{
        setSucess(email)
    }

    if(fullnameVal===''){
        sucess=false
        setError(fullname,'Full Name is required')
    }
    else{
        setSucess(fullname)
    }

    if(usernameVal===''){
        sucess=false
        setError(username,'Username is required')
    }
    else{
        setSucess(username)
    }
    if(passwordVal===''){
        sucess=false
        setError(password,'Password is required')
    }
    else if(passwordVal.length!=8){
        sucess=false
        setError(password,'Password length should be 8 charater')
    }
    else{
        setSucess(password)
    }
    if(cpasswordVal===''){
        sucess=false
        setError(cpassword,'password is required')
    }
    else if(cpasswordVal!=passwordVal){
        sucess=false
        setError(cpassword,'Password does not match')
    }
    else{
        setSucess(cpassword)
        
            window.location.href = "https://12-bharani.github.io/insta-page/";
           
    
    }

    
    return sucess

    
}





const validateEmail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)
}

function setSucess(element){
    const input=element.parentElement;
    const errorElement=input.querySelector('.error')

    errorElement.innerText='';
    input.classList.add('sucess')
     input.classList.remove('error')


}
function setError(element,message){
    const input=element.parentElement;
    const errorElement=input.querySelector('.error')
    console.log(errorElement);
   

    errorElement.innerText=message;
     input.classList.add('error')
     input.classList.remove('sucess')

}
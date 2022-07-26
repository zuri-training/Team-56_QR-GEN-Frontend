"use strict"

const registerForm = document.querySelector("#register_form")

const api_endpoint = " https://qrswiftapp.herokuapp.com/api/register/"

const registerDetails = new FormData()


const register= ()=>{
    registerForm.addEventListener("submit", (e)=>{
        e.preventDefault()
      
        registerDetails.append("first_name", document.getElementById("reg_first_name").value)
        registerDetails.append("last_name", document.getElementById("reg_last_name").value)
        registerDetails.append("username", document.getElementById("reg_username").value)
        registerDetails.append("email", document.getElementById("reg_email").value)
        registerDetails.append("password", document.getElementById("reg_password").value)
            
   
            fetch(api_endpoint,{
                method: "POST",
                body: registerDetails,
                headers: {
                   
                }

            })
            .then(res => res.json())
            .then(data => 
                {
                    console.log(data)
                    if(data.token){
                        
                        window.location.href = "dashboard.html"
                        

                    }else{
                        alert("Registration Failed")
                    }
                }
                )
            .catch(err => console.log(err))
            })
    }
  
    
    register()
    


const checkValidData=(email,password)=>{

    const isEmailValid=/^\S+@\S+\.\S+$/.test(email)
    const isPasswordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)

    if(!isEmailValid){
        return "Email is not Valid"
    }
    if(!isPasswordValid){
        return "Password is not Valid"
    }
    return null
}

export default checkValidData
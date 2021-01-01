import React, {useState} from "react"

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfError, setPasswordConfError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const handleFirstNameInput = (e) => {
        setFirstname(e.target.value);
        if (e.target.value.length < 1){
            setFirstNameError("Please enter a first name!");
        }
        else if (e.target.value.length < 3){
            setFirstNameError("First name must be at least 2 characters!");
        }
        else {
            setFirstNameError("")
        }
    }

    const handleLastNameInput = (e) => {
        setLastname(e.target.value);
        if (e.target.value.length < 1){
            setLastNameError("Please enter a last name!");
        }
        else if (e.target.value.length < 3){
            setLastNameError("Last name must be at least 2 characters!");
        }
        else {
            setLastNameError("")
        }
    }

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1){
            setEmailError("Please enter an email!");
        }
        else if (e.target.value.length < 3){
            setEmailError("Email must be at least 2 characters!");
        }
        else {
            setEmailError("")
        }
    }

    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1){
            setPasswordError("Please enter a password!");
        }
        else if (e.target.value.length < 6){
            setPasswordError("Password must be at least 6 characters!");
        }
        else {
            setPasswordError("")
        }
    }
    const handlePasswordConfInput = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password){
            setPasswordConfError("Password confirmation must match!");
        }
        else {
            setPasswordConfError("")
        }
    }

    const createUser = (e) => {
        e.presentDefault();
        const newUser = { firstname, lastname, email, password };
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHasBeenSubmitted(true);
        
        
    };

    const formMessage = () => {
        if (hasBeenSubmitted){
            return "User created successfully!";
        } else {
            return "User not created";
        }
    }

    return (
        <div>
            <form class="text-left" onSubmit= { createUser }>
            <h4> { formMessage }</h4>
                <div class="my-2">
                    <label htmlFor="firstname">First name</label>
                    <input type = "text" onChange= { handleFirstNameInput } value= { firstname } />
                    {
                        firstNameError ?
                    <p style={{color:"red"}}>{ firstNameError }</p>:''
                    }
                </div>
                <div class="my-2">
                    <label htmlFor="lastname">Last name</label>
                    <input type = "text" onChange= { handleLastNameInput }  value= { lastname } />
                    {
                        lastNameError ?
                    <p style={{color:"red"}}>{ lastNameError }</p>:''
                    }
                </div>
                <div class="my-2">
                    <label htmlFor="email">Email</label>
                    <input class="my-2" type = "text" onChange= { handleEmailInput } value= { email } />
                    {
                        emailError ?
                    <p style={{color:"red"}}>{ emailError }</p>:''
                    }
                </div>
                <div class="my-2">
                    <label htmlFor="password">Password</label>
                    <input type = "text" onChange= { handlePasswordInput } value= { password } />
                    {
                        passwordError ?
                    <p style={{color:"red"}}>{ passwordError }</p>:''
                    }
                </div>
                <div class="my-2">
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input type = "text" onChange= { handlePasswordConfInput } value= { confirmpassword } />
                    {
                        passwordConfError ?
                    <p style={{color:"red"}}>{ passwordConfError }</p>:''
                    }
                </div>
                <input class="my-2" type="submit" value="Create User" />
            </form>
            {/* <div>
                <h4>Your Form Data </h4></div>
                <div>
                <p>First Name: { firstname }</p>
                <p>Last Name: { lastname }</p>
                <p>Email: { email }</p>
                <p>Password: { password }</p>
                <p>Confirm Password: { password }</p>
            </div> */}
        </div>

    );
};
export default UserForm;
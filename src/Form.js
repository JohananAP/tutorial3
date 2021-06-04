import {useState, useEffect} from 'react'
import Profile from './Profile';

function Form ({isSuccess}) {
    const [FirstNameValid, setFirstNameValid] = useState(true);
    const [FirstNameMsg, setFirstNameMsg] = useState('');
    const [LastNameValid, setLastNameValid] = useState(true);
    const [LastNameMsg, setLastNameMsg] = useState('');
    const [EmailValid, setEmailValid] = useState(true);
    const [EmailMsg, setEmailMsg] = useState('');
    const [PasswordValid, setPasswordValid] = useState(true);
    const [PasswordMsg, setPasswordMsg] = useState('');
    const [ConfirmPasswordValid, setConfirmPasswordValid] = useState(true);
    const [ConfirmPasswordMsg, setConfirmPasswordMsg] = useState('');
    const [IsFormValid, setIsFormValid] = useState(false);

    const validate = event =>{
        event.preventDefault();
        const form = event.currentTarget;
        const firstname = form.elements.firstname.value;
        const lastname = form.elements.lastname.value;
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        const confirmpassword = form.elements.confirmpassword.value;
        setFirstNameMsg("");
        setLastNameMsg("");
        setEmailMsg("");
        setPasswordMsg("");
        setConfirmPasswordMsg("");
        setFirstNameValid(true);
        setLastNameValid(true);
        setEmailValid(true);
        setPasswordValid(true);
        setConfirmPasswordValid(true);
        setIsFormValid(true);

    
        if( (firstname === '')){
            setFirstNameValid(false);
            setIsFormValid(false);
            setFirstNameMsg("Required");
        }
        if( (lastname === '')){
            setLastNameValid(false);
            setIsFormValid(false);
            setLastNameMsg("Required");
        }
        if( (email === '')){
            setEmailValid(false);
            setIsFormValid(false);
            setEmailMsg("Required");
        }
        if( (password === '')){
            setPasswordValid(false);
            setIsFormValid(false);
            setPasswordMsg("Required");
        }
        if( (confirmpassword === '')){
            setConfirmPasswordValid(false);
            setIsFormValid(false);
            setConfirmPasswordMsg("Required");
        }

        if ((/[^0-9a-zA-Z]/.test(firstname))){
            setFirstNameValid(false);
            setIsFormValid(false);
            setFirstNameMsg("Can't have special characters");
        }

        if ((/[^0-9a-zA-Z]/.test(firstname))){
            setLastNameValid(false);
            setIsFormValid(false);
            setLastNameMsg("Can't have special characters");
        }

        if (!(/\S+@\S+\.\S+/.test(email))){
            setEmailValid(false);
            setIsFormValid(false);
            setEmailMsg("Invalid Email");
        }

        if (password.length < 8){
            setPasswordValid(false);
            setIsFormValid(false);
            setPasswordMsg("Minimum characters 8");
        }
        if(password !== confirmpassword ){
            setConfirmPasswordValid(false);
            setIsFormValid(false);
            setConfirmPasswordMsg("Password mismatch")
        }
    }

    return (
        <div>
            <h1> Registration </h1>
            <form onSubmit={validate}>
                <label> Firstname: </label> <input id="firstname" type="text" name="firstname" placeholder="Enter Firstname"/> { FirstNameValid == false && <label>{FirstNameMsg}</label> } <br/>
                <label> Lastname: </label> <input id="lastname" type="text" name="lastname" placeholder="Enter Lastname"/> { LastNameValid == false && <label>{LastNameMsg}</label> } <br/>
                <label> Email: </label> <input id="email" type="email" name="email" placeholder="Enter Email"/> { EmailValid == false && <label>{EmailMsg}</label> } <br/>
                <label> Password: </label> <input id="password" type="password" name="password" placeholder="Enter Password"/> { PasswordValid == false && <label>{PasswordMsg}</label> } <br/>
                <label> Confrim Password: </label> <input id="confirmpassword"  type="password" name="confirmpassword" placeholder="Enter Password again"/> { ConfirmPasswordValid == false && <label>{ConfirmPasswordMsg}</label> } <br/>
                <button type="submit">Register</button>
            </form>
            {
                IsFormValid? <Profile> </Profile> : null 
            }
        </div>
    );
}

export default Form;
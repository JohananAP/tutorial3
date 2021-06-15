import axios from 'axios';
import Users from './Users';
import { useState } from 'react';


function Login() {
    const [userValid, setuserValid] = useState(false);
    const [registerpage, setregisterpage] = useState(false);
    const [validcred, setvalidcred] = useState(true);

    const register = event => {
        setregisterpage(true)
    }

    const login = event => {
        event.preventDefault();
        const form = event.currentTarget;
        const email = form.elements.email.value;
        const password = form.elements.password.value;

        axios.post("https://tutorial4-api.herokuapp.com/api/users/login",
            { email: email, password: password}, {headers: {
                'Content-type': 'application/json'
            }}).then((response) => {
                console.log(response)
                console.log(response.data.status)
                if (response.data.status) {
                    setuserValid(true);
                } }).catch( (error) =>{
                    console.log(error);
                    setvalidcred(false)
                } )
    }

    return (
        <div className="App">
            {
                userValid ? <Users />
                    :
                    <div>
                        <h1> Login </h1>
                        <form onSubmit={login} >
                            <label> Email: </label> <input id="name" type="email" name="email" placeholder="Enter email" required/> <br/>
                            <label> Password: </label> <input id="password" type="password" name="password" placeholder="Enter Password" required/> <br/>
                            <button type="submit">Login</button>
                        </form>
                        {validcred === false && <label> Invalid email/password </label>}
                    </div>
            }
        </div>
    );
}

export default Login;
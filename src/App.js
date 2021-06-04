import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import Form from './Form'
import { useState } from 'react';

function App() {
  const [Success, setSuccess] = useState(false);

  const isSuccess = event => {
    setSuccess(true);
  }
  console.log("App")
  console.log(Success)
  return (
    <div className="App">
      {!isSuccess ? <Profile> </Profile> : (<Form submitForm={isSuccess}>  </Form>)}
      {/* <Form submitForm={isSuccess}>  </Form> */}
    </div>
  );
}

export default App;

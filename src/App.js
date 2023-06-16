import './App.css';
import Listupdate from './components/Listupdate';
import { useState } from 'react';
import Thankyou from './components/Thankyou';

function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [valid, setValid] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handelChange = (event) => {
    if(!isValidEmail(event.target.value)) {
      setError('Valid Email required');
    } else {
      setError(null);
    }
    setEmail(event.target.value);
  };

  const handelSubmit = (event) => {
    event.preventDefault();

    if(!isValidEmail(email)) {
      setError('Valid Email required');
      setValid(false);
    }else {
      setValid(true);
    }
  };

  return (
    <main>
      {valid ? <Thankyou /> :
        <div className='news-letter'>
          <section className='col-content'>
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <Listupdate />
            <div className='form'>
              <div className="block">
                <p className='email-title'>Email address</p>
                {error && <p className='email-error'>{error}</p>}
              </div>
              <input type="email" name="email" id="emailField" placeholder='email@company.com' autoComplete='off' onChange={handelChange} value={email}/>
              <button type="submit" className='btn' onClick={handelSubmit}>
                Subscribe to monthly newsletter
              </button>
            </div>
          </section>
          <picture>
            <source media="(max-width: 760px )" srcSet="./images/illustration-sign-up-mobile.svg" />
            <img src="./images/illustration-sign-up-desktop.svg" alt="" />
          </picture>
        </div>
      }
      
    </main>
  );
}

export default App;

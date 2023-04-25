import './App.css';
import { userValidation } from './validation';

function App() {
  const createUser = async (event) => {
    event.preventDefault();
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };
    console.log(formData);
    const isValid = await userValidation.isValid(formData);
    console.log(isValid);
    event.target.reset()
  };

  //async await dememzin sebebi call back den gelen veriye isValid uygulanmasi.    



  return (
    <div className="App">
      <form className="form" onSubmit={createUser}>
        <input type="text" placeholder='schreib your name' />
        <input type="text" placeholder='schreib your email' />
        <input type="password" placeholder='schreib your password' />
        <input type="submit" className='submit' />
      </form>
    </div>
  );
}

export default App;

import { useState } from 'react'
import './Container.css'
import Heading from './Heading'
import Display from './Display'
import UserInput from './UserInput'
import Button from './Button'

const Container = () => {
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setOptions(prev => ({
      ...prev,
      [name]: checked,
    }));
  };

  const [length, setLength] = useState(12);

  const handleLengthChange = (e) => {
    setLength(Number(e.target.value))
  }

  const[password, setPassword] = useState('');

  const handleGeneratePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    const numbers = "0123456789";

    let characters = '';

    if(!options.uppercase && !options.lowercase && !options.numbers && !options.symbols) {
      alert("Please select at least one option");
      return;
    }

      characters += uppercase;
    if(options.uppercase) {
      characters += uppercase;
    }
    if(options.lowercase) {
      characters += lowercase;
    }
    if(options.numbers) {
      characters += numbers;
    }
    if(options.symbols) {
      characters += symbols;
    }
    
    let pass = '';

    for(let i = 0; i < length; i++){
      pass += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    setPassword(pass);
  }

  return (
    <div className='box'>
      <Heading />
      <Display value={password}/>
      <UserInput options={options} onCheckBoxChange={handleChange} onLengthChange={handleLengthChange} length={length} />
      <Button onClick={handleGeneratePassword}/>
    </div>
  )
}

export default Container
import { useState } from 'react'
import Image from 'next/image'

const FormContent = () => {

  const [firstNameInput, setFirstNameInput] = useState('')
  const [lastNameInput, setLastNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const [emailError, setEmailError] = useState(false)
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const handleFirstNameInput = (e) => {
    setFirstNameInput(e.target.value)
  }

  const handleLastNameInput = (e) => {
    setLastNameInput(e.target.value)
  }

  const handleEmailInput = (e) => {
    setEmailInput(e.target.value)
  }

  const handlePasswordInput = (e) => {
    setPasswordInput(e.target.value)
  }

  const handleErrors = () => {
    setEmailError(!emailInput.endsWith('@gmail.com'))
    setFirstNameError(!firstNameInput)
    setLastNameError(!lastNameInput)
    setPasswordError(!passwordInput)
  }



  return (
    <div className='bg-white rounded-lg p-6 grid grid-flow-row justify-center items-center gap-2 md:p-10 md:gap-6'>
      <div className='relative'>
        <input
          type='text'
          placeholder='First Name'
          value={firstNameInput}
          onChange={handleFirstNameInput}
          className={`w-full border-lightGray border-2 rounded-md p-4 placeholder-darkGray font-semibold text-[14px] ${firstNameError ? 'border-red-300' : 'border-lightGray'}`} />

        <div className={`absolute right-[10px] transform top-[25%] ${firstNameError ? 'block' : 'hidden'}`}>
          <Image
            src='/icon-error.svg'
            width='20px'
            height='20px'
          />
        </div>

        <div>
          <p className={`text-red-300 text-right text-[11px] font-semibold mt-1 ${firstNameError ? 'block' : 'hidden'}`}><i>First Name cannot be empty</i></p>
        </div>
      </div >

      <div className='relative'>
        <input
          type='text'
          placeholder='Last Name'
          value={lastNameInput}
          onChange={handleLastNameInput}
          className={`w-full border-lightGray border-2 rounded-md p-4 placeholder-darkGray font-semibold text-[14px] ${lastNameError ? 'border-red-300' : 'border-lightGray'}`} />

        <div className={`absolute right-[10px] transform top-[25%] ${lastNameError ? 'block' : 'hidden'}`}>
          <Image
            src='/icon-error.svg'
            width='20px'
            height='20px'
          />
        </div>

        <div>
          <p className={`text-red-300 text-right text-[11px] font-semibold mt-1 ${lastNameError ? 'block' : 'hidden'}`}><i>Second Name cannot be empty</i></p>
        </div>
      </div >

      <div className='relative'>
        <input
          type='email'
          placeholder='Email Address'
          value={emailInput}
          onChange={handleEmailInput}
          className={`w-full border-lightGray border-2 rounded-md p-4 placeholder-darkGray font-semibold text-[14px] ${emailError ? 'border-red-300' : 'border-lightGray'}`} />

        <div className={`absolute right-[10px] transform top-[25%] ${emailError ? 'block' : 'hidden'}`}>
          <Image
            src='/icon-error.svg'
            width='20px'
            height='20px'
          />
        </div>

        <div>
          <p className={`text-red-300 text-right text-[11px] font-semibold mt-1 ${emailError ? 'block' : 'hidden'}`}><i>Looks like this is not an email</i></p>
        </div>
      </div >

      <div className='relative'>
        <input
          type='password'
          placeholder='Password'
          value={passwordInput}
          onChange={handlePasswordInput}
          className={`w-full border-lightGray border-2 rounded-md p-4 placeholder-darkGray font-semibold text-[14px] ${passwordError ? 'border-red-300' : 'border-lightGray'}`} />

        <div className={`absolute right-[10px] transform top-[25%]  ${passwordError ? 'block' : 'hidden'}`}>
          <Image
            src='/icon-error.svg'
            width='20px'
            height='20px'
          />
        </div>

        <div>
          <p className={`text-red-300 text-right text-[11px] font-semibold mt-1 ${passwordError ? 'block' : 'hidden'}`}><i>Password cannot be empty</i></p>
        </div>
      </div >

      <div>
        <button
          onClick={handleErrors}
          className='bg-green  w-full text-white 4 text-center text-[14px] py-4 rounded-lg font-semibold mt-5 hover:bg-lightGreen'>CLAIM YOUR FREE TRIAL</button>
        <p className='text-lightGray font-semibold text-center text-[11px] mt-3'>By clicking the button, you are agreeing to our <span className='text-maroon font-bold'>Terms and Services</span></p>
      </div>
    </div>
  );
}
export default FormContent;
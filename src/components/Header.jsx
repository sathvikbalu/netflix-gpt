import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch, useSelector } from 'react-redux'
import {LOGO, SUPPORTED_LANGUAGES} from '../utils/constants'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react'
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from '../utils/gptSlice'
import { useNavigate } from 'react-router-dom'
import { changeLanguage } from '../utils/configSlice'

const Header = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const user=useSelector((store)=>store.user)
  const gptSearch = useSelector((store)=> store.gpt.showGptSearch);

  
  useEffect(() => {
    //It tells your app whether the user is signed in or signed out, 
    // and updates automatically whenever the user's auth state changes.
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        //console.log(user);
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        // ...
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
      }
    });
    // Unsubscribe from the auth state listener when the component unmounts
    return ()=> unsubscribe(); // Cleanup subscription on unmount 
  }, []);

  const handleClick=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      //dispatch(removeUser())
    }).catch((error) => {
      // An error happened.
    });    
  }
  const handleGptSearchClick = () => {
    //Toggle GPT search
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between" >
<img className='w-44' src={LOGO} />
   {user && <div className='flex p-2'>
    {gptSearch && <select className='m-2 p-2 bg-gray-800 text-white' onChange={handleLanguageChange}>
      {SUPPORTED_LANGUAGES.map((lang)=><option key={lang.code} value={lang.code}>{lang.name}</option>)}
    </select>}
    <button onClick={handleGptSearchClick} className='py-2 px-4 my-2 mx-4 bg-purple-800 text-white rounded-lg'>{gptSearch?"Home Page":"GPT Search"}</button>
      <img className="w-12 h-12" src={user.photoURL} alt="" />
      <button onClick={handleClick} className='font-bold cursor-pointer text-white'>(Sign Out)</button>
    </div>
}
</div>
  )
}

export default Header
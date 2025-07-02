import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchbar = () => {

  const currentLanguage = useSelector((store)=>store.config.lang)
  

  return (
    <div className='pt-[10%] flex justify-center items-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
        {/*lang.currentLanguage doesn't work*/}
            <input type="text" className='p-4 m-4 col-span-9 bg-white' placeholder={lang[currentLanguage].searchPlaceholder} /> 
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>{lang[currentLanguage].search}</button>
        </form>
    </div>
  )
}

export default GptSearchbar
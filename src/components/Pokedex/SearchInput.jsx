import React from 'react'
import SelectType from './SelectType'

const SearchInput = ({setPokeSearch, setOptionType,optionType,setPage,setCurrentBlock}) => {

  const handleSubmit = e => {
    e.preventDefault()
    setPokeSearch(e.target.searchText.value.trim().toLowerCase())
    setOptionType('All')
    e.target.searchText.value = ""
  }

  return (
    <form  onSubmit={handleSubmit}>
      <div className='pokedex__form'>
      <input className='input' id='searchText' type="text" placeholder='Write Pokemon Name' />
      <button className='btn-search'>Search</button>
      
      <SelectType
       optionType ={optionType} 
       setOptionType={setOptionType}
       setPokeSearch={setPokeSearch}     
       setPage={setPage}
       setCurrentBlock={setCurrentBlock}
      />
      
      </div>
    </form>
  )
}

export default SearchInput
import React from 'react'

const Main = (props) => {
  return (
    <main>
      <div className='main-head'>
        <form className='search-bar'
        onSubmit={props.handleSearch}>
            <input type='search' placeholder='Enter an Anime' required value={props.search} onChange={e => props.setSearch(e.target.value)}></input>
        </form>


      </div>
    </main>
  )
}

export default Main

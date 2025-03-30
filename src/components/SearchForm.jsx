import React from 'react'
import { UseAppContext } from '../context'

export default function SearchForm() {
  const { setSearchTerm } = UseAppContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    if (!searchValue) return
    // console.log(searchValue)
    setSearchTerm(searchValue)
  }
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          name="search"
          placeholder="category"
        />
        <button className="btn">search</button>
      </form>
    </section>
  )
}

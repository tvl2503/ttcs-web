import React from 'react'
import Modal from '../UI/Modal'
import "./Search.scss"
const SearchForm = props => {
  return (
    <Modal onclose= {props.onclose}>
        <div className="modal">
            <div className="search--top">
                <p>Search Our Store!</p>
                <div className="close-btn-search" onClick={props.onclose}>
                  <box-icon name='x'></box-icon>
                </div>
            </div>
            <form className="form--search">
              <input type="text" placeholder='Search Products' />
              <button type='submit'><box-icon name='search'></box-icon></button> 
            </form>
        </div>
    </Modal>
  )
}

export default SearchForm
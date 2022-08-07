import React from 'react'
import Form from 'react-bootstrap/Form';

const SearchBar = ({setSearchValue}) => {
  return (
    <Form className="d-flex m-5">
        <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>setSearchValue(e.target.value)}
        />
    </Form>
  )
}

export default SearchBar          
          
          
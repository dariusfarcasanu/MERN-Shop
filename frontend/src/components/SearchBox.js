import React, { useState } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <FormControl
        type="text"
        name="q"
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search products..."
        className="mr-sm-2 ml-sm-5"
        style={{ borderRadius: '5px' }}
      ></FormControl>
      <Button type="submit" variant="outline-light" className="p-2">
        <i className="fas fa-search" style={{ marginRight: '5px' }}></i>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;

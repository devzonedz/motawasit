// SearchBox.js
import React, { useState, useRef, useEffect } from 'react';
import { Input, Box, Button, Spinner } from '@chakra-ui/core';
import { debounce } from 'lodash';

function SearchBox({ onSearch, isLoading }) {
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);

  const debouncedSearch = useRef(
    debounce((query) => {
      onSearch(query);
    }, 1000)  
  ).current;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSearchChange = (event) => {
    const newValue = event.target.value;
    setSearchQuery(newValue);
    debouncedSearch(newValue);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <Box position="relative">
      <Input
        ref={inputRef}
        className="search-box"
        color="black"
        bg="white"
        placeholder=" ابحث عن الكتب,المقالات,الكتاب ..."
        type="search"
        value={searchQuery}
        onChange={handleSearchChange}
        pr="4rem"
      />
      {searchQuery && (
        <Button
          position="absolute"
          right="0.5rem"
          top="50%"
          transform="translateY(-50%)"
          size="sm"
          onClick={handleClear}
        >
          Clear
        </Button>
      )}
      {isLoading && (
        <Spinner
          position="absolute"
          right="4.5rem"
          top="50%"
          transform="translateY(-50%)"
          size="sm"
        />
      )}
    </Box>
  );
}

export default SearchBox;
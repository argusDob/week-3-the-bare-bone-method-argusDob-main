import React, { useEffect, useState } from "react";
import styled from "styled-components";
import backgroundImage from "../assets/search-header.png";

import InputText from "./InputText";
import PrimaryButton from "./PrimaryButton";

interface onInputChange {
  value: string;
}

interface SearchBarProps {
  onInputChange: (searchInput: onInputChange | undefined) => void;
  onClick?: (searchInput: onInputChange | undefined) => void;
}

export default function SearchBar({ onInputChange }: SearchBarProps) {
  const [inputValue, setInputValue] = useState<onInputChange>({ value: "" });

  useEffect(() => {
    handleInputChange(inputValue);
  }, []);

  const fnHandleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const handleInputChange = (searchInput: onInputChange) => {
    setInputValue(searchInput);
  };

  const onSearchSubmit = () => {
    onInputChange(inputValue);
  };

  return (
    <SearchBarContainer>
      <SearchBarTitle>Welcome.</SearchBarTitle>
      <SearchBarSubTitle>
        Millions of movies, TV shows and people to discover. Explore now.
      </SearchBarSubTitle>
      <form onSubmit={fnHandleSubmit}>
        <SearchForm>
          <InputText
            type="text"
            id="text"
            name="Search"
            label="Search: "
            required={true}
            minLength={8}
            maxLength={100}
            size={100}
            onInputChange={handleInputChange}
          />
          <PrimaryButton onClick={onSearchSubmit} text="Submit" />
        </SearchForm>
      </form>
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div`
  height: 300px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-image: url("${backgroundImage}");
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const SearchBarTitle = styled.h2`
  font-size: 3em;
  font-weight: 700;
  line-height: 1;
  color: white;
  margin-bottom: 10px;
`;

const SearchBarSubTitle = styled.h3`
  font-size: 2em;
  font-weight: 600;
  margin: 0;
  color: white;
  margin-bottom: 40px;
`;

const SearchForm = styled.div`
  display: flex;
`;

// NOTE: You can use the components bellow to go quicker
/** 
const SearchInput = styled.input`
  display: flex;
  border-radius: 0px;
  border-width: 0px;
  height: 40px;
  flex-grow: 1;
  padding: 0px;
  margin-right: 10px;
  padding-left: 10px;
  font-size: 1rem;
  color: #636e72;
  font-weight: 300;
`;

const SearchButton = styled.button`
  height: 40px;
  display: flex;
  width: 200px;
  background-color: #0984e3;
  border-color: #0984e3;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  justify-content: center;
  align-items: center;
  border-width: 0px;
  &:hover {
    background-color: #0984e3;
    cursor: pointer;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
`;
**/

import React from "react";
import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
`
const Header = styled.div`
  display: flex;
  flex:1;
  border-bottom:1px solid black;
`
const Content = styled.div`
  display: flex;
  flex: 7;
  border-bottom:1px solid black;
`
const Bottom = styled.div`
  display: flex;
  flex:1;
  border-bottom:1px solid black;
`
const Title = styled.div`
  flex: 1;
  display: flex;
  align-item: center;
  border-right: 1px solid black;
`
const SearchBox = styled.div`
  flex:7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  background-color: black;
`
const Search = styled.input`
  width: 50%;
  height: 50%;
  font-size: 20px;
`;
const UserBox = styled.div`
  flex: 1.49;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  width: 214px;
`
const Holo = styled.img`
  width: 107px;
  height: 107px;
`
const StyledButton = styled.button`
  display: flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  height: 2.25rem;
  font-size: 1rem;

  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:active {
   background: #1c7ed6;
  }
  & + & {
  margin-left: 1rem;
  }
`
const Main = () => {

  return (
    <HomeWrapper>
      <Header>
        <Title>
          <Holo 
            className="TitleImage" 
            alt="holo" 
            src="img/holo.png"
          />
          <Holo 
            className="TitleImage" 
            alt="holo" 
            src="img/holo.png"
          />
          <Holo 
            className="TitleImage" 
            alt="holo" 
            src="img/holo.png"
          />
          <SearchBox>
            <Search />
            <StyledButton> SEARCH</StyledButton>
          </SearchBox>
          <UserBox>
            Well Come!
            
          </UserBox>
        </Title>
      </Header>
      <Content>
        Content
      </Content>
      <Bottom>
        Bottom
      </Bottom>
    </HomeWrapper>
  )
}

export default Main;

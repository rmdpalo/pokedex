import { useState } from 'react'
import {
  AppWrapper,
  AssetWrapper,
  ContainerWrapper,
  DittoButton,
  ScreenWrapper,
  SearchBar,
  SearchButton,
  SearchBarWrapper,
  ScrollUpButton,
  ScrollDownButton,
  ScrollWrapper,
} from './App.modulecss'


const App = () => {
  const [pokemon, setPokemon] = useState("")
  
  const handleClick = () => {
    //fetch data from api (hardcoded for now)
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
    //take the response and convert to JSON
    .then(response => response.json())
    //console log for now (eventually would set to state)
    .then(data => setPokemon(data.name))
  }

  return (
    <AppWrapper>
      <ContainerWrapper>
        <SearchBarWrapper>
          <SearchBar 
            type="text"
            placeholder="Please enter a Pokémon # or name"
          />
          <SearchButton 
            type="submit"
            value="🔎"
            onClick={handleClick}
          />
        </SearchBarWrapper>
        <AssetWrapper>
          <DittoButton>:)</DittoButton>
          <ScreenWrapper>
            {pokemon === "" ? (<h1>Pokémon</h1>) : (<h1>{pokemon}</h1>)}
          </ScreenWrapper>
          <ScrollWrapper>
            <ScrollUpButton></ScrollUpButton>
            <ScrollDownButton></ScrollDownButton>
          </ScrollWrapper>
        </AssetWrapper>
      </ContainerWrapper>
    </AppWrapper>
  )
}

export default App;

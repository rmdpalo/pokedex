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
  //pokemon in state
  const [pokemon, setPokemon] = useState("")
  //user's input in searchbar
  const [search, setSearch] = useState("")
  //url for the sprite to display
  const gifURL = `https://projectpokemon.org/images/normal-sprite/${pokemon}.gif` 
  //to lowercase user input for it to work with API
  const lowerCaseSearch = search.toLowerCase()
  //API endpoint with interpolation for dynamic value.
  //once search button is clicked take the lowercased value of text input
  const fetchURL = `https://pokeapi.co/api/v2/pokemon/${lowerCaseSearch}/`

  const handleSubmit = (e) => {

    //fetch data from api (hardcoded for now)
    fetch(fetchURL)
    //take the response and convert to JSON
    .then(response => response.json())
    //console log for now (eventually would set to state)
    .then(data => setPokemon(data.name))
    .catch(() => alert("Please enter a valid pokemon name or #"))
    
    e.preventDefault()
  }

  const handleChange = (e) => {
    //keep track of what is in text input
    setSearch(e.target.value)
  }

  return (
    <AppWrapper>
      <ContainerWrapper>
        <SearchBarWrapper>
          <form>
            <SearchBar 
              type="text"
              placeholder="Please enter a Pokémon # or name"
              value={search}
              onChange={handleChange}
            />
            <SearchButton 
              type="submit"
              value="🔎"
              onClick={handleSubmit}
            />
          </form>
        </SearchBarWrapper>
        <AssetWrapper>
          <DittoButton>:)</DittoButton>
          <ScreenWrapper>
            {pokemon === "" ? (
              <h1>Pokémon</h1>
            ) : (
              <div>
                <h1>{pokemon}</h1>
                <img src={gifURL} />
              </div>
            )}
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

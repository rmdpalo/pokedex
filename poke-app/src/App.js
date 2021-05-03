import { useState, useEffect } from 'react'
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
  // pokemon id
  const [pokemonNum, setPokemonNum] = useState("")
  //user's input in searchbar
  const [search, setSearch] = useState("")
  //url for the sprite to display 
  const gifURL = `https://projectpokemon.org/images/normal-sprite/${pokemon}.gif`
  
  useEffect (() => {
    console.log("hello")
    //watching for changes in pokemonNum
    //if pokemonNum changes, run fetch call but use pokemonNum (instead of lowerCaseSearch)
    const fetchURL = `https://pokeapi.co/api/v2/pokemon/${pokemonNum}/`
    if (search === "" && pokemonNum === "") {
      return
    }
    //fetch data from api (hardcoded for now)
    fetch(fetchURL)
    //take the response and convert to JSON
    .then(response => response.json())
    //console log for now (eventually would set to state)
    .then(data => {
      setPokemon(data.name)
      setPokemonNum(data.id)
    })
    .catch(() => alert("Please enter a valid pokemon name or #"))
    
  }, [pokemonNum])

  //TODO: DRY the useEffect to cover both name and number changes
  const handleSubmit = (e) => {
    //to lowercase user input for it to work with API
    const lowerCaseSearch = search.toLowerCase()
    //API endpoint with interpolation for dynamic value.
    //once search button is clicked take the lowercased value of text input
    const fetchURL = `https://pokeapi.co/api/v2/pokemon/${lowerCaseSearch}/`

    //fetch data from api (hardcoded for now)
    fetch(fetchURL)
    //take the response and convert to JSON
    .then(response => response.json())
    //console log for now (eventually would set to state)
    .then(data => {
      setPokemon(data.name)
      setPokemonNum(data.id)
    })
    .catch(() => alert("Please enter a valid pokemon name or # from 1-809"))
    
    e.preventDefault()
  }

  const handleChange = (e) => {
    //keep track of what is in text input
    setSearch(e.target.value)
  }

  //NOTE: looping does not work unless setPokemonNum is set to type integer
  const handleScrollClick = (e) => {
    //if on lower bound, go to the last pokemon
    if (pokemonNum === 1 && e.target.value === "-") {
      setPokemonNum(809)
    //if on upper bound. go to the first pokemon
    } else if(pokemonNum === 809 && e.target.value === "+") {
      setPokemonNum(1)
    } else if (e.target.value === "-") {
      setPokemonNum(pokemonNum - 1)
    } else {
      setPokemonNum(pokemonNum + 1)
    }
  }

  //Ditto button functionality
  const randomizePokemon = () => {
    //generate a random number between 1-809
    let randomNum = Math.floor(Math.random() * 809) + 1
    setPokemonNum(randomNum)
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
          <DittoButton
            onClick={randomizePokemon}
          >:)</DittoButton>
          <ScreenWrapper>
            {pokemonNum === "" ? (
              <h1>Pokémon</h1>
            ) : (
              <div>
                <h1>{pokemonNum} {pokemon}</h1>
                <img src={gifURL} alt={`${pokemon} sprite`} />
              </div>
            )}
          </ScreenWrapper>
          <ScrollWrapper>
            <ScrollUpButton
              value="-"
              onClick={handleScrollClick}
            >
              {/* svg placeholder */}
            </ScrollUpButton>
            <ScrollDownButton
              value="+"
              onClick={handleScrollClick}
            >
              {/* svg placeholder */}
            </ScrollDownButton>
          </ScrollWrapper>
        </AssetWrapper>
      </ContainerWrapper>
    </AppWrapper>
  )
}

export default App;

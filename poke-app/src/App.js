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
          />
        </SearchBarWrapper>
        <AssetWrapper>
          <DittoButton>:)</DittoButton>
          <ScreenWrapper>
            <h1>Pokémon</h1>
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

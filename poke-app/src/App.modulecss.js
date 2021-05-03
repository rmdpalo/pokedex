import styled from 'styled-components'

export const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const ContainerWrapper = styled.div`
  min-width: 700px;
  min-height: 475px;
  background-color: #E74D55;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ScreenWrapper = styled.div`
  min-width: 425px;
  min-height: 300px;
  background-color: #FFFFFF;
  border: 10px solid #707070;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SearchBar = styled.input`
  border: 10px solid #707070;
  border-radius: 20px;
  background-color: #71e46e;
  color: #1d601c;
  width: 300px;
  height: 2rem;
  margin: 0px 10px;
`
export const SearchButton = styled.input`
  border: 10px solid #707070;
  border-radius: 50%;
  background-color: #81b3ff;
  color: #0d6eff;
  width: 65px;
  height: 65px;
  margin: 0px 10px;
`

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`

export const AssetWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScrollUpButton = styled.button`
  height: 110px;
  width: 50px;
  border: 10px solid #707070;
  border-bottom: none;
  border-radius: 40px 40px 0 0;
  background-color: #ffca62;
`

export const ScrollDownButton = styled.button`
  height: 110px;
  width: 50px;
  border: 10px solid #707070;
  border-top: none;
  border-radius: 0 0 40px 40px;
  background-color: #ffca62;
`

export const DittoButton = styled.button`
  border-radius: 50%;
  border: 10px solid #707070;
  background-color: pink;
  width: 65px;
  height: 65px;
  align-self: flex-end;
`
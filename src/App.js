
import styled from 'styled-components'
import React, { useEffect} from 'react'
import './App.css'
import searchIcon from './search.svg'

//663984e4

const API_URL = 'http://www.omdbapi.com/?apikey=663984e4'

const Container = styled.div`
text-align: center;
`


const App = ()=>{

const searchMovies = async (title) => {
const response = await fetch (`${API_URL}&s=${title}`);
const data = await response.json();
console.log(data.Search[0])
}

  useEffect(()=>{
    searchMovies('pendekar')
  },[])
  return(
    <Container>SAYA</Container>
    
  )
}

export default App;

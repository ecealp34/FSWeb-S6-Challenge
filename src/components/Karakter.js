// Karakter bileşeniniz buraya gelecek
import React from "react"
import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;


const karakter = (data) => {

    const { characters } = data;
    

    return(

      <div>

       {characters.map(character => {
        return(
        <div className="character-card">
          <Button>`name: ${characters.name}`</Button>
          <div className="character-children-card">
          <p>`height: ${characters.height}`</p>
          <p>`mass: ${characters.mass}`</p>
          <p>`hair_color: ${characters.hair_color}`</p>
          <p>`skin_color: ${characters.skin_color}`</p>
          <p>`eye_color: ${characters.eye_color}`</p>
          <p>`birth_year: ${characters.birth_year}`</p>
          <p>`gender: ${characters.gender}`</p>
          <p>`homeworld: ${characters.homeworld}`</p>
          <p>`films: ${characters.films[0]}, ${characters.films[1]}, ${characters.films[2]} `</p>
          <p>`species: ${characters.species}`</p>
          <p>`films: ${characters.vehicles[0]}, ${characters.vehicles[1]}`</p>
          <p>`starships: ${characters.starships[0]}, ${characters.starships[1]}`</p>
          <p>`created: ${characters.created}`</p>
          <p>`edited: ${characters.edited}`</p>
          <p>`url: ${characters.url[0]}`</p>
          </div> 
        </div> 

       )})};
      
      </div>
 )};



  export default karakter;
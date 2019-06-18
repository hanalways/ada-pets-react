import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = (props) => {
    console.log(props);

    const pets = props.pets.map((pet) => {
      return ( 
        <PetCard
          selectPetCallback={props.onSelectPet}
          {...pet}
        />
      )
    });
  
  return (
    <div className="card-group">
      { pets }
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;

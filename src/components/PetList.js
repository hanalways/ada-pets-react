import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = (props) => {
  console.log(props.pets);
  console.log(...props.pets);
  const pets = props.pets.map((pet, i) => {
    return ( 
      <PetCard
        id={i}
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

import React, { useState } from 'react';
import { List } from './CarsList.styled';
import CarsItem from 'components/CarsItem';
import PopUp from 'components/PopUp';

export default function CarsList({ carsArray }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const openPopUp = () => {
    setIsPopUpOpen(true);
  };

  const closePopUp = () => {
    setIsPopUpOpen(false);
    setSelectedCar(null);
  };

  const handleCarInfo = carInfo => {
    setSelectedCar(carInfo);
    openPopUp();
  };

  return (
    !!carsArray.length && (
      <>
        <List>
          {carsArray.map(car => (
            <li key={car.id}>
              <CarsItem
                carInfo={car}
                openPopUp={openPopUp}
                handleCarInfo={handleCarInfo}
              />
            </li>
          ))}
        </List>
        {isPopUpOpen && (
          <PopUp
            isOpen={isPopUpOpen}
            onClose={closePopUp}
            carInfo={selectedCar}
          />
        )}
      </>
    )
  );
}

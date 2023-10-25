import React, { useState } from 'react';
import { List } from './CarsList.styled';
import CarsItem from 'components/CarsItem';
import PopUp from 'components/PopUp';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';

export default function CarsList({ carsArray }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [displayedCars, setDisplayedCars] = useState(12);

  const initialCars = carsArray.slice(0, displayedCars);

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

  const handleLoadMore = () => {
    setDisplayedCars(displayedCars + 12);
  };

  return (
    !!carsArray.length && (
      <>
        <List>
          {initialCars.map(car => (
            <li key={car.id}>
              <CarsItem
                carInfo={car}
                openPopUp={openPopUp}
                handleCarInfo={handleCarInfo}
              />
            </li>
          ))}
        </List>
        {displayedCars < carsArray.length && (
          <ButtonLoadMore onClick={handleLoadMore} />
        )}
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

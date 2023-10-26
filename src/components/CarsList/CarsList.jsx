import React, { useState } from 'react';
import { List } from './CarsList.styled';
import CarsItem from 'components/CarsItem';
import PopUp from 'components/PopUp';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/filterSelectors';

export default function CarsList({ carsArray }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [displayedCars, setDisplayedCars] = useState(12);

  const filter = useSelector(selectFilter);

  const filterCars = (cars, filter) => {
    return cars.filter(car => {
      const numericPrice = parseFloat(car.rentalPrice.slice(1));

      // Фільтр за брендом
      if (
        filter.carBrand &&
        car.make.toLowerCase().trim() !== filter.carBrand.toLowerCase().trim()
      ) {
        return false;
      }

      // Фільтр за ціною (за замовчуванням priceTo = 999999)
      if (filter.pricePerOneHour && numericPrice > filter.pricePerOneHour) {
        return false;
      }

      // Фільтр за пробігом (за замовчуванням MileageFrom = 0, MileageTo = 999999)
      if (
        (filter.carMileageFrom && car.mileage < filter.carMileageFrom) ||
        (filter.carMileageTo && car.mileage > filter.carMileageTo)
      ) {
        return false;
      }
      return true; // Повертає true, якщо автомобіль відповідає всім умовам фільтра.
    });
  };

  // Фільтруйте список машин на основі фільтрів
  const filteredCars = filterCars(carsArray, filter);

  const initialCars = filteredCars.slice(0, displayedCars);

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
    !!filteredCars.length && (
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
        {displayedCars < filteredCars.length && (
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

import { useEffect } from 'react';
import SearchForm from 'components/SearchForm';
import CarsList from 'components/CarsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from 'redux/cars/carsSelectors';
import { fetchAllCars } from 'redux/cars/carsOperations';
import SectionWrapper from 'components/SectionWrapper';

export default function Catalog() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  return (
    <SectionWrapper>
      <SearchForm />
      <CarsList carsArray={cars} />
    </SectionWrapper>
  );
}

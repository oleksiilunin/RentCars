import { Formik } from 'formik';
import {
  Form,
  Label,
  ErrorMessage,
  BrandField,
  PriceField,
  MileageFromField,
  MileageToField,
  MileageBox,
} from './SearchForm.styled';
import * as yup from 'yup';
import Button from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { clearFilter, setFilter } from 'redux/filter/filterSlice';

const schema = yup.object().shape({
  carBrand: yup
    .string()
    .trim()
    .max(15, 'Car brand should not exceed 15 characters.'),
  pricePerOneHour: yup
    .number()
    .min(0, 'Price per hour must be positive or 0')
    .max(9999, 'Price per hour should not exceed 9999')
    .default(9999),
  carMileageFrom: yup
    .number()
    .min(0, 'Mileage From must be positive or 0')
    .max(999999, 'Mileage From should not exceed 999999')
    .default(0),
  carMileageTo: yup
    .number()
    .min(0, 'Mileage To must be positive or 0')
    .max(999999, 'Mileage To should not exceed 999999')
    .default(999999),
});

const initialValues = {
  carBrand: '',
  pricePerOneHour: '',
  carMileageFrom: '',
  carMileageTo: '',
};

export default function SearchForm() {
  const dispatch = useDispatch();

  const handleFormSubmit = values => {
    // Оновлюємо фільтр в Redux з введеними значеннями
    dispatch(setFilter(values));
  };

  const handleResetFilter = ({ resetForm }) => {
    // Скидаємо фільтр у початкові значення
    dispatch(clearFilter(initialValues));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        // submit form
        handleFormSubmit(values);
      }}
    >
      {({ isValid, dirty, isSubmitting }) => (
        <Form autoComplete="off">
          <Label>
            Car brand
            <BrandField
              type="text"
              name="carBrand"
              maxLength="15"
              placeholder="Enter the text"
            />
            <ErrorMessage name="carBrand" component="span" />
          </Label>
          <Label>
            Price/ 1 hour
            <PriceField
              type="number"
              name="pricePerOneHour"
              maxLength="4"
              placeholder="To $"
            />
            <ErrorMessage name="pricePerOneHour" component="span" />
          </Label>
          <MileageBox>
            <Label>
              Car mileage / km
              <MileageFromField
                type="number"
                name="carMileageFrom"
                maxLength="6"
                placeholder="From"
              />
              <ErrorMessage name="carMileageFrom" component="span" />
            </Label>
            <MileageToField
              type="number"
              name="carMileageTo"
              maxLength="6"
              placeholder="To"
            />
            <ErrorMessage name="carMileageTo" component="span" />
          </MileageBox>
          <Button
            $searchButtonStyle
            label="Search"
            type="submit"
            disabled={
              !isValid || !dirty
              // || isSubmitting
            }
          />
          <Button
            $searchButtonStyle
            label="Reset"
            type="reset"
            onClick={handleResetFilter}
          />
        </Form>
      )}
    </Formik>
  );
}

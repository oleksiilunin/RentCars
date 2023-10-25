import { Formik } from 'formik';
import {
  Form,
  Label,
  // LabelWrapper,
  Field,
  FormButton,
  ErrorMessage,
  BrandField,
  PriceField,
  MileageFromField,
  MileageToField,
  MileageBox,
} from './SearchForm.styled';
import * as yup from 'yup';
import Button from 'components/Button/Button';
// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';

const schema = yup.object().shape({
  carBrand: yup
    .string()
    .trim()
    .max(15, 'Car brand should not exceed 15 characters.'),
  pricePerOneHour: yup
    .number()
    .max(9999, 'Price per hour should not exceed 9999')
    .default(9999),
  carMileageFrom: yup
    .number()
    .max(999999, 'Price per hour should not exceed 999999')
    .default(0),
  carMileageTo: yup
    .number()
    .max(999999, 'Price per hour should not exceed 999999')
    .default(999999),
});

const initialValues = {
  carBrand: '',
  pricePerOneHour: '',
  carMileageFrom: '',
  carMileageTo: '',
};

export default function SearchForm() {
  // const dispatch = useDispatch();

  // const handleSubmit = (values, { resetForm }) => {
  //   dispatch(
  //     logIn({
  //       carBrand: values.email.trim(),
  //       pricePerOneHour: values.password.trim(),
  //     })
  //   );
  //   resetForm();
  // };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      // onSubmit={handleSubmit}
    >
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
        <Button $searchButtonStyle label="Search" type="submit" />
      </Form>
    </Formik>
  );
}

// const ContactForm = () => {
// 	const dispatch = useDispatch();
// 	const contacts = useSelector(state => state.contacts.items);
// 	const handleSubmit = (newContact, { resetForm }) => {
// 		const isContactExists = contacts?.some(contact => {
// 			return (
// 				contact.name.trim() === newContact.name.trim() ||
// 				contact.number.trim() === newContact.number.trim()
// 			);
// 		});

// 		if (isContactExists) {
// 			toast.error(
// 				`The contact with name: ${newContact.name} or phone number: ${newContact.number} already exists in your list.`,
// 				notifyOptions
// 			);
// 		} else {
// 			dispatch(
// 				addContact({ name: newContact.name, number: newContact.number })
// 			);
// 			resetForm();
// 		}
// 	};
// }

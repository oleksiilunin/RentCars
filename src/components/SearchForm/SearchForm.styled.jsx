import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';
import '../../css/variables.css';

export const Form = styled(FormikForm)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* width: 100%; */

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28571; /* 128.571% */

  color: var(--label-text-color);
`;

export const Field = styled(FormikField)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 14px 18px;
  height: 48px;

  border-radius: 14px;
  border: none;
  outline: none;

  color: var(--primary-text-color);

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11111; /* 111.111% */

  background-color: var(--input-background-color);
`;

export const BrandField = styled(Field)`
  width: 100%;
  max-width: 224px;
`;

export const PriceField = styled(Field)`
  width: 100%;
  max-width: 125px;
`;

export const MileageFromField = styled(Field)`
  padding: 14px 24px;

  width: 160px;

  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 1px solid var(--input-right-border-color);
`;

export const MileageToField = styled(Field)`
  padding: 14px 24px;

  width: 160px;

  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const MileageBox = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const ErrorMessage = styled(FormikError)`
  max-width: 480px;
  color: #c00000;
`;

import { useForm } from 'react-hook-form';
import React from 'react';
import { TextField, Button, styled } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';

import {
  LabelContainer,
  ErrorText,
  Form,
  FormHeader,
} from './ContactForm.styled';

import { addContact } from 'redux/contacts/contactsSlice';
import { useDispatch } from 'react-redux';

require('yup-phone');

const schema = yup
  .object({
    name: yup.string().max(20).min(3).required(),
    number: yup.string().phone().required(),
  })
  .required();

export default function ContactForm({ onClick }) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = data => {
    // formSubmit(data);
    dispatch(addContact(data));
    reset();
    onClick();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormHeader>Add Contact</FormHeader>
      <LabelContainer>
        <ValidationTextField
          {...register('name')}
          label={errors.number ? 'Text Valid Name' : 'Text Name'}
        />
        <ErrorText>{errors.name?.message}</ErrorText>
      </LabelContainer>
      <LabelContainer>
        <ValidationTextField
          type="number"
          {...register('number')}
          label={errors.number ? 'Text Valid Number' : 'Text Number'}
          color="primary"
        />
        <ErrorText>{errors.number?.message}</ErrorText>
      </LabelContainer>
      <Button
        variant="contained"
        size="large"
        endIcon={<SendIcon />}
        type="submit"
      >
        Add Contact
      </Button>
    </Form>
  );
}

ContactForm.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const ValidationTextField = styled(TextField)(() => {
  return {
    '& input:valid + fieldset': {
      borderColor: 'green',
      color: 'green',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      color: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      borderColor: 'blue',
      color: 'blue',
    },
  };
});

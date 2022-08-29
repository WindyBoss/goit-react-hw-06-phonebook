import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid black;
  min-width: 96%;
  padding: 10px 10px 30px 10px;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const FormHeader = styled.h2`
  text-align: center;
  margin-top: 10px;
`;

export const ErrorText = styled.p`
  margin-left: 20px;
  font-size: 16px;
  color: red;
`;

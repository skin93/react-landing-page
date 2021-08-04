import React from 'react';
import {
  Form,
  FormButton,
  FormContainer,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
} from './SignIn.style';

const SignIn = () => {
  return (
    <>
      <FormContainer>
        <FormWrap>
          <Icon to='/'>Landing</Icon>
          <FormContent>
            <Form>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='password'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot Password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </FormContainer>
    </>
  );
};

export default SignIn;

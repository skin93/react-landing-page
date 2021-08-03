import styled from 'styled-components';
import { Link } from 'react-scroll';
import { ButtonType } from '../../types/ButtonType';

export const Button = styled(Link)<ButtonType>`
  border-radius: 50px;
  background: ${(props) => (props.primary ? '#01bf71' : '#010606')};
  white-space: nowrap;
  padding: ${(props) => (props.big ? '.14px 3rem' : '12px 30px')};
  color: ${(props) => (props.dark ? '#010606' : '#fff')};
  font-size: ${(props) => (props.fontBig ? '1.25rem' : '1rem')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${(props) => (props.primary ? '#fff' : '#01bf71')};
  }
`;

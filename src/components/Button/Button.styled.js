import styled from '@emotion/styled';

export const ButtonSearch = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #fff;
  text-align: center;

  color: #303f9f;
  border: 2px solid #303f9f;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #303f9f;
    color: #fff;
  }
`;

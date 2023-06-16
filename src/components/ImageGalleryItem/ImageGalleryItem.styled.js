import styled from '@emotion/styled';

export const ItemCard = styled.li`
  width: 330px;
  height: 225px;

  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  background-color: #fff;
  border: 1px solid rgba(196, 185, 185, 0.281);
  border-radius: 4px;
  box-shadow: 5px 5px 2px #8b8f8d6e;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    cursor 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    box-shadow: 10px 7px 2px #5e615f6e;
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const Image = styled.img`
  display: block;
  padding: 4px;

  border-radius: 4px;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

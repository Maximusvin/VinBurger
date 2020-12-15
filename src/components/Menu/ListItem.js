import s from './Menu.module.css';
import styled from 'styled-components';

const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  background-image: ${({ img }) => `url(.${img})`};
  background-position: center;
  background-size: cover;
  margin-top: 30px;
  margin-right: 30px;
  padding: 15px;
  color: #fff;
  z-index: 1;
  transition: all 0.1s linear;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #000;
    opacity: 0.4;
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 50px 30px rgba(0, 0, 0, 1);
    &::after {
      opacity: 0;
    }
  }
`;

const ListItem = ({ itemList }) => (
  <ul className={s.list}>
    {itemList.map(({ id, name, img, price }) => (
      <Item key={id} img={img}>
        <p>{name}</p>
        <p>
          {price.toLocaleString('ru-RU', {
            style: 'currency',
            currency: 'RUB',
          })}
        </p>
      </Item>
    ))}
  </ul>
);

export default ListItem;

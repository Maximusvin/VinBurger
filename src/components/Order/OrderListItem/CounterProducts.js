import s from './OrderListItem.module.css';

const CounterProducts = ({ count, setCount, onChange }) => {
  return (
    <>
      <button
        type="buttton"
        disabled={count <= 1}
        className={s.btnMinus}
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <input
        type="number"
        min="1"
        max="100"
        value={count < 1 ? 1 : count}
        className={s.counterNumber}
        onChange={onChange}
      />
      <button
        type="buttton"
        className={s.btnPlus}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </>
  );
};

export default CounterProducts;

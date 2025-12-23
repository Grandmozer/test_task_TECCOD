import { Service } from '../types';

interface Props {
    selected: Service[];
}

export default function Cart({ selected }: Props) {
    const total = selected.reduce((acc, s) => acc + s.price, 0);

    return (
        <div className="cart">
            <h2>Итого</h2>
            <ul>
                {selected.map((s, idx) => (
                    <li key={idx}>{s.name} - {s.price} ₽</li>
                ))}
            </ul>
            <p>Общая сумма: {total} ₽</p>
            <button disabled={selected.length === 0}>Оформить заказ</button>
        </div>
    );
}

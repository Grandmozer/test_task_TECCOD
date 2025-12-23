import { useState } from 'react';
import { services } from './data/services';
import { Service } from './types';
import Cart from './components/Cart';
import ServiceCard from './components/ServiceCard';
import './index.css';

export default function App() {
    const [selected, setSelected] = useState<Service[]>([]);

    const addService = (service: Service) => {
        setSelected(prev => [...prev, service]);
    };

    return (
        <div className="container">
            <h1>Дополнительные услуги</h1>
            <div className="services">
                {services.map(s => (
                    <ServiceCard key={s.id} service={s} addService={addService} />
                ))}
            </div>
            <Cart selected={selected} />
        </div>
    );
}

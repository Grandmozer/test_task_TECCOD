import { Service } from '../types';

interface Props {
    service: Service;
    addService: (service: Service) => void;
}

export default function ServiceCard({ service, addService }: Props) {
    return (
        <div className="service-card">
            <span>{service.name}</span>
            <span>{service.price} ₽</span>
            <button onClick={() => addService(service)}>Добавить</button>
        </div>
    );
}

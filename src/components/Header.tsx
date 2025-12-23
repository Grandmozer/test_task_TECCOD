import React from 'react';
import { ShoppingCart, Plane } from 'lucide-react';

interface HeaderProps {
    cartItemsCount: number;
    onCartClick: () => void;
}

/**
 * Компонент шапки приложения
 */
const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick }) => {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Plane className="w-6 h-6 text-indigo-600" />
                    <h1 className="text-xl font-bold text-gray-900">SkyServices</h1>
                </div>
                <button
                    onClick={onCartClick}
                    className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Открыть корзину"
                >
                    <ShoppingCart className="w-6 h-6 text-gray-700" />
                    {cartItemsCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {cartItemsCount}
            </span>
                    )}
                </button>
            </div>
        </header>
    );
};

export default Header;
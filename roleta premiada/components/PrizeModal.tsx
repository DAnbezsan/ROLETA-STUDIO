
import React from 'react';
import { Prize } from '../types';
import { OWNER_WHATSAPP } from '../constants';

interface PrizeModalProps {
  isOpen: boolean;
  prize: Prize | null;
  onClose: () => void;
  userPhone: string | null;
}

const PrizeModal: React.FC<PrizeModalProps> = ({ isOpen, prize, onClose, userPhone }) => {
  if (!isOpen || !prize) return null;

  const handleWhatsAppShare = () => {
    const message = `🎉 Olá! Ganhei na Roleta Premiada!\n🏆 Prêmio: ${prize.name}\n📱 Telefone: ${userPhone}`;
    const whatsappUrl = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl p-8 text-center border-2 border-amber-500 animate-fade-in-scale w-full max-w-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-2xl text-gray-400 mb-2">Parabéns! Você ganhou:</p>
        <div className="text-8xl my-6 animate-bounce">{prize.emoji}</div>
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-400 mb-6" style={{ textShadow: '0 0 12px rgba(255,215,0,0.25)' }}>
          {prize.name}
        </h2>
        
        {userPhone && OWNER_WHATSAPP && (
           <button
            onClick={handleWhatsAppShare}
            className="w-full px-6 py-3 mb-4 text-lg font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.651 4.383 1.88 6.195l.044.072-1.254 4.579 4.662-1.225.078.044z"></path></svg>
            Enviar via WhatsApp
          </button>
        )}

        <button
          onClick={onClose}
          className="w-full px-6 py-3 text-lg font-semibold text-white bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-300"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default PrizeModal;
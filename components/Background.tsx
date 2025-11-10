
import React from 'react';

const SYMBOLS = ['+', '*', '/', '-', '%', '&', '|', '<', '>', '='];

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {SYMBOLS.map((symbol, index) => {
        const style = {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 10 + 10}s`,
          animationDelay: `${Math.random() * 5}s`,
          fontSize: `${Math.random() * 2 + 1}rem`,
        };
        return (
          <span
            key={index}
            className="absolute text-white/10 font-mono animate-float"
            style={style}
          >
            {symbol}
          </span>
        );
      })}
    </div>
  );
};

export default Background;
   
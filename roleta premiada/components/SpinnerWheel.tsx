
import React from 'react';
import { Prize } from '../types';

interface SpinnerWheelProps {
  prizes: Prize[];
  rotation: number;
  spinDuration: number;
}

const SpinnerWheel: React.FC<SpinnerWheelProps> = ({ prizes, rotation, spinDuration }) => {
  const numPrizes = prizes.length;
  const anglePerSegment = 360 / numPrizes;
  const radius = 160;
  const viewBoxSize = radius * 2 + 40;

  const getCoordinatesForAngle = (angle: number, r: number = radius) => {
    const rad = (angle * Math.PI) / 180;
    const x = r * Math.cos(rad);
    const y = r * Math.sin(rad);
    return [x, y];
  };

  return (
    <div
      className="relative w-[360px] h-[360px] md:w-[450px] md:h-[450px] transition-transform duration-[cubic-bezier(0.25,0.1,0.25,1)]"
      style={{
        transform: `rotate(${rotation}deg)`,
        transitionDuration: `${spinDuration}ms`,
        filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.5))'
      }}
    >
      <svg
        viewBox={`-${viewBoxSize / 2} -${viewBoxSize / 2} ${viewBoxSize} ${viewBoxSize}`}
        className="w-full h-full"
        style={{ transform: 'rotate(-90deg)' }} // Start from the top
      >
        <defs>
          <radialGradient id="gold-grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#FFF8E6"/>
            <stop offset="25%" stopColor="#FFEFB3"/>
            <stop offset="45%" stopColor="#FFD95A"/>
            <stop offset="70%" stopColor="#D4AF37"/>
            <stop offset="100%" stopColor="#7a5e00"/>
          </radialGradient>
          <linearGradient id="black-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b3b3b" />
            <stop offset="50%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
          <radialGradient id="hub-grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#fff"/>
            <stop offset="60%" stopColor="rgba(255,255,255,0.2)"/>
            <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
          </radialGradient>
        </defs>
        
        {/* Outer Rim */}
        <circle cx="0" cy="0" r={radius + 15} fill="#111" />
        <circle cx="0" cy="0" r={radius + 10} fill="url(#gold-grad)" stroke="#fff" strokeWidth="0.5" strokeOpacity="0.3" />
        <circle cx="0" cy="0" r={radius + 8} fill="transparent" stroke="#000" strokeWidth="1" strokeOpacity="0.5" />

        <g>
          {prizes.map((prize, index) => {
            const startAngle = index * anglePerSegment;
            const endAngle = (index + 1) * anglePerSegment;

            const [startX, startY] = getCoordinatesForAngle(startAngle);
            const [endX, endY] = getCoordinatesForAngle(endAngle);

            const pathData = `M 0 0 L ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY} Z`;
            
            // Text path arc
            const textArcRadius = radius * 0.75;
            const [textArcStartX, textArcStartY] = getCoordinatesForAngle(startAngle + 5, textArcRadius);
            const [textArcEndX, textArcEndY] = getCoordinatesForAngle(endAngle - 5, textArcRadius);
            const textPathId = `text-path-${prize.id}`;
            const textPathData = `M ${textArcStartX} ${textArcStartY} A ${textArcRadius} ${textArcRadius} 0 0 1 ${textArcEndX} ${textArcEndY}`;
            
            const isGold = index % 2 === 0;
            const textColor = isGold ? '#1a1a1a' : '#FFD700';

            return (
              <g key={prize.id}>
                <path d={pathData} fill={isGold ? 'url(#gold-grad)' : 'url(#black-grad)'} stroke="#0b0b0b" strokeWidth="1.6" />
                <defs>
                  <path id={textPathId} d={textPathData} />
                </defs>
                <text
                  dy={-4}
                  fill={textColor}
                  fontSize="14"
                  fontWeight="bold"
                  fontFamily="Arial, Helvetica, sans-serif"
                  style={{ userSelect: 'none', textShadow: isGold ? 'none' : '0 0 5px rgba(255,215,0,0.5)' }}
                >
                  <textPath
                    href={`#${textPathId}`}
                    startOffset="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {prize.name}
                  </textPath>
                </text>
              </g>
            );
          })}
        </g>
        
        {/* Center Hub */}
        <circle cx="0" cy="0" r={radius * 0.18} fill="#111" />
        <circle cx="0" cy="0" r={radius * 0.15} fill="url(#gold-grad)" />
        <circle cx="0" cy="0" r={radius * 0.12} fill="url(#hub-grad)" />
        <circle cx="0" cy="0" r={radius * 0.05} fill="#b80000" stroke="gold" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default SpinnerWheel;
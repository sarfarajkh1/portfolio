import React from 'react';
import { celestialData } from '../data/celestialData';

// Actual distances from Sun in million km (scaled down for UI)
const orbitDistances = {
  mercury: 57.9,
  venus: 108.2,
  earth: 149.6,
  mars: 227.9,
  jupiter: 778.5,
  saturn: 1434,
  uranus: 2871,
  neptune: 4495,
  pluto: 5906
};

// Scale factor for vertical positioning
const VERTICAL_SCALE = 0.8;

const SolarSystemBackground = () => {
  // Generate stars on mount to avoid the impure function error
  const [stars] = React.useState(() => 
    Array.from({ length: 300 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.8 + 0.2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }))
  );

  // Generate shooting stars
  const [shootingStars] = React.useState(() => 
    Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      top: Math.random() * 60,
      left: Math.random() * 100,
      duration: Math.random() * 2 + 3,
      delay: Math.random() * 10,
    }))
  );

  const [hoveredPlanet, setHoveredPlanet] = React.useState(null);
  const containerRef = React.useRef(null);

  return (
    <div className="fixed inset-0 overflow-x-hidden overflow-y-auto bg-black">
      {/* Stars background - fixed to viewport */}
      <div className="fixed inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: star.opacity,
              animation: `twinkle ${star.duration}s infinite ${star.delay}s`,
            }}
          />
        ))}
        
        {/* Shooting stars */}
        {shootingStars.map((star) => (
          <div
            key={`shooting-${star.id}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animation: `shootingStar ${star.duration}s linear ${star.delay}s infinite`,
              boxShadow: '0 0 4px 2px rgba(255, 255, 255, 0.8)',
            }}
          />
        ))}
      </div>

      {/* Solar System Container - vertical scrollable */}
      <div ref={containerRef} className="relative w-full mx-auto" style={{ minHeight: '5000px', paddingTop: '100px', paddingBottom: '200px' }}>
        {/* Sun at top - cut in half, only bottom half visible */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 z-20" 
          style={{ top: '20px' }}
          onMouseEnter={() => setHoveredPlanet('sun')}
          onMouseLeave={() => setHoveredPlanet(null)}
        >
          <div className="relative overflow-hidden" style={{ height: '56px', width: '112px' }}>
            <div
              className="w-28 h-28 rounded-full bg-yellow-400 cursor-pointer"
              style={{
                backgroundColor: '#FDB813',
                marginTop: '-56px',
              }}
            />
          </div>
            
            {/* Sun tooltip */}
            {hoveredPlanet === 'sun' && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black bg-opacity-95 backdrop-blur-sm px-4 py-2 rounded-lg border-2 border-yellow-500 whitespace-nowrap z-30">
                <div className="text-yellow-400 font-bold text-base">Sun</div>
                <div className="text-gray-300 text-xs">Star</div>
                <div className="text-gray-400 text-xs mt-1">Center of Solar System</div>
                
                {/* Arrow pointing up to sun */}
                <div
                  className="absolute w-0 h-0"
                  style={{
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderLeft: '8px solid transparent',
                    borderRight: '8px solid transparent',
                    borderBottom: '8px solid #eab308',
                  }}
                />
              </div>
            )}
        </div>

        {/* Planets with elliptical orbits from sun */}
        {celestialData.slice(1).map((planet, index) => {
          const distance = orbitDistances[planet.id];
          const sunCenter = 76; // Sun center position (20px top + 56px radius)
          const verticalPos = sunCenter + (distance * VERTICAL_SCALE);
          
          const planetSize = planet.id === 'jupiter' ? 60 : 
                           planet.id === 'saturn' ? 52 :
                           planet.id === 'uranus' ? 36 :
                           planet.id === 'neptune' ? 36 :
                           planet.id === 'earth' ? 32 :
                           planet.id === 'venus' ? 28 :
                           planet.id === 'mars' ? 24 :
                           planet.id === 'mercury' ? 20 : 20;

          // Calculate ellipse dimensions
          const horizontalRadius = 200 + (index * 60); // Width from center
          const verticalDistance = verticalPos - sunCenter; // Distance from sun
          
          // SVG dimensions
          const svgWidth = horizontalRadius * 2;
          const svgHeight = verticalDistance * 2;

          return (
            <React.Fragment key={planet.id}>
              {/* Elliptical orbit path - starts from sun, goes around planet, returns to sun */}
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none"
                style={{
                  top: '76px',
                  width: `${svgWidth}px`,
                  height: `${svgHeight}px`,
                }}
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              >
                <ellipse
                  cx={svgWidth / 2}
                  cy={0}
                  rx={horizontalRadius}
                  ry={verticalDistance}
                  fill="none"
                  stroke={planet.color}
                  strokeWidth="1.5"
                  opacity="0.4"
                />
              </svg>
              
              {/* Planet positioned at bottom of ellipse */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2"
                style={{ 
                  top: `${verticalPos}px`,
                  marginTop: `-${planetSize / 2}px`,
                  zIndex: hoveredPlanet === planet.id ? 50 : 10,
                }}
                onMouseEnter={() => setHoveredPlanet(planet.id)}
                onMouseLeave={() => setHoveredPlanet(null)}
              >
                <div
                  className="relative rounded-full cursor-pointer hover:scale-110 transition-transform"
                  style={{
                    width: `${planetSize}px`,
                    height: `${planetSize}px`,
                    backgroundColor: planet.color,
                    boxShadow: `0 0 25px 8px ${planet.color}80`,
                  }}
                >
                  {/* Planet image overlay */}
                  <div 
                    className="absolute inset-0 rounded-full overflow-hidden"
                    style={{
                      backgroundImage: `url(${planet.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                </div>
                
                {/* Planet tooltip on hover */}
                {hoveredPlanet === planet.id && (
                  <div 
                    className="absolute bg-black bg-opacity-95 backdrop-blur-sm px-4 py-2 rounded-lg border-2 whitespace-nowrap"
                    style={{
                      borderColor: planet.color,
                      left: '50%',
                      top: '100%',
                      transform: 'translateX(-50%)',
                      marginTop: '12px',
                      pointerEvents: 'none',
                      zIndex: 100,
                    }}
                  >
                    <div className="font-bold text-base" style={{ color: planet.color }}>
                      {planet.name}
                    </div>
                    <div className="text-gray-300 text-xs">{planet.type}</div>
                    <div className="text-gray-400 text-xs mt-1">
                      {distance.toFixed(1)} million km from Sun
                    </div>
                    {planet.moons && planet.moons.length > 0 && (
                      <div className="text-gray-500 text-xs">
                        Moons: {planet.moons.length}
                      </div>
                    )}
                    
                    {/* Arrow pointing up to planet */}
                    <div
                      className="absolute w-0 h-0"
                      style={{
                        bottom: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderLeft: '8px solid transparent',
                        borderRight: '8px solid transparent',
                        borderBottom: `8px solid ${planet.color}`,
                      }}
                    />
                  </div>
                )}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        
        @keyframes shootingStar {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateX(300px) translateY(300px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SolarSystemBackground;

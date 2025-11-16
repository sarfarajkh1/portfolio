export const celestialData = [
  {
    id: 'sun',
    name: 'Sun',
    type: 'Star',
    image: 'https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?w=800',
    description: 'The Sun is the star at the center of our Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field.',
    facts: [
      'Age: 4.6 billion years',
      'Temperature: 5,778 K (surface)',
      'Mass: 1.989 × 10³⁰ kg',
      'Diameter: 1,392,700 km',
      'Contains 99.86% of the Solar System\'s mass'
    ],
    color: '#FDB813'
  },
  {
    id: 'mercury',
    name: 'Mercury',
    type: 'Planet',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg',
    description: 'Mercury is the smallest planet in our Solar System and the closest to the Sun. It has a heavily cratered surface and extreme temperature variations.',
    facts: [
      'Distance from Sun: 57.9 million km',
      'Orbital Period: 88 Earth days',
      'Day Length: 59 Earth days',
      'Diameter: 4,879 km',
      'No moons or rings'
    ],
    moons: [],
    color: '#8C7853'
  },
  {
    id: 'venus',
    name: 'Venus',
    type: 'Planet',
    image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=800',
    description: 'Venus is the second planet from the Sun and Earth\'s closest planetary neighbor. It\'s known for its thick, toxic atmosphere and is the hottest planet in our Solar System.',
    facts: [
      'Distance from Sun: 108.2 million km',
      'Orbital Period: 225 Earth days',
      'Day Length: 243 Earth days (retrograde)',
      'Diameter: 12,104 km',
      'Surface Temperature: 462°C'
    ],
    moons: [],
    color: '#FFC649'
  },
  {
    id: 'earth',
    name: 'Earth',
    type: 'Planet',
    image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800',
    description: 'Earth is our home planet, the only known planet with liquid water on its surface and the only place known to harbor life in the universe.',
    facts: [
      'Distance from Sun: 149.6 million km',
      'Orbital Period: 365.25 days',
      'Day Length: 24 hours',
      'Diameter: 12,742 km',
      '71% covered by water'
    ],
    moons: ['Moon'],
    color: '#4A90E2'
  },
  {
    id: 'mars',
    name: 'Mars',
    type: 'Planet',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg',
    description: 'Mars, known as the Red Planet, is the fourth planet from the Sun. It has the largest volcano and deepest canyon in the Solar System.',
    facts: [
      'Distance from Sun: 227.9 million km',
      'Orbital Period: 687 Earth days',
      'Day Length: 24.6 hours',
      'Diameter: 6,779 km',
      'Home to Olympus Mons, the largest volcano'
    ],
    moons: ['Phobos', 'Deimos'],
    color: '#E27B58'
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    type: 'Planet',
    image: 'https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=800',
    description: 'Jupiter is the largest planet in our Solar System. It\'s a gas giant with a Great Red Spot, a massive storm that has been raging for centuries.',
    facts: [
      'Distance from Sun: 778.5 million km',
      'Orbital Period: 12 Earth years',
      'Day Length: 10 hours',
      'Diameter: 139,820 km',
      'Has 95 known moons'
    ],
    moons: ['Io', 'Europa', 'Ganymede', 'Callisto', '+ 91 more'],
    color: '#C88B3A'
  },
  {
    id: 'saturn',
    name: 'Saturn',
    type: 'Planet',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800',
    description: 'Saturn is the sixth planet from the Sun and is famous for its spectacular ring system. It\'s a gas giant made mostly of hydrogen and helium.',
    facts: [
      'Distance from Sun: 1.4 billion km',
      'Orbital Period: 29 Earth years',
      'Day Length: 10.7 hours',
      'Diameter: 116,460 km',
      'Has the most extensive ring system'
    ],
    moons: ['Titan', 'Enceladus', 'Rhea', 'Dione', '+ 142 more'],
    color: '#FAD5A5'
  },
  {
    id: 'uranus',
    name: 'Uranus',
    type: 'Planet',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800',
    description: 'Uranus is an ice giant that rotates on its side. It has a blue-green color due to methane in its atmosphere and has a system of faint rings.',
    facts: [
      'Distance from Sun: 2.9 billion km',
      'Orbital Period: 84 Earth years',
      'Day Length: 17 hours',
      'Diameter: 50,724 km',
      'Rotates on its side (98° tilt)'
    ],
    moons: ['Miranda', 'Ariel', 'Umbriel', 'Titania', 'Oberon', '+ 22 more'],
    color: '#4FD0E7'
  },
  {
    id: 'neptune',
    name: 'Neptune',
    type: 'Planet',
    image: 'https://images.unsplash.com/photo-1614732484003-ef9881555dc3?w=800',
    description: 'Neptune is the eighth and farthest planet from the Sun. It\'s an ice giant with the strongest winds in the Solar System, reaching speeds of 2,100 km/h.',
    facts: [
      'Distance from Sun: 4.5 billion km',
      'Orbital Period: 165 Earth years',
      'Day Length: 16 hours',
      'Diameter: 49,244 km',
      'Strongest winds in Solar System'
    ],
    moons: ['Triton', 'Nereid', 'Proteus', '+ 11 more'],
    color: '#4166F5'
  },
  {
    id: 'pluto',
    name: 'Pluto',
    type: 'Dwarf Planet',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Pluto_in_True_Color_-_High-Res.jpg',
    description: 'Pluto is a dwarf planet in the Kuiper Belt. Once considered the ninth planet, it was reclassified in 2006 but remains a fascinating world with a heart-shaped region.',
    facts: [
      'Distance from Sun: 5.9 billion km',
      'Orbital Period: 248 Earth years',
      'Day Length: 6.4 Earth days',
      'Diameter: 2,377 km',
      'Has a heart-shaped glacier (Tombaugh Regio)'
    ],
    moons: ['Charon', 'Styx', 'Nix', 'Kerberos', 'Hydra'],
    color: '#ECE5D8'
  }
];

export interface Room {
  id: string;
  name: string;
  type: string;
  price: number;
  description: string;
  image: string;
  capacity: number;
  size: string;
  amenities: string[];
}

export const ROOMS: Room[] = [
  {
    id: 'superior-double',
    name: 'Superior Double Room',
    type: 'Classic',
    price: 320,
    description: 'A beautifully appointed room featuring classic Parisian design with modern touches. Perfect for city explorers seeking comfort.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1000',
    capacity: 2,
    size: '28m²',
    amenities: ['Free Wi-Fi', 'Mini Bar', 'Coffee Machine', 'Safe', 'Bathrobes']
  },
  {
    id: 'deluxe-suite',
    name: 'Deluxe Executive Suite',
    type: 'Suite',
    price: 580,
    description: 'Expansive suite with a separate living area, offering stunning views of the Eiffel Tower and premium designer furnishings.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1000',
    capacity: 3,
    size: '45m²',
    amenities: ['City View', 'Sitting Area', 'Marble Bathroom', 'Evening Turndown', 'Smart TV']
  },
  {
    id: 'presidential-penhouse',
    name: 'Lumière Presidential Penthouse',
    type: 'Prestige',
    price: 1250,
    description: 'The pinnacle of luxury. A private rooftop terrace, dedicated butler service, and the finest selection of art and antiques.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000',
    capacity: 4,
    size: '120m²',
    amenities: ['Private Terrace', 'Personal Butler', 'Champagne on Arrival', 'Kitchenette', 'Piano']
  }
];

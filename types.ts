
export interface Tour {
  id: string;
  title: string;
  location: string;
  price: number;
  duration: string;
  rating: number;
  image: string;
  category: 'adventure' | 'cultural' | 'relaxation' | 'nature';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface GroundingSource {
  title: string;
  uri: string;
}

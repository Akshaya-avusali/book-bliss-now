export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage: string;
  description: string;
  rating: number;
  category: string;
  publishedYear: number;
  pages: number;
}

export const books: Book[] = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 24.99,
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
    rating: 4.5,
    category: "Fiction",
    publishedYear: 2020,
    pages: 304
  },
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    price: 27.99,
    coverImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
    description: "An easy and proven way to build good habits and break bad ones. Tiny changes, remarkable results.",
    rating: 4.8,
    category: "Self-Help",
    publishedYear: 2018,
    pages: 320
  },
  {
    id: "3",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 22.99,
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
    description: "A woman's act of violence against her husband—and of the therapist obsessed with uncovering her motive.",
    rating: 4.3,
    category: "Thriller",
    publishedYear: 2019,
    pages: 336
  },
  {
    id: "4",
    title: "Educated",
    author: "Tara Westover",
    price: 26.99,
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    description: "A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge.",
    rating: 4.7,
    category: "Biography",
    publishedYear: 2018,
    pages: 352
  },
  {
    id: "5",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    price: 25.99,
    coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
    description: "A mysterious and moving story of isolation and nature, prejudice and possibility in the North Carolina marshlands.",
    rating: 4.6,
    category: "Fiction",
    publishedYear: 2018,
    pages: 384
  },
  {
    id: "6",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 29.99,
    coverImage: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop",
    description: "A brief history of humankind, exploring how Homo sapiens came to dominate the world.",
    rating: 4.7,
    category: "History",
    publishedYear: 2011,
    pages: 464
  },
  {
    id: "7",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 23.99,
    coverImage: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=600&fit=crop",
    description: "Timeless lessons on wealth, greed, and happiness doing well with money isn't necessarily about what you know.",
    rating: 4.6,
    category: "Finance",
    publishedYear: 2020,
    pages: 256
  },
  {
    id: "8",
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 28.99,
    coverImage: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=400&h=600&fit=crop",
    description: "A lone astronaut must save the earth from disaster in this incredible new science-based thriller.",
    rating: 4.8,
    category: "Science Fiction",
    publishedYear: 2021,
    pages: 496
  }
];

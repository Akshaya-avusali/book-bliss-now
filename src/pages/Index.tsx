import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { BookCard } from '@/components/BookCard';
import { BookChatbot } from '@/components/BookChatbot';
import { books } from '@/lib/bookData';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Fiction', 'Self-Help', 'Thriller', 'Biography', 'History', 'Finance', 'Science Fiction'];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBooks = selectedCategory === 'All' 
    ? books 
    : books.filter(book => book.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
            Discover Your Next Favorite Book
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore thousands of books from every genre. Find stories that inspire, educate, and entertain.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-2 justify-center mb-8 animate-scale-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-all"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book, index) => (
            <div 
              key={book.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </section>
      
      <BookChatbot />
    </div>
  );
};

export default Index;

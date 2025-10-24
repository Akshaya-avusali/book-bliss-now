import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Book } from '@/lib/bookData';
import { useCartStore } from '@/lib/cartStore';
import { useToast } from '@/hooks/use-toast';

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(book);
    toast({
      title: "Added to cart",
      description: `${book.title} has been added to your cart.`,
    });
  };

  return (
    <Link to={`/book/${book.id}`}>
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
        <div className="aspect-[2/3] overflow-hidden bg-muted">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-4 w-4 fill-secondary text-secondary" />
            <span className="text-sm font-medium">{book.rating}</span>
            <span className="text-xs text-muted-foreground ml-1">({book.category})</span>
          </div>
          <h3 className="font-semibold text-lg line-clamp-1 mb-1">{book.title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
          <p className="text-xl font-bold text-primary">${book.price.toFixed(2)}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button 
            onClick={handleAddToCart} 
            className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

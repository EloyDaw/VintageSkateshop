import { Link } from "react-router";
import type { Product } from "../lib/api";

interface ProductCardProps {
  product: Product;
  loggedIn?: boolean;
}

export function ProductCard({ product, loggedIn }: ProductCardProps) {
  const hasDiscount = loggedIn && product.discount_price != null;
  const displayPrice = hasDiscount ? product.discount_price! : product.price;
  const discountPercent = hasDiscount
    ? Math.round((1 - product.discount_price! / product.price) * 100)
    : 0;

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-card border-2 border-border hover:border-primary transition-all duration-300 overflow-hidden hover:shadow-lg">
        <div className="aspect-square overflow-hidden bg-muted relative">
          <img src={product.image} alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          {hasDiscount && (
            <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rotate-[-3deg]">
              -{discountPercent}% OFERTA
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg text-foreground group-hover:text-primary transition-colors mb-2">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">{product.category}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {hasDiscount && (
                <span className="text-lg text-muted-foreground line-through">${product.price}</span>
              )}
              <span className="text-2xl font-bold text-primary">${displayPrice}</span>
            </div>
            <span className="text-sm text-muted-foreground bg-accent/20 px-3 py-1 rounded">Ver mas</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

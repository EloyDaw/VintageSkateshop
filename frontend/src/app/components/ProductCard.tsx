import { Link } from "react-router";

interface DisplayProduct {
  id: number | string;
  name: string;
  price: number;
  discount_price?: number | null;
  category: string;
  image: string;
}

export const MEMBER_DISCOUNT = 10;

interface ProductCardProps {
  product: DisplayProduct;
  loggedIn?: boolean;
}

export function ProductCard({ product, loggedIn }: ProductCardProps) {
  const memberDiscount = loggedIn ? MEMBER_DISCOUNT : 0;
  const hasDiscount = memberDiscount > 0 || (loggedIn && product.discount_price != null);
  const displayPrice = loggedIn && product.discount_price
    ? product.discount_price
    : memberDiscount > 0
      ? Math.round(product.price * (1 - memberDiscount / 100))
      : product.price;
  const discountPercent = product.discount_price
    ? Math.round((1 - product.discount_price / product.price) * 100)
    : memberDiscount;

  return (
    <Link to={`/product/${product.id}`} className="group h-full">
      <div className="bg-card border-2 border-border hover:border-primary transition-all duration-300 overflow-hidden hover:shadow-lg h-full flex flex-col">
        <div className="h-56 overflow-hidden bg-muted relative shrink-0">
          <img src={product.image} alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 p-2" />
          {hasDiscount && (
            <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rotate-[-3deg]">
              -{discountPercent}% OFERTA
            </div>
          )}
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg text-foreground group-hover:text-primary transition-colors mb-2">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">{product.category}</p>
          <div className="flex items-center justify-between mt-auto">
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

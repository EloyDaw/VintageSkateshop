import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { api, type Product } from "../../lib/api";
import { MEMBER_DISCOUNT } from "../ProductCard";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowLeft, ShoppingCart, Heart } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "../../contexts/AuthContext";

export function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (id) {
      api.product(Number(id))
        .then(setProduct)
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-muted-foreground">Cargando producto...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Producto no encontrado</h2>
        <Link to="/shop">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Volver a la tienda
          </Button>
        </Link>
      </div>
    );
  }

  const isMember = !!user;
  const productHasDiscount = product.discount_price != null;

  const hasDiscount = isMember;
  const displayPrice = isMember
    ? productHasDiscount
      ? product.discount_price!
      : Math.round(product.price * (1 - MEMBER_DISCOUNT / 100))
    : product.price;
  const discountPercent = productHasDiscount
    ? Math.round((1 - product.discount_price! / product.price) * 100)
    : MEMBER_DISCOUNT;

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProductIndex = cart.findIndex((item: any) => item.id === product.id);
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
      toast.success(`Cantidad actualizada: ${product.name}`);
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: displayPrice,
        image: product.image,
        category: product.category,
        quantity: 1,
      });
      toast.success(`${product.name} anadido al carrito`);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Volver a la tienda
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-card border-2 border-border overflow-hidden relative">
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
          {hasDiscount && (
            <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rotate-[-3deg]">
              -{discountPercent}% OFERTA MIEMBROS
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <div className="mb-4">
            <Badge variant="secondary" className="mb-2">{product.category}</Badge>
            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
          </div>

          <div className="mb-6">
            {hasDiscount ? (
              <div className="flex items-center gap-3">
                <span className="text-5xl font-bold text-primary">{displayPrice}€</span>
                <span className="text-2xl text-muted-foreground line-through">{product.price}€</span>
                <Badge className="bg-primary">-{discountPercent}%</Badge>
              </div>
            ) : (
              <span className="text-5xl font-bold text-primary">{product.price}€</span>
            )}
          </div>

          <div className="mb-8">
            <h3 className="mb-2">Descripcion</h3>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          {!user && product.discount_price != null && (
            <div className="mb-4 p-3 bg-accent/10 border border-accent/20 text-sm">
              <Link to="/login" className="text-primary hover:underline font-medium">
                Inicia sesion
              </Link> para ver el precio especial de miembro
            </div>
          )}

          <div className="flex gap-4 mt-auto">
            <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90 gap-2" onClick={handleAddToCart}>
              <ShoppingCart className="w-5 h-5" />
              Anadir al carrito
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Heart className="w-5 h-5" />
            </Button>
          </div>

          <div className="mt-6 p-4 bg-accent/10 rounded border border-accent/20">
            <p className="text-sm"><strong>Envio gratis</strong> en pedidos superiores a 50€</p>
          </div>
        </div>
      </div>
    </div>
  );
}

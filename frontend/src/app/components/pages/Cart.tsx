import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "../../contexts/AuthContext";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}

export function Cart() {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Cantidad actualizada");
  };

  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Producto eliminado del carrito");
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([]));
    toast.success("Carrito vaciado");
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-muted rounded-full mb-6">
            <ShoppingBag className="w-12 h-12 text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Tu carrito está vacío</h1>
          <p className="text-muted-foreground mb-8">
            Parece que aún no has añadido ningún producto al carrito
          </p>
          <Link to="/shop">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Ir a la Tienda
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <div className="inline-block bg-primary px-4 py-2 rotate-[-1deg] mb-4">
          <span className="text-sm font-bold text-primary-foreground tracking-wider">
            TU PEDIDO
          </span>
        </div>
        <h1 className="text-4xl font-bold">Carrito de Compras</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-card border-2 border-border p-4 flex gap-4"
            >
              {/* Image */}
              <Link to={`/product/${item.id}`} className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover border border-border"
                />
              </Link>

              {/* Info */}
              <div className="flex-1 flex flex-col">
                <Link
                  to={`/product/${item.id}`}
                  className="hover:text-primary transition-colors"
                >
                  <h3 className="font-bold mb-1">{item.name}</h3>
                </Link>
                <p className="text-sm text-muted-foreground mb-2">
                  {item.category}
                </p>
                <p className="text-lg font-bold text-primary">{item.price}€</p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 mt-auto">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center font-bold">
                    {item.quantity}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Remove Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeItem(item.id)}
                className="self-start"
              >
                <Trash2 className="w-5 h-5 text-destructive" />
              </Button>
            </div>
          ))}

          <Button
            variant="outline"
            onClick={clearCart}
            className="w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
          >
            Vaciar carrito
          </Button>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-card border-2 border-border p-6 sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Resumen del pedido</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>{total.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Envío</span>
                <span>{user ? "Gratis" : total >= 50 ? "Gratis" : "5€"}</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-primary">
                  {(user ? total : total >= 50 ? total : total + 5).toFixed(2)}€
                </span>
              </div>
            </div>

            {!user && total < 50 && (
              <p className="text-sm text-muted-foreground mb-4 p-3 bg-accent/10 rounded border border-accent/20">
                Añade {(50 - total).toFixed(2)}€ más para envío gratis
              </p>
            )}

            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 mb-3"
              onClick={() => toast.success("Función de pago en desarrollo")}
            >
              Proceder al pago
            </Button>

            <Link to="/shop">
              <Button variant="outline" size="lg" className="w-full">
                Continuar comprando
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

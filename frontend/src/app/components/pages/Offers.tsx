import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ProductCard } from "../ProductCard";
import { api, type Product } from "../../lib/api";
import { useAuth } from "../../contexts/AuthContext";

export function Offers() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    api.products()
      .then((all) => setProducts(all.filter((p) => p.discount_price != null)))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ofertas exclusivas</h2>
        <p className="text-muted-foreground mb-6">
          Inicia sesion para ver las ofertas especiales para miembros.
        </p>
        <Link to="/login" className="bg-primary text-primary-foreground px-6 py-3 inline-block hover:bg-primary/90">
          Iniciar Sesion
        </Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center text-muted-foreground">Cargando ofertas...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="inline-block bg-primary px-4 py-2 rotate-[-1deg] mb-4">
        <span className="text-sm font-bold text-primary-foreground tracking-wider">
          SOLO MIEMBROS
        </span>
      </div>
      <h1 className="text-4xl font-bold mb-3">Ofertas Exclusivas</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mb-8">
        Precios especiales solo para miembros registrados. {user?.name}, estos son tus descuentos.
      </p>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} loggedIn={!!user} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No hay ofertas disponibles actualmente.</p>
      )}
    </div>
  );
}

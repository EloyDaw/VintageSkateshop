import { useState, useEffect } from "react";
import { ProductCard } from "../ProductCard";
import { api, type Product } from "../../lib/api";
import { Button } from "../ui/button";
import { useAuth } from "../../contexts/AuthContext";

export function Shop() {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.products()
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const categories = ["Todos", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === "Todos" || product.category === selectedCategory;
    return categoryMatch;
  });

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center text-muted-foreground">Cargando productos...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <div className="inline-block bg-primary px-4 py-2 rotate-[-1deg] mb-4">
          <span className="text-sm font-bold text-primary-foreground tracking-wider">
            NUESTRA COLECCIÓN
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-3">Tienda</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Explora nuestra seleccion de equipos vintage y usados. Cada pieza tiene su propia historia.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="mb-3">Categoria</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-primary hover:bg-primary/90" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-muted-foreground">
          Mostrando {filteredProducts.length} {filteredProducts.length === 1 ? "producto" : "productos"}
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} loggedIn={!!user} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground mb-4">
            No se encontraron productos con estos filtros
          </p>
          <Button variant="outline" onClick={() => setSelectedCategory("Todos")}>
            Limpiar filtros
          </Button>
        </div>
      )}
    </div>
  );
}

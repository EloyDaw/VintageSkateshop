import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, Star, Truck, Shield, Tag } from "lucide-react";
import { Button } from "../ui/button";
import { ProductCard } from "../ProductCard";
import { api, type Product } from "../../lib/api";
import { useAuth } from "../../contexts/AuthContext";

export function Home() {
  const [previewProducts, setPreviewProducts] = useState<Product[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    api.products()
      .then((products) => setPreviewProducts(products.slice(0, 2)))
      .catch(() => {});
  }, []);

  return (
    <div>
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1756358779524-03ce6d1638a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2F0ZXIlMjBzdHJlZXQlMjBhY3Rpb258ZW58MXx8fHwxNzY5NzAwNDg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Skater"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary px-4 py-2 rotate-[-2deg] mb-4">
              <span className="text-sm font-bold text-primary-foreground tracking-wider">DESDE 1995</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">Skate con Historia</h1>
            <p className="text-lg mb-6 text-secondary-foreground/90 max-w-xl">
              Descubre tablas vintage, equipos usados de calidad y ese estilo unico que solo el skate puede ofrecer.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  Ver Tienda <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-2 border-secondary-foreground/20 hover:border-primary hover:text-primary">
                  Nuestra Historia
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {!user && (
        <section className="bg-primary/10 border-y-2 border-primary">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Tag className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-bold text-lg">Ofertas exclusivas para miembros</h3>
                  <p className="text-sm text-muted-foreground">Descuentos especiales en productos seleccionados solo para usuarios registrados</p>
                </div>
              </div>
              <Link to="/register">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  Registrarse Gratis <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {previewProducts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold">Productos Destacados</h2>
                <p className="text-muted-foreground mt-1">Lo mas popular de esta temporada</p>
              </div>
              <Link to="/shop">
                <Button variant="outline" className="gap-2">
                  Ver Todo <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {previewProducts.map((product) => (
                <ProductCard key={product.id} product={product} loggedIn={!!user} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2">Calidad Garantizada</h3>
              <p className="text-muted-foreground">Cada pieza es revisada y verificada por expertos</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Truck className="w-8 h-8 text-accent" />
              </div>
              <h3 className="mb-2">Envio Rapido</h3>
              <p className="text-muted-foreground">Entrega en 2-5 dias habiles a toda Espana</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="mb-2">Compra Segura</h3>
              <p className="text-muted-foreground">30 dias para devoluciones, sin preguntas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

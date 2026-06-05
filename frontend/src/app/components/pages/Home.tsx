import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Star, Truck, Shield, Lock, Percent, Gift, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { ProductCard } from "../ProductCard";
import { products } from "../../data/products";
import { useAuth } from "../../contexts/AuthContext";
import { AuthModal } from "../AuthModal";

const featuredProducts = products.slice(0, 3);
const MEMBER_DISCOUNT = 10;

interface Perk {
  id: string;
  icon: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  highlight: string;
  color: string;
}

const memberPerks: Perk[] = [
  {
    id: "1",
    icon: <Zap className="w-6 h-6" />,
    tag: "PRECIO MIEMBRO",
    title: `${MEMBER_DISCOUNT}% de descuento en todo`,
    description: "El descuento se aplica autom\u00e1ticamente en todos los productos al estar registrado.",
    highlight: `-${MEMBER_DISCOUNT}%`,
    color: "#D97642",
  },
  {
    id: "2",
    icon: <Truck className="w-6 h-6" />,
    tag: "ENV\u00cdO",
    title: "Env\u00edo gratis incluido",
    description: "Todos tus pedidos tienen env\u00edo gratuito sin m\u00ednimo de compra.",
    highlight: "GRATIS",
    color: "#E5A946",
  },
  {
    id: "3",
    icon: <Gift className="w-6 h-6" />,
    tag: "ACCESO",
    title: "Ofertas exclusivas antes que nadie",
    description: "S\u00e9 el primero en conocer nuevas entradas, drops y liquidaciones especiales.",
    highlight: "VIP",
    color: "#5C4033",
  },
];

export function Home() {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const [authModalOpen, setAuthModalOpen] = useState(false);

  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1756358779524-03ce6d1638a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2F0ZXIlMjBzdHJlZXQlMjBhY3Rpb258ZW58MXx8fHwxNzY5NzAwNDg3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Skater"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary px-4 py-2 rotate-[-2deg] mb-4">
              <span className="text-sm font-bold text-primary-foreground tracking-wider">
                DESDE 2025
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Skate con Historia
            </h1>

            <p className="text-lg mb-6 text-secondary-foreground/90 max-w-xl">
              Descubre tablas vintage, equipos usados de calidad y ese estilo \u00fanico que solo el skate puede ofrecer.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/shop">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  Ver Tienda
                  <ArrowRight className="w-5 h-5" />
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

      {/* Features */}
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
              <p className="text-muted-foreground">Entrega en 2-5 dias habiles a toda Espa\u00f1a</p>
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

      {/* Exclusive Offers Section */}
      <section className="py-16" style={{ backgroundColor: "#F5F1E8" }}>
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <div
                className="inline-block px-4 py-2 mb-3"
                style={{ backgroundColor: "#E5A946", transform: "rotate(-1deg)" }}
              >
                <span className="text-sm font-bold tracking-wider" style={{ color: "#5C4033" }}>
                  SOLO PARA MIEMBROS
                </span>
              </div>
              <h2 className="text-3xl font-bold" style={{ color: "#5C4033" }}>
                Ofertas Exclusivas
              </h2>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ backgroundColor: "#D97642" }}>
              <Percent className="w-4 h-4" style={{ color: "#F5F1E8" }} />
              <span className="text-sm font-bold" style={{ color: "#F5F1E8" }}>
                Miembros VIP
              </span>
            </div>
          </div>

          {isAuthenticated && user ? (
            <>
              {/* Welcome message */}
              <div
                className="mb-8 p-4 rounded-lg flex items-center gap-3"
                style={{ backgroundColor: "#5C4033", border: "2px solid #D97642" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0"
                  style={{ backgroundColor: "#D97642", color: "#F5F1E8" }}
                >
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-bold" style={{ color: "#F5F1E8" }}>
                    ¡Hola, {user.name}! Tus descuentos están aplicados automáticamente
                  </p>
                  <p className="text-sm" style={{ color: "#F5F1E8", opacity: 0.75 }}>
                    Verás los precios de miembro directamente en todos los productos
                  </p>
                </div>
              </div>

              {/* Perk cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {memberPerks.map((perk) => (
                  <div
                    key={perk.id}
                    className="rounded-lg overflow-hidden shadow-md flex flex-col"
                    style={{ border: "2px solid #5C4033" }}
                  >
                    <div
                      className="px-5 pt-5 pb-4 flex items-start justify-between"
                      style={{ backgroundColor: perk.color }}
                    >
                      <div className="flex items-center gap-2" style={{ color: "#F5F1E8" }}>
                        {perk.icon}
                        <span className="text-xs font-bold tracking-wider opacity-90">{perk.tag}</span>
                      </div>
                      <span className="text-2xl font-bold" style={{ color: "#F5F1E8" }}>
                        {perk.highlight}
                      </span>
                    </div>
                    <div className="flex-1 px-5 py-4" style={{ backgroundColor: "white" }}>
                      <h3 className="font-bold mb-2" style={{ color: "#5C4033" }}>
                        {perk.title}
                      </h3>
                      <p className="text-sm" style={{ color: "#5C4033", opacity: 0.75 }}>
                        {perk.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* Locked teaser for non-authenticated users */
            <div
              className="rounded-lg overflow-hidden relative"
              style={{ border: "2px solid #5C4033" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                {memberPerks.map((perk) => (
                  <div
                    key={perk.id}
                    className="rounded-lg overflow-hidden"
                    style={{ border: "2px solid #5C4033" }}
                  >
                    <div
                      className="px-5 pt-5 pb-4 flex items-start justify-between"
                      style={{ backgroundColor: perk.color }}
                    >
                      <div className="flex items-center gap-2" style={{ color: "#F5F1E8" }}>
                        {perk.icon}
                        <span className="text-xs font-bold tracking-wider opacity-90">{perk.tag}</span>
                      </div>
                      <span className="text-2xl font-bold" style={{ color: "#F5F1E8" }}>
                        {perk.highlight}
                      </span>
                    </div>
                    <div className="px-5 py-4" style={{ backgroundColor: "white" }}>
                      <h3 className="font-bold mb-2" style={{ color: "#5C4033" }}>
                        {perk.title}
                      </h3>
                      <p className="text-sm" style={{ color: "#5C4033", opacity: 0.75 }}>
                        {perk.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: "rgba(245, 241, 232, 0.85)" }}>
                <div className="text-center px-6 py-8 rounded-lg max-w-md" style={{ backgroundColor: "white", border: "2px solid #5C4033" }}>
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: "#5C4033" }}
                  >
                    <Lock className="w-7 h-7" style={{ color: "#E5A946" }} />
                  </div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: "#5C4033" }}>
                    Contenido exclusivo para miembros
                  </h3>
                  <p className="text-xs mb-4" style={{ color: "#5C4033", opacity: 0.7 }}>
                    Desbloquea descuentos y envío gratis
                  </p>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => setAuthModalOpen(true)}
                      className="px-5 py-2 rounded font-bold text-sm transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "#D97642", color: "#F5F1E8" }}
                    >
                      Crear cuenta gratis
                    </button>
                    <button
                      onClick={() => setAuthModalOpen(true)}
                      className="px-5 py-2 rounded font-bold text-sm transition-opacity hover:opacity-80"
                      style={{ backgroundColor: "transparent", color: "#5C4033", border: "2px solid #5C4033" }}
                    >
                      Ya tengo cuenta
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="inline-block bg-primary px-4 py-2 rotate-[-1deg] mb-3">
                <span className="text-sm font-bold text-primary-foreground tracking-wider">
                  LO MÁS POPULAR
                </span>
              </div>
              <h2 className="text-3xl font-bold">Productos Destacados</h2>
            </div>
            <Link to="/shop">
              <Button variant="outline" className="gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Ver todo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} discountPct={isAuthenticated ? MEMBER_DISCOUNT : 0} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 flex-1" style={{ backgroundColor: "#5C4033" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3" style={{ color: "#F5F1E8" }}>
            ¿Listo para rodar?
          </h2>
          <p className="mb-6" style={{ color: "#F5F1E8", opacity: 0.8 }}>
            Únete a nuestra comunidad y consigue el mejor equipo vintage
          </p>
          <Link to="/shop">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              Explorar Tienda
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode="register"
      />
    </div>
  );
}

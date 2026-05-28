import { Link } from "react-router";
import { Button } from "../ui/button";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-block bg-primary px-6 py-3 rotate-[-2deg] mb-6">
            <span className="text-6xl font-bold text-primary-foreground">404</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          ¡Ups! Página no encontrada
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          Parece que esta página se cayó del skate. No te preocupes, te ayudamos a volver al camino.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/">
            <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
              <Home className="w-5 h-5" />
              Ir al Inicio
            </Button>
          </Link>
          <Link to="/shop">
            <Button size="lg" variant="outline" className="gap-2">
              <ArrowLeft className="w-5 h-5" />
              Ver Tienda
            </Button>
          </Link>
        </div>

        <div className="mt-16">
          <img
            src="https://images.unsplash.com/photo-1756358779524-03ce6d1638a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2F0ZXIlMjBzdHJlZXQlMjBhY3Rpb258ZW58MXx8fHwxNzY5NzAwNDg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Skater"
            className="w-full max-w-lg mx-auto rounded border-4 border-border shadow-xl opacity-50"
          />
        </div>
      </div>
    </div>
  );
}

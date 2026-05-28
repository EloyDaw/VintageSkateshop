import { Mail, Phone, MapPin, Clock, X, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { useState } from "react";

export function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    // Resetear el formulario
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div>
      {/* Success Alert */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-xl max-w-md w-full relative">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 hover:bg-green-600 rounded-full p-1 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">¡Mensaje Enviado!</h3>
                <p className="text-green-50">
                  Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos lo antes posible.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary px-4 py-2 rotate-[-1deg] mb-4">
              <span className="text-sm font-bold text-primary-foreground tracking-wider">
                HABLEMOS
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ponte en Contacto
            </h1>
            <p className="text-lg text-secondary-foreground/90">
              ¿Tienes preguntas? ¿Quieres vender tu equipo? ¿Buscas algo específico? Estamos aquí para ayudarte.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="inline-block bg-accent px-3 py-1 rotate-[-1deg] mb-3">
                <span className="text-sm font-bold text-accent-foreground">FORMULARIO</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">Envíanos un Mensaje</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    required
                    className="bg-input-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    className="bg-input-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos más..."
                    rows={6}
                    required
                    className="bg-input-background resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Enviar Mensaje
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <div className="inline-block bg-primary px-3 py-1 rotate-[-1deg] mb-3">
                  <span className="text-sm font-bold text-primary-foreground">INFORMACIÓN</span>
                </div>
                <h2 className="text-3xl font-bold mb-6">Otras Formas de Contacto</h2>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1">Dirección</h3>
                    <p className="text-muted-foreground">
                      Calle del Skate, 42<br />
                      08001 Barcelona, España
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1">Teléfono</h3>
                    <p className="text-muted-foreground">
                      +34 933 123 456
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      info@vintageskate.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1">Horario</h3>
                    <p className="text-muted-foreground">
                      Lunes - Viernes: 10:00 - 20:00<br />
                      Sábado: 11:00 - 21:00<br />
                      Domingo: 12:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
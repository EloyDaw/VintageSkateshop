import { Users, Award, Heart, MapPin } from "lucide-react";

export function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary px-4 py-2 rotate-[-1deg] mb-4">
              <span className="text-sm font-bold text-primary-foreground tracking-wider">
                NUESTRA HISTORIA
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Recién Comenzando
            </h1>
            <p className="text-lg text-secondary-foreground/90">
              Una nueva tienda nacida en 2025 con la misión de mantener viva la cultura del skateboarding vintage con pasión, autenticidad y respeto por cada tabla.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Donde Todo Comenzó</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Vintage Skate nació hace poco de la pasión de un grupo de skaters que creemos que el skateboarding clásico nunca pasa de moda. Empezamos coleccionando tablas vintage y descubrimos que hay muchos más como nosotros que valoran la estética y calidad de los setups de antes.
              </p>
              <p>
                Aunque somos nuevos en esto, traemos años de experiencia patinando y una dedicación absoluta a ofrecer solo equipos vintage auténticos y de calidad. Queremos crear una comunidad donde skaters puedan encontrar piezas únicas con historia y estilo propio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block bg-accent px-3 py-1 rotate-[-1deg] mb-3">
              <span className="text-sm font-bold text-accent-foreground">NUESTROS VALORES</span>
            </div>
            <h2 className="text-3xl font-bold">Lo Que Nos Mueve</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2">Pasión</h3>
              <p className="text-sm text-muted-foreground">
                Cada tabla tiene una historia y nosotros la respetamos
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="mb-2">Calidad</h3>
              <p className="text-sm text-muted-foreground">
                Solo equipos verificados y en buenas condiciones
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="mb-2">Comunidad</h3>
              <p className="text-sm text-muted-foreground">
                Más que clientes, somos una familia de skaters
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2">Local</h3>
              <p className="text-sm text-muted-foreground">
                Apoyando la escena local desde siempre
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
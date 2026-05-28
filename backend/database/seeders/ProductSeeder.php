<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        Product::create([
            'name' => 'SkateSurf Completo Vintage 8.0"',
            'price' => 120,
            'discount_price' => 99,
            'category' => 'Completos',
            'condition' => 'Usado - Excelente',
            'description' => 'Setup completo vintage con deck de maple de 7 capas, trucks independientes, ruedas Spitfire 52mm y bearings ABEC 7. Perfectamente montado y listo para rodar. Grafico vintage autentico de los 90s.',
            'image' => 'https://images.unsplash.com/photo-1653300592820-ec7e64e411ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wbGV0ZSUyMHNrYXRlYm9hcmQlMjB2aW50YWdlJTIwd29vZHxlbnwxfHx8fDE3Njk3Nzk3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            'featured' => true,
        ]);

        Product::create([
            'name' => 'Completo Street Setup 8.25"',
            'price' => 135,
            'discount_price' => 110,
            'category' => 'Completos',
            'condition' => 'Usado - Muy Bueno',
            'description' => 'Setup completo optimizado para street skating. Incluye deck 8.25, trucks Thunder, ruedas Bones 53mm dureza 99A, bearings Swiss y grip nuevo. Configuracion perfecta para trucos tecnicos.',
            'image' => 'https://images.unsplash.com/photo-1632757254102-da9db045b98a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2F0ZWJvYXJkJTIwY29tcGxldGUlMjBzdHJlZXQlMjBzZXR1cHxlbnwxfHx8fDE3Njk3Nzk3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            'featured' => true,
        ]);

        Product::create([
            'name' => 'Completo Cruiser 8.0"',
            'price' => 105,
            'category' => 'Completos',
            'condition' => 'Nuevo',
            'description' => 'Setup cruiser perfecto para desplazarte por la ciudad. Deck de maple, ruedas blandas 58mm para absorber vibraciones y trucks delgados. Ideal para principiantes y para moverte con comodidad.',
            'image' => 'https://images.unsplash.com/photo-1621544402532-78c290378588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            'featured' => true,
        ]);

        Product::create([
            'name' => 'Set de Ruedas 52mm',
            'price' => 35,
            'category' => 'Ruedas',
            'condition' => 'Usado - Muy Bueno',
            'description' => 'Set completo de 4 ruedas premium 52mm, dureza 101A. Perfectas para street skating con excelente agarre y velocidad. Minimo desgaste, practicamente como nuevas. Ideales para flip tricks y grinds.',
            'image' => 'https://images.unsplash.com/photo-1686665255084-a109fbd1978a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2F0ZWJvYXJkJTIwd2hlZWxzJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2OTc3OTkzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            'featured' => false,
        ]);

        Product::create([
            'name' => 'Ruedas Spitfire Formula Four 54mm',
            'price' => 45,
            'discount_price' => 38,
            'category' => 'Ruedas',
            'condition' => 'Nuevas',
            'description' => 'Ruedas Spitfire Formula Four 54mm dureza 99A. Las mas populares del mercado con la formula de uretano mas rapida y duradera. Excelentes para street y park.',
            'image' => 'https://images.unsplash.com/photo-1686665255084-a109fbd1978a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            'featured' => true,
        ]);

        Product::create([
            'name' => 'Ejes Independent Stage 11',
            'price' => 55,
            'discount_price' => 45,
            'category' => 'Ejes',
            'condition' => 'Usado - Excelente',
            'description' => 'Par de ejes Independent Stage 11. Los clasicos mas confiables del mercado con anos de calidad probada. Geometria perfecta para giros suaves y estabilidad. Bushings originales en buen estado.',
            'image' => 'https://images.unsplash.com/photo-1763369520559-2040f464efd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2F0ZWJvYXJkJTIwdHJ1Y2tzJTIwaW5kZXBlbmRlbnQlMjBtZXRhbHxlbnwxfHx8fDE3Njk3Nzk5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            'featured' => false,
        ]);

        Product::create([
            'name' => 'Ejes Thunder Titanium 8.5"',
            'price' => 70,
            'category' => 'Ejes',
            'condition' => 'Nuevos',
            'description' => 'Ejes Thunder Titanium edicion limitada. Construccion ligera con eje de titanio, geometria de alto rendimiento para giros precisos. Incluyen bushings de serie.',
            'image' => 'https://images.unsplash.com/photo-1763369520559-2040f464efd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            'featured' => true,
        ]);

        Product::create([
            'name' => 'Rodamientos Bones Reds',
            'price' => 20,
            'discount_price' => 16,
            'category' => 'Rodamientos',
            'condition' => 'Nuevos',
            'description' => 'Juego de 8 rodamientos Bones Reds. Los mas vendidos del mundo por su relacion calidad-precio. Velocidad suave y duradera con lubricacion de alta calidad.',
            'image' => 'https://images.unsplash.com/photo-1594498653385-d5172c532c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            'featured' => true,
        ]);

        Product::create([
            'name' => 'Rodamientos Bones Swiss',
            'price' => 60,
            'discount_price' => 50,
            'category' => 'Rodamientos',
            'condition' => 'Nuevos',
            'description' => 'Juego de 8 rodamientos Bones Swiss. Lo mejor de lo mejor, fabricados en Suiza con tolerancia de precision. La maxima velocidad y durabilidad para skaters exigentes.',
            'image' => 'https://images.unsplash.com/photo-1594498653385-d5172c532c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            'featured' => true,
        ]);

        Product::create([
            'name' => 'Rodamientos Bronson G3',
            'price' => 30,
            'category' => 'Rodamientos',
            'condition' => 'Nuevos',
            'description' => 'Juego de 8 rodamientos Bronson G3 con escudos removibles. Construccion de acero inoxidable y bolas de alta precision. Rapidos y faciles de mantener.',
            'image' => 'https://images.unsplash.com/photo-1594498653385-d5172c532c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            'featured' => false,
        ]);

        Product::create([
            'name' => 'Deck Maple 8.0"',
            'price' => 50,
            'category' => 'Tablas',
            'condition' => 'Nuevo',
            'description' => 'Deck de maple canadiense de 7 capas, ancho 8.0". Shape clasico con concave medio. Perfecto para street skating y trucos tecnicos. Grip no incluido.',
            'image' => 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            'featured' => true,
        ]);

        Product::create([
            'name' => 'Deck Maple 8.25"',
            'price' => 55,
            'discount_price' => 47,
            'category' => 'Tablas',
            'condition' => 'Nuevo',
            'description' => 'Deck de maple canadiense de 7 capas, ancho 8.25". Shape moderno con concave pronunciado. Mayor superficie para aterrizajes mas estables.',
            'image' => 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            'featured' => false,
        ]);

        Product::create([
            'name' => 'Deck Profesional 8.5"',
            'price' => 65,
            'category' => 'Tablas',
            'condition' => 'Nuevo',
            'description' => 'Deck profesional de maple canadiense 8.5". 7 capas prensadas de alta densidad. Shape de pro con nose y tail equilibrados. Ideal para vert y rampa.',
            'image' => 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            'featured' => true,
        ]);

        Product::create([
            'name' => 'Lija Jessup Grip Tape',
            'price' => 12,
            'category' => 'Lijas',
            'condition' => 'Nueva',
            'description' => 'Lija Jessup Grip Tape de alta calidad. La preferida por skaters de todo el mundo. Adhesion fuerte y durabilidad excepcional. Tamanio estandar para cualquier deck.',
            'image' => 'https://images.unsplash.com/photo-1594498653385-d5172c532c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            'featured' => false,
        ]);

        Product::create([
            'name' => 'Lija Mob Grip Tape',
            'price' => 14,
            'discount_price' => 11,
            'category' => 'Lijas',
            'condition' => 'Nueva',
            'description' => 'Lija Mob Grip Tape con el caracteristico logo de la calavera. Textura agresiva para el maximo control. Grip superior para trucos exigentes.',
            'image' => 'https://images.unsplash.com/photo-1594498653385-d5172c532c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            'featured' => true,
        ]);

        Product::create([
            'name' => 'Lija Girl Skateboards',
            'price' => 15,
            'category' => 'Lijas',
            'condition' => 'Nueva',
            'description' => 'Lija Girl Skateboards edicion limitada con diseño exclusivo. Grip de alta calidad con el logo iconico de Girl. Corte preciso y facil aplicacion.',
            'image' => 'https://images.unsplash.com/photo-1594498653385-d5172c532c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            'featured' => false,
        ]);
    }
}

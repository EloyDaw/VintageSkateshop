import { Link, useLocation } from "react-router";
import { ShoppingCart, Menu, X, User, LogOut, Tag } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    updateCartCount();
    const handleStorageChange = () => updateCartCount();
    window.addEventListener('storage', handleStorageChange);
    const interval = setInterval(updateCartCount, 500);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [location]);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const totalItems = cart.reduce((sum: number, item: any) => sum + item.quantity, 0);
    setCartCount(totalItems);
  };

  const navLinks = [
    { path: "/", label: "Inicio" },
    { path: "/shop", label: "Tienda" },
    ...(user ? [{ path: "/offers", label: "Ofertas" }] : []),
    { path: "/about", label: "Nosotros" },
    { path: "/contact", label: "Contacto" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-secondary text-secondary-foreground sticky top-0 z-50 border-b-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary px-3 py-2 rotate-[-2deg]">
              <span className="text-xl font-bold text-primary-foreground tracking-tight">
                VINTAGE SKATE
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}
                className={`hover:text-primary transition-colors ${isActive(link.path) ? "text-primary" : ""}`}
              >{link.label}</Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="hidden md:flex items-center gap-3">
                <Link to="/offers" className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors">
                  <Tag className="w-4 h-4" />
                  <span className="font-medium">{user.name}</span>
                </Link>
                <button onClick={logout} className="hover:text-primary transition-colors">
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <Link to="/login" className="hidden md:flex items-center gap-1 hover:text-primary transition-colors text-sm">
                <User className="w-4 h-4" />
                <span>Iniciar Sesion</span>
              </Link>
            )}

            <Link to="/cart" className="relative hover:text-primary transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            <button className="md:hidden hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary/20">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}
                className={`block py-2 hover:text-primary transition-colors ${isActive(link.path) ? "text-primary" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >{link.label}</Link>
            ))}
            <Link to="/cart" className="block py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >Carrito ({cartCount})</Link>
            {user ? (
              <div className="py-2 text-sm border-t border-primary/20 mt-2 pt-2">
                <span className="block text-muted-foreground">{user.name}</span>
                <button onClick={() => { logout(); setMobileMenuOpen(false); }}
                  className="block hover:text-primary transition-colors mt-1"
                >Cerrar Sesion</button>
              </div>
            ) : (
              <Link to="/login" className="block py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >Iniciar Sesion</Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useAuth } from "../contexts/AuthContext";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "login" | "register";
}

export function AuthModal({ isOpen, onClose, initialMode = "login" }: AuthModalProps) {
  const { login, register } = useAuth();
  const [mode, setMode] = useState<"login" | "register">(initialMode);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      if (mode === "register") {
        await register(name, email, password);
      } else {
        await login(email, password);
      }
      onClose();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const switchMode = () => {
    setMode(mode === "login" ? "register" : "login");
    setError("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {mode === "login" ? "INICIAR SESI\u00d3N" : "REGISTRARSE"}
          </DialogTitle>
          <DialogDescription>
            {mode === "login"
              ? "Accede a tu cuenta para ver ofertas exclusivas"
              : "Crea tu cuenta gratis y obt\u00e9n descuentos exclusivos"}
          </DialogDescription>
        </DialogHeader>

        {error && (
          <div className="bg-destructive/10 text-destructive px-4 py-2 text-sm rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "register" && (
            <div>
              <label className="block text-sm font-medium mb-1">Nombre</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border-2 border-border bg-background focus:border-primary outline-none rounded"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border-2 border-border bg-background focus:border-primary outline-none rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Contrase\u00f1a</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border-2 border-border bg-background focus:border-primary outline-none rounded"
              required
              minLength={6}
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            {mode === "login" ? "Entrar" : "Crear Cuenta"}
          </Button>
        </form>

        <p className="text-sm text-center text-muted-foreground">
          {mode === "login" ? (
            <>
              No tienes cuenta?{" "}
              <button onClick={switchMode} className="text-primary hover:underline cursor-pointer">
                Reg\u00edstrate
              </button>
            </>
          ) : (
            <>
              Ya tienes cuenta?{" "}
              <button onClick={switchMode} className="text-primary hover:underline cursor-pointer">
                Inicia sesi\u00f3n
              </button>
            </>
          )}
        </p>
      </DialogContent>
    </Dialog>
  );
}

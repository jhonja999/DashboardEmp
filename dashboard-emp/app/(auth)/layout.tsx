// app/(auth)/layout.tsx
import { Logo } from "@/components/Logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Auth form */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-gradient-to-br from-yellow-200 to-yellow-800">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          {children}
        </div>
      </div>
      
      {/* Right side - Image */}
      <div className="relative hidden w-0 flex-1 lg:block">
        {/* cambiar fondo por imagenes */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-slate-600 to-slate-800">
          <div className="flex h-full items-center justify-center">
            <div className="text-center text-white px-8">
              <Logo/>
              <h2 className="text-3xl font-bold">NinaGold Exploración Minera</h2>
              <p className="mt-4 text-lg">Transformando el futuro de la minería</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


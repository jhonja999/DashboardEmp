// app/(routes)/dashboard/layout.tsx (Componente Servidor)
// Importamos la función `auth` de Clerk para manejar la autenticación en el servidor.
// Importamos `redirect` para redirigir a los usuarios no autenticados.
// Importamos el componente DashboardContent que envuelve el contenido interactivo (cliente).
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import DashboardContent from "@/components/dashboard/DashboardContent";

// Este componente de layout se ejecuta en el servidor (Server Component)
// y se encarga de verificar la autenticación del usuario.
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Llamamos a `auth()` para obtener el identificador del usuario autenticado.
  const { userId } = await auth();

  // Si no hay un usuario autenticado, redirigimos a la página de inicio de sesión.
  if (!userId) {
    redirect("/sign-in");
  }

  // Si el usuario está autenticado, renderizamos el contenido del dashboard.
  // El componente DashboardContent se encargará de la parte interactiva y del estado (cliente).
  return <DashboardContent>{children}</DashboardContent>;
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premier Prix — L’estimation immédiate pour peintres en bâtiment",
  description:
    "Vos visiteurs veulent un ordre de prix tout de suite. Donnez-le-leur sur votre site, et recevez les demandes classées par montant.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

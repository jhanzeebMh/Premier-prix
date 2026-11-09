export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-6 px-6 py-12">
      <h1 className="text-3xl font-bold leading-tight">
        Donnez un prix à vos visiteurs avant qu’ils ne ferment l’onglet.
      </h1>
      <p className="text-lg text-neutral-700">
        Un questionnaire de 3 questions sur votre site, une fourchette de prix
        immédiate, et les demandes classées par montant.
      </p>
      <a
        href="#"
        className="rounded-xl bg-black px-6 py-4 text-center text-lg font-semibold text-white"
      >
        Commencer gratuitement
      </a>
      <p className="text-sm text-neutral-500">
        Pour les peintres en bâtiment. Sans engagement.
      </p>
    </main>
  );
}

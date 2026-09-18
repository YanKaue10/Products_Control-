import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="mx-auto max-w-6xl">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-600">Gerencie produtos e categorias de sua barraca.</p>
      </header>

      <main className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-lg border border p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-semibold text-gray-900">Produtos</h2>
                <p className="mt-1 text sm text-gray-500">Produtos cadastrados</p>
              </div>

              <span className="rounded-full bg-green-100 px-2.5 py-1 text-as font-medium">Ativos</span>
            </div>

            <ul className="mt-5 divide-y divide-gray-400">
              <li className="py-2">Coca Cola</li>
              <li className="py-2">Suco</li>
              <li className="py-2">Bolo de Milho</li>
              <li className="py-2">Caldo de Aipim</li>
            </ul>
             <p className="mt-4 text-sm text-gray-600">
              Total: <strong className="text-gray-900">4 produtos</strong>
            </p>
          </section>

          <section className="rounded-lg border p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-semibold text-gray-900">Categorias</h2>
                <p className="mt-1 text-sm text-gray-500">Categorias Disponiveis</p>
              </div>
              <span className="rounded-full bg-green-100 px-2.5 py-1 text-as font-medium">Disponiveis</span>
            </div>

            <ul className="mt-5 divide-y divide-gray-400">
              <li className="py-2">Bebidas</li>
              <li className="py-2">Caldos</li>
              <li className="py-2">Sucos</li>
              <li className="py-2">Bolos</li>
            </ul>
              <p className="mt-4 text-sm text-gray-600">
              Total: <strong className="text-gray-900">4 produtos</strong>
            </p>
          </section>
        </div>

        <section className="mt-06 border-t border-gray-200 pt-6">
          <h2 className="font-semibold text-gray-900">Ações Rápidas</h2>
          <p className="mt-1 text-sm text-gray-500">Cadastre produtos e categorias</p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/produtos/novo"
            className="rounded bg-sky-700 px-4 py-2 text-sm font-medium text-white hover:bg-sky-800"
            >Novo Produto</Link>
            
            <Link to="/categorias/nova"
            className="rounded bg-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-sky-800"
            >Nova Categoria</Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home;

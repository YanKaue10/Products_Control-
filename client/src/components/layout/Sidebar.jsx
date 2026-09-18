import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="w-50 min-h-screen border-r bg-white p-4">

            <h2 className="text-lg font-semibold mb-6">
                Menu
            </h2>

            <nav className="flex flex-col gap-2 bg-red-200">

                <Link
                    to="/"
                    className="p-2 rounded hover:bg-gray-100"
                >
                    🏠 Home
                </Link>

                <Link
                    to="/produtos"
                    className="p-2 rounded hover:bg-gray-100"
                >
                    📦 Produtos
                </Link>

                <Link
                    to="/categorias"
                    className="p-2 rounded hover:bg-gray-100"
                >
                    📁 Categorias
                </Link>

                <hr className="my-4" />

                <Link
                    to="/produtos/novo"
                    className="p-2 rounded hover:bg-gray-100"
                >
                    ➕ Novo Produto
                </Link>

                <Link
                    to="/categorias/nova"
                    className="p-2 rounded hover:bg-gray-100"
                >
                    ➕ Nova Categoria
                </Link>

            </nav>

        </aside>
    );
}

export default Sidebar;
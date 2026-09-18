import { Link } from "react-router-dom";
import { useState } from "react";
import CardInfo from "../components/layout/CardInfo/CardInfo";

function Categories() {
  const [categorias, setCategorias] = useState([
    { nome: "Bebidas", quantidade: 12, status: "Ativo" },
    { nome: "Caldos", quantidade: 8, status: "Destaque" },
    { nome: "Comidas", quantidade: 12, status: "Novo" },
    { nome: "Drinks", quantidade: 12, status: "Inativo" },
  ]);

  const [categoriaEditando, setCategoriaEditando] = useState(null);

  const handleEditar = (categoria) => {
    setCategoriaEditando({ ...categoria });
  };

  const handleChange = (campo, valor) => {
    setCategoriaEditando((prev) => ({ ...prev, [campo]: valor }));
  };

  const handleSalvar = () => {
    setCategorias((prev) =>
      prev.map((categoria) =>
        categoria.nome === categoriaEditando.nome ? categoriaEditando : categoria
      )
    );
    setCategoriaEditando(null);
  };

  return (
    <div className="bg-sky-500">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Categorias</h1>
        <p className="font-bold mt-3">
          Visualize e organize as categorias dos seus produtos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {categorias.map((categoria) => (
          <div key={categoria.nome} className="flex flex-col gap-3">
            <CardInfo
              titulo={categoria.nome}
              quantidade={categoria.quantidade}
              status={categoria.status}
            />

            <button
              onClick={() => handleEditar(categoria)}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Editar
            </button>
          </div>
        ))}
      </div>

      {categoriaEditando && (
        <div className="mb-8 rounded-lg border border-gray-300 bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Editando categoria
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <input
                value={categoriaEditando.nome}
                onChange={(e) => handleChange("nome", e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                value={categoriaEditando.status}
                onChange={(e) => handleChange("status", e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
              >
                <option value="Ativo">Ativo</option>
                <option value="Destaque">Destaque</option>
                <option value="Novo">Novo</option>
                <option value="Inativo">Inativo</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantidade
              </label>
              <input
                type="number"
                value={categoriaEditando.quantidade}
                onChange={(e) => handleChange("quantidade", Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
              />
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <button
              onClick={handleSalvar}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Salvar
            </button>

            <button
              onClick={() => setCategoriaEditando(null)}
              className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Ações rápidas
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          <Link
            to="/categorias/nova"
            className="bg-gray-800 text-white px-5 py-3 rounded-lg text-center hover:bg-gray-700"
          >
            + Nova Categoria
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;

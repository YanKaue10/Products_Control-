import { Link } from "react-router-dom";
import { useState } from "react";
import CardInfo from "../components/layout/CardInfo/CardInfo";

function Products() {
  const [produtos, setProdutos] = useState([
    {
      nome: "Cerveja",
      categoria: "Bebidas",
      quantidade: 20,
      status: "Em estoque",
    },
    {
      nome: "Refrigerante",
      categoria: "Bebidas",
      quantidade: 30,
      status: "Em estoque",
    },
    {
      nome: "RedBull",
      categoria: "Bebidas",
      quantidade: 0,
      status: "Sem estoque",
    },
  ]);

  const [produtoEditando, setProdutoEditando] = useState(null);

  const handleChange = (campo, valor) => {
    setProdutoEditando((prev) => ({ ...prev, [campo]: valor }));
  };

  const handleEditar = (produto) => {
    setProdutoEditando({ ...produto });
  };

  const handleSalvar = () => {
    const statusCalculado = produtoEditando.quantidade > 0 ? "Em estoque" : "Sem estoque";

    setProdutos((prev) =>
      prev.map((produto) =>
        produto.nome === produtoEditando.nome
          ? { ...produto, ...produtoEditando, status: statusCalculado }
          : produto
      )
    );
    setProdutoEditando(null);
  };
  return (
    <div className="bg-sky-500">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Produtos</h1>
        <p className="font-bold mt-3">
          Veja o status dos seus produtos, estoque e cadastros.
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {produtos.map((produto) => (
          <div key={produto.nome} className="flex flex-col gap-3">
            <CardInfo
              titulo={produto.nome}
              categoria={produto.categoria}
              quantidade={produto.quantidade}
              status={produto.status}
            />
            <button
              onClick={() => handleEditar(produto)}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Editar
            </button>
          </div>
        ))}
      </div>

      {produtoEditando && (
        <div className="mb-8 rounded-lg border border-gray-300 bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Editando Produtos
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <input
                value={produtoEditando.nome}
                onChange={(e) => handleChange("nome", e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantidade
              </label>
              <input
                type="number"
                value={produtoEditando.quantidade}
                onChange={(e) =>
                  handleChange("quantidade", Number(e.target.value))
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Categoria
              </label>
              <select
                value={produtoEditando.categoria}
                onChange={(e) => handleChange("categoria", e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
              >
                <option value="Bebidas">bebidas</option>
                <option value="Caldos">Caldos</option>
                <option value="Drinks">Drinks</option>
                <option value="Salgados">Salgados</option>
              </select>
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
              onClick={() => setProdutoEditando(null)}
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
            to="/produtos/novo"
            className="bg-gray-800 text-white px-5 py-3 rounded-lg text-center hover:bg-gray-700"
          >
            + Novo Produto
          </Link>
        </div>
      </div>

      <div className="mt-8 bg-emerald-500 border rounded-lg overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Produtos cadastrados
          </h2>
          <p className="text-gray-500 mt-1">
            Use o campo abaixo para buscar e filtrar a lista.
          </p>
        </div>

        <div className="p-6 grid gap-4 md:grid-cols-[1fr_auto]">
          <input
            type="text"
            placeholder="Buscar produto..."
            className="border rounded-lg px-4 py-2 w-full md:w-72"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-sm">
              <tr>
                <th className="p-4">Nome</th>
                <th className="p-4">Categoria</th>
                <th className="p-4">Preço</th>
                <th className="p-4">Estoque</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4">Produto A</td>
                <td className="p-4">Categoria X</td>
                <td className="p-4">R$ 50,00</td>
                <td className="p-4">10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Products;

import { NavLink } from "react-router-dom"

function Navbar() {
  const linkClass = ({ isActive }) => {
  return `rounded px-3 py-2 ${
    isActive ? "bg-sky-700 text-white" : "text-gray-700 hover:bg-sky-100"
  }`;
};

  return (
        <header className="border-b bg-">
            <div className="flex  min-h-16 items-center justify-between px-6">
                <NavLink to="/" className="text-xl font-bold text-sky-700"
                >Barraquinha do São João
                </NavLink>
                
                <nav className="flex items-center gap-2" aria-label="Navegação principal">
                    <NavLink to="/" end className={linkClass}>
                        Início
                    </NavLink>

                    <NavLink to="/produtos" end className={linkClass}>
                        Produtos
                    </NavLink>
                    
                    <NavLink to="/categorias" end className={linkClass}>
                        Categorias
                    </NavLink>
                </nav>
            </div>
        </header>
  )    
}

export default Navbar
function CardInfo({ titulo, valor, quantidade, status, categoria }) {
  return (
    <div className="bg-yellow-200 border rounded-lg p-6">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-gray-500 text-sm">{titulo}</h2>
        {status && (
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white text-gray-700 border border-gray-300">
            {status}
          </span>
        )}
      </div>

      <p className="text-3xl font-bold mt-2">{valor}</p>
      <p className="text-gray-500 text-sm">{quantidade}</p>
      <p className="text-gray-500 text-sm">{categoria}</p>
    </div>
  );
}

export default CardInfo;
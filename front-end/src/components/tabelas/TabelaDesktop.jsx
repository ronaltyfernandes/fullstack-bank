import RenderCell from "./RenderCell";
import { Pencil, Trash2 } from "lucide-react";

export function TabelaDesktop({
  columns,
  data,
  onEdit,
  onDelete,
}) {
  const showActions = onEdit || onDelete;

  return (
    <div className="overflow-x-auto rounded-xl border border-text/10">
      <table className="min-w-full">
        {/* headers */}
        <thead className="bg-primary">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="px-4 py-3 text-left text-md font-semibold text-white">
                {col.header}
              </th>
            ))}

            {showActions && (
              <th className="px-4 py-3 text-left text-md font-semibold text-white">
                Ações
              </th>
            )}
          </tr>
        </thead>
        {/* Linhas */}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`border-t border-text/10 hover:bg-text/5 transition ${
                rowIndex % 2 === 0 ? "bg-bg" : "bg-bg-secondary"
              }`}
            >
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className="px-4 py-3 text-sm text-text"
                >
                  <RenderCell
                    value={row[col.accessor]}
                    col={col}
                    row={row}
                  />
                </td>
              ))}
              {/* ações, delete e update */}
              {showActions && (
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    {onEdit && (
                      <button
                        onClick={() => onEdit(row)}
                        className="p-2 rounded-lg bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition"
                        title="Editar"
                      >
                        <Pencil size={16} />
                      </button>
                    )}

                    {onDelete && (
                      <button
                        onClick={() => onDelete(row)}
                        className="p-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20 transition"
                        title="Excluir"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
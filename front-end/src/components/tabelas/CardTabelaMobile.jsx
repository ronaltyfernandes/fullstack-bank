import RenderCell from "./RenderCell";
import { Pencil, Trash2 } from "lucide-react";

export function CardTabelaMobile({
  columns,
  data,
  onEdit,
  onDelete,
}) {
  const showActions = onEdit || onDelete;

  return (
    <div className="space-y-4">
      {data.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="rounded-2xl border border-text/10 bg-bg-secondary shadow-sm hover:shadow-md transition-all duration-300"
        >
          {/* Conteúdo */}
          <div className="p-4 space-y-3">
            {columns.map((col, colIndex) => (
              <div
                key={colIndex}
                className="flex justify-between items-start gap-4 border-b border-text/10 pb-2 last:border-none last:pb-0"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-text/60">
                  {col.header}
                </span>

                <div className="text-sm text-right text-text font-medium wrap-break-words">
                  <RenderCell
                    value={row[col.accessor]}
                    col={col}
                    row={row}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Rodapé */}
          {showActions && (
            <div className="flex justify-end gap-2 px-4 py-3 bg-primary/5 rounded-b-2xl border-t border-text/10">
              {onEdit && (
                <button
                  onClick={() => onEdit(row)}
                  className="flex items-center gap-2 rounded-lg bg-blue-500/10 px-3 py-2 text-blue-500 hover:bg-blue-500/20 transition"
                >
                  <Pencil size={16} />
                  <span className="text-sm">Editar</span>
                </button>
              )}

              {onDelete && (
                <button
                  onClick={() => onDelete(row)}
                  className="flex items-center gap-2 rounded-lg bg-red-500/10 px-3 py-2 text-red-500 hover:bg-red-500/20 transition"
                >
                  <Trash2 size={16} />
                  <span className="text-sm">Excluir</span>
                </button>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
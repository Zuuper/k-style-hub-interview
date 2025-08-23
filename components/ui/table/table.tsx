import type { ColumnDef } from "@tanstack/react-table"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export default function Table<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const tableData = useReactTable({
    data, columns, getCoreRowModel: getCoreRowModel()
  })
  return <table>

  </table>
}
import type { ColumnDef } from "@tanstack/table-core";
import type { Database } from "types/supabase";
type Brand = Database['public']['Tables']['brands']['Row']
export const BrandColumn: ColumnDef<Brand>[] = [
  {
    accessorKey: "name",
    header: "Brand name"
  },
  {
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: "address",
    header: "Address"
  },
  {
    accessorKey: "action",
    header: "",
    cell: ({ row }) => "view detail"
  }
]
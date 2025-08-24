import { error } from "console";
import { supabase, type TypeSupabaseClient } from "services/db/supabase-client";
import type { PaginationProps } from "services/utils/dto";

export const GetProductsService = async (
  pagination: PaginationProps,
  search?: string,
  brandId?: number,
  db: TypeSupabaseClient = supabase
) => {
  const currentRange = {
    start: (pagination.page - 1) * pagination.itemPerPage,
    end:
      (pagination.page - 1) * pagination.itemPerPage + pagination.itemPerPage,
  };
  let query = db
    .from("products")
    .select("*", { count: "exact" })
    .range(currentRange.start, currentRange.end);
  if (brandId && brandId > 0) {
    query.eq("brand", brandId);
  }
  if (search && search.trim() !== "") {
    query.ilike("name", `%${search}%`);
  }
  const { count, data, error } = await query;
  if (error) {
    throw error;
  }
  return { data, count };
};

export const GetProductDetailService = async (
  id: number,
  db: TypeSupabaseClient = supabase
) => {
  const { data } = await db.from("product_details").select("*").eq("id", id);
  if (error) {
    throw error;
  }
  return { data };
};

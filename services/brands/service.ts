import type { PaginationProps } from "./dto";
import { supabase, type TypeSupabaseClient } from "services/db/supabase-client";

export const GetBrandsService = async (
  pagination: PaginationProps,
  search?: string,
  db: TypeSupabaseClient = supabase
) => {
  const currentRange = {
    start: (pagination.page - 1) * pagination.itemPerPage,
    end:
      (pagination.page - 1) * pagination.itemPerPage + pagination.itemPerPage,
  };
  let query = db
    .from("brands")
    .select("*", { count: "exact" })
    .range(currentRange.start, currentRange.end);

  // Only apply filter if search exists
  if (search && search.trim() !== "") {
    query = query.ilike("name", `%${search}%`);
  }
  const { count, data, error } = await query;

  if (error) {
    throw error;
  }
  return { data, count };
};

export const GetBrandDetailService = async (
  slug: string,
  db: TypeSupabaseClient = supabase
) => {
  const { data, error } = await db.from("brands").select("*").eq("slug", slug);
  return { data, error };
};

export const PostBrandService = () => {};

export const PutBrandService = () => {};

export const DeleteBrandService = () => {};

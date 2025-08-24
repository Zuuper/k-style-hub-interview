import type { PaginationProps } from "./dto";
import { supabase, type TypeSupabaseClient } from "services/db/supabase-client";

export const GetBrandsService = async (
  pagination: PaginationProps,
  search?: string,
  db: TypeSupabaseClient = supabase
) => {
  const currentRange = {
    start: pagination.nextPage * pagination.totalPage,
    end: pagination.nextPage * pagination.totalPage + pagination.totalPage,
  };
  const { data, error } = await db
    .from("brands")
    .select("*")
    .ilike("name", search || "")
    .range(currentRange.start, currentRange.end);

  return { data, error };
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

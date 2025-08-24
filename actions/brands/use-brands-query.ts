import { useQuery } from "@tanstack/react-query";
import { GetBrandsService } from "services/brands/service";
import type { Database } from "types/supabase";

type Brand = Database["public"]["Tables"]["brands"]["Row"];
interface BrandQueryResponse {
  data: Brand[];
  count: number;
}

export const BRANDS_QUERY_KEY = "brands-key";
export const useGetBrandsQuery = (
  page: number,
  itemPerPage: number,
  search?: string
) => {
  const query = useQuery<BrandQueryResponse>({
    queryKey: [BRANDS_QUERY_KEY, page, itemPerPage, search || undefined],
    queryFn: async () => {
      const req = await GetBrandsService(
        { page, itemPerPage: itemPerPage },
        search
      );
      return {
        data: req.data ?? [],
        count: req.count ?? 0,
      };
    },
    retry: 0,
  });
  return query;
};

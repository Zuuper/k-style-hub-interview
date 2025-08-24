"use client"
import { useGetBrandsQuery } from "actions/brands/use-brands-query"
import { useSearchParams } from "react-router";
import { DataTable } from "~/components/dashboard/table/data-table"
import { paginationPage } from "~/lib/constant";
import { BrandColumn } from "./column";
import { Input } from "~/components/ui/input";
import { useEffect, useState } from "react";
import { useDebounce } from "~/hooks/use-debounce";

export default function BrandPage() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState("")
  const debounce = useDebounce(filter, 500)
  useEffect(() => {
    setSearchParams((searchParams) => {
      searchParams.set(paginationPage.search, debounce)
      return searchParams
    })
  }, [debounce])

  const { data, error, isLoading } = useGetBrandsQuery(+(searchParams.get(paginationPage.page) || 1), +(searchParams.get(paginationPage.totalItem) || 10), searchParams.get(paginationPage.search) || undefined)
  if (error) {
    return <></>
  }

  return <section className="space-y-12">
    <div>
      <h1 className="max-sm:text-xl text-3xl font-semibold">Brands</h1>
      <p className="max-sm:text-sm text-neutral-500">All brand registered</p>
    </div>
    <div id="brands-table" className="space-y-2">
      <Input placeholder="Find brand name" onChange={(e) => setFilter(e.target.value)} type="text" />
      <DataTable columns={BrandColumn} data={data?.data || []} />
    </div>
  </section>
}
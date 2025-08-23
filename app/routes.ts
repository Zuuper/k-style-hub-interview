import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix("dashboard", [
    layout("routes/dashboard/layout.tsx", [
      index("routes/dashboard/page.tsx"),
      route("brands", "routes/dashboard/brands/page.tsx", [
        route(":slug", "routes/dashboard/brands/detail/page.tsx"),
      ]),
      route("products", "routes/dashboard/products/page.tsx", [
        route(":slug", "routes/dashboard/products/detail/page.tsx"),
      ]),
    ]),
  ]),
] satisfies RouteConfig;

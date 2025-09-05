import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("create", "routes/create.tsx"), // "/create"
  route("fetch", "routes/search.tsx"), // "/fetch"
  route("update", "routes/update.tsx"), // "/update"
  route("delete", "routes/delete.tsx"), // "/delete"
] satisfies RouteConfig;

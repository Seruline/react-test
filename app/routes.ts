import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  layout("./routes/auth/layout.tsx", [
    ...prefix("login", [index("./routes/auth/login/index.tsx")]),
    ...prefix("signup", [index("./routes/auth/signup/index.tsx")]),
  ]),

  ...prefix("profile", [
    index("./routes/profile/index.tsx"),
    route(":id", "./routes/profile/profile.tsx"),
    route("/about", "./routes/profile/about.tsx"),
  ]),
] satisfies RouteConfig;

import express from "express";
import cors from "cors";

import { createRoles } from "./libs/initialSetup.js";
import authRoutes from "./routes/auth.routes.js";
import homeRoutes from "./routes/home.routes.js";
import projectRoutes from "./routes/project.routes.js";
import allProjects from "./routes/all.project.js";
import RoutesUsers from './routes/route.user.js';
import entidadroutes from "./controller/form.controller.js"

const app = express();
await createRoles();

app.use(express.json({ exteng: true }));
app.use(express.urlencoded({ extended: false }));
app.use(
    cors({
        origin: "https://corpohypatia.vercel.app",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
        preflightContinue: false,
        optionsSuccessStatus: 204,
    })
);

app.use("/projects", allProjects);
app.use("/", homeRoutes);
app.use("/", authRoutes);
app.use("/project", projectRoutes);
app.use("/users/", RoutesUsers);
app.use("/form", entidadroutes);

export default app;

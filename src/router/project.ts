import Router from "@koa/router";
import ProjectController from "../controller/project";

const project = new Router();

project.get("/list", ProjectController.getList);

project.get("/details", ProjectController.getDetailsById);

project.post("/add", ProjectController.addProject);

project.post("/update", ProjectController.updateProject);

project.get("/delete", ProjectController.deleteProject);

export default project;
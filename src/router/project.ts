import Router from "@koa/router";
import ProjectController from "../controller/project";
import ActiveController from "../controller/active";

const project = new Router();

project.get("/list", ProjectController.getList);

project.get("/details", ProjectController.getDetailsById);

project.post("/add", ProjectController.addProject);

project.post("/update", ProjectController.updateProject);

project.get("/delete", ProjectController.deleteProject);

project.get("/active", ActiveController.getActiveProject);

project.get("/setActive", ActiveController.setActiveProject);

export default project;
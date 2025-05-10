import {
  deleteUser,
  getAllUsers,
  UsersBlogs,
  getUserDetails,
  newOrUpdateUser,
  newBlog,
} from "@/controllers/user.js";
import { Router } from "express";

const app = Router();

app.post("/newandupdateuser", newOrUpdateUser);
app.delete("/deleteuser/:id", deleteUser);
app.get("/users", getAllUsers);
app.get("/user/:id", getUserDetails);
app.get("/blogs", UsersBlogs);
app.post("/newblog", newBlog);

export default app;

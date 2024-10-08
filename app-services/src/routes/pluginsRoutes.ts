import { Router } from "https://deno.land/x/oak@v13.1.0/mod.ts";
import { downloadPlugin, getCategories, getPlugins, searchPlugins } from "../controllers/pluginsController.ts";

const router = new Router();

router.get("/plugins", getPlugins); 
router.get("/plugins/search", searchPlugins);
router.get("/plugins/categories", getCategories);
router.post("/plugins/download", downloadPlugin);

export default router;

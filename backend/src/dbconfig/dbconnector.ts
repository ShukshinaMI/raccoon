import { Pool } from "pg";
import dbconfig from "./dbconfig";

let mainPool: Pool;

const getPool = () => {
  if (!mainPool) {
    mainPool = new Pool(dbconfig);
  }

  return mainPool;
};

export default getPool;

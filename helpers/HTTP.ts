import axios from "axios";
import globalConfig from "./globalConfig";

const HTTP = axios.create({
  baseURL: globalConfig.server.BASEURL,
});

export default HTTP;

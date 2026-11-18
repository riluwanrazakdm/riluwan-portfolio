import { URL_ } from "../lib/site";
export default () => ({ rules: [{ userAgent: "*", allow: "/" }], sitemap: `${URL_}/sitemap.xml` });

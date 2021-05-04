import { gtfs2json } from "./gtfs2json.js";

const bin = await Deno.readFile("./wakayama.zip");
const data = gtfs2json(bin);
console.log(data);

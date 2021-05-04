import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await CSV.fetch("https://tshimada291.sakura.ne.jp/transport/dat/GTFS_opendata_jp_catalog.csv"); // CORS disabled
//const data = CSV.toJSON(await CSV.fetch("./GTFS_opendata_jp_catalog.csv"))
const rt = data.filter(d => d.rt_catalog_url);
console.log(rt);
await Deno.writeTextFile("GTFS_opendata_jp_catalog_rt.csv", CSV.encode(CSV.fromJSON(rt)));

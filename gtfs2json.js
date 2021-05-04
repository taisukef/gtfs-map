import { CSV } from "https://js.sabae.cc/CSV.js";
import { unzip } from "https://taisukef.github.io/zlib.js/es/unzip.js";

const gtfs2json = (bin) => {
    const res = {};
    const zips = unzip(bin);
    const fns = zips.getFilenames();
    for (const fn of fns) {
        const data = new TextDecoder().decode(zips.decompress(fn));
        const csv = CSV.decode(data);
        const json = CSV.toJSON(csv);
        const name = fn.substring(0, fn.length - 4); // cut .txt
        res[name] = json;
    }
    return res;
};

export { gtfs2json };

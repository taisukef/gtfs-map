import { GtfsRealtimeApi } from "https://taisukef.github.io/gtfs-realtime-bindings/deno/gtfs-realtime.js";
import { gtfs2json } from "./gtfs2json.js";
import { fetchBin } from "./fetchBin.js";

const GTFS = {
    async fetch(url) {
        const data = await fetchBin(url);
        const json = gtfs2json(data);
        return json;
    },
    async fetchRT(url) {
        const data = await fetchBin(url);
        const feed = GtfsRealtimeApi.transit_realtime.FeedMessage.decode(data);
        return feed;
    },
};

export { GTFS };

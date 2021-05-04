import { GtfsRealtimeApi } from "https://taisukef.github.io/gtfs-realtime-bindings/deno/gtfs-realtime.js";

const url = "http://www3.unobus.co.jp/GTFS/GTFS_RT-VP.bin"; // CORS
//const url = "https://files-skybrain.ekispert.jp/toyama/gtfs-rt/latest/nanto-city/VehiclePositions.pb"; // CORS
const data = new Uint8Array(await (await fetch(url)).arrayBuffer());
const feed = GtfsRealtimeApi.transit_realtime.FeedMessage.decode(data);
console.log(feed);
console.log(feed.entity[0].vehicle);

const pos = feed.entity[0].vehicle.position;
console.log("pos", pos.latitude, pos.longitude);

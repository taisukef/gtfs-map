const list = [
  { url: "http://www3.unobus.co.jp/GTFS/GTFS_RT-VP.bin", fn: "unobus.pb" },
  {
    url:
      "https://files-skybrain.ekispert.jp/toyama/gtfs-rt/latest/chitetsu/TripUpdates.pb",
    fn: "toyamabus.pb",
  },
  {
    url:
      "https://files-skybrain.ekispert.jp/toyama/gtfs-rt/latest/nanto-city/VehiclePositions.pb",
    fn: "nantobus.pb",
  },
];

for (const d of list) {
  const data = new Uint8Array(await (await fetch(d.url)).arrayBuffer());
  await Deno.writeFile(d.fn, data);
}

const fetchViaProxy = (url) => {
  //const urlProxy = "https://fukuno.jig.jp/proxy/ITqT5WkhCf2yn1s9?url=" + encodeURIComponent(url);
  const urlProxy = "http://localhost:8008/?url=" + encodeURIComponent(url);
  return fetch(urlProxy);
};

const fetchBin = async (url) => {
  const flg = url.startsWith("https://") || url.startsWith("http://");
  const f = flg ? fetchViaProxy : fetch;
  console.log(flg, url);
  return new Uint8Array(await (await f(url)).arrayBuffer());
};

export { fetchBin };

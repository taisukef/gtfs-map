const fetchViaProxy = (url) => {
    const host = "fukuno.jig.jp";
	const url_proxy = "https://" + host + "/proxy/ITqT5WkhCf2yn1s9?url=" + encodeURI(url);
    return fetch(url_proxy);
};

const fetchBin = async (url) => {
    const flg = url.startsWith("https://") || url.startsWith("http://");
    const f = flg ? fetchViaProxy : fetch;
    console.log(flg, url)
    return new Uint8Array(await (await f(url)).arrayBuffer());
};

export { fetchBin };

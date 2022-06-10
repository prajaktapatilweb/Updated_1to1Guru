// const { SitemapStream, streamToPromise } = require("sitemap");
// const { Readable } = require("stream");
// import {abt,cnt,stureg,teareg} from '../components/Link'

// export default async (req, res) => {
//   // An array with your links
//   const links = [
//     { url: "/", changefreq: "daily", priority: 1.0 },
//     { url: {stureg}, changefreq: "daily", priority: 0.8 },
//     { url: {teareg}, changefreq: "daily", priority: 0.8 },
//     { url: {abt}, changefreq: "daily", priority: 0.8 },
//     { url: {cnt}, changefreq: "daily", priority: 0.8 }
//   ];

//   // Create a stream to write to
//   const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

//   res.writeHead(200, {
//     "Content-Type": "application/xml",
//   });

//   // const xmlString = await streamToPromise(
//   //   Readable.from(links).pipe(stream)
//   // ).then((data) => data.toString());

//   const xmlString = (await streamToPromise(stream)).toString();

//   res.end(xmlString);
// };
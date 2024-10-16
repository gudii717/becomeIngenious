// const fetch = require("node-fetch");
const https = require('https');

// async function getImages(req, res) {
  //   "https://media.gettyimages.com/id/644678990/photo/scientist-albert-einstein-poses-for-a-portrait-in-1947.jpg?s=612x612&w=0&k=20&c=ohK9qp88Vccz8TIkcZXIhCTPHIABKbgH-sZLjaDKc8M=",
  //   "https://media.gettyimages.com/id/113494557/photo/unspecified-galileo-galilei-italian-physicist-mathematician-astronomer-who-played-a-major-role.jpg?s=612x612&w=0&k=20&c=U0mJa-BBojTBFwv9Orojix2iv9OU76UYLAxCrqtuBYQ=",
  // ];

  // try {
  //   const imageBuffers = await Promise.all(
  //     imageUrls.map(async (url) => {
  //       const response = await fetch(url);
  //       const buffer = await response.buffer();
  //       return buffer;
  //     })
  //   );

  //   res.json({
  //     images: imageBuffers.map((buffer) => buffer.toString("base64")),
  //   });
  // } catch (error) {
  //   console.error("Error fetching images:", error);
  //   res.status(500).send("Error fetching images");
  // }
const getImages = async (req, res) => {
  const imageUrl = "https://media.gettyimages.com/id/517400082/photo/thomas-edison-was-a-prolific-inventor-who-was-issued-over-1-000-patents-over-his-lifetime.jpg?s=612x612&w=0&k=20&c=9M7C67h2mHsLamBePv4PGFL9Qr4SAQa3YAZk-BlhMqs=";

    https.get(imageUrl, (response) => {
        res.setHeader("Content-Type", response.headers["content-type"]);

        response.pipe(res);
      }).on("error", (err) => {
        console.log("Error fetching image", err);
        res.status(500).send("Error fetching image");
      });

  // res.json({ imageUrl })
};

module.exports = { getImages };

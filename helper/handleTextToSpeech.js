const axios = require("axios");
require("dotenv").config();

const handleTextToSpeech = async (from, subject, summary) => {
  const message = `From: ${from}. \n Subject: ${subject}. ${summary}`;
  const options = {
    method: "POST",
    url: "https://api.edenai.run/v2/audio/text_to_speech",
    headers: {
      Authorization: "Bearer " + process.env.EDEN_KEY,
    },
    data: {
      providers: "amazon",
      language: "en",
      text: message,
      option: "MALE",
    },
  };

  return await axios
    .request(options)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = handleTextToSpeech;

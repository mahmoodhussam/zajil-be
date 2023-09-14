const cohere = require("cohere-ai");
const handleTextToSpeech = require("./handleTextToSpeech");
require("dotenv").config();

cohere.init(process.env.COHERE_KEY); // This is your trial API key

const handleSumarize = async (from, subject, message) => {
  try {
    const response = await cohere.summarize({
      text: message,
      length: "auto",
      format: "auto",
      model: "command",
      additional_command: "",
      temperature: 0.4,
    });
    let summary = response.body.summary;
    let autio = await handleTextToSpeech(from, subject, response.body.summary);
    return { summary: summary, autio: autio };
  } catch (err) {
    console.log("err", err);
  }
};

module.exports = handleSumarize;

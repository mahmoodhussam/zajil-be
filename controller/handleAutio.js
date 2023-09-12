const handleSumarize = require("../helper/handleSumarize");

const handleAudio = async (req, res) => {
  const body = req.body;
  let summarize = await handleSumarize(
    req.body.from,
    req.body.subject,
    req.body.body
  );
  res.json({ summarize });
};

module.exports = handleAudio;

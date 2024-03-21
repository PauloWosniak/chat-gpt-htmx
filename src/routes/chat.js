var express = require("express");
var router = express.Router();
const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

router.get("/message", function (req, res, next) {
  const { message } = req.query;
  res.render("partials/chat-question", { message, layout: false });
});

router.post("/answer", async function (req, res, next) {
  const { message: userMessage } = req.query;

  let chatGptResponse = await openai.chat.completions
    .create({
      model: "gpt-4",
      messages: [
        /*
         * This first object is optional and can be used to set the context of the conversation
         */
        // {
        //   role: "system",
        //   content:
        //     "Geppetto is a chatbot that can answer your questions about the world. Ask me anything",
        // },
        {
          role: "user",
          content: userMessage,
        },
      ],
    })
    .catch((error) => {
      console.log("OpenAI Error:\n", error);
      chatGptResponse =
        "I'm sorry, I cannot answer that question at the moment. Please try again later.";
      res.render("partials/chat-answer", {
        message: chatGptResponse,
        layout: false,
      });
      return;
    });

  res.render("partials/chat-answer", {
    message: chatGptResponse.choices[0].message.content,
    layout: false,
  });
});

module.exports = router;

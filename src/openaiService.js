// src/openaiService.js
import axios from "axios";

export const generatePrompt = async (outfitDescription) => {
  const response = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      model: "text-davinci-003",
      prompt: `Describe this outfit: ${outfitDescription}`,
      max_tokens: 100,
      temperature: 0.7,
    },
    {
      headers: {
        Authorization: `Bearer YOUR_OPENAI_API_KEY`,
      },
    }
  );
  return response.data.choices[0].text;
};

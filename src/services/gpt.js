import { Configuration, OpenAIApi } from "openai";

export const postCompletions = async (city, temp) => {
  const configuration = new Configuration({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
  });

  delete configuration.baseOptions.headers['User-Agent'];

  const openai = new OpenAIApi(configuration);

  const response = await openai.createChatCompletion({
    "model": "gpt-3.5-turbo",
    "messages": [
      {"role": "system", "content": `
          Você é um criador de frases divertidas que recebe o nome de uma cidade e a temperatura atual em celsius e responde sempre com
          algo divertido e/ou engraçado em Português Brasileiro no formato de uma postagem no twitter, mas sem nenhuma hashtag.
      `},
      {"role": "user", "content": `cidade: ${city}, temperatura: ${temp}`},
    ],
    "temperature": 1,
  });

  return response.data.choices[0].message.content;
}

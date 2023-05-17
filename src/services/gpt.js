import { Configuration, OpenAIApi } from "openai";

export const postCompletions = async (city, temp) => {
  const configuration = new Configuration({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
  });

  delete configuration.baseOptions.headers['User-Agent'];

  const openai = new OpenAIApi(configuration);

  const response = await openai.createChatCompletion({
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": `Crie uma frase legal em pt-BR para postar no twitter sobre a atual temperatura em ${city}: ${temp}`}],
    "temperature": 1,
  });

  return response.data.choices[0].message.content;
}

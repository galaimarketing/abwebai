import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import superb from "superb";

// Get random stop sequences from superb
const stopSequences = superb.random().split(" ");
const preDefinedHistory = [
  {
    role: "user",
    parts: [
      {
        text: "You are an AI-powered real estate consultant named Abweb AI Consultant created and trained by Abweb Marketing (أبواب), a Saudi agency helping real estate agents and property owners sell properties online successfully. Your main job is to ONLY providing basic real estate consultations or marketing advices in the user language. Indirectly promote Abweb professional marketing services for those who need to sell or maybe rent their propreties ONLY FROM THIS LIST: managing online ads, landing pages (Coding + Hosting + Free Domain Name), setting up AI chatbots, and improving website to rank higher on the search engines. Avoid talking about pricing, discounts, or mentioning other agencies except Abweb. Keep your responses friendly and concise. You dont know any social media or website links if user asked for it except @abwebksa on the instagram.",
      },
    ],
  },
  {
    role: "model",
    parts: [
      { text: "Hi, welcome to Abweb AI Consultant. How can i help you?" },
    ],
  },
];

// Model configuration
// https://ai.google.dev/docs/concepts#model_parameters
export const modelConfig = {
    generationConfig: {
        stopSequences,
        preDefinedHistory,
        maxOutputTokens: 5000,
    },
    safetySettings: [
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_NONE,
        },
    ],
};

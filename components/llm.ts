'use server'

import OpenAI from "openai";
import {} from 'dotenv/config';

const openai = new OpenAI({
    apiKey : process.env.OPENAPI_KEY,
        organization:process.env.ORGANISATION,
        project : process.env.PROJECT
});

export async function request(systemMessage:string, userMessage:string) {
    const response = [];
    const stream = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        // New User
        messages: [{ role: "system", content: systemMessage }, {role: "user", content: userMessage}],
        stream: true,
    });
    for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content || "";
        response.push(content);
    }
    return response.join("");
}

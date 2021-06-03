import { useState } from "react";
import axios from "axios";

function useOpenApi() {
    const [openApiText, setOpenApiText] = useState("");

    const getPromptURL = `https://api.openai.com/v1/engines/curie/completions`;

    const header = {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAPI_TOKEN}`,
        },
    };

    const getPrompt = (text) => {
        const promptRequestBody = {
            prompt: text,
            max_tokens: 200,
            temperature: 0.7,
            top_p: 1,
            n: 1,
            stream: false,
            logprobs: null,
            presence_penalty: 0.3,
            frequency_penalty: 0.3,
        };
        console.log(text);
        axios
            .post(getPromptURL, promptRequestBody, header)
            .then((res) => setOpenApiText(res.data.choices[0].text));
    };

    return [getPrompt, openApiText];
}

export default useOpenApi;

import {fileURLToPath} from "url";
import path from "path";
import {
    LlamaModel, LlamaContext, LlamaChatSession, Token
} from "node-llama-cpp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const model = new LlamaModel({
    // modelPath: path.join(__dirname, "models", "llama-2-7b-chat.Q3_K_S.gguf")
    modelPath: path.join(__dirname, "models", "Mistral-NeMo-Minitron-8B-Base.IQ3_M.gguf")
});
const context = new LlamaContext({model});
const session = new LlamaChatSession({context});


const q1 = "Write a 300-word English reading passage about the benefits of healthy eating.";

const startTime = Date.now();
const response = await session.prompt(q1);
const endTime = Date.now();

console.log("Response:", response);
console.log("Time taken:", endTime - startTime, "ms");

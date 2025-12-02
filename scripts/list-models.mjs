import dotenv from "dotenv";
import fs from "fs";
import path from "path";

const envPath = path.resolve(process.cwd(), ".env");
if (fs.existsSync(envPath)) {
  const envConfig = dotenv.parse(fs.readFileSync(envPath));
  for (const k in envConfig) {
    process.env[k] = envConfig[k];
  }
}

const API_KEY = process.env.GEMINI_API_KEY;

async function listModels() {
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
    const data = await response.json();
    if (data.models) {
      console.log("Available Models with image generation:");
      data.models
        .filter(m => m.name.includes('imagen') || m.supportedGenerationMethods?.includes('generateImage'))
        .forEach(m => console.log(`- ${m.name} (${m.supportedGenerationMethods})`));

      console.log("\nAll models:");
      data.models.forEach(m => console.log(`- ${m.name}`));
    } else {
      console.log("No models found or error:", data);
    }
  } catch (error) {
    console.error("Error listing models:", error);
  }
}

listModels();

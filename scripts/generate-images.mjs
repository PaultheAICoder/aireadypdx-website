import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

const envPath = path.resolve(process.cwd(), ".env");
if (fs.existsSync(envPath)) {
  const envConfig = dotenv.parse(fs.readFileSync(envPath));
  for (const k in envConfig) {
    process.env[k] = envConfig[k];
  }
}

const API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

async function generateImage(prompt, filename) {
  console.log(`\n🎨 Generating ${filename}...`);
  console.log(`📝 Prompt: ${prompt.substring(0, 100)}...`);

  try {
    // Use gemini-2.0-flash-exp-image-generation which supports image output
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["image", "text"],
      },
    });

    const result = await model.generateContent(prompt);
    const response = result.response;

    if (response.candidates && response.candidates.length > 0) {
      const parts = response.candidates[0].content.parts;
      const imagePart = parts.find(p => p.inlineData);

      if (imagePart) {
        const base64Image = imagePart.inlineData.data;
        const buffer = Buffer.from(base64Image, "base64");
        const outputPath = path.join(process.cwd(), "public", filename);
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        fs.writeFileSync(outputPath, buffer);
        console.log(`✅ Saved to ${outputPath}`);
        return outputPath;
      } else {
        console.error("❌ No inline image data found in response parts.");
        console.log("Response parts:", JSON.stringify(parts, null, 2));
      }
    } else {
      console.error("❌ No candidates in response.");
    }
  } catch (error) {
    console.error(`❌ Failed to generate ${filename}:`, error.message);

    // Try fallback with gemini-3-pro-image-preview
    console.log("🔄 Trying gemini-3-pro-image-preview...");
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-3-pro-image-preview" });
      const result = await model.generateContent(prompt);
      const response = result.response;

      if (response.candidates && response.candidates.length > 0) {
        const parts = response.candidates[0].content.parts;
        const imagePart = parts.find(p => p.inlineData);

        if (imagePart) {
          const base64Image = imagePart.inlineData.data;
          const buffer = Buffer.from(base64Image, "base64");
          const outputPath = path.join(process.cwd(), "public", filename);
          fs.mkdirSync(path.dirname(outputPath), { recursive: true });
          fs.writeFileSync(outputPath, buffer);
          console.log(`✅ Saved to ${outputPath} (fallback model)`);
          return outputPath;
        }
      }
    } catch (fallbackError) {
      console.error(`❌ Fallback also failed:`, fallbackError.message);
    }
  }
}

const images = [
  {
    filename: "images/icons/client-civic.png",
    prompt: "Minimalist icon, 40x40 pixel style, flat design. Three small simplified figures standing together side by side: a police officer wearing a dark blue uniform and cap, a firefighter wearing a red helmet and yellow coat, and an elementary school student with a backpack. Simple geometric shapes, no facial details. Dark teal (#2BBBAD) and navy blue (#1F3A5F) color palette. Clean lines, friendly but professional. Pure white background. Icon style suitable for a website. No text."
  },
  {
    filename: "images/icons/service-confidential.png",
    prompt: "Minimalist icon, 40x40 pixel style, flat design. Shield shape with neural network nodes inside - small circles connected by thin lines in a brain-like pattern. Deep forest green (#0B3D2E) shield with glowing teal (#2BBBAD) nodes and connection lines. Cybersecurity meets AI aesthetic. Modern, clean, professional. Pure white background. Icon style suitable for a website. No text."
  },
  {
    filename: "images/hero/hero-background.jpg",
    prompt: "Pacific Northwest coffee shop storefront scene. A work truck (white service van) parked outside a clearly commercial coffee shop with large windows and an 'OPEN' sign. View from outside looking in through the window shows an espresso machine with subtle glowing teal circuit board patterns and network connection lines overlaid on the machine. Morning golden hour light. Muted earth tones - browns, greens, cream colors - with teal (#2BBBAD) accent lighting on the tech elements. Portland Oregon aesthetic: exposed brick, reclaimed wood, industrial modern design. The truck has subtle tech integration visible - maybe glowing lines on the side. Warm, professional, innovative but approachable. Photorealistic, high quality."
  }
];

async function main() {
  console.log("🚀 Starting image generation with Gemini Imagen...\n");

  for (const image of images) {
    await generateImage(image.prompt, image.filename);
  }

  console.log("\n✨ Image generation complete!");
}

main();

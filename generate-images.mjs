import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';

config(); // Load .env file

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const API_KEY = process.env.GOOGLE_AI_API_KEY;

if (!API_KEY) {
  console.error('Error: GOOGLE_AI_API_KEY environment variable not set.');
  console.error('Create a .env file with: GOOGLE_AI_API_KEY=your_key_here');
  process.exit(1);
}

const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent';

// All image assets to generate
const images = [
  // Logos
  {
    path: 'public/images/logos/logo-full.png',
    prompt: `Create a flat vector logo for a company called "AI Ready PDX". The concept is a simple evergreen tree made from connected dots and lines, symbolizing both the Pacific Northwest and AI networks. Style: minimal, modern, professional, and reassuring (reflecting a 30-year tech legacy), not playful or experimental. Use a limited palette of deep forest green (#0B3D2E), slate blue (#1F3A5F), and a touch of teal (#2BBBAD) on a transparent background. Include a clean sans-serif wordmark "AI Ready PDX" to the right of the icon. No gradients, no 3D, suitable for web and print.`
  },
  {
    path: 'public/images/logos/logo-full-white.png',
    prompt: `Create a flat vector logo for a company called "AI Ready PDX". The concept is a simple evergreen tree made from connected dots and lines, symbolizing both the Pacific Northwest and AI networks. Style: minimal, modern, professional. The logo and wordmark "AI Ready PDX" should be WHITE/light colored, suitable for placing on dark backgrounds. Transparent background. No gradients, no 3D.`
  },
  {
    path: 'public/images/logos/logo-wordmark.png',
    prompt: `Design a clean wordmark logo that says "AI Ready PDX". Style: modern sans-serif with slightly rounded corners, professional but inviting. The logo should feel established, as if the company has been in tech leadership for decades. Emphasize "AI" subtly, perhaps with a different weight or color. Use deep forest green (#0B3D2E) and dark grey (#1E2022) on a transparent background. No icon, just typography.`
  },
  {
    path: 'public/images/logos/logo-icon.png',
    prompt: `Design a simple square icon/favicon for "AI Ready PDX" that works at 32x32 pixels. Feature a minimalist "AI" lettermark with a single subtle evergreen tree or mountain peak element. Deep forest green (#0B3D2E) on transparent background. Must be instantly recognizable at small sizes. Square format.`
  },

  // Hero
  {
    path: 'public/images/hero/hero-background.jpg',
    aspectRatio: '16:9',
    prompt: `Create an illustration for a website hero section. Scene: a Portland-style small business environment (for example, a coffee shop storefront and a landscaping truck) with subtle hints of AI, like soft connection lines or gently glowing nodes around tools and devices. Style: flat, minimal, slightly geometric, with a Pacific Northwest color palette of greens (#0B3D2E), blues (#1F3A5F), teals (#2BBBAD), and warm neutrals (#F4F1EA). The overall feeling should be calm competence: "we've done this before," not "shiny startup." No text in the image. 16:9 wide aspect ratio for use as a web banner.`
  },

  // Service Icons
  {
    path: 'public/images/icons/service-strategy.png',
    prompt: `Create a flat vector icon: Strategy & roadmaps - a simple path/road with a flag at the end. Colors: deep forest green (#0B3D2E), slate blue (#1F3A5F), and teal accents (#2BBBAD) on transparent background. Style: outlined with minimal fills, modern and professional. 64x64 pixels, square format.`
  },
  {
    path: 'public/images/icons/service-automation.png',
    prompt: `Create a flat vector icon: Automation & agents - two gears with a small spark or glowing node. Colors: deep forest green (#0B3D2E), slate blue (#1F3A5F), and teal accents (#2BBBAD) on transparent background. Style: outlined with minimal fills, modern and professional. 64x64 pixels, square format.`
  },
  {
    path: 'public/images/icons/service-marketing.png',
    prompt: `Create a flat vector icon: Marketing & outreach - a megaphone with signal waves. Colors: deep forest green (#0B3D2E), slate blue (#1F3A5F), and teal accents (#2BBBAD) on transparent background. Style: outlined with minimal fills, modern and professional. 64x64 pixels, square format.`
  },
  {
    path: 'public/images/icons/service-training.png',
    prompt: `Create a flat vector icon: Training & enablement - a person at a whiteboard with a lightbulb. Colors: deep forest green (#0B3D2E), slate blue (#1F3A5F), and teal accents (#2BBBAD) on transparent background. Style: outlined with minimal fills, modern and professional. 64x64 pixels, square format.`
  },
  {
    path: 'public/images/icons/service-data.png',
    prompt: `Create a flat vector icon: Data & private AI - a shield with small network nodes inside. Colors: deep forest green (#0B3D2E), slate blue (#1F3A5F), and teal accents (#2BBBAD) on transparent background. Style: outlined with minimal fills, modern and professional. 64x64 pixels, square format.`
  },

  // Client Industry Icons
  {
    path: 'public/images/icons/client-home-services.png',
    prompt: `Create a flat vector icon: Home & field services - a house with a leaf/tree element. Colors: deep forest green (#0B3D2E) and teal (#2BBBAD) on transparent background. Style: minimal line art with selective fills, modern, friendly, professional. 64x64 pixels, square format.`
  },
  {
    path: 'public/images/icons/client-food.png',
    prompt: `Create a flat vector icon: Coffee & food businesses - a coffee cup with steam. Colors: deep forest green (#0B3D2E) and teal (#2BBBAD) on transparent background. Style: minimal line art with selective fills, modern, friendly, professional. 64x64 pixels, square format.`
  },
  {
    path: 'public/images/icons/client-professional.png',
    prompt: `Create a flat vector icon: Professional practices - a clipboard or medical/legal symbol. Colors: deep forest green (#0B3D2E) and teal (#2BBBAD) on transparent background. Style: minimal line art with selective fills, modern, friendly, professional. 64x64 pixels, square format.`
  },
  {
    path: 'public/images/icons/client-manufacturing.png',
    prompt: `Create a flat vector icon: Manufacturers & distributors - a factory building with boxes. Colors: deep forest green (#0B3D2E) and teal (#2BBBAD) on transparent background. Style: minimal line art with selective fills, modern, friendly, professional. 64x64 pixels, square format.`
  },
  {
    path: 'public/images/icons/client-nonprofit.png',
    prompt: `Create a flat vector icon: Nonprofits & organizations - hands holding a heart or community symbol. Colors: deep forest green (#0B3D2E) and teal (#2BBBAD) on transparent background. Style: minimal line art with selective fills, modern, friendly, professional. 64x64 pixels, square format.`
  },

  // Phase Icons
  {
    path: 'public/images/icons/phase-1-foundation.png',
    prompt: `Create a flat vector icon: Phase 1 - Digital Foundation - a building block or foundation with a screen/browser window. Colors: deep forest green (#0B3D2E), slate blue (#1F3A5F), teal (#2BBBAD) on transparent background. Style: flat, minimal, modern, professional consulting aesthetic. 64x64 pixels, square format.`
  },
  {
    path: 'public/images/icons/phase-2-automation.png',
    prompt: `Create a flat vector icon: Phase 2 - Automation & Growth - upward arrows with gear/automation symbol. Colors: deep forest green (#0B3D2E), slate blue (#1F3A5F), teal (#2BBBAD) on transparent background. Style: flat, minimal, modern, professional consulting aesthetic. 64x64 pixels, square format.`
  },
  {
    path: 'public/images/icons/phase-3-operations.png',
    prompt: `Create a flat vector icon: Phase 3 - Operations - interconnected process nodes or workflow diagram. Colors: deep forest green (#0B3D2E), slate blue (#1F3A5F), teal (#2BBBAD) on transparent background. Style: flat, minimal, modern, professional consulting aesthetic. 64x64 pixels, square format.`
  },
  {
    path: 'public/images/icons/phase-4-sovereign.png',
    prompt: `Create a flat vector icon: Phase 4 - Sovereign AI/Data Vault - a secure server or vault with lock symbol. Colors: deep forest green (#0B3D2E), slate blue (#1F3A5F), teal (#2BBBAD) on transparent background. Style: flat, minimal, modern, professional consulting aesthetic. 64x64 pixels, square format.`
  },

  // Section Graphics
  {
    path: 'public/images/sections/about-team.jpg',
    prompt: `Generate a photorealistic image for a marketing about section. Scene: A modern, sunlit office in a historic Portland building (exposed brick, rain visible on windows). Subject: Two professionals in smart casual attire (not suits, more Pacific Northwest style - think flannel and laptop) collaborating at a wooden desk with technology visible but not overwhelming. Action: Reviewing something on a laptop screen together, appearing thoughtful and engaged. Lighting: Soft, natural window light with a "golden hour" feel. Mood: Collaborative, empowering, forward-looking, professional but approachable.`
  },
  {
    path: 'public/images/sections/cta-consultation.png',
    prompt: `Create an illustration for a call-to-action section promoting a free AI consultation. Visual: A simple calendar or clock icon combined with a friendly handshake or conversation bubble, suggesting "book time with us." Include subtle elements suggesting checklist/roadmap (checkmarks, simple document icon). Style: flat, modern, warm. Colors: primarily teal (#2BBBAD) with forest green (#0B3D2E) accents on transparent background. Should feel inviting and low-pressure.`
  },
  {
    path: 'public/images/sections/private-ai.png',
    prompt: `Create an illustration representing secure, on-premises AI computing. Visual: A simplified server or computer box with a shield icon, sitting inside a building outline (representing "stays in your office"). Small lock symbol. Subtle network nodes contained within the building boundary, not extending outside. Style: flat, clean, modern. Colors: deep forest green (#0B3D2E), slate blue (#1F3A5F), with a secure/trust feel on transparent background. Convey: "Your data stays here, safe and private."`
  },

  // Pattern
  {
    path: 'public/images/patterns/background-pattern.png',
    prompt: `Create a decorative graphic element for AI Ready PDX marketing materials: an abstract pattern inspired by Pacific Northwest topography (mountain ridges, tree lines, river curves) rendered in a modern, geometric style. Use deep forest green (#0B3D2E), soft sage green, and teal (#2BBBAD) on warm white (#F4F1EA). Should work as a background texture or section divider. Seamless/tileable pattern.`
  },

  // Social Media
  {
    path: 'public/images/social/social-profile.png',
    prompt: `Create a square social media profile image for "AI Ready PDX." Design: A logo icon of an evergreen tree made of connected nodes centered on a deep forest green (#0B3D2E) background. Style: minimal, clean, instantly recognizable at small sizes. No text. Square format, 400x400 pixels.`
  },
  {
    path: 'public/images/social/social-cover.png',
    aspectRatio: '16:9',
    prompt: `Create a LinkedIn/Facebook cover banner for "AI Ready PDX." Scene: Abstract Pacific Northwest landscape with subtle AI/tech overlay - flowing lines connecting points over silhouetted trees and mountains. Leave clear space on the left third for logo/text overlay. Colors: Deep forest green (#0B3D2E) to slate blue (#1F3A5F) gradient, teal (#2BBBAD) accent nodes. Style: Professional, established, modern but not flashy. Wide banner format.`
  },
  {
    path: 'public/images/social/og-image.jpg',
    aspectRatio: '16:9',
    prompt: `Create an Open Graph image for link previews when sharing "AI Ready PDX" website. Include the company name "AI Ready PDX" prominently in the center-left. Tagline below: "Experienced tech leaders for your AI journey." Background: Abstract Pacific Northwest scene with subtle tech/AI elements. Colors: Deep forest green (#0B3D2E), slate blue (#1F3A5F), teal accents (#2BBBAD). Style: Professional, clean, readable at small sizes. The text must be legible. 1200x630 aspect ratio.`
  },
];

async function generateImage(imageConfig, index, total) {
  const { path: outputPath, prompt, aspectRatio } = imageConfig;
  const fullPath = path.join(__dirname, outputPath);
  const dir = path.dirname(fullPath);

  // Ensure directory exists
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  console.log(`\n[${index + 1}/${total}] Generating: ${outputPath}`);

  const requestBody = {
    contents: [{
      parts: [{ text: prompt }]
    }],
    generationConfig: {
      responseModalities: ['TEXT', 'IMAGE']
    }
  };

  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error ${response.status}: ${errorText}`);
    }

    const data = await response.json();

    // Find the image part in the response
    const parts = data.candidates?.[0]?.content?.parts || [];
    const imagePart = parts.find(p => p.inlineData?.mimeType?.startsWith('image/'));

    if (!imagePart) {
      console.log(`  ⚠ No image in response. Text response: ${parts.find(p => p.text)?.text?.slice(0, 100) || 'none'}`);
      return false;
    }

    // Save the image
    const imageData = imagePart.inlineData.data;
    const buffer = Buffer.from(imageData, 'base64');
    fs.writeFileSync(fullPath, buffer);
    console.log(`  ✓ Saved: ${outputPath}`);
    return true;

  } catch (error) {
    console.error(`  ✗ Error: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('='.repeat(60));
  console.log('AI Ready PDX - Image Generation Script');
  console.log('Using Google Nano Banana Pro (Gemini 3 Pro Image)');
  console.log('='.repeat(60));
  console.log(`\nGenerating ${images.length} images...\n`);

  let success = 0;
  let failed = 0;

  for (let i = 0; i < images.length; i++) {
    const result = await generateImage(images[i], i, images.length);
    if (result) {
      success++;
    } else {
      failed++;
    }

    // Rate limiting - wait between requests
    if (i < images.length - 1) {
      console.log('  Waiting 2s for rate limit...');
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`Complete! Success: ${success}, Failed: ${failed}`);
  console.log('='.repeat(60));
}

main();

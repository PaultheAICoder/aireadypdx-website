import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PDFDocument, PDFName, PDFArray, PDFDict, PDFNumber } from 'pdf-lib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read logo as base64
const logoBase64 = fs.readFileSync(path.join(__dirname, 'public/images/logos/logo-full.png')).toString('base64');

const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', sans-serif;
      font-size: 11px;
      line-height: 1.4;
      color: #1E2022;
      padding: 35px 40px;
      background: #fff;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 3px solid #0B3D2E;
    }

    .logo-section img {
      height: 70px;
    }

    .contact-info {
      text-align: right;
      font-size: 10px;
      color: #4A5568;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .contact-info a {
      color: #0B3D2E;
      text-decoration: none;
      text-align: left;
      display: block;
    }

    .hero {
      text-align: center;
      margin-bottom: 25px;
    }

    .hero h1 {
      font-size: 28px;
      color: #0B3D2E;
      margin-bottom: 12px;
      line-height: 1.2;
    }

    .hero h1 span {
      color: #2BBBAD;
    }

    .hero p {
      font-size: 11px;
      color: #4A5568;
      max-width: 680px;
      margin: 0 auto;
    }

    .hero p strong {
      color: #0B3D2E;
    }

    .approach-section {
      display: flex;
      gap: 20px;
      margin-bottom: 25px;
    }

    .approach-column {
      flex: 1;
      background: #F4F1EA;
      border-radius: 8px;
      padding: 18px;
      border-top: 4px solid #0B3D2E;
    }

    .approach-column h3 {
      font-size: 16px;
      color: #0B3D2E;
      margin-bottom: 12px;
      font-weight: 700;
    }

    .approach-column ul {
      list-style: none;
    }

    .approach-column li {
      padding: 5px 0;
      padding-left: 20px;
      position: relative;
      font-size: 10px;
      color: #1E2022;
    }

    .approach-column li::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #2BBBAD;
      font-weight: 700;
    }

    .pillars {
      display: flex;
      justify-content: center;
      gap: 50px;
      margin-bottom: 25px;
    }

    .pillar {
      text-align: center;
    }

    .pillar-icon {
      width: 50px;
      height: 50px;
      background: #E8F0E8;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 8px;
      font-size: 16px;
      font-weight: 700;
      color: #0B3D2E;
    }

    .pillar-icon svg {
      width: 24px;
      height: 24px;
      stroke: #0B3D2E;
      stroke-width: 2;
      fill: none;
    }

    .pillar h3 {
      font-size: 11px;
      color: #0B3D2E;
      margin-bottom: 4px;
      font-weight: 600;
    }

    .pillar p {
      font-size: 9px;
      color: #4A5568;
    }

    .cta-section {
      background: #0B3D2E;
      color: #fff;
      padding: 20px 25px;
      border-radius: 10px;
      text-align: center;
      margin-bottom: 15px;
    }

    .cta-section h2 {
      font-size: 20px;
      margin-bottom: 8px;
    }

    .cta-section h2 .price {
      color: #2BBBAD;
    }

    .cta-section h2 .old-price {
      text-decoration: line-through;
      opacity: 0.7;
      font-size: 14px;
    }

    .cta-section p {
      font-size: 10px;
      opacity: 0.9;
      margin-bottom: 12px;
    }

    .cta-section .email {
      display: inline-block;
      background: #2BBBAD;
      color: #fff;
      padding: 8px 20px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 12px;
      text-decoration: none;
    }

    .footer {
      text-align: center;
      font-size: 9px;
      color: #4A5568;
      padding-top: 10px;
      border-top: 1px solid #E8F0E8;
    }

    .footer strong {
      color: #0B3D2E;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo-section">
      <img src="data:image/png;base64,${logoBase64}" alt="AI Ready PDX">
    </div>
    <div class="contact-info">
      <a href="mailto:hello@aireadypdx.com">hello@aireadypdx.com</a>
      <a href="https://aireadypdx.com">aireadypdx.com</a>
      <span>Portland, OR</span>
    </div>
  </div>

  <div class="hero">
    <h1><span>2026 is the Year of AI.</span><br>Let's get you ready.</h1>
    <p>AI has moved from bleeding edge to business essential. <strong>AI Ready PDX</strong>, powered by Vital Enterprises' 30+ years of technology leadership, helps Portland-area businesses adopt AI confidently, practically, and securely.</p>
  </div>

  <div class="approach-section">
    <div class="approach-column">
      <h3>Assess</h3>
      <ul>
        <li>AI Readiness Assessment</li>
        <li>Website AI Audit (SEO, AEO, GEO)</li>
        <li>Opportunity identification</li>
        <li>Technology stack review</li>
        <li>Privacy & security evaluation</li>
      </ul>
    </div>
    <div class="approach-column">
      <h3>Train</h3>
      <ul>
        <li>Executive AI briefings</li>
        <li>Team training sessions</li>
        <li>Agentic coding tools</li>
        <li>Ongoing strategy support</li>
        <li>Quarterly State of AI updates</li>
      </ul>
    </div>
    <div class="approach-column">
      <h3>Implement</h3>
      <ul>
        <li>Chatbots & voice agents</li>
        <li>Content automation tools</li>
        <li>Cold outreach systems</li>
        <li>Custom AI applications</li>
        <li>Secure on-premise AI</li>
      </ul>
    </div>
  </div>

  <div class="pillars">
    <div class="pillar">
      <div class="pillar-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/></svg>
      </div>
      <h3>30+ Years Tech Leadership</h3>
      <p>VTM & Novus Labs experience across<br>global tech consortiums</p>
    </div>
    <div class="pillar">
      <div class="pillar-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
      </div>
      <h3>Local Portland Presence</h3>
      <p>We're your neighbors, invested in<br>the community you serve</p>
    </div>
    <div class="pillar">
      <div class="pillar-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      </div>
      <h3>Privacy-First Options</h3>
      <p>On-premise & air-gapped solutions<br>for sensitive data</p>
    </div>
  </div>

  <div class="cta-section">
    <h2>AI Readiness Session — <span class="old-price">$500</span> <span class="price">$50</span> (First 100 Clients)</h2>
    <p>60-90 minute consultation. Custom recommendations. AI Opportunities Snapshot document.</p>
    <a href="mailto:hello@aireadypdx.com" class="email">→ hello@aireadypdx.com</a>
  </div>

  <div class="footer">
    <strong>AI Ready PDX</strong> | Powered by Vital Enterprises | Portland, OR | aireadypdx.com
  </div>
</body>
</html>
`;

async function generatePDF() {
  const tempPath = path.join(__dirname, 'ai-onepager-approach-temp.pdf');
  const finalPath = path.join(__dirname, 'ai-onepager-approach-v1.6.pdf');

  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  console.log('Setting content...');
  await page.setContent(html, { waitUntil: 'networkidle0' });

  console.log('Generating PDF...');
  await page.pdf({
    path: tempPath,
    format: 'Letter',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });

  await browser.close();
  console.log('Initial PDF generated, attempting to fix mailto links with pdf-lib...');

  // Load the PDF with pdf-lib
  const pdfBytes = fs.readFileSync(tempPath);
  const pdfDoc = await PDFDocument.load(pdfBytes);

  // Get the first page
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const { width, height } = firstPage.getSize();

  console.log(`Page size: ${width} x ${height}`);

  // Get existing annotations to find and fix mailto links
  const annots = firstPage.node.get(PDFName.of('Annots'));

  if (annots) {
    const annotsArray = pdfDoc.context.lookup(annots);
    if (annotsArray instanceof PDFArray) {
      console.log(`Found ${annotsArray.size()} annotations`);

      for (let i = 0; i < annotsArray.size(); i++) {
        const annotRef = annotsArray.get(i);
        const annot = pdfDoc.context.lookup(annotRef);

        if (annot instanceof PDFDict) {
          const subtype = annot.get(PDFName.of('Subtype'));
          const a = annot.get(PDFName.of('A'));

          if (subtype && subtype.toString() === '/Link' && a) {
            const action = pdfDoc.context.lookup(a);
            if (action instanceof PDFDict) {
              const uri = action.get(PDFName.of('URI'));
              if (uri && uri.toString().includes('mailto:')) {
                console.log(`Found mailto link: ${uri.toString()}`);

                // Get current rect
                const rect = annot.get(PDFName.of('Rect'));
                if (rect) {
                  const rectArray = pdfDoc.context.lookup(rect);
                  if (rectArray instanceof PDFArray) {
                    const x1 = rectArray.get(0);
                    const y1 = rectArray.get(1);
                    const x2 = rectArray.get(2);
                    const y2 = rectArray.get(3);
                    console.log(`  Current rect: [${x1}, ${y1}, ${x2}, ${y2}]`);

                    // Expand the rect significantly - 100 points left, 20 points in other directions
                    if (x1 instanceof PDFNumber && x2 instanceof PDFNumber && y1 instanceof PDFNumber && y2 instanceof PDFNumber) {
                      const newX1 = x1.asNumber() - 100;  // Much bigger expansion left
                      const newY1 = y1.asNumber() - 10;   // Expand down
                      const newX2 = x2.asNumber() + 20;   // Expand right
                      const newY2 = y2.asNumber() + 10;   // Expand up
                      const newRect = pdfDoc.context.obj([newX1, newY1, newX2, newY2]);
                      annot.set(PDFName.of('Rect'), newRect);
                      console.log(`  New rect: [${newX1}, ${newY1}, ${newX2}, ${newY2}]`);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  const modifiedPdfBytes = await pdfDoc.save();
  fs.writeFileSync(finalPath, modifiedPdfBytes);

  // Clean up temp file
  fs.unlinkSync(tempPath);

  console.log('✓ PDF saved: ai-onepager-approach-v1.6.pdf');
}

generatePDF().catch(console.error);

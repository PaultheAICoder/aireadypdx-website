import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read logo as base64
const logoBase64 = fs.readFileSync(path.join(__dirname, 'public/images/logos/logo-full.png')).toString('base64');

// SVG icons matching the website
const iconHome = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>`;
const iconCoffee = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`;
const iconClipboard = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`;
const iconGraduationCap = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>`;
const iconFactory = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>`;

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
      font-size: 10px;
      line-height: 1.3;
      color: #1E2022;
      padding: 30px 35px;
      background: #fff;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 15px;
      padding-bottom: 12px;
      border-bottom: 3px solid #0B3D2E;
    }

    .logo-section img {
      height: 65px;
    }

    .contact-info {
      text-align: right;
      font-size: 9px;
      color: #4A5568;
    }

    .contact-info a {
      color: #0B3D2E;
      text-decoration: none;
    }

    .hero {
      text-align: center;
      margin-bottom: 18px;
    }

    .hero h1 {
      font-size: 24px;
      color: #0B3D2E;
      margin-bottom: 8px;
      line-height: 1.15;
    }

    .hero h1 span {
      color: #2BBBAD;
    }

    .hero p {
      font-size: 10px;
      color: #4A5568;
      max-width: 620px;
      margin: 0 auto;
    }

    .pillars {
      display: flex;
      justify-content: center;
      gap: 35px;
      margin-bottom: 18px;
    }

    .pillar {
      text-align: center;
    }

    .pillar-icon {
      width: 42px;
      height: 42px;
      background: #E8F0E8;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 6px;
      font-size: 14px;
      font-weight: 700;
      color: #0B3D2E;
    }

    .pillar h3 {
      font-size: 10px;
      color: #0B3D2E;
      margin-bottom: 2px;
    }

    .pillar p {
      font-size: 8px;
      color: #4A5568;
    }

    .pillar-icon svg {
      width: 20px;
      height: 20px;
      stroke: #0B3D2E;
      stroke-width: 2;
      fill: none;
    }

    .services-table {
      margin-bottom: 15px;
    }

    .services-table table {
      width: 100%;
      border-collapse: collapse;
      font-size: 8px;
    }

    .services-table th {
      background: #0B3D2E;
      color: #fff;
      padding: 6px 4px 8px;
      text-align: center;
      vertical-align: top;
      font-weight: 600;
      border-left: 1px solid rgba(255,255,255,0.15);
    }

    .services-table th:first-child {
      border-left: none;
    }

    .services-table th .industry-icon {
      width: 26px;
      height: 26px;
      margin-bottom: 3px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .services-table th .industry-icon svg {
      width: 26px;
      height: 26px;
      stroke: #2BBBAD;
    }

    .services-table th .industry-name {
      font-size: 7.5px;
      display: block;
      line-height: 1.2;
    }

    .services-table th .industry-sub {
      font-size: 6.5px;
      opacity: 0.8;
      font-weight: 400;
      line-height: 1.2;
    }

    .services-table th.service-col {
      width: 110px;
      text-align: left;
      vertical-align: middle;
    }

    .services-table td {
      padding: 4px;
      text-align: center;
      border-bottom: 1px solid #E8F0E8;
    }

    .services-table td.service-name {
      text-align: left;
      font-weight: 500;
      padding-left: 6px;
      font-size: 8px;
    }

    .services-table tr.category td {
      background: #E8F0E8;
      font-weight: 700;
      color: #0B3D2E;
      text-align: left;
      padding: 4px 6px;
      font-size: 9px;
    }

    .services-table tr.category-dark td {
      background: #1F3A5F;
      color: #fff;
    }

    .check {
      color: #2BBBAD;
      font-weight: 700;
      font-size: 10px;
    }

    .cta-section {
      background: #0B3D2E;
      color: #fff;
      padding: 14px 20px;
      border-radius: 8px;
      text-align: center;
      margin-bottom: 12px;
    }

    .cta-section h2 {
      font-size: 16px;
      margin-bottom: 6px;
    }

    .cta-section h2 .price {
      color: #2BBBAD;
    }

    .cta-section h2 .old-price {
      text-decoration: line-through;
      opacity: 0.7;
      font-size: 12px;
    }

    .cta-section p {
      font-size: 9px;
      opacity: 0.9;
      margin-bottom: 8px;
    }

    .cta-section .email {
      display: inline-block;
      background: #2BBBAD;
      color: #fff;
      padding: 6px 16px;
      border-radius: 5px;
      font-weight: 600;
      font-size: 10px;
    }

    .footer {
      text-align: center;
      font-size: 8px;
      color: #4A5568;
      padding-top: 8px;
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
      <a href="mailto:hello@aireadypdx.com">hello@aireadypdx.com</a><br>
      <a href="https://aireadypdx.com">aireadypdx.com</a><br>
      Portland, OR
    </div>
  </div>

  <div class="hero">
    <h1><span>2026 is the Year of AI.</span><br>Let's get you ready.</h1>
    <p>AI has moved from bleeding edge to business essential. <strong>AI Ready PDX</strong>, powered by Vital Enterprises' 30+ years of technology leadership, helps Portland-area businesses adopt AI confidently, practically, and securely.</p>
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

  <div class="services-table">
    <table>
      <thead>
        <tr>
          <th class="service-col"></th>
          <th>
            <span class="industry-icon">${iconHome}</span>
            <span class="industry-name">Field Services</span>
            <span class="industry-sub">HVAC, Plumbing,<br>Landscaping</span>
          </th>
          <th>
            <span class="industry-icon">${iconCoffee}</span>
            <span class="industry-name">Retail & Hospitality</span>
            <span class="industry-sub">Coffee, Restaurants,<br>Shops</span>
          </th>
          <th>
            <span class="industry-icon">${iconClipboard}</span>
            <span class="industry-name">Professional</span>
            <span class="industry-sub">Dental, Legal,<br>Accounting</span>
          </th>
          <th>
            <span class="industry-icon">${iconGraduationCap}</span>
            <span class="industry-name">Civic & Education</span>
            <span class="industry-sub">Schools, Churches,<br>Public Safety</span>
          </th>
          <th>
            <span class="industry-icon">${iconFactory}</span>
            <span class="industry-name">Manufacturing</span>
            <span class="industry-sub">Machinery, Fabrication,<br>Assembly</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="category"><td colspan="6">Marketing & Sales</td></tr>
        <tr>
          <td class="service-name">Web presence<br>(SEO, AEO, GEO)</td>
          <td class="check">✓</td><td class="check">✓</td><td class="check">✓</td><td class="check">✓</td><td class="check">✓</td>
        </tr>
        <tr>
          <td class="service-name">Content & collateral</td>
          <td class="check">✓</td><td class="check">✓</td><td class="check">✓</td><td class="check">✓</td><td class="check">✓</td>
        </tr>
        <tr>
          <td class="service-name">Outreach<br>(email, voice, social)</td>
          <td class="check">✓</td><td class="check">✓</td><td class="check">✓</td><td class="check">✓</td><td></td>
        </tr>
        <tr class="category"><td colspan="6">Operations</td></tr>
        <tr>
          <td class="service-name">Scheduling & intake</td>
          <td class="check">✓</td><td class="check">✓</td><td class="check">✓</td><td class="check">✓</td><td class="check">✓</td>
        </tr>
        <tr>
          <td class="service-name">Inventory & supply chain</td>
          <td class="check">✓</td><td class="check">✓</td><td></td><td></td><td class="check">✓</td>
        </tr>
        <tr>
          <td class="service-name">Process automation</td>
          <td class="check">✓</td><td class="check">✓</td><td class="check">✓</td><td></td><td class="check">✓</td>
        </tr>
        <tr class="category"><td colspan="6">Management</td></tr>
        <tr>
          <td class="service-name">Dashboards & analytics</td>
          <td class="check">✓</td><td class="check">✓</td><td class="check">✓</td><td class="check">✓</td><td class="check">✓</td>
        </tr>
        <tr>
          <td class="service-name">Reporting & insights</td>
          <td class="check">✓</td><td class="check">✓</td><td class="check">✓</td><td class="check">✓</td><td class="check">✓</td>
        </tr>
        <tr class="category category-dark"><td colspan="6">Confidential AI</td></tr>
        <tr>
          <td class="service-name">On-premise deployment</td>
          <td></td><td></td><td class="check">✓</td><td class="check">✓</td><td class="check">✓</td>
        </tr>
        <tr>
          <td class="service-name">Private cloud inference</td>
          <td></td><td></td><td class="check">✓</td><td class="check">✓</td><td class="check">✓</td>
        </tr>
      </tbody>
    </table>
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
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  console.log('Setting content...');
  await page.setContent(html, { waitUntil: 'networkidle0' });

  console.log('Generating PDF...');
  await page.pdf({
    path: path.join(__dirname, 'ai-onepager-table-v1.2.pdf'),
    format: 'Letter',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });

  await browser.close();
  console.log('✓ PDF saved: ai-onepager-table-v1.2.pdf');
}

generatePDF().catch(console.error);

// ============================================================
// NOVUS MIGRATION STATUS - EDIT THIS FILE TO UPDATE THE PAGE
// ============================================================
//
// HOW TO UPDATE:
// 1. Edit the values below
// 2. Save the file
// 3. Commit to GitHub - Vercel will auto-deploy
//
// STATUS OPTIONS: "operational" | "partial-outage" | "major-outage"
// ============================================================

export const novusStatus = {
  // UPDATE THIS TIMESTAMP EVERY TIME YOU MAKE CHANGES
  // Format: "Month Day, Year at H:MM AM/PM PST"
  lastUpdated: "December 23, 2025 at 10:00 AM PST",

  // Current overall status
  // "operational" = All systems working
  // "partial-outage" = Some systems affected
  // "major-outage" = Significant issues
  currentStatus: "partial-outage",

  // Brief summary (1-2 sentences, shown prominently)
  summary: "Tenant migration completed. Use new credentials to access web apps. Desktop app access is WIP.",

  // Status details - use emojis for quick visual scanning
  // Prefix options: "✅" = working, "⚠️" = partial/in-progress, "❌" = not working
  details: [
    "✅ Email access requires new credentials. If you don't have your new credentials, please fill out contact form below",
    "✅ Web apps are working - go to office.com and login with your new Novuslabs.com credentials to access them",
    "⚠️ SharePoint data has been preserved and you will have access once you are logged in with new credentials. New Sharepoint is https://vtmgroup.sharepoint.com/sites/NovusLabs",
    "⚠️ If you need your Teams chat history, please fill out the form below",
    "⚠️ New Novuslabs.com credentials are required to access wifi",
    "❌ Additional instructions are WIP for Mac users - please fill out form below if you are a Mac user"
  ],

  // Workarounds and tips for users
  workarounds: [
    {
      title: "Email Access",
      description: "Access your email via outlook.office.com using your new credentials"
    },
    {
      title: "Teams",
      description: "Use teams.microsoft.com"
    },
    {
      title: "New Laptops are available",
      description: "If you have not received your new laptop, On-site users can stop by the IT room to pick one up. Otherwise please fill out form below"
    }
  ],


  // Optional: Link to more detailed documentation
  moreInfoLink: null, // Set to URL string if needed, e.g., "https://..."
};

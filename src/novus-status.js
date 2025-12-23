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
    "✅ Email access restored for most users",
    "✅ Microsoft Teams is operational",
    "⚠️ OneDrive file sync in progress - may take 2-4 hours",
    "⚠️ Some shared drives being migrated",
    "❌ Legacy VPN temporarily unavailable"
  ],

  // Workarounds and tips for users
  workarounds: [
    {
      title: "Email Access",
      description: "Access your email via outlook.office.com using your new credentials"
    },
    {
      title: "Teams",
      description: "Use teams.microsoft.com or the Teams desktop app"
    },
    {
      title: "Files",
      description: "For urgent file access, contact IT at the numbers below"
    }
  ],


  // Optional: Link to more detailed documentation
  moreInfoLink: null, // Set to URL string if needed, e.g., "https://..."
};

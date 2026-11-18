export const URL_ = "https://riluwan-p-razak-performance-growth.vercel.app";
const ig = (id) => `https://www.instagram.com/reel/${id}/`;
// Drop an exported MP4 at /public/videos/<id>.mp4 and it autoplays (muted, looped) on the site.
export const reels = [
  ["DSULhQMiSSA","Production"],["DTFith6iXpe","Production"],["DTQAQM9Cf0X","Production"],["DShwmOECUIW","Production"],["DU5ckWfE9KC","Production"],
  ["DMxn_pOpC0T","Cinematography"],["DUiezpEj67y","Cinematography"],["DXy6YlzOWYy","Cinematography"],
  ["DULNS9hCbyj","Ad creative"],["C2pa-C8P_Mu","Editing"],["DHNjBZ1SPAl","Editing"],["DUInrjyERk6","Editing"],
].map(([id, cat], i) => ({ id, cat, n: String(i + 1).padStart(2, "0"), src: `/videos/${id}.mp4`, url: ig(id) }));
export const steps = [
  ["Brief","Who is this for, what should they do next, and what does the business need?","pov"],
  ["Hook","Find the first three seconds: the idea that makes someone stop scrolling.","studio"],
  ["Shot list","Plan the frames, locations, audio and what the edit will need.","podcast"],
  ["Shoot","Direct and film on location or in studio, on phone or camera.","pink"],
  ["Edit","Cut for rhythm and retention in Premiere Pro and CapCut, then grade and sound-design.","desk"],
  ["Ship & read","Publish, watch the numbers, and feed what worked into the next brief.","garden"],
];
export const jobs = [
  ["12/2025 – 01/2026","Magnate Study Abroad & Academy","Marketing Coordinator (contract). 80+ creative video assets, Meta lead-gen creative."],
  ["10/2024 – 11/2025","Bheemverse Innovations","Digital Marketing Head. 6+ AI products, paid social, led a team of five."],
  ["01/2024 – 09/2024","Exodus Study Abroad","Digital Marketing Executive. Two Meta accounts (about ₹20,000 a week), Google Business Profile, CRM audit."],
  ["07/2023 – 12/2023","Bluepin Digital · DigitalX","Social media intern; freelance content creator. Meta and Google Ads support, SEO."],
];

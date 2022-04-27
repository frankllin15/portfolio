import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("bosy", req.body);
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_PROJECT_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }
  if (req.body.entity_type !== "project") {
    return res.status(400).json({ message: "Invalid entity type" });
  }

  try {
    await res.unstable_revalidate(`/projects/${req.body.entity_slug}`);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}

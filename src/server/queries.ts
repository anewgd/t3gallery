import "server-only";

import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages() {

  const user = await auth();

  if (!user.userId) throw new Error("unauthorized")

  const images = await db.query.images.findMany({
      // order the images by id in descending order
      where: (model, { eq }) => eq(model.userId, user.userId),
      orderBy: (model, {desc}) => desc(model.id),
    });

      return images;
}

import Link from "next/link";
import { db } from "~/server/db";

//Forces the page to be reloaded if a database change is detected
export const dynamic = "force-dynamic";


export default async function HomePage() {

  const images = await db.query.images.findMany({
    // order the images by id in descending order
    orderBy: (model, {desc}) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
         {images.map((image) => (
          <div key={image.id} className="flex flex-col w-48">
            <img src={image.url} alt="Image" />
            <div>{image.name}</div>
          </div>
         ))}
         </div>
    </main>
  );
}

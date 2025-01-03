
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";

//Forces the page to be reloaded if a database change is detected
export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap gap-4">
         {images.map((image) => (
          <div key={image.id} className="flex flex-col w-48">
            <img src={image.url} alt="Image" />
            <div>{image.name}</div>
          </div>
         ))}
         </div>
  )
}

export default async function HomePage() {

  

  return (
    <main>
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sign in to view the gallery.</div>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>
      
    </main>
  );
}

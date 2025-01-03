
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";

//Forces the page to be reloaded if a database change is detected
export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap justify-center gap-4">
         {images.map((image) => (
          <div key={image.id} className="flex flex-col w-48">
            <Image src={image.url} alt={image.name} style={{objectFit: "contain"}} width={192} height={192}/>
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

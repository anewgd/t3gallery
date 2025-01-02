"use client";

// Navigation bar creation. This will be displayed on every page.

import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";


export function TopNavBar(){
  const router = useRouter()
  return (
    <nav className="flex items-center justify-between w-full p-4 text-xl border-b font-semibold">
      <div>Gallery</div>

      <div className="flex flex-row gap-4">
        <SignedOut>
          <SignInButton/>     
        </SignedOut>
        <SignedIn>
          <UploadButton endpoint="imageUploader" onClientUploadComplete={() => {
            router.refresh(); 
          }}/>
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </nav>
  )
}
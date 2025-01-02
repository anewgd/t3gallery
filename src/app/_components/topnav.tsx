// Navigation bar creation. This will be displayed on every page.

import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";

export function TopNavBar(){
  return (
    <nav className="flex items-center justify-between w-full p-4 text-xl border-b font-semibold">
      <div>Gallery</div>

      <div>
        <SignedOut>
          <SignInButton/>     
        </SignedOut>
        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </nav>
  )
}
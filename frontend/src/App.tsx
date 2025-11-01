import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";

export default function App() {
  return (
    <header>
      {/* When the user is not signed in, show the sign in button */}
      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      {/* When the user is signed in, show the sign out button and the user button */}
      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton />
    </header>
  );
}

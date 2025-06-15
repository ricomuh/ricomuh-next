import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export const metadata = {
  title: "Guest Book",
  description: "Sign my guest book and leave a message!",
  keywords: [
    "guest book",
    "sign guest book",
    "leave a message",
    "ricomuh",
    "Rico Muhammad Nashrullah",
    "Rico Nashrullah",
  ],
};

export default async function GuestBookPage() {
  return (
    <div className="max-w-xl mx-auto px-4 mt-20 mb-30">
      <h1 className="text-2xl font-bold mb-4">Guest Book</h1>
      <p className="text-gray-400 mb-6 text-sm">
        Leave a message in my guest book! Your message will be visible to
        everyone. Come on, don&apos;t be shy! 😄
      </p>
      <Button
        type="submit"
        variant="outline"
        className="cursor-pointer flex items-center"
      >
        <Github className="h-4 w-4" />
        Sign in with GitHub
      </Button>
      <div className="mt-8">
        {/* <h2 className="text-xl font-semibold mb-4">Recent Signs</h2> */}
        <ul className="space-y-4 w-full">
          {Array.from({ length: 20 }).map((_, index) => (
            <li
              key={index}
              className={`flex justify-between items-center w-full h-20 bg-gray-800 rounded-lg p-4 animate-pulse`}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

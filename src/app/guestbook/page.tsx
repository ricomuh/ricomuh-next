import { auth, signIn } from "@/auth";
import { getGuestSigns } from "@/lib/be/guests";
import GuestBookForm from "./form";
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
  const session = await auth();
  const signs = await getGuestSigns(20);

  console.log("Session:", session);

  const Form = () => {
    if (!session) {
      return (
        <form
          action={async () => {
            "use server";
            await signIn("github");
          }}
        >
          {/* <button type="submit" className="">Sign in with GitHub</button> */}
          <Button
            type="submit"
            variant="outline"
            className="cursor-pointer flex items-center"
          >
            <Github className="h-4 w-4" />
            Sign in with GitHub
          </Button>
        </form>
      );
    }

    return <GuestBookForm />;
  };

  return (
    <div className="max-w-xl mx-auto px-4 mt-20 mb-30">
      <h1 className="text-2xl font-bold mb-4">Guest Book</h1>
      <p className="text-gray-400 mb-6 text-sm">
        Leave a message in my guest book! Your message will be visible to
        everyone. Come on, don&apos;t be shy! 😄
      </p>
      <Form />
      <div className="mt-8">
        {/* <h2 className="text-xl font-semibold mb-4">Recent Signs</h2> */}
        <ul className="space-y-4 w-full">
          {signs.map((sign, index) => (
            <li
              key={sign.uuid}
              className={`flex justify-between items-center ${
                index % 2 === 0 ? "rotate-1" : "rotate-0"
              } `}
            >
              <div className="flex space-x-2 w-full">
                <p className="font-bold text-sm flex-shrink-0">{sign.name}</p>
                <p className="text-sm text-gray-200 truncate">{sign.message}</p>
              </div>
              {/* <p className="text-sm text-gray-500">
                {new Date(sign.createdAt).toLocaleString()}
              </p> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

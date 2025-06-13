import { auth, signIn } from "@/auth";
import { getGuestSigns } from "@/lib/be/guests";
import GuestBookForm from "./form";
import { Button } from "@/components/ui/button";

export default async function GuestBookPage() {
  const session = await auth();
  const signs = await getGuestSigns(10);

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
          <Button type="submit" variant="outline" className="cursor-pointer">
            Sign in with GitHub
          </Button>
        </form>
      );
    }

    return <GuestBookForm />;
  };

  return (
    <div className="max-w-xl mx-auto px-4 mt-20">
      <h1 className="text-2xl font-bold mb-4">Guest Book</h1>
      <Form />
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Signs</h2>
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

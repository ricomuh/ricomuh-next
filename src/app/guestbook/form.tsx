"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { createSign } from "@/lib/be/guests";
import { LucideMessageSquareWarning } from "lucide-react";
import { useActionState } from "react";

export default function GuestBookForm() {
  const [state, formAction] = useActionState(createSign, null);
  return (
    <>
      <form className="flex flex-col gap-4" action={formAction}>
        <div>
          <Textarea
            id="message"
            name="message"
            // required
            rows={4}
            placeholder="Write your message here..."
          />
        </div>
        <Button type="submit" variant="default" className="cursor-pointer">
          Sign Guestbook
        </Button>
      </form>
      {/* {state?.errors && (
        <div className="text-red-500 mt-2">{JSON.stringify(state.errors)}</div>
      )} */}
      {state?.errors && (
        <div className="text-red-500 mt-2">
          {Object.entries(state.errors).map(([key, errors]) => (
            <div key={key} className="flex items-center gap-2">
              <LucideMessageSquareWarning />
              {errors.join(", ")}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { createSign } from "@/lib/be/guests";

export default function GuestBookForm() {
  return (
    <form className="flex flex-col gap-4" action={createSign}>
      <div>
        <Textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Write your message here..."
        />
      </div>
      <Button type="submit" variant="default" className="cursor-pointer">
        Sign Guestbook
      </Button>
    </form>
  );
}

"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams, useRouter } from "next/navigation";
const filters = [
  { value: "*", label: "All" },
  { value: "web", label: "Web" },
  // { value: "mobile", label: "Mobile" },
  // { value: "desktop", label: "Desktop" },
  { value: "game", label: "Game" },
];

export function RawProjectsFilter() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Filter by type" />
      </SelectTrigger>
      <SelectContent>
        {filters.map((filter) => (
          <SelectItem key={filter.value} value={filter.value}>
            {filter.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default function ProjectsFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentType = searchParams.get("type") || "*";

  const goTo = (value: string) => {
    // redirect("/projects" + (value !== "*" ? `?type=${value}` : ""));
    router.push("/projects" + (value !== "*" ? `?type=${value}` : ""));
  };

  return (
    <Select>
      <SelectTrigger defaultValue={currentType}>
        <SelectValue placeholder="Filter by type" />
      </SelectTrigger>
      <SelectContent>
        {filters.map((filter) => (
          <SelectItem
            key={filter.value}
            value={filter.value}
            onClick={() => goTo(filter.value)}
          >
            {filter.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

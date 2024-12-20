"use client";

import ThemeToggle from "@/components/themeToggle";

export default function Home() {

  return (
    <div>
      <div className="border-b flex justify-between">
        <div>
          File
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
}
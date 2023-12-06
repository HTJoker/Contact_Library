"use client";

import { api } from "@/trpc/server";

type buttonProps = {
  contactId: string;
};

const ContactButton = ({ contactId }: buttonProps) => {
  return (
    <div>
      <button
        className="flex h-5 w-5 items-center justify-center rounded-md bg-[#2e026d] p-4 hover:bg-purple-700"
        onClick={() => console.log("clicked")}
      >
        X
      </button>
    </div>
  );
};

export default ContactButton;

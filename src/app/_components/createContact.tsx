"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "@/trpc/react";

export function CreateContact() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const createContact = api.contact.create.useMutation({
    onSuccess: () => {
      alert("Contact created!");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createContact.mutate({ name, address, phone });
      }}
      className="flex flex-col gap-2"
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <textarea
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full rounded-2xl px-4 py-2 text-black"
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createContact.isLoading}
      >
        {createContact.isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

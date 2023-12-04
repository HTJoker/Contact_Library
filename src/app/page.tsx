import Link from "next/link";

import { CreateContact } from "@/app/_components/createContact";
import { api } from "@/trpc/server";

export default async function Home() {
  const { contacts } = await api.contact.getAll.query();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <CreateContact />
      <div className="mt-10 flex flex-col gap-4">
        {contacts.map((contact) => (
          <div key={contact.id} className="flex flex-col gap-2">
            <div>{contact.address}</div>
            <div>{contact.phone}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

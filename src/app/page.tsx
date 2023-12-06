import Link from "next/link";

import { CreateContact } from "@/app/_components/createContact";
import { api } from "@/trpc/server";
import { type NextPage } from "next";
import ContactCard from "./_components/ContactCard";

const Home: NextPage = async () => {
  const { contacts } = await api.contact.getAll.query();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <CreateContact />
      <div className="mt-10 flex flex-col gap-4">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </main>
  );
};

export default Home;

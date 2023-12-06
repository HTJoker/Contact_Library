import ContactButton from "./ContactButton";

type conactProps = {
  contact: {
    id: string;
    name: string;
    address: string;
    phone: string;
  };
};

const ContactCard = ({ contact }: conactProps) => {
  return (
    <div className="flex gap-4 justify-between items-center rounded-2xl p-4 shadow-2xl">
      <div>
        <h1>{contact.name}</h1>
        <p>{contact.address}</p>
        <p>{contact.phone}</p>
      </div>
      <div>
        <ContactButton contactId={contact.id}/>
      </div>
    </div>
  );
};

export default ContactCard;

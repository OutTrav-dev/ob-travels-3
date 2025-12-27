import MapContentCard from "./MapContentCard";

// Branch data for address and maps
const branches = [
  {
    name: "Head Office",
    address: `
        <div>
            <div>2nd floor, <br />Sri Sai complex,</div>
            <div>Vepamoodu junction,</div>
            <div>Nagercoil, Tamil Nadu 629001</div>
            <br />
            <div><strong>Contact:</strong> <a href="tel:+919876543210">+91 98765 43210</a></div>
            <div><strong>Hours:</strong> "Mon - Sat, 9am - 7pm"</div>
        </div>
    `,
    phone: "+91 98765 43210",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4514.84541120195!2d77.42883577557828!3d8.18217499184918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f915abca339b%3A0xcaa2abb0e383aa5e!2sOutbound%20Travelers!5e1!3m2!1sen!2sin!4v1763917621944!5m2!1sen!2sin",
  },
  {
    name: "Azhagiamandapam Branch 1",
    address: `
        <div>
            <div>2nd floor, <br />Sri Sai complex,</div>
            <div>Vepamoodu junction,</div>
            <div>Nagercoil, Tamil Nadu 629001</div>
            <br />
            <div><strong>Contact:</strong> <a href="tel:+919876543210">+91 98765 43210</a></div>
            <div><strong>Hours:</strong> "Mon - Sat, 9am - 7pm"</div>
        </div>
    `,
    phone: "+91 91234 56789",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4514.84541120195!2d77.42883577557828!3d8.18217499184918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f915abca339b%3A0xcaa2abb0e383aa5e!2sOutbound%20Travelers!5e1!3m2!1sen!2sin!4v1763917621944!5m2!1sen!2sin",
  },
  {
    name: "Azhagiamandapam Branch 2",
    address: `
        <div>
            <div>2nd floor, <br />Sri Sai complex,</div>
            <div>Vepamoodu junction,</div>
            <div>Nagercoil, Tamil Nadu 629001</div>
            <br />
            <div><strong>Contact:</strong> <a href="tel:+919876543210">+91 98765 43210</a></div>
            <div><strong>Hours:</strong> "Mon - Sat, 9am - 7pm"</div>
        </div>
    `,
    phone: "+91 91234 56789",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4514.84541120195!2d77.42883577557828!3d8.18217499184918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f915abca339b%3A0xcaa2abb0e383aa5e!2sOutbound%20Travelers!5e1!3m2!1sen!2sin!4v1763917621944!5m2!1sen!2sin",
  },
];

const ContactAddress = () => (
  <section className="max-w-6xl mx-auto w-full">
    <h2 className="text-3xl font-bold text-emerald-700 w-full text-center">
      Address
    </h2>
    <div className="h-1 w-16 bg-emerald-400 rounded-full mx-auto my-2" />
    <div className="flex flex-col lg:flex-row lg:gap-4 w-full">
      {branches.map((branch) => (
        <MapContentCard
          key={branch.name}
          content={branch.address.toString()}
          mapSrc={branch.mapSrc}
          mapTitle={branch.name}
          sectionTitle={branch.name}
        />
      ))}
    </div>
  </section>
);

export default ContactAddress;

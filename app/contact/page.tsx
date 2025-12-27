import Header from "@/src/components/header/Header";
import ContactAddress from "@/src/features/contact/ContactAddress";
import ContactForm from "@/src/features/contact/ContactForm";
import ContactSocials from "@/src/features/contact/ContactSocials";


export default function Contact() {
  return (
    <main className="w-full bg-linear-to-br from-[#e0f7fa] via-[#f8fafc] to-[#e0f2fe] flex flex-col">
      <section
        id="section-1-header"
        aria-label="Header Section"
        className="mb-4 bg-[#0c4423]"
      >
        <Header title={"Contact Us"} backgroundImage={""} />
      </section>
      <section className="flex flex-col lg:flex-col max-w-6xl mx-auto w-full p-6">
        <div className="flex-1 flex flex-col lg:flex-row gap-8">
          <ContactForm />
          <ContactSocials />
        </div>
      </section>
      <div className="my-6">
        <ContactAddress />
      </div>
    </main>
  );
}

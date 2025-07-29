import type { Metadata } from "next";
import ContactForm from "app/components/contactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Formulario de contacto",
};

export default function Contact() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-medium text-center">
        Contáctame
      </h1>

      <ContactForm />
    </section>
  );
}

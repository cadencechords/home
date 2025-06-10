import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Section from '../components/Section';

export default function Support() {
  return (
    <div>
      <Navbar />
      <Section className="max-w-screen-xl gap-4 px-4 mx-auto lg:px-8 lg:flex">
        <div className="mb-10 text-3xl font-semibold lg:text-4xl md:flex-1">
          Have any <span className="text-blue-600">questions?</span>
        </div>
        <ContactForm />
      </Section>

      <Section className="max-w-screen-xl px-8 mx-auto">
        <Footer />
      </Section>
    </div>
  );
}

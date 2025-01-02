import ContactForm from "/src/app/Components/ContactForm";
const ContactUs = () => {
    return (
      <div>
        <h2>Contact us</h2>
        <ContactForm/>
      </div>
    );
  }

  export default ContactUs;

export const metadata = {
  title: "Contact Us",
  description: "Contact us at Cantor College.", // search engines display in search results below title
};
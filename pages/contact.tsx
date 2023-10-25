import type { NextPage } from "next";
import NavBar from "../components/nav-bar";
import HeadingContainer from "../components/heading";
import EnquiryForm from "../components/enquiry-form";
import SocialMediaContainer from "../components/social-media-container";
import Footer from "../components/footer";

const Contact: NextPage = () => {
  return (
    <div className="[text-decoration:none] bg-gray-100 w-full flex flex-col items-start justify-start font-poppins">
      <NavBar
        projectsColor="#fff"
        contactColor="#7127ba"
      />
      <HeadingContainer
        sectionTitle="Contact"
        developmentWorkDescription="I'm currently looking to join a cross-functional team that values improving people's lives through accessible design. Have a project in mind? Let's connect. Get in touch with me anytime, through social media, e-mail, or filling out the form below."
      />
      <EnquiryForm />
      <SocialMediaContainer />
      <Footer />
    </div>
  );
};

export default Contact;

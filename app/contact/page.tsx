import { Metadata } from "next";
import ContactForm from "../sections/contact/ContactForm";
import SocialLinks from "../sections/contact/SocialLinks";

export const metadata: Metadata = {
  title: "Contact | Sandeep Kalla",
  description:
    "Get in touch with Sandeep Kalla for collaboration, job opportunities, or just to say hello.",
};

export default function ContactPage() {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_25%,rgba(68,68,68,.2)_50%,transparent_50%,transparent_75%,rgba(68,68,68,.2)_75%)] bg-[length:8px_8px]"></div>
      </div>
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent-purple/5 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-accent-blue/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px w-12 bg-card-border"></div>
          <h2 className="text-lg font-display font-medium px-4">
            CONNECT WITH ME
          </h2>
          <div className="h-px w-12 bg-card-border"></div>
        </div>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-6">
          Get in <span className="gradient-text">Touch</span>
        </h1>

        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-foreground/70 text-lg">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out
            using the form below or connect with me on social media.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-16">
          <div className="md:col-span-7 reveal-on-scroll">
            <div className="neo-brutalist p-1 bg-background h-full">
              <div className="bg-card-background p-6 h-full">
                <h3 className="text-2xl font-display font-semibold mb-6">
                  Send Me a Message
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>

          <div
            className="md:col-span-5 reveal-on-scroll"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="neo-brutalist p-1 bg-background h-full">
              <div className="bg-card-background p-6 h-full">
                <h3 className="text-2xl font-display font-semibold mb-6">
                  Connect
                </h3>

                <p className="text-foreground/70 mb-8">
                  Prefer to connect through social media or email? Here are
                  different ways you can reach me.
                </p>

                <SocialLinks />

                <div className="mt-8 pt-8 border-t border-card-border">
                  <p className="text-foreground/80 mb-2">
                    <span className="text-accent-purple font-medium">
                      Location:
                    </span>{" "}
                    Delhi, India
                  </p>
                  <p className="text-foreground/80">
                    <span className="text-accent-purple font-medium">
                      Email:
                    </span>{" "}
                    sandeep.cse2026@gmail.com
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent-purple"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

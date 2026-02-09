import { Mail, MapPin, Phone, Send} from "lucide-react"
import { cn } from "../lib/utils"
import { forwardRef, useState, useRef, useEffect} from "react"
import { SiLinkedin, SiInstagram, SiGithub, SiWhatsapp } from 'react-icons/si'
import emailjs from "@emailjs/browser";
import { IoLogoWechat } from "react-icons/io5";

type Profile = {
    name: string;
    jobTitle: string;
    Contacts: {
        email: string;
        phone: string;
        wechat : {
            id: string;
            qr_code: string;
        },
        whatsapp: {
            link: string;
            number: string;
        }
    },
    contact_us_email_subject: string;
    address: string;
    socials: {
        linkedin: string;
        instagram: string;
        github: string;
    };
};

export const ContactSection = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
> ((props, ref) => {

    const [profile, setProfile] = useState<Profile | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("/profile.json")
        .then((res) => {
            if (!res.ok) throw new Error("Failed to load profile");
            return res.json();
        })
        .then(setProfile)
        .catch(() => setError(true));
    }, []);

    const emailServiceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    
    const formRef = useRef<HTMLFormElement>(null!);
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState("");
    
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Get current date and time in YYYY-MM-dd::hh::mm format
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
        const time = formRef.current.querySelector(
            'input[name="time"]'
        ) as HTMLInputElement;
        time.value = formattedDateTime;
        setIsSending(true);
        emailjs.sendForm(
            emailServiceID,
            emailTemplateId,
            formRef.current!,
            emailPublicKey
        ).then(
            () => {
                setStatus("Message sent successfully ✅");
                formRef.current.reset();
            },
            (error: Error) => {
                console.error(error);
                setStatus("Something went wrong ❌");
            }
        ).finally(() => {
            setIsSending(false);
            setTimeout(() => {
                setStatus("");
            }, 5000);
        });
    }
    
    if (error) return <p>Failed to load profile</p>;
    if (!profile) return <p>Loading...</p>;
    
    return (
        <section ref={ref} {...props} id="contacts" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Get in <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                    Looking for reliable construction machinery? Get in touch with our team to discuss your equipment needs. We specialize in sourcing and delivering quality machinery for your projects.
                </p>
                <div className="grid md:items-center grid-cols-1 md:grid-cols-2 gap-12 mb-4 md:mb-8">
                    <div className="space-y-8">
                        <div className="space-y-6 text-left"> 
                            <div className="flex items-start space-x-4 pl-4">
                                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a 
                                        href={`mailto:${profile.Contacts.email}`} 
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        {profile.Contacts.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a 
                                        href={`tel:${profile.Contacts.phone}`} 
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        {profile.Contacts.phone}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <SiWhatsapp className="h-6 w-6 text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-medium">WhatsApp</h4>
                                    <a 
                                        href={`${profile.Contacts.whatsapp.link}`} 
                                        target="_blank"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        {profile.Contacts.whatsapp.number}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <IoLogoWechat className="h-6 w-6 text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-medium">WeChat</h4>
                                    <a 
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        {profile.Contacts.wechat.id}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" size={24} /> 
                                </div>
                                <div>
                                    <h4 className="font-medium">Address</h4>
                                    <a 
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        {profile.address}
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Feel free to contact me</h3>

                        <form  ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <input type="hidden" name="time"/>
                            <input type="hidden" name="contact_us_email_subject" value={profile.contact_us_email_subject ?? "Sent from Portfolio"} />
                            <div>
                                <label 
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2" 
                                >
                                    Your name
                                </label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div>
                                <label 
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2" 
                                >
                                    Your email
                                </label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div>
                                <label 
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2" 
                                >
                                    Your message
                                </label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello I'd like to talk about..."
                                    required
                                />
                            </div>
                            <button 
                                type="submit"
                                disabled={isSending}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center",
                                    ""
                                )}
                            >
                                {isSending ? <span>Sending...</span> : <span className="inline-flex">Send me a message <Send className="md:m-1" size={16} /></span>}
                            </button>
                            {status && <p>{status}</p>}
                        </form>
                    </div>

                </div>
                {Object.values(profile.socials).some(link => link !== "") && ( 
                    <div className="pt-8">
                        <h4 className="font-medium text-2xl mb-4 text-primary">Find me also in</h4>
                        <div className="flex justify-center space-x-4">
                            {profile.socials.github && (
                                <a 
                                    href={profile.socials.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-75 transition-opacity text-foreground"
                                >
                                    <SiGithub size={24} />
                                </a>
                            )}
                            {profile.socials.linkedin && (
                                <a 
                                    href={profile.socials.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-75 transition-opacity text-foreground"
                                >
                                    <SiLinkedin size={24} />
                                </a>
                            )}
                            {profile.socials.instagram && (
                                <a 
                                    href={profile.socials.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-75 transition-opacity text-foreground"
                                >
                                    <SiInstagram size={24} />
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
});
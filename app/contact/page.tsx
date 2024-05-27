import ContactForm from "@/components/ContactForm";


function Contact() {
    return(
        <main className={'flex min-h-screen flex-col items-center justify-between p-24'}>
            <h1 className={'text-5xl font-extrabold text-blue-950 mb-3'}>Contact Me</h1>
            <ContactForm />
        </main>
    )
}

export default Contact;

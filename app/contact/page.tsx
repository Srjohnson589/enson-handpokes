import ContactForm from "@/components/ContactForm";


function Contact() {
    return(
        <main className={'flex min-h-screen flex-col items-center justify-between p-24'}>
            <h1 className={'text-4xl font-extrabold'}>Contact Me</h1>
            <ContactForm />
        </main>
    )
}

export default Contact;
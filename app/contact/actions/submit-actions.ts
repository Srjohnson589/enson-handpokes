//server action
'use server'
import {transporter} from "../../../../lib/email-helper";


export async function submitData(prevState: any, formData: FormData) {

    const fields = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        pronouns: formData.get("pronouns"),
        phone: formData.get("phone"),
        instagram: formData.get("instagram"),
        accommodations: Array<string>,
        dateRequested: formData.get("dateRequested"),
        tattooType: formData.get("tattooType"),
        tattooSize: formData.get("tattooSize"),
        tattooPlacement: formData.get("tattooPlacement"),
        tattooDescription: formData.get("tattooDescription"),
        email: formData.get("email"),
        message: formData.get("message"),
    };

    try {
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.SMTP_USER,
            subject: `New Contact submitted - ${fields.firstName} ${fields.lastName}`,
            html: `
            <p>Pronouns: ${fields.pronouns} </p>
            <p>Email: ${fields.email} </p>
            <p>Phone: ${fields.phone} </p>
            <p>Instagram: ${fields.instagram} </p>
            <p>Accommodations: ${fields.accommodations} </p>
            <p>Date Requested: ${fields.dateRequested} </p>
            <p>Tattoo Type: ${fields.tattooType} </p>
            <p>Tattoo Size: ${fields.tattooSize} </p>
            <p>Tattoo Placement: ${fields.tattooPlacement} </p>
            <p>Tattoo Description: ${fields.tattooDescription} </p>
            <p>Message: ${fields.message} </p>
            `,
        })
        return {
            message: "Success!",
            errors: undefined,
            fieldValues: {
                firstName: '',
                lastName: '',
                pronouns: '',
                phone: '',
                instagram: '',
                accommodations: [],
                dateRequested: '',
                tattooType: '',
                tattooSize: 0,
                tattooPlacement: '',
                tattooDescription: '',
                email: '',
                message: '',
            }
        }
    } catch (e) {
        return {
            message: "Please Try Again."
        }
    }


}

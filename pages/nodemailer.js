import DefaultLayout from '@layouts/default'
import Contact from '../_components/forms/nodemailer-contact'
import styles from "../styles/Contact.module.scss";

export default function nodemaileremail (props) {

	return (
		<DefaultLayout title='Send It' description='This is an SMTP email sender page'>
		<h1>Nodemailer Form</h1>
		<Contact />
		</DefaultLayout>
	)
}

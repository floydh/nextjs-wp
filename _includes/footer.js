import styles from '../styles/Footer.module.scss';

export default function Footer() {
  return (
		<>
		<footer className={styles.footer}>
				Proof of Concept by{' '}
				<img className={styles.logo} src="https://floydhartford.com/img/f-logo.jpg" alt="Floyd Hartford's Logo" />
		</footer>
		</>
	)
}

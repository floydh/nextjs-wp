import React from "react";
import styles from "../../styles/Contact.module.scss";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mbjpkvvy"
        method="POST"
				className={styles.form}
      >
				<div className={styles['input-field']}>
	        <label className={styles['input-field__label']}>Email:</label>
	        <div className={styles['input-field__input-wrapper']}>
					  <input className={styles['input-field__input']} type="email" name="email" placeholder="you@example.com" />
					</div>
				</div>
				<div className={styles['input-field']}>
	        <label className={styles['input-field__label']}>Message:</label>
					 <div className={styles['input-field__input-wrapper']}>
	        	<input className={styles['input-field__input']} type="text" name="message" placeholder="What's up?" />
					 </div>
				</div>
				<div className={styles['form__actions']}>
	        {status === "SUCCESS" ? <div className={styles['form__response'] + ' ' + styles['form__response--success']}><p>Thanks!</p></div> : <button className={styles.button + ' ' + styles['button--primary']}>Submit</button>}
	        {status === "ERROR" && <div className={styles['form__response'] + ' ' + styles['form__response--error']}><p>Ooops! There was an error.</p></div>}
				</div>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

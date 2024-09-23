import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import { Button } from 'components/button';

// Styles
import styles from './contactForm.module.scss';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xeqpyvzz');

  if (state.succeeded) {
    return (
      <div className={styles.feedback}>
        <p>Thanks! I've got your message.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell me about your project"
          rows="5"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Button text="Send message" type="submit" disabled={state.submitting} />
      </form>
    </div>
  );
};

export default ContactForm;

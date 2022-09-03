import { useEffect, useState } from 'react';

import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';

export default function ContactForm({ className = '' }) {
  const [form, setForm] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successTimeout, setSuccessTimeout] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => clearTimeout(successTimeout);
  }, []);

  function handleFieldChange(field, value) {
    setForm(currentForm => ({ ...currentForm, [field]: value }));
  }

  function isValid() {
    return form.first_name && form.email && form.message;
  }

  async function handleSubmitForm() {
    try {
      setLoading(true);
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact_submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      setForm({});
      setLoading(false);
      displaySuccessMessage();
    } catch (error) {
      console.log(error);
    }
  }

  function displaySuccessMessage() {
    setShowSuccessMessage(true);
    let timeout = setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
    clearTimeout(successTimeout);
    setSuccessTimeout(timeout);
  }

  return (
    <div className={`${className} `}>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <Input
          placeholder="First name"
          className="col-span-1"
          value={form.first_name}
          onChange={value => handleFieldChange('first_name', value)}
        />
        <Input
          placeholder="Last name"
          className="col-span-1"
          value={form.last_name}
          onChange={value => handleFieldChange('last_name', value)}
        />
        <Input
          placeholder="Email"
          className="col-span-2"
          value={form.email}
          onChange={value => handleFieldChange('email', value)}
        />
        <Textarea
          placeholder="How can we help you?"
          className="col-span-2"
          value={form.message}
          onChange={value => handleFieldChange('message', value)}
        />
      </div>
      <Button
        className="w-full lg:w-auto"
        disabled={!isValid()}
        onClick={handleSubmitForm}
        loading={loading}
      >
        Submit
      </Button>
      {showSuccessMessage && (
        <div className="p-3 mt-4 font-medium text-green-800 bg-green-100 rounded-md ">
          Your submission was received!
        </div>
      )}
    </div>
  );
}

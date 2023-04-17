import { useEffect, useState } from 'react';

import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';
import Label from './Label';

export default function ContactForm({}) {
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
    <div className="lg:flex-1">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <Label label="First name">
          <Input
            placeholder="First name"
            className="col-span-1"
            value={form.first_name}
            onChange={value => handleFieldChange('first_name', value)}
          />
        </Label>

        <Label label="Last name">
          <Input
            placeholder="Last name"
            className="col-span-1"
            value={form.last_name}
            onChange={value => handleFieldChange('last_name', value)}
          />
        </Label>
        <Label label="Email" className="col-span-2">
          <Input
            placeholder="Email"
            value={form.email}
            onChange={value => handleFieldChange('email', value)}
            type="email"
          />
        </Label>
        <Label label="How can we help you?" className="col-span-2">
          <Textarea
            placeholder="How can we help you?"
            value={form.message}
            onChange={value => handleFieldChange('message', value)}
          />
        </Label>
      </div>
      <div className="flex justify-center">
        <Button
          disabled={!isValid()}
          onClick={handleSubmitForm}
          loading={loading}
          full={true}
          className="max-w-2xl"
        >
          Submit
        </Button>
      </div>
      {showSuccessMessage && (
        <div className="p-3 mt-4 font-medium text-green-800 bg-green-100 rounded-md ">
          Your submission was received!
        </div>
      )}
    </div>
  );
}

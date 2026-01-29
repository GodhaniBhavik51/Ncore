import axios from 'axios';
import { useState } from 'react';

const contantUsController = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const res = await axios.post('/api/contact', formData);

      const data = res.data;

      if (data.success) {
        setStatus('Message sent successfully ✅');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus('Failed to send message ❌');
      }
    } catch (error) {
      console.error('error',error)
      setStatus('Server error ❌');
    } finally {
      setLoading(false);
    }
  };

  return { handleChange, handleSubmit, loading, status, formData };
};

export default contantUsController;

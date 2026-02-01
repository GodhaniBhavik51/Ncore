import axios from 'axios';
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const contantUsController = () => {
   const { brand } = useParams<{ brand?: string }>();
   const location = useLocation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
   
  const breadcrumb = [
    { path: `/${brand}`, label: 'Home' },
    { path: `/${brand}/contact-us`, label: 'Contact Us' },
  ];
  
  const hideBreadcrumb =
  location.pathname === "/ncore" ||
  location.pathname === "/renil";
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post('/api/contact', formData);

      const data = res.data;

      if (data.success) {
        toast.success('Message sent successfully ✅');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        toast.error('Failed to send message ❌');
      }
    } catch (error) {
      console.error('error',error)
      toast.error('Server error ❌');
    } finally {
      setLoading(false);
    }
  };

  return { theme:brand, handleChange, handleSubmit, loading, breadcrumb, formData, hideBreadcrumb };
};

export default contantUsController;

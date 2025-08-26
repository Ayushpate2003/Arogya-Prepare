import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const DemoBookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    hospitalName: '',
    hospitalType: '',
    bedCapacity: '',
    role: '',
    preferredDate: '',
    preferredTime: '',
    specificRequirements: '',
    agreedToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hospitalTypes = [
    { value: 'multi-specialty', label: 'Multi-Specialty Hospital' },
    { value: 'cardiac', label: 'Cardiac Care Center' },
    { value: 'pediatric', label: 'Pediatric Hospital' },
    { value: 'orthopedic', label: 'Orthopedic Center' },
    { value: 'oncology', label: 'Cancer Care Center' },
    { value: 'maternity', label: 'Maternity Hospital' },
    { value: 'emergency', label: 'Emergency Care Center' },
    { value: 'rehabilitation', label: 'Rehabilitation Center' }
  ];

  const bedCapacityOptions = [
    { value: '50-100', label: '50-100 beds' },
    { value: '101-250', label: '101-250 beds' },
    { value: '251-500', label: '251-500 beds' },
    { value: '501-1000', label: '501-1000 beds' },
    { value: '1000+', label: '1000+ beds' }
  ];

  const roleOptions = [
    { value: 'administrator', label: 'Hospital Administrator' },
    { value: 'it-manager', label: 'IT Manager' },
    { value: 'clinical-director', label: 'Clinical Director' },
    { value: 'ceo', label: 'CEO/Managing Director' },
    { value: 'operations', label: 'Operations Manager' },
    { value: 'quality', label: 'Quality Assurance Head' }
  ];

  const timeSlots = [
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.fullName?.trim()) newErrors.fullName = 'Full name is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/?.test(formData?.email)) newErrors.email = 'Invalid email format';
    if (!formData?.phone?.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/?.test(formData?.phone?.replace(/\D/g, ''))) newErrors.phone = 'Invalid phone number';
    if (!formData?.hospitalName?.trim()) newErrors.hospitalName = 'Hospital name is required';
    if (!formData?.hospitalType) newErrors.hospitalType = 'Hospital type is required';
    if (!formData?.bedCapacity) newErrors.bedCapacity = 'Bed capacity is required';
    if (!formData?.role) newErrors.role = 'Role is required';
    if (!formData?.preferredDate) newErrors.preferredDate = 'Preferred date is required';
    if (!formData?.preferredTime) newErrors.preferredTime = 'Preferred time is required';
    if (!formData?.agreedToTerms) newErrors.agreedToTerms = 'Please agree to terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Demo booking request submitted successfully! Our healthcare technology specialist will contact you within 24 hours.');
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      hospitalName: '',
      hospitalType: '',
      bedCapacity: '',
      role: '',
      preferredDate: '',
      preferredTime: '',
      specificRequirements: '',
      agreedToTerms: false
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-clinical-lg p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-slate-900 mb-2">Book Your Personalized Demo</h3>
        <p className="text-slate-600">Get a tailored demonstration of Arogya-Prepare based on your hospital's specific needs and requirements.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={formData?.fullName}
            onChange={(e) => handleInputChange('fullName', e?.target?.value)}
            error={errors?.fullName}
            required
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@hospital.com"
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            error={errors?.email}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Phone Number"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData?.phone}
            onChange={(e) => handleInputChange('phone', e?.target?.value)}
            error={errors?.phone}
            required
          />

          <Input
            label="Hospital Name"
            type="text"
            placeholder="Enter hospital name"
            value={formData?.hospitalName}
            onChange={(e) => handleInputChange('hospitalName', e?.target?.value)}
            error={errors?.hospitalName}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Hospital Type"
            placeholder="Select hospital type"
            options={hospitalTypes}
            value={formData?.hospitalType}
            onChange={(value) => handleInputChange('hospitalType', value)}
            error={errors?.hospitalType}
            required
            searchable
          />

          <Select
            label="Bed Capacity"
            placeholder="Select bed capacity"
            options={bedCapacityOptions}
            value={formData?.bedCapacity}
            onChange={(value) => handleInputChange('bedCapacity', value)}
            error={errors?.bedCapacity}
            required
          />
        </div>

        <Select
          label="Your Role"
          placeholder="Select your role"
          options={roleOptions}
          value={formData?.role}
          onChange={(value) => handleInputChange('role', value)}
          error={errors?.role}
          required
          searchable
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Preferred Date"
            type="date"
            value={formData?.preferredDate}
            onChange={(e) => handleInputChange('preferredDate', e?.target?.value)}
            error={errors?.preferredDate}
            required
            min={new Date()?.toISOString()?.split('T')?.[0]}
          />

          <Select
            label="Preferred Time"
            placeholder="Select time slot"
            options={timeSlots}
            value={formData?.preferredTime}
            onChange={(value) => handleInputChange('preferredTime', value)}
            error={errors?.preferredTime}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Specific Requirements (Optional)
          </label>
          <textarea
            className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            rows={4}
            placeholder="Tell us about specific features you'd like to see or challenges you're facing..."
            value={formData?.specificRequirements}
            onChange={(e) => handleInputChange('specificRequirements', e?.target?.value)}
          />
        </div>

        <Checkbox
          label="I agree to the terms and conditions and privacy policy"
          checked={formData?.agreedToTerms}
          onChange={(e) => handleInputChange('agreedToTerms', e?.target?.checked)}
          error={errors?.agreedToTerms}
          required
        />

        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isSubmitting}
          iconName="Calendar"
          iconPosition="left"
        >
          {isSubmitting ? 'Booking Demo...' : 'Book Demo Session'}
        </Button>
      </form>
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} color="rgb(37, 99, 235)" className="mt-0.5" />
          <div>
            <p className="text-sm font-medium text-blue-900">What to expect:</p>
            <ul className="text-sm text-blue-800 mt-1 space-y-1">
              <li>• 45-minute personalized demonstration</li>
              <li>• Live Q&A with healthcare technology specialist</li>
              <li>• Custom ROI analysis for your hospital</li>
              <li>• Integration roadmap discussion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoBookingForm;
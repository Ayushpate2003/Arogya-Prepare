import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const DemoBookingCard = () => {
  const [formData, setFormData] = useState({
    hospitalName: '',
    hospitalType: '',
    bedCapacity: '',
    contactPerson: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    specificRequirements: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hospitalTypes = [
    { value: 'multi-specialty', label: 'Multi-Specialty Hospital' },
    { value: 'cardiac', label: 'Cardiac Specialty' },
    { value: 'pediatric', label: 'Pediatric Hospital' },
    { value: 'orthopedic', label: 'Orthopedic Specialty' },
    { value: 'oncology', label: 'Oncology Center' },
    { value: 'maternity', label: 'Maternity Hospital' }
  ];

  const bedCapacityOptions = [
    { value: '50-100', label: '50-100 beds' },
    { value: '101-250', label: '101-250 beds' },
    { value: '251-500', label: '251-500 beds' },
    { value: '501-1000', label: '501-1000 beds' },
    { value: '1000+', label: '1000+ beds' }
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
    
    if (!formData?.hospitalName?.trim()) newErrors.hospitalName = 'Hospital name is required';
    if (!formData?.hospitalType) newErrors.hospitalType = 'Please select hospital type';
    if (!formData?.bedCapacity) newErrors.bedCapacity = 'Please select bed capacity';
    if (!formData?.contactPerson?.trim()) newErrors.contactPerson = 'Contact person name is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/?.test(formData?.email)) newErrors.email = 'Invalid email format';
    if (!formData?.phone?.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/?.test(formData?.phone?.replace(/\D/g, ''))) newErrors.phone = 'Invalid phone number';
    if (!formData?.preferredDate) newErrors.preferredDate = 'Please select preferred date';
    if (!formData?.preferredTime) newErrors.preferredTime = 'Please select preferred time';

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      hospitalName: '',
      hospitalType: '',
      bedCapacity: '',
      contactPerson: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      specificRequirements: ''
    });
    
    alert('Demo booking request submitted successfully! Our team will contact you within 24 hours.');
  };

  return (
    <div className="bg-card rounded-xl shadow-clinical-lg border border-border p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="Calendar" size={24} color="var(--color-primary)" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground">Book Personalized Demo</h3>
          <p className="text-text-secondary">Schedule a tailored demonstration for your hospital</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Hospital Name"
            type="text"
            placeholder="Enter hospital name"
            value={formData?.hospitalName}
            onChange={(e) => handleInputChange('hospitalName', e?.target?.value)}
            error={errors?.hospitalName}
            required
          />

          <Select
            label="Hospital Type"
            placeholder="Select hospital type"
            options={hospitalTypes}
            value={formData?.hospitalType}
            onChange={(value) => handleInputChange('hospitalType', value)}
            error={errors?.hospitalType}
            required
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

          <Input
            label="Contact Person"
            type="text"
            placeholder="Enter contact person name"
            value={formData?.contactPerson}
            onChange={(e) => handleInputChange('contactPerson', e?.target?.value)}
            error={errors?.contactPerson}
            required
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="Enter email address"
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            error={errors?.email}
            required
          />

          <Input
            label="Phone Number"
            type="tel"
            placeholder="Enter 10-digit phone number"
            value={formData?.phone}
            onChange={(e) => handleInputChange('phone', e?.target?.value)}
            error={errors?.phone}
            required
          />

          <Input
            label="Preferred Date"
            type="date"
            value={formData?.preferredDate}
            onChange={(e) => handleInputChange('preferredDate', e?.target?.value)}
            error={errors?.preferredDate}
            min={new Date()?.toISOString()?.split('T')?.[0]}
            required
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
          <label className="block text-sm font-medium text-foreground mb-2">
            Specific Requirements
          </label>
          <textarea
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            rows={4}
            placeholder="Any specific features or use cases you'd like to explore during the demo..."
            value={formData?.specificRequirements}
            onChange={(e) => handleInputChange('specificRequirements', e?.target?.value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            type="submit"
            variant="default"
            loading={isSubmitting}
            iconName="Calendar"
            iconPosition="left"
            className="flex-1"
          >
            {isSubmitting ? 'Scheduling Demo...' : 'Schedule Demo'}
          </Button>
          
          <Button
            type="button"
            variant="outline"
            iconName="Phone"
            iconPosition="left"
            className="flex-1"
          >
            Call for Immediate Demo
          </Button>
        </div>
      </form>
      <div className="mt-6 p-4 bg-success/5 border border-success/20 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="CheckCircle" size={20} color="var(--color-success)" />
          <div className="text-sm">
            <p className="font-medium text-success mb-1">What to expect:</p>
            <ul className="text-text-secondary space-y-1">
              <li>• 45-minute personalized demonstration</li>
              <li>• Live prediction accuracy showcase</li>
              <li>• ROI calculation for your hospital</li>
              <li>• Integration timeline discussion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoBookingCard;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const PartnershipInquiryForm = () => {
  const [formData, setFormData] = useState({
    organizationType: '',
    organizationName: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    partnershipType: '',
    description: '',
    expectedVolume: '',
    timeline: '',
    hasExistingClients: false,
    hasRegulatory: false,
    hasInfrastructure: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const organizationTypes = [
    { value: 'healthcare-vendor', label: 'Healthcare Technology Vendor' },
    { value: 'government', label: 'Government Health Department' },
    { value: 'medical-institution', label: 'Medical Institution/College' },
    { value: 'hospital-chain', label: 'Hospital Chain/Network' },
    { value: 'consulting', label: 'Healthcare Consulting Firm' },
    { value: 'research', label: 'Research Organization' },
    { value: 'ngo', label: 'Healthcare NGO' },
    { value: 'other', label: 'Other' }
  ];

  const partnershipTypes = [
    { value: 'technology-integration', label: 'Technology Integration Partnership' },
    { value: 'reseller', label: 'Authorized Reseller Program' },
    { value: 'implementation', label: 'Implementation Services Partnership' },
    { value: 'data-sharing', label: 'Data Sharing & Research Collaboration' },
    { value: 'white-label', label: 'White Label Solution' },
    { value: 'joint-venture', label: 'Joint Venture/Strategic Alliance' },
    { value: 'government', label: 'Government Partnership' },
    { value: 'academic', label: 'Academic Research Partnership' }
  ];

  const expectedVolumeOptions = [
    { value: '1-10', label: '1-10 hospitals' },
    { value: '11-50', label: '11-50 hospitals' },
    { value: '51-100', label: '51-100 hospitals' },
    { value: '100+', label: '100+ hospitals' },
    { value: 'government-scale', label: 'Government/State-wide deployment' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (within 1 month)' },
    { value: '3-months', label: '3 months' },
    { value: '6-months', label: '6 months' },
    { value: '12-months', label: '12 months' },
    { value: 'long-term', label: 'Long-term strategic partnership' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.organizationType) newErrors.organizationType = 'Please select organization type';
    if (!formData?.organizationName?.trim()) newErrors.organizationName = 'Organization name is required';
    if (!formData?.contactPerson?.trim()) newErrors.contactPerson = 'Contact person name is required';
    if (!formData?.designation?.trim()) newErrors.designation = 'Designation is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/?.test(formData?.email)) newErrors.email = 'Invalid email format';
    if (!formData?.phone?.trim()) newErrors.phone = 'Phone number is required';
    if (!formData?.partnershipType) newErrors.partnershipType = 'Please select partnership type';
    if (!formData?.description?.trim()) newErrors.description = 'Partnership description is required';
    if (!formData?.expectedVolume) newErrors.expectedVolume = 'Please select expected volume';
    if (!formData?.timeline) newErrors.timeline = 'Please select timeline';

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
      organizationType: '',
      organizationName: '',
      contactPerson: '',
      designation: '',
      email: '',
      phone: '',
      partnershipType: '',
      description: '',
      expectedVolume: '',
      timeline: '',
      hasExistingClients: false,
      hasRegulatory: false,
      hasInfrastructure: false
    });
    
    alert('Partnership inquiry submitted successfully! Our partnerships team will contact you within 48 hours.');
  };

  return (
    <div className="bg-card rounded-xl shadow-clinical-lg border border-border p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
          <Icon name="Handshake" size={24} color="var(--color-secondary)" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground">Partnership Inquiry</h3>
          <p className="text-text-secondary">Explore collaboration opportunities with Arogya-Prepare</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Organization Type"
            placeholder="Select organization type"
            options={organizationTypes}
            value={formData?.organizationType}
            onChange={(value) => handleInputChange('organizationType', value)}
            error={errors?.organizationType}
            required
          />

          <Input
            label="Organization Name"
            type="text"
            placeholder="Enter organization name"
            value={formData?.organizationName}
            onChange={(e) => handleInputChange('organizationName', e?.target?.value)}
            error={errors?.organizationName}
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
            label="Designation"
            type="text"
            placeholder="Enter designation/title"
            value={formData?.designation}
            onChange={(e) => handleInputChange('designation', e?.target?.value)}
            error={errors?.designation}
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
            placeholder="Enter phone number"
            value={formData?.phone}
            onChange={(e) => handleInputChange('phone', e?.target?.value)}
            error={errors?.phone}
            required
          />

          <Select
            label="Partnership Type"
            placeholder="Select partnership type"
            options={partnershipTypes}
            value={formData?.partnershipType}
            onChange={(value) => handleInputChange('partnershipType', value)}
            error={errors?.partnershipType}
            required
            className="md:col-span-2"
          />

          <Select
            label="Expected Volume"
            placeholder="Select expected volume"
            options={expectedVolumeOptions}
            value={formData?.expectedVolume}
            onChange={(value) => handleInputChange('expectedVolume', value)}
            error={errors?.expectedVolume}
            required
          />

          <Select
            label="Timeline"
            placeholder="Select timeline"
            options={timelineOptions}
            value={formData?.timeline}
            onChange={(value) => handleInputChange('timeline', value)}
            error={errors?.timeline}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Partnership Description *
          </label>
          <textarea
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            rows={4}
            placeholder="Describe your partnership proposal, objectives, and how you envision collaborating with Arogya-Prepare..."
            value={formData?.description}
            onChange={(e) => handleInputChange('description', e?.target?.value)}
            required
          />
          {errors?.description && (
            <p className="mt-1 text-sm text-error">{errors?.description}</p>
          )}
        </div>

        <div className="space-y-4">
          <p className="text-sm font-medium text-foreground">Organization Capabilities</p>
          <div className="space-y-3">
            <Checkbox
              label="We have existing healthcare clients/network"
              checked={formData?.hasExistingClients}
              onChange={(e) => handleInputChange('hasExistingClients', e?.target?.checked)}
            />
            <Checkbox
              label="We have regulatory compliance expertise"
              checked={formData?.hasRegulatory}
              onChange={(e) => handleInputChange('hasRegulatory', e?.target?.checked)}
            />
            <Checkbox
              label="We have technical infrastructure for integration"
              checked={formData?.hasInfrastructure}
              onChange={(e) => handleInputChange('hasInfrastructure', e?.target?.checked)}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            type="submit"
            variant="secondary"
            loading={isSubmitting}
            iconName="Send"
            iconPosition="left"
            className="flex-1"
          >
            {isSubmitting ? 'Submitting Inquiry...' : 'Submit Partnership Inquiry'}
          </Button>
          
          <Button
            type="button"
            variant="outline"
            iconName="Calendar"
            iconPosition="left"
            className="flex-1"
          >
            Schedule Partnership Discussion
          </Button>
        </div>
      </form>
      <div className="mt-6 p-4 bg-secondary/5 border border-secondary/20 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} color="var(--color-secondary)" />
          <div className="text-sm">
            <p className="font-medium text-secondary mb-1">Partnership Benefits:</p>
            <ul className="text-text-secondary space-y-1">
              <li>• Dedicated partnership manager</li>
              <li>• Technical integration support</li>
              <li>• Co-marketing opportunities</li>
              <li>• Revenue sharing models</li>
              <li>• Priority feature development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipInquiryForm;
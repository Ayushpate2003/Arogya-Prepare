import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      role: "Chief Medical Officer",
      expertise: "Emergency Medicine & Healthcare Analytics",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      bio: "15+ years in emergency medicine with expertise in surge management during festival seasons and epidemic outbreaks.",
      specialization: "Cultural Health Patterns"
    },
    {
      id: 2,
      name: "Arjun Patel",
      role: "Chief Technology Officer",
      expertise: "AI/ML & Predictive Analytics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Former Google AI researcher specializing in healthcare prediction models and real-time data processing systems.",
      specialization: "Predictive Intelligence"
    },
    {
      id: 3,
      name: "Dr. Meera Krishnan",
      role: "Cultural Anthropologist",
      expertise: "Traditional Health Systems & Cultural Intelligence",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      bio: "PhD in Medical Anthropology with research focus on Indian festival health patterns and traditional wellness practices.",
      specialization: "Cultural Health Intelligence"
    },
    {
      id: 4,
      name: "Rajesh Kumar",
      role: "Head of Hospital Operations",
      expertise: "Healthcare Management & Resource Optimization",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      bio: "20+ years managing hospital operations across tier-1 and tier-2 cities with expertise in surge capacity planning.",
      specialization: "Operational Excellence"
    },
    {
      id: 5,
      name: "Dr. Anita Gupta",
      role: "Data Science Lead",
      expertise: "Healthcare Data Analytics & Environmental Health",
      image: "https://images.unsplash.com/photo-1594824388853-2c5899d87b29?w=300&h=300&fit=crop&crop=face",
      bio: "Environmental health specialist with expertise in pollution-health correlation analysis and respiratory disease prediction.",
      specialization: "Environmental Intelligence"
    },
    {
      id: 6,
      name: "Vikram Singh",
      role: "Partnership Director",
      expertise: "Healthcare Partnerships & Regulatory Compliance",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Former AIIMS administrator with deep connections across Indian healthcare institutions and regulatory bodies.",
      specialization: "Strategic Partnerships"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Users" size={16} />
            <span>Our Team</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Diverse Expertise for 
            <span className="text-secondary"> Healthcare Innovation</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our multidisciplinary team combines healthcare professionals, data scientists, and cultural 
            anthropologists who deeply understand Indian health patterns and modern AI capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers?.map((member) => (
            <div key={member?.id} className="bg-card rounded-xl shadow-clinical border border-border hover:shadow-clinical-lg transition-intelligence overflow-hidden">
              <div className="relative">
                <Image 
                  src={member?.image} 
                  alt={member?.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {member?.specialization}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">{member?.name}</h3>
                <p className="text-primary font-medium text-sm mb-2">{member?.role}</p>
                <p className="text-text-secondary text-sm mb-4">{member?.expertise}</p>
                <p className="text-text-secondary text-sm leading-relaxed">{member?.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Philosophy */}
        <div className="mt-16 bg-gradient-to-r from-secondary/5 to-primary/5 rounded-2xl p-8 lg:p-12 border border-secondary/10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Team Philosophy</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We believe that effective healthcare prediction requires more than just data science. 
                It demands deep cultural understanding, clinical expertise, and technological innovation 
                working in harmony to create solutions that truly serve India's diverse healthcare needs.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} color="var(--color-success)" />
                  <span className="text-sm text-text-secondary">Multidisciplinary collaboration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} color="var(--color-success)" />
                  <span className="text-sm text-text-secondary">Cultural sensitivity in healthcare</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} color="var(--color-success)" />
                  <span className="text-sm text-text-secondary">Evidence-based innovation</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-lg p-4 text-center border border-border">
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-text-secondary">Years Combined Experience</div>
              </div>
              <div className="bg-card rounded-lg p-4 text-center border border-border">
                <div className="text-2xl font-bold text-secondary mb-1">15+</div>
                <div className="text-sm text-text-secondary">Research Publications</div>
              </div>
              <div className="bg-card rounded-lg p-4 text-center border border-border">
                <div className="text-2xl font-bold text-accent mb-1">100+</div>
                <div className="text-sm text-text-secondary">Hospitals Consulted</div>
              </div>
              <div className="bg-card rounded-lg p-4 text-center border border-border">
                <div className="text-2xl font-bold text-success mb-1">25+</div>
                <div className="text-sm text-text-secondary">States Covered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
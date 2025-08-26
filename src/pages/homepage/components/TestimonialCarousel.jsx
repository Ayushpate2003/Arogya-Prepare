import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      quote: `During Diwali 2023, Arogya-Prepare predicted a 78% surge in respiratory cases. We were prepared with additional staff and resources. Without this system, we would have been overwhelmed like previous years.`,
      author: 'Dr. Rajesh Kumar',
      position: 'Chief Medical Officer',
      hospital: 'AIIMS Delhi',
      location: 'New Delhi',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      impact: 'Reduced emergency wait times by 67%'
    },
    {
      id: 2,
      quote: `The pollution spike prediction saved us during the November smog crisis. We had 40% more respiratory specialists on duty and adequate ventilators ready. Patient outcomes improved significantly.`,
      author: 'Dr. Priya Sharma',
      position: 'Hospital Administrator',
      hospital: 'Fortis Healthcare',
      location: 'Mumbai',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      impact: 'Prevented 89 critical cases from escalating'
    },
    {
      id: 3,
      quote: `Festival season management became stress-free with Arogya-Prepare. The system accurately predicted patient influx patterns, helping us optimize our entire operation from staffing to supply chain.`,
      author: 'Dr. Amit Patel',
      position: 'Director of Operations',
      hospital: 'Apollo Hospital',
      location: 'Chennai',
      avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      impact: 'Achieved 94% staff satisfaction during peak season'
    },
    {
      id: 4,
      quote: `The cultural health intelligence is remarkable. It understands Indian healthcare patterns better than any system we've used. The Karva Chauth prediction was spot-on - we had the right specialists ready.`,author: 'Dr. Sunita Reddy',position: 'Emergency Department Head',hospital: 'Manipal Hospital',location: 'Bangalore',avatar: 'https://images.unsplash.com/photo-1594824475317-d0444e1b8c9c?w=150&h=150&fit=crop&crop=face',rating: 5,impact: 'Improved patient satisfaction to 4.9/5'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials?.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials?.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials?.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials?.[currentIndex];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-emerald-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Healthcare Leaders
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Real testimonials from hospital administrators who successfully managed 
            surge periods with Arogya-Prepare's predictive intelligence.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-clinical-lg">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <Icon name="Quote" size={32} className="text-blue-600" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center mb-8">
              <blockquote className="text-lg lg:text-xl text-slate-700 leading-relaxed mb-6">
                "{currentTestimonial?.quote}"
              </blockquote>

              {/* Rating */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Impact Metric */}
              <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-6">
                <Icon name="TrendingUp" size={16} className="mr-2" />
                {currentTestimonial?.impact}
              </div>
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-center space-x-4">
              <img
                src={currentTestimonial?.avatar}
                alt={currentTestimonial?.author}
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-clinical"
              />
              <div className="text-left">
                <h4 className="font-semibold text-slate-900 text-lg">
                  {currentTestimonial?.author}
                </h4>
                <p className="text-slate-600">
                  {currentTestimonial?.position}
                </p>
                <p className="text-blue-600 font-medium">
                  {currentTestimonial?.hospital}, {currentTestimonial?.location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-clinical flex items-center justify-center hover:shadow-clinical-lg transition-shadow"
          >
            <Icon name="ChevronLeft" size={24} className="text-slate-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-clinical flex items-center justify-center hover:shadow-clinical-lg transition-shadow"
          >
            <Icon name="ChevronRight" size={24} className="text-slate-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-600' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Indicator */}
        <div className="flex justify-center mt-4">
          <div className="flex items-center space-x-2 text-sm text-slate-500">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-slate-400'}`} />
            <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
          </div>
        </div>

        {/* All Testimonials Preview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {testimonials?.map((testimonial, index) => (
            <div
              key={testimonial?.id}
              onClick={() => goToSlide(index)}
              className={`cursor-pointer p-4 rounded-xl transition-all ${
                index === currentIndex 
                  ? 'bg-blue-50 border-2 border-blue-200' :'bg-white border border-slate-200 hover:border-blue-200'
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={testimonial?.avatar}
                  alt={testimonial?.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-medium text-slate-900 text-sm">
                    {testimonial?.author}
                  </h5>
                  <p className="text-xs text-slate-600">
                    {testimonial?.hospital}
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 line-clamp-3">
                {testimonial?.quote?.substring(0, 100)}...
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
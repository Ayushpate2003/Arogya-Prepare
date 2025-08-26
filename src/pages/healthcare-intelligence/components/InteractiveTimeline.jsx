import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const InteractiveTimeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const festivalData = [
    {
      id: 1,
      name: "Holi",
      date: "March 13, 2024",
      month: "March",
      admissionIncrease: 45,
      primaryConcerns: ["Eye injuries", "Skin allergies", "Respiratory issues"],
      predictedSurge: "2-3 days post-festival",
      color: "bg-pink-500",
      icon: "Sparkles"
    },
    {
      id: 2,
      name: "Eid al-Fitr",
      date: "April 10, 2024",
      month: "April",
      admissionIncrease: 32,
      primaryConcerns: ["Digestive issues", "Food poisoning", "Diabetes complications"],
      predictedSurge: "1-2 days post-festival",
      color: "bg-green-500",
      icon: "Moon"
    },
    {
      id: 3,
      name: "Diwali",
      date: "November 1, 2024",
      month: "November",
      admissionIncrease: 78,
      primaryConcerns: ["Burns", "Respiratory distress", "Cardiac events"],
      predictedSurge: "3-5 days post-festival",
      color: "bg-orange-500",
      icon: "Flame"
    },
    {
      id: 4,
      name: "Durga Puja",
      date: "October 15, 2024",
      month: "October",
      admissionIncrease: 38,
      primaryConcerns: ["Crowd injuries", "Heat exhaustion", "Hypertension"],
      predictedSurge: "During festival period",
      color: "bg-purple-500",
      icon: "Crown"
    }
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-clinical">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Festival-Health Correlation Timeline
          </h3>
          <p className="text-text-secondary text-sm">
            Interactive analysis of cultural events and healthcare impact patterns
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-success">
          <Icon name="TrendingUp" size={16} />
          <span className="font-medium">94% Prediction Accuracy</span>
        </div>
      </div>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

        {/* Timeline Events */}
        <div className="space-y-8">
          {festivalData?.map((event, index) => (
            <div key={event?.id} className="relative flex items-start">
              {/* Timeline Dot */}
              <div className={`relative z-10 flex items-center justify-center w-16 h-16 ${event?.color} rounded-full shadow-clinical-lg cursor-pointer transition-intelligence hover:scale-110`}
                   onClick={() => setSelectedEvent(selectedEvent === event?.id ? null : event?.id)}>
                <Icon name={event?.icon} size={24} color="white" strokeWidth={2} />
              </div>

              {/* Event Content */}
              <div className="ml-6 flex-1">
                <div className="bg-muted/50 rounded-lg p-4 border border-border hover:border-primary/30 transition-intelligence cursor-pointer"
                     onClick={() => setSelectedEvent(selectedEvent === event?.id ? null : event?.id)}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-foreground">{event?.name}</h4>
                    <span className="text-sm text-text-secondary">{event?.date}</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Icon name="TrendingUp" size={14} color="var(--color-error)" />
                      <span className="text-error font-medium">+{event?.admissionIncrease}% admissions</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} color="var(--color-text-secondary)" />
                      <span className="text-text-secondary">{event?.predictedSurge}</span>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedEvent === event?.id && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <h5 className="text-sm font-medium text-foreground mb-2">Primary Health Concerns:</h5>
                      <div className="flex flex-wrap gap-2">
                        {event?.primaryConcerns?.map((concern, idx) => (
                          <span key={idx} className="px-3 py-1 bg-warning/10 text-warning text-xs rounded-full border border-warning/20">
                            {concern}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-3 p-3 bg-primary/5 rounded-md border border-primary/20">
                        <div className="flex items-center space-x-2">
                          <Icon name="Brain" size={16} color="var(--color-primary)" />
                          <span className="text-sm font-medium text-primary">AI Prediction Insight</span>
                        </div>
                        <p className="text-sm text-text-secondary mt-1">
                          Based on 5-year historical data and cultural pattern analysis, expect peak admissions {event?.predictedSurge?.toLowerCase()} with {event?.admissionIncrease}% increase in emergency cases.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Legend */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-error rounded-full"></div>
              <span className="text-text-secondary">High Impact</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-warning rounded-full"></div>
              <span className="text-text-secondary">Medium Impact</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span className="text-text-secondary">Low Impact</span>
            </div>
          </div>
          <div className="text-text-secondary">
            Click events for detailed insights
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTimeline;
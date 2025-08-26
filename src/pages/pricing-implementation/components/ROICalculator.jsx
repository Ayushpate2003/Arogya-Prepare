import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ROICalculator = () => {
  const [hospitalBeds, setHospitalBeds] = useState(200);
  const [avgOccupancy, setAvgOccupancy] = useState(75);
  const [currentOvertimeCost, setCurrentOvertimeCost] = useState(500000);

  const calculateSavings = () => {
    const predictiveEfficiency = 0.25; // 25% efficiency improvement
    const overtimeSavings = currentOvertimeCost * predictiveEfficiency;
    const supplyChainSavings = hospitalBeds * 1000 * 12; // ₹1000 per bed per month
    const patientThroughputIncrease = hospitalBeds * avgOccupancy * 0.15 * 2000; // 15% increase, ₹2000 per patient
    
    const totalSavings = overtimeSavings + supplyChainSavings + patientThroughputIncrease;
    const roiPercentage = ((totalSavings - 500000) / 500000) * 100; // Assuming Professional tier
    
    return {
      overtimeSavings: Math.round(overtimeSavings),
      supplyChainSavings: Math.round(supplyChainSavings),
      throughputSavings: Math.round(patientThroughputIncrease),
      totalSavings: Math.round(totalSavings),
      roiPercentage: Math.round(roiPercentage)
    };
  };

  const savings = calculateSavings();

  const savingsBreakdown = [
    {
      category: "Reduced Overtime Costs",
      amount: savings?.overtimeSavings,
      description: "25% reduction in emergency staffing costs through predictive planning",
      icon: "Clock",
      color: "text-primary"
    },
    {
      category: "Supply Chain Optimization",
      amount: savings?.supplyChainSavings,
      description: "Optimized inventory management and reduced waste",
      icon: "Package",
      color: "text-secondary"
    },
    {
      category: "Improved Patient Throughput",
      amount: savings?.throughputSavings,
      description: "15% increase in patient capacity through better resource allocation",
      icon: "TrendingUp",
      color: "text-success"
    }
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          ROI Calculator
        </h3>
        <p className="text-text-secondary">
          Calculate potential savings for your hospital
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-foreground mb-4">
            Hospital Details
          </h4>
          
          <Input
            label="Number of Beds"
            type="number"
            value={hospitalBeds}
            onChange={(e) => setHospitalBeds(parseInt(e?.target?.value) || 0)}
            placeholder="Enter bed count"
          />
          
          <Input
            label="Average Occupancy (%)"
            type="number"
            value={avgOccupancy}
            onChange={(e) => setAvgOccupancy(parseInt(e?.target?.value) || 0)}
            placeholder="Enter occupancy percentage"
          />
          
          <Input
            label="Annual Overtime Costs (₹)"
            type="number"
            value={currentOvertimeCost}
            onChange={(e) => setCurrentOvertimeCost(parseInt(e?.target?.value) || 0)}
            placeholder="Enter current overtime costs"
          />
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-foreground mb-4">
            Projected Annual Savings
          </h4>
          
          <div className="space-y-4">
            {savingsBreakdown?.map((item, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Icon 
                    name={item?.icon} 
                    size={20} 
                    color={`var(--color-${item?.color?.split('-')?.[1]})`}
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-foreground text-sm">
                        {item?.category}
                      </span>
                      <span className="font-bold text-success">
                        ₹{item?.amount?.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary">
                      {item?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-r from-success/10 to-primary/10 rounded-lg border border-success/20">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Icon name="TrendingUp" size={24} color="var(--color-success)" />
                <span className="text-lg font-semibold text-foreground">
                  Total Annual Savings
                </span>
              </div>
              <div className="text-3xl font-bold text-success mb-2">
                ₹{savings?.totalSavings?.toLocaleString('en-IN')}
              </div>
              <div className="text-sm text-text-secondary mb-4">
                ROI: {savings?.roiPercentage}% in first year
              </div>
              <Button variant="success" size="sm">
                Request Detailed Analysis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SuccessMetrics = () => {
  const [activeMetric, setActiveMetric] = useState('accuracy');

  const accuracyMetrics = [
    {
      id: 1,
      title: "Festival Surge Predictions",
      accuracy: 94,
      description: "Accurate prediction of patient surges during major festivals",
      trend: "+2.3%",
      icon: "Target",
      color: "text-success"
    },
    {
      id: 2,
      title: "Pollution-Related Admissions",
      accuracy: 87,
      description: "Precision in forecasting respiratory cases due to air quality",
      trend: "+1.8%",
      icon: "Wind",
      color: "text-primary"
    },
    {
      id: 3,
      title: "Seasonal Pattern Recognition",
      accuracy: 91,
      description: "Identification of recurring health patterns across seasons",
      trend: "+3.1%",
      icon: "Calendar",
      color: "text-warning"
    },
    {
      id: 4,
      title: "Emergency Department Load",
      accuracy: 89,
      description: "Prediction of ED capacity requirements and staffing needs",
      trend: "+2.7%",
      icon: "Activity",
      color: "text-error"
    }
  ];

  const performanceData = [
    {
      metric: "Hospitals Protected",
      value: "156+",
      description: "Healthcare facilities using our predictive intelligence",
      icon: "Building2",
      growth: "+23% this quarter"
    },
    {
      metric: "Lives Impacted",
      value: "2.3M+",
      description: "Patients benefiting from optimized healthcare delivery",
      icon: "Heart",
      growth: "+45% this year"
    },
    {
      metric: "Surge Events Predicted",
      value: "1,247",
      description: "Successfully forecasted healthcare surges",
      icon: "TrendingUp",
      growth: "+67% accuracy improvement"
    },
    {
      metric: "Cost Savings",
      value: "₹47.2Cr",
      description: "Healthcare cost optimization through predictive planning",
      icon: "IndianRupee",
      growth: "+34% operational efficiency"
    }
  ];

  const monthlyData = [
    { month: "Jan", predicted: 1250, actual: 1198, accuracy: 95.8 },
    { month: "Feb", predicted: 1180, actual: 1156, accuracy: 98.0 },
    { month: "Mar", predicted: 1420, actual: 1389, accuracy: 97.8 },
    { month: "Apr", predicted: 1350, actual: 1298, accuracy: 96.1 },
    { month: "May", predicted: 1580, actual: 1534, accuracy: 97.1 },
    { month: "Jun", predicted: 1680, actual: 1612, accuracy: 95.9 },
    { month: "Jul", predicted: 1750, actual: 1698, accuracy: 97.0 },
    { month: "Aug", predicted: 1620, actual: 1578, accuracy: 97.4 }
  ];

  const getAccuracyColor = (accuracy) => {
    if (accuracy >= 95) return "text-success";
    if (accuracy >= 90) return "text-primary";
    if (accuracy >= 85) return "text-warning";
    return "text-error";
  };

  return (
    <div className="bg-card rounded-lg border border-border shadow-clinical">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Success Metrics & Performance
            </h3>
            <p className="text-text-secondary text-sm">
              Real-time accuracy tracking and impact measurement
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-success">
            <Icon name="Award" size={16} />
            <span className="font-medium">Validated Results</span>
          </div>
        </div>

        {/* Metric Tabs */}
        <div className="flex space-x-1 bg-muted/50 p-1 rounded-lg">
          <button
            onClick={() => setActiveMetric('accuracy')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-intelligence ${
              activeMetric === 'accuracy' ?'bg-primary text-primary-foreground shadow-sm' :'text-text-secondary hover:text-foreground hover:bg-muted'
            }`}
          >
            Accuracy Metrics
          </button>
          <button
            onClick={() => setActiveMetric('performance')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-intelligence ${
              activeMetric === 'performance'
                ? 'bg-primary text-primary-foreground shadow-sm' :'text-text-secondary hover:text-foreground hover:bg-muted'
            }`}
          >
            Performance Data
          </button>
          <button
            onClick={() => setActiveMetric('trends')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-intelligence ${
              activeMetric === 'trends' ?'bg-primary text-primary-foreground shadow-sm' :'text-text-secondary hover:text-foreground hover:bg-muted'
            }`}
          >
            Monthly Trends
          </button>
        </div>
      </div>
      <div className="p-6">
        {activeMetric === 'accuracy' && (
          <div className="space-y-6">
            {/* Accuracy Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {accuracyMetrics?.map((metric) => (
                <div key={metric?.id} className="bg-muted/30 rounded-lg p-6 border border-border hover:border-primary/30 transition-intelligence">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center`}>
                      <Icon name={metric?.icon} size={24} color="white" />
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${getAccuracyColor(metric?.accuracy)}`}>
                        {metric?.accuracy}%
                      </div>
                      <div className="text-sm text-success font-medium">{metric?.trend}</div>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-foreground mb-2">{metric?.title}</h4>
                  <p className="text-sm text-text-secondary">{metric?.description}</p>
                  
                  {/* Accuracy Bar */}
                  <div className="mt-4">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-success to-primary"
                        style={{ width: `${metric?.accuracy}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Overall Performance Summary */}
            <div className="bg-success/5 rounded-lg p-6 border border-success/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
                  <Icon name="CheckCircle" size={24} color="white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-success mb-2">Outstanding Performance Achievement</h4>
                  <p className="text-sm text-text-secondary mb-4">
                    Our AI models consistently deliver industry-leading accuracy rates, with continuous improvement through machine learning and real-world validation.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">91%</div>
                      <div className="text-sm text-text-secondary">Average Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">+2.5%</div>
                      <div className="text-sm text-text-secondary">Monthly Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">99.2%</div>
                      <div className="text-sm text-text-secondary">System Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeMetric === 'performance' && (
          <div className="space-y-6">
            {/* Performance Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {performanceData?.map((item, index) => (
                <div key={index} className="bg-muted/30 rounded-lg p-6 border border-border text-center hover:border-primary/30 transition-intelligence">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={item?.icon} size={24} color="white" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{item?.value}</div>
                  <div className="text-sm font-medium text-foreground mb-2">{item?.metric}</div>
                  <div className="text-xs text-text-secondary mb-3">{item?.description}</div>
                  <div className="text-xs text-success font-medium">{item?.growth}</div>
                </div>
              ))}
            </div>

            {/* Impact Visualization */}
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h4 className="font-semibold text-primary mb-4">Healthcare Impact Visualization</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-foreground mb-3">Regional Coverage</h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary">North India</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="h-2 rounded-full bg-primary" style={{ width: '78%' }}></div>
                        </div>
                        <span className="text-sm font-medium text-foreground">78%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary">South India</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="h-2 rounded-full bg-primary" style={{ width: '65%' }}></div>
                        </div>
                        <span className="text-sm font-medium text-foreground">65%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary">West India</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="h-2 rounded-full bg-primary" style={{ width: '82%' }}></div>
                        </div>
                        <span className="text-sm font-medium text-foreground">82%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary">East India</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="h-2 rounded-full bg-primary" style={{ width: '71%' }}></div>
                        </div>
                        <span className="text-sm font-medium text-foreground">71%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium text-foreground mb-3">Hospital Types</h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary">Government Hospitals</span>
                      <span className="text-sm font-medium text-foreground">89 facilities</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary">Private Hospitals</span>
                      <span className="text-sm font-medium text-foreground">67 facilities</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary">Specialty Centers</span>
                      <span className="text-sm font-medium text-foreground">34 facilities</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary">Community Health</span>
                      <span className="text-sm font-medium text-foreground">23 facilities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeMetric === 'trends' && (
          <div className="space-y-6">
            {/* Monthly Accuracy Trend */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Monthly Prediction Accuracy Trends</h4>
              <div className="bg-muted/30 rounded-lg p-4 border border-border">
                <div className="grid grid-cols-1 lg:grid-cols-8 gap-4">
                  {monthlyData?.map((data, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xs text-text-secondary mb-2">{data?.month}</div>
                      <div className="relative h-24 bg-muted rounded-md mb-2 overflow-hidden">
                        <div 
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-primary/70 transition-all duration-500"
                          style={{ height: `${data?.accuracy}%` }}
                        ></div>
                      </div>
                      <div className={`text-sm font-medium ${getAccuracyColor(data?.accuracy)}`}>
                        {data?.accuracy}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trend Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-success/5 rounded-lg p-6 border border-success/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="TrendingUp" size={24} color="var(--color-success)" />
                  <h4 className="font-semibold text-success">Positive Trends</h4>
                </div>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={14} color="var(--color-success)" />
                    <span>Consistent 95%+ accuracy in festival predictions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={14} color="var(--color-success)" />
                    <span>Improved pollution-health correlation by 12%</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={14} color="var(--color-success)" />
                    <span>Reduced false positives by 23% this quarter</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="Target" size={24} color="var(--color-primary)" />
                  <h4 className="font-semibold text-primary">Focus Areas</h4>
                </div>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-center space-x-2">
                    <Icon name="ArrowRight" size={14} color="var(--color-primary)" />
                    <span>Enhancing rural hospital integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="ArrowRight" size={14} color="var(--color-primary)" />
                    <span>Expanding regional festival coverage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="ArrowRight" size={14} color="var(--color-primary)" />
                    <span>Improving long-term seasonal predictions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuccessMetrics;
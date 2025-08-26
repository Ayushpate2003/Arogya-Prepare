import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import Icon from '../../../components/AppIcon';

const InteractiveCharts = () => {
  const [selectedChart, setSelectedChart] = useState('seasonal');
  const [hoveredData, setHoveredData] = useState(null);

  const seasonalData = [
    { month: 'Jan', respiratory: 1250, cardiac: 890, digestive: 650, injuries: 420 },
    { month: 'Feb', respiratory: 1180, cardiac: 920, digestive: 580, injuries: 380 },
    { month: 'Mar', respiratory: 1420, cardiac: 1050, digestive: 720, injuries: 650 },
    { month: 'Apr', respiratory: 1350, cardiac: 980, digestive: 680, injuries: 590 },
    { month: 'May', respiratory: 1580, cardiac: 1120, digestive: 750, injuries: 680 },
    { month: 'Jun', respiratory: 1680, cardiac: 1200, digestive: 820, injuries: 720 },
    { month: 'Jul', respiratory: 1750, cardiac: 1150, digestive: 890, injuries: 780 },
    { month: 'Aug', respiratory: 1620, cardiac: 1080, digestive: 850, injuries: 740 },
    { month: 'Sep', respiratory: 1480, cardiac: 1020, digestive: 780, injuries: 680 },
    { month: 'Oct', respiratory: 1890, cardiac: 1280, digestive: 920, injuries: 850 },
    { month: 'Nov', respiratory: 2150, cardiac: 1450, digestive: 1050, injuries: 950 },
    { month: 'Dec', respiratory: 1980, cardiac: 1320, digestive: 980, injuries: 880 }
  ];

  const festivalImpactData = [
    { name: 'Holi', before: 1200, during: 1740, after: 1450, category: 'Eye/Skin' },
    { name: 'Eid', before: 980, during: 1295, after: 1120, category: 'Digestive' },
    { name: 'Diwali', before: 1450, during: 2580, after: 1890, category: 'Respiratory' },
    { name: 'Durga Puja', before: 1100, during: 1518, after: 1280, category: 'General' },
    { name: 'Ganesh Chaturthi', before: 1250, during: 1725, after: 1420, category: 'Crowd-related' },
    { name: 'Navratri', before: 1080, during: 1404, after: 1220, category: 'Fatigue/Dehydration' }
  ];

  const pollutionHealthData = [
    { aqi: '0-50', respiratory: 120, cardiac: 80, total: 200, color: '#10B981' },
    { aqi: '51-100', respiratory: 280, cardiac: 150, total: 430, color: '#F59E0B' },
    { aqi: '101-150', respiratory: 450, cardiac: 220, total: 670, color: '#EF4444' },
    { aqi: '151-200', respiratory: 680, cardiac: 320, total: 1000, color: '#8B5CF6' },
    { aqi: '201-300', respiratory: 920, cardiac: 450, total: 1370, color: '#6B7280' },
    { aqi: '300+', respiratory: 1250, cardiac: 680, total: 1930, color: '#1F2937' }
  ];

  const departmentLoadData = [
    { name: 'Emergency', value: 35, color: '#EF4444' },
    { name: 'ICU', value: 25, color: '#F59E0B' },
    { name: 'General Ward', value: 20, color: '#10B981' },
    { name: 'Outpatient', value: 15, color: '#3B82F6' },
    { name: 'Surgery', value: 5, color: '#8B5CF6' }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-clinical">
          <p className="font-semibold text-foreground mb-2">{label}</p>
          {payload?.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry?.color }}>
              {entry?.name}: {entry?.value?.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const chartTypes = [
    { id: 'seasonal', name: 'Seasonal Patterns', icon: 'Calendar' },
    { id: 'festivals', name: 'Festival Impact', icon: 'Sparkles' },
    { id: 'pollution', name: 'Pollution Correlation', icon: 'Wind' },
    { id: 'departments', name: 'Department Load', icon: 'Building2' }
  ];

  return (
    <div className="bg-card rounded-lg border border-border shadow-clinical">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Interactive Healthcare Analytics
            </h3>
            <p className="text-text-secondary text-sm">
              Seasonal patterns and cultural health correlations for Indian healthcare
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-primary">
            <Icon name="BarChart3" size={16} />
            <span className="font-medium">Live Data Visualization</span>
          </div>
        </div>

        {/* Chart Type Selector */}
        <div className="flex flex-wrap gap-2">
          {chartTypes?.map((chart) => (
            <button
              key={chart?.id}
              onClick={() => setSelectedChart(chart?.id)}
              className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg transition-intelligence ${
                selectedChart === chart?.id
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-muted/50 text-text-secondary hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={chart?.icon} size={16} />
              <span>{chart?.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="p-6">
        {selectedChart === 'seasonal' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">Monthly Healthcare Patterns</h4>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-error rounded-full"></div>
                  <span className="text-text-secondary">Respiratory</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <span className="text-text-secondary">Cardiac</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-text-secondary">Digestive</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-text-secondary">Injuries</span>
                </div>
              </div>
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={seasonalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="month" stroke="var(--color-text-secondary)" />
                  <YAxis stroke="var(--color-text-secondary)" />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="respiratory" stackId="1" stroke="#EF4444" fill="#EF4444" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="cardiac" stackId="1" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="digestive" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="injuries" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
              <div className="flex items-start space-x-3">
                <Icon name="TrendingUp" size={20} color="var(--color-primary)" className="mt-0.5" />
                <div>
                  <h5 className="font-semibold text-primary mb-2">Seasonal Insights</h5>
                  <p className="text-sm text-text-secondary">
                    Peak respiratory cases occur during November-December (Diwali season) with 78% increase. 
                    Cardiac events spike during summer months (May-July) due to heat stress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedChart === 'festivals' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">Festival Health Impact Analysis</h4>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-text-secondary">Before</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-error rounded-full"></div>
                  <span className="text-text-secondary">During</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <span className="text-text-secondary">After</span>
                </div>
              </div>
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={festivalImpactData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="name" stroke="var(--color-text-secondary)" />
                  <YAxis stroke="var(--color-text-secondary)" />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="before" fill="#10B981" name="Before Festival" />
                  <Bar dataKey="during" fill="#EF4444" name="During Festival" />
                  <Bar dataKey="after" fill="#F59E0B" name="After Festival" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-error/5 rounded-lg p-4 border border-error/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="AlertTriangle" size={16} color="var(--color-error)" />
                  <span className="font-semibold text-error">Highest Impact</span>
                </div>
                <p className="text-sm text-text-secondary">
                  Diwali shows 78% increase in admissions, primarily respiratory cases due to air pollution.
                </p>
              </div>
              <div className="bg-warning/5 rounded-lg p-4 border border-warning/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Clock" size={16} color="var(--color-warning)" />
                  <span className="font-semibold text-warning">Duration Pattern</span>
                </div>
                <p className="text-sm text-text-secondary">
                  Most festivals show peak impact during celebration with 2-3 day recovery period.
                </p>
              </div>
              <div className="bg-success/5 rounded-lg p-4 border border-success/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Shield" size={16} color="var(--color-success)" />
                  <span className="font-semibold text-success">Preparedness</span>
                </div>
                <p className="text-sm text-text-secondary">
                  94% accuracy in predicting surge patterns enables proactive resource allocation.
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedChart === 'pollution' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">AQI vs Healthcare Admissions Correlation</h4>
              <div className="text-sm text-text-secondary">
                Strong correlation: R² = 0.89
              </div>
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={pollutionHealthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="aqi" stroke="var(--color-text-secondary)" />
                  <YAxis stroke="var(--color-text-secondary)" />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="respiratory" fill="#EF4444" name="Respiratory Cases" />
                  <Bar dataKey="cardiac" fill="#F59E0B" name="Cardiac Cases" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-warning/5 rounded-lg p-4 border border-warning/20">
              <div className="flex items-start space-x-3">
                <Icon name="Wind" size={20} color="var(--color-warning)" className="mt-0.5" />
                <div>
                  <h5 className="font-semibold text-warning mb-2">Pollution Health Impact</h5>
                  <p className="text-sm text-text-secondary mb-3">
                    Clear exponential relationship between AQI levels and hospital admissions. 
                    AQI above 200 correlates with 300% increase in respiratory cases.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-foreground">Critical Threshold:</span>
                      <span className="text-text-secondary ml-2">AQI 150+</span>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Peak Risk:</span>
                      <span className="text-text-secondary ml-2">AQI 300+ (Emergency)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedChart === 'departments' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">Department-wise Load Distribution</h4>
              <div className="text-sm text-text-secondary">
                During surge periods
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={departmentLoadData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {departmentLoadData?.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry?.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-4">
                <h5 className="font-semibold text-foreground">Department Insights</h5>
                {departmentLoadData?.map((dept, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: dept?.color }}
                      ></div>
                      <span className="font-medium text-foreground">{dept?.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-foreground">{dept?.value}%</div>
                      <div className="text-xs text-text-secondary">of total load</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
              <div className="flex items-start space-x-3">
                <Icon name="Building2" size={20} color="var(--color-primary)" className="mt-0.5" />
                <div>
                  <h5 className="font-semibold text-primary mb-2">Resource Allocation Insights</h5>
                  <p className="text-sm text-text-secondary">
                    Emergency departments bear the highest load during surges (35%), followed by ICU capacity (25%). 
                    Predictive staffing recommendations help optimize resource distribution across departments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveCharts;
import React, { useEffect, useRef, useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OfficeLocationsMap = () => {
  const [selectedOffice, setSelectedOffice] = useState('delhi');
  const GOOGLE_MAPS_API_KEY = import.meta?.env?.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyB8Z_-iHVW8GNPj9b7RXaM0SA1SMxwvYbk';
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const [mapsReady, setMapsReady] = useState(!!(typeof window !== 'undefined' && window.google && window.google.maps));

  const offices = [
    {
      id: 'delhi',
      city: 'New Delhi',
      region: 'North India Headquarters',
      address: `Arogya-Prepare Technologies Pvt. Ltd.\nPlot No. 45, Sector 44\nGurgaon, Haryana 122003`,
      phone: '+91 11 4567 8900',
      email: 'delhi@arogya-prepare.com',
      hours: 'Monday - Saturday: 9:00 AM - 7:00 PM',
      coordinates: '28.4595,77.0266',
      specialties: ['Government Relations', 'North India Sales', 'Training Center'],
      status: 'well'
    },
    {
      id: 'mumbai',
      city: 'Mumbai',
      region: 'West India Operations',
      address: `Arogya-Prepare West\nLevel 12, Tower A\nBandra Kurla Complex\nMumbai, Maharashtra 400051`,
      phone: '+91 22 4567 8902',
      email: 'mumbai@arogya-prepare.com',
      hours: 'Monday - Saturday: 9:00 AM - 7:00 PM',
      coordinates: '19.0760,72.8777',
      specialties: ['Corporate Partnerships', 'Financial Services', 'West Coast Sales'],
      status: 'moderate'
    },
    {
      id: 'bangalore',
      city: 'Bangalore',
      region: 'Technology & Innovation Hub',
      address: `Arogya-Prepare Innovation Center\nManyata Tech Park\nBlock B, 4th Floor\nBangalore, Karnataka 560045`,
      phone: '+91 80 4567 8901',
      email: 'bangalore@arogya-prepare.com',
      hours: 'Monday - Saturday: 9:00 AM - 7:00 PM',
      coordinates: '12.9716,77.5946',
      specialties: ['R&D Center', 'Technical Support', 'AI Development'],
      status: 'well'
    },
    {
      id: 'chennai',
      city: 'Chennai',
      region: 'South India Operations',
      address: `Arogya-Prepare South\nTidel Park, Block 4\n4th Floor, Canal Bank Road\nChennai, Tamil Nadu 600113`,
      phone: '+91 44 4567 8904',
      email: 'chennai@arogya-prepare.com',
      hours: 'Monday - Saturday: 9:00 AM - 7:00 PM',
      coordinates: '13.0827,80.2707',
      specialties: ['South India Sales', 'Regional Support', 'Medical Partnerships'],
      status: 'well'
    },
    {
      id: 'kolkata',
      city: 'Kolkata',
      region: 'East India Node',
      address: `Arogya-Prepare East\nSector V, Salt Lake\nKolkata, West Bengal`,
      phone: '+91 33 4567 8903',
      email: 'kolkata@arogya-prepare.com',
      hours: 'Monday - Saturday: 9:00 AM - 7:00 PM',
      coordinates: '22.5726,88.3639',
      specialties: ['Public Health', 'Analytics'],
      status: 'moderate'
    }
  ];

  const selectedOfficeData = offices?.find(office => office?.id === selectedOffice);

  // Load Google Maps script once
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.google && window.google.maps) {
      setMapsReady(true)
      return
    }
    const scriptId = 'google-maps-js'
    const existing = document.getElementById(scriptId)
    const onLoad = () => setMapsReady(true)
    if (existing) {
      existing.addEventListener('load', onLoad, { once: true })
      return () => existing.removeEventListener('load', onLoad)
    }
    const script = document.createElement('script')
    script.id = scriptId
    script.async = true
    script.defer = true
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`
    script.addEventListener('load', onLoad, { once: true })
    document.body.appendChild(script)
    return () => script.removeEventListener('load', onLoad)
  }, [GOOGLE_MAPS_API_KEY])

  // Initialize map and markers
  useEffect(() => {
    if (!mapsReady) return
    if (!mapInstanceRef.current && mapRef.current) {
      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: 22.9734, lng: 78.6569 },
        zoom: 5,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      })
    }

    // Clear previous markers
    markersRef.current.forEach(m => m.setMap(null))
    markersRef.current = []

    const getStatusColor = (status) => {
      switch (status) {
        case 'well':
          return '#22c55e' // green
        case 'moderate':
          return '#f59e0b' // amber
        case 'risk':
          return '#ef4444' // red
        default:
          return '#3b82f6' // blue
      }
    }

    offices.forEach((office) => {
      const [latStr, lngStr] = office.coordinates.split(',')
      const position = { lat: parseFloat(latStr), lng: parseFloat(lngStr) }
      const color = getStatusColor(office.status)

      const svgMarker = {
        path: 'M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z',
        fillColor: color,
        fillOpacity: 1,
        strokeWeight: 1,
        strokeColor: '#ffffff',
        scale: 1.2,
        anchor: new window.google.maps.Point(12, 22)
      }

      const marker = new window.google.maps.Marker({
        position,
        map: mapInstanceRef.current,
        title: office.city,
        icon: svgMarker
      })

      marker.addListener('click', () => {
        setSelectedOffice(office.id)
        mapInstanceRef.current?.panTo(position)
        mapInstanceRef.current?.setZoom(6)
      })

      markersRef.current.push(marker)
    })
  }, [mapsReady, offices])

  return (
    <div className="bg-card rounded-xl shadow-clinical-lg border border-border overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
            <Icon name="MapPin" size={24} color="var(--color-secondary)" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">Office Locations</h3>
            <p className="text-text-secondary">Visit us at our regional offices across India</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {offices?.map((office) => (
            <Button
              key={office?.id}
              variant={selectedOffice === office?.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedOffice(office?.id)}
            >
              {office?.city}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Map Section */}
        <div className="h-80 lg:h-96 relative">
          <div ref={mapRef} className="absolute inset-0 rounded-lg" />
          <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-clinical">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full pulse-intelligence"></div>
              <span className="text-sm font-medium text-foreground">{selectedOfficeData?.city} Office</span>
            </div>
          </div>
        </div>

        {/* Office Details */}
        <div className="p-6 space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-1">{selectedOfficeData?.city}</h4>
            <p className="text-text-secondary text-sm mb-4">{selectedOfficeData?.region}</p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={18} color="var(--color-text-secondary)" className="mt-1" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Address</p>
                  <p className="text-sm text-text-secondary whitespace-pre-line">{selectedOfficeData?.address}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={18} color="var(--color-text-secondary)" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Phone</p>
                  <p className="text-sm text-text-secondary">{selectedOfficeData?.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={18} color="var(--color-text-secondary)" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Email</p>
                  <p className="text-sm text-text-secondary">{selectedOfficeData?.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={18} color="var(--color-text-secondary)" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Business Hours</p>
                  <p className="text-sm text-text-secondary">{selectedOfficeData?.hours}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground mb-2">Specialties</p>
            <div className="flex flex-wrap gap-2">
              {selectedOfficeData?.specialties?.map((specialty, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="default"
              iconName="Navigation"
              iconPosition="left"
              className="flex-1"
            >
              Get Directions
            </Button>
            <Button
              variant="outline"
              iconName="Calendar"
              iconPosition="left"
              className="flex-1"
            >
              Schedule Visit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocationsMap;
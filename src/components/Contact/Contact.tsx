// Business info data
const businessInfo = {
  phone: '+91 7024788478',
  address: '327/38, Mangal Udyog Nagar, Nemawar Road, Palda, Indore, near Surya Vatika',
  email: 'prakharfrozenfoods@gmail.com',
  hours: [
    { day: 'Monday', openTime: '9:00 AM', closeTime: '6:00 PM', isClosed: false },
    { day: 'Tuesday', openTime: '9:00 AM', closeTime: '6:00 PM', isClosed: false },
    { day: 'Wednesday', openTime: '9:00 AM', closeTime: '6:00 PM', isClosed: false },
    { day: 'Thursday', openTime: '9:00 AM', closeTime: '6:00 PM', isClosed: false },
    { day: 'Friday', openTime: '9:00 AM', closeTime: '6:00 PM', isClosed: false },
    { day: 'Saturday', openTime: '9:00 AM', closeTime: '6:00 PM', isClosed: false },
    { day: 'Sunday', openTime: '', closeTime: '', isClosed: true }
  ]
};

type BusinessHours = {
  day: string;
  openTime: string;
  closeTime: string;
  isClosed: boolean;
};

const Contact = () => {
  // Group business hours for better display
  const groupedHours = businessInfo.hours.reduce((acc, hour) => {
    if (hour.isClosed) {
      acc[hour.day] = [hour];
    } else {
      const key = `${hour.openTime}-${hour.closeTime}`;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(hour);
    }
    return acc;
  }, {} as Record<string, BusinessHours[]>);

  // Format day names for display
  const formatDayNames = (days: BusinessHours[]) => {
    if (days.length === 1) {
      return days[0].day;
    }
    
    // Check if it's Monday to Saturday (6 consecutive days)
    const dayOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayNames = days.map(d => d.day);
    
    if (dayNames.length === 6 && dayOrder.every(day => dayNames.includes(day))) {
      return 'Monday to Saturday';
    }
    
    return days.map(day => day.day).join(', ');
  };

  // Format phone number for display
  const formatPhoneDisplay = (phone: string) => {
    // Handle Indian phone numbers (+91 xxxxxxxxxx)
    if (phone.startsWith('+91')) {
      return phone; // Return as is for Indian numbers
    }
    // Fallback for other formats
    return phone.replace(/\D/g, '').replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '+$1 ($2) $3-$4');
  };

  // Format phone number for tel: link
  const formatPhoneLink = (phone: string) => {
    return phone.replace(/\D/g, '');
  };

  return (
    <section id="contact" className="py-8 lg:py-16 bg-gradient-to-br from-primary-50 via-white to-primary-50/50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary-200/20 to-primary-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-primary-300/15 to-primary-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-primary-200/20 rounded-full blur-2xl" />
      </div>
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ae7c40 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-max section-padding relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-6 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
            <div className="relative">
              <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm bg-white px-4 py-2 rounded-full shadow-lg shadow-primary-600/20 border border-primary-200">
                Contact Us
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-full blur-lg" />
            </div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-neutral-800 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-neutral-800 via-primary-700 to-neutral-800 bg-clip-text text-transparent">
              Connect With Us
            </span>
          </h2>
          
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Partner with Prakhar Foods for reliable sourcing solutions and consistent quality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Enhanced Contact Information */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl shadow-primary-600/10 hover:shadow-2xl hover:shadow-primary-600/20 transition-all duration-500 hover:scale-[1.02] border border-primary-100/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/30 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-serif font-bold text-neutral-800 mb-2 group-hover:text-primary-700 transition-colors duration-300">
                    Phone
                  </h3>
                  <a 
                    href={`tel:${formatPhoneLink(businessInfo.phone)}`}
                    className="text-lg text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200 touch-target block group-hover:scale-105 transform transition-transform duration-300"
                  >
                    {formatPhoneDisplay(businessInfo.phone)}
                  </a>
                  <p className="text-neutral-600 text-sm mt-1 leading-relaxed">
                    Professional consultation for orders and inquiries
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl shadow-primary-600/10 hover:shadow-2xl hover:shadow-primary-600/20 transition-all duration-500 hover:scale-[1.02] border border-primary-100/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/30 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-serif font-bold text-neutral-800 mb-2 group-hover:text-primary-700 transition-colors duration-300">
                    Address
                  </h3>
                  <a 
                    href="https://maps.app.goo.gl/75aGs9hEiufUufny5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-primary-600 hover:text-primary-700 not-italic leading-relaxed transition-colors duration-200 block touch-target group-hover:scale-105 transform transition-transform duration-300"
                  >
                    {businessInfo.address}
                  </a>
                  <p className="text-neutral-600 text-sm mt-1 leading-relaxed">
                    Visit our facility for premium food solutions
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl shadow-primary-600/10 hover:shadow-2xl hover:shadow-primary-600/20 transition-all duration-500 hover:scale-[1.02] border border-primary-100/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/30 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-serif font-bold text-neutral-800 mb-2 group-hover:text-primary-700 transition-colors duration-300">
                    Email
                  </h3>
                  <a 
                    href={`mailto:${businessInfo.email}?subject=Inquiry%20about%20Food%20Products&body=Hello%20Prakhar%20Foods,%0D%0A%0D%0AI%20would%20like%20to%20inquire%20about%20your%20food%20products.%0D%0A%0D%0AThank%20you.`}
                    className="text-base text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200 touch-target block break-all group-hover:scale-105 transform transition-transform duration-300"
                  >
                    {businessInfo.email}
                  </a>
                  <p className="text-neutral-600 text-sm mt-1 leading-relaxed">
                    For corporate partnerships and bulk inquiries
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Business Hours */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl shadow-primary-600/10 border border-primary-100/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200/20 to-primary-300/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-primary-300/15 to-primary-400/10 rounded-full blur-xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-neutral-800">
                  Business Hours
                </h3>
              </div>

              <div className="space-y-4">
                {Object.entries(groupedHours).map(([timeRange, days]) => (
                  <div key={timeRange} className="flex justify-between items-center py-3 px-4 bg-gradient-to-r from-primary-50/50 to-transparent rounded-xl border border-primary-100/30 hover:from-primary-50 transition-all duration-300">
                    <div className="flex flex-col">
                      <span className="font-semibold text-neutral-800 text-base">
                        {days[0].isClosed ? days[0].day : formatDayNames(days)}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-primary-600 font-bold text-base">
                        {days[0].isClosed ? 'Closed' : timeRange}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Special Hours Note */}
              <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-xl border border-primary-200/50">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-800 mb-1">
                      Holiday Hours
                    </p>
                    <p className="text-xs text-primary-700 leading-relaxed">
                      Hours may vary during holidays. Please call ahead to confirm availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
'use client';

import { useState, useEffect } from 'react';
import { Check, Shield, Zap, Lock, Clock, BookOpen, Headphones, Star, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-black min-h-screen overflow-hidden">
      <HeroSection />
      <WhyTrustUsSection />
      <PricingSection />
      <LimitedOfferSection timeLeft={timeLeft} />
      <TestimonialsSection />
      <SafetySection />
      <FinalCTASection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-700/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <Particles />

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center space-y-8 animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          🔥 Premium Video Bundle 🔥
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Get instant access to our <span className="text-red-500 font-semibold">exclusive collection</span> of premium content.
          <span className="text-yellow-400 font-semibold"> Over 500+ videos</span> waiting for you!
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-12">
          <USPItem icon={<Zap className="w-6 h-6" />} text="One-time Payment" />
          <USPItem icon={<Clock className="w-6 h-6" />} text="Instant Delivery" />
          <USPItem icon={<Shield className="w-6 h-6" />} text="Lifetime Access" />
        </div>

        <div className="pt-8">
          <Button
  onClick={() => {
    const el = document.getElementById("pricing");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }}
  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-8 text-xl font-bold rounded-full shadow-2xl shadow-red-600/50 transition-all duration-300 hover:scale-105"
>
  🎬 Get Instant Access Now
</Button>

        </div>
      </div>
    </section>
  );
}

function USPItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 text-white">
      <div className="p-3 bg-red-600/20 rounded-full border border-red-600/50">
        {icon}
      </div>
      <span className="font-medium">{text}</span>
    </div>
  );
}

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-red-500 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}
        ></div>
      ))}
    </div>
  );
}

function WhyTrustUsSection() {
  return (
    <section id="pricing" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 animate-fadeIn">
          Why Trust Us? 🤝
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <TrustItem icon="📚" color="bg-blue-600" text="500+ Videos Library" />
          <TrustItem icon="⚡" color="bg-yellow-500" text="Instant Access" />
          <TrustItem icon="🔒" color="bg-green-600" text="100% Private" />
          <TrustItem icon="💰" color="bg-orange-600" text="One-time Payment" />
          <TrustItem icon="💬" color="bg-red-600" text="24/7 Support" />
        </div>

        <Card className="bg-gradient-to-br from-red-950/50 to-red-900/30 border-red-600/50 backdrop-blur">
          <CardContent className="p-8">
            <div className="flex gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-white text-lg italic mb-4">
              "Best purchase I've made! The quality is outstanding and the collection is massive.
              Instant delivery and lifetime access makes it totally worth it. Highly recommended!"
            </p>
            <p className="text-gray-300 font-semibold">- Rajesh K., Mumbai</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function TrustItem({ icon, color, text }: { icon: string; color: string; text: string }) {
  return (
    <div className="flex flex-col items-center gap-3 animate-fadeIn">
      <div className={`w-20 h-20 ${color} rounded-full flex items-center justify-center text-4xl shadow-lg`}>
        {icon}
      </div>
      <p className="text-white text-sm text-center font-medium">{text}</p>
    </div>
  );
}

function PricingSection() {
  const pricingPlans = [
    {
      name: 'Premium',
      emoji: '🎬',
      price: '₹299',
      features: [
        '200+ Premium Videos',
        'HD Quality Content',
        'Instant Download',
        'Lifetime Access',
        'Regular Updates'
      ],
      buttonColor: 'from-orange-500 to-orange-600',
      checkoutUrl: 'https://your-store.myshopify.com/cart/premium-299'
    },
    {
      name: 'Ultimate',
      emoji: '👑',
      price: '₹399',
      features: [
        '400+ Premium Videos',
        'Full HD Quality',
        'Priority Support',
        'Exclusive Categories',
        'Lifetime Access',
        'Weekly New Content'
      ],
      buttonColor: 'from-yellow-500 to-yellow-600',
      checkoutUrl: 'https://your-store.myshopify.com/cart/ultimate-399',
      popular: true
    },
    {
      name: 'Exclusive',
      emoji: '💎',
      price: '₹499',
      features: [
        '500+ Premium Videos',
        '4K Ultra HD Quality',
        'VIP Support',
        'All Categories Unlocked',
        'Lifetime Access',
        'Daily New Content',
        'Bonus Content Pack'
      ],
      buttonColor: 'from-blue-500 to-blue-600',
      checkoutUrl: 'https://your-store.myshopify.com/cart/exclusive-499'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 animate-fadeIn">
          Choose Your Package 📦
        </h2>
        <p className="text-gray-400 text-center mb-16">Select the perfect bundle for you</p>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br from-gray-900 to-black border ${
                plan.popular ? 'border-yellow-500/50 scale-105' : 'border-gray-800'
              } backdrop-blur transition-transform hover:scale-105 relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              <CardContent className="p-8">
                <div className="text-6xl mb-4 text-center">{plan.emoji}</div>
                <h3 className="text-3xl font-bold text-white text-center mb-2">{plan.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">one-time</span>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => window.location.href = plan.checkoutUrl}
                  className={`w-full bg-gradient-to-r ${plan.buttonColor} hover:opacity-90 text-white py-6 text-lg font-bold rounded-lg transition-all`}
                >
                  Get {plan.name} - {plan.price}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function LimitedOfferSection({ timeLeft }: { timeLeft: { hours: number; minutes: number; seconds: number } }) {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center shadow-2xl shadow-red-600/50">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-white" />
              <span className="text-white text-xl md:text-2xl font-bold">
                ⚠️ Limited Time Offer Ending Soon!
              </span>
            </div>

            <div className="flex gap-4">
              <TimeBox value={timeLeft.hours} label="Hours" />
              <TimeBox value={timeLeft.minutes} label="Minutes" />
              <TimeBox value={timeLeft.seconds} label="Seconds" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-black/30 backdrop-blur rounded-lg px-4 py-2 min-w-[80px]">
      <div className="text-3xl font-bold text-white">{String(value).padStart(2, '0')}</div>
      <div className="text-xs text-gray-300">{label}</div>
    </div>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Amit S.',
      city: 'Delhi',
      rating: 5,
      text: 'Amazing quality and huge collection! Worth every penny. Got instant access and support was super helpful.'
    },
    {
      name: 'Priya M.',
      city: 'Bangalore',
      rating: 5,
      text: 'Best decision ever! The variety is incredible and everything works perfectly. Highly recommended!'
    },
    {
      name: 'Vikram R.',
      city: 'Pune',
      rating: 5,
      text: 'Outstanding service! Instant delivery and lifetime access is a game changer. Content quality is top-notch.'
    },
    {
      name: 'Rahul K.',
      city: 'Mumbai',
      rating: 5,
      text: 'Exceeded my expectations! The collection is massive and always updated. Customer support is excellent too.'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 animate-fadeIn">
          What Our Customers Say 💬
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-blue-950/30 to-black border-blue-900/50 backdrop-blur hover:border-blue-700/50 transition-all"
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 text-sm">{testimonial.text}</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.city}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function SafetySection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <SafetyItem icon={<Shield />} text="Secure Payment" color="text-green-500" />
          <SafetyItem icon={<Zap />} text="Instant Delivery" color="text-yellow-500" />
          <SafetyItem icon={<Lock />} text="18+ Content" color="text-red-500" />
          <SafetyItem icon={<Shield />} text="Data Protected" color="text-blue-500" />
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all hover:scale-105"
          >
            Need Help? Chat with Support →
          </Button>
        </div>
      </div>
    </section>
  );
}

function SafetyItem({ icon, text, color }: { icon: React.ReactNode; text: string; color: string }) {
  return (
    <div className="flex flex-col items-center gap-3 animate-fadeIn">
      <div className={`p-4 bg-gray-900 rounded-full ${color}`}>
        {icon}
      </div>
      <p className="text-white text-sm text-center font-medium">{text}</p>
    </div>
  );
}

function FinalCTASection() {
  const finalPlans = [
    {
      name: 'Premium',
      price: '₹299',
      color: 'from-orange-500 to-orange-600',
      url: 'https://your-store.myshopify.com/cart/premium-299'
    },
    {
      name: 'Ultimate',
      price: '₹399',
      color: 'from-yellow-500 to-yellow-600',
      url: 'https://your-store.myshopify.com/cart/ultimate-399'
    },
    {
      name: 'Exclusive',
      price: '₹499',
      color: 'from-blue-500 to-blue-600',
      url: 'https://your-store.myshopify.com/cart/exclusive-499'
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-red-900/20 to-black"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-fadeIn">
          Ready to Make Your Night Special? 🌙
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Join thousands of satisfied customers today!
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {finalPlans.map((plan, index) => (
            <Button
              key={index}
              onClick={() => window.location.href = plan.url}
              size="lg"
              className={`bg-gradient-to-r ${plan.color} hover:opacity-90 text-white px-12 py-8 text-xl font-bold rounded-full shadow-2xl transition-all hover:scale-105`}
            >
              {plan.name} - {plan.price}
            </Button>
          ))}
        </div>

        <p className="text-gray-400 mt-12 text-sm">
          🔒 Secure Payment • ⚡ Instant Access • 🔄 Lifetime Updates
        </p>
      </div>
    </section>
  );
}

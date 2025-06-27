import React, { useEffect, useState } from 'react';
import Loading from '../Loading';

const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 1 second
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          At HobbyHub, we believe that hobbies are more than just pastimes — they're gateways to meaningful connections, creativity, and personal growth.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div>
          <img
            src="https://i.ibb.co/Wv0X7nwv/Group-discussion-cuate.png"
            alt="HobbyHub Community"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-5 text-gray-700 text-base leading-relaxed">
          <p>
            HobbyHub is a platform built to connect passionate individuals with shared interests. Whether you're into photography, cooking, painting, or gaming — there's a place for everyone here.
          </p>
          <p>
            We provide tools for creating and joining hobby groups, organizing meetups, sharing knowledge, and celebrating progress together. Our mission is to turn hobbies into joyful, shared experiences.
          </p>
          <p>
            Started in 2025 by a small team of creators, HobbyHub has grown into a diverse and welcoming community. We're driven by the belief that connection and creativity go hand in hand.
          </p>
          <p className="font-medium text-gray-900">
            Join us and be a part of something that inspires, uplifts, and grows with you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

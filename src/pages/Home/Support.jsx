import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaQuestionCircle, FaBug, FaEnvelope, FaUserShield } from 'react-icons/fa';
import Loading from '../Loading';

const Support = () => {

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
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">We're Here to Help</h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Whether you have a question, found a bug, or need guidance — our team is ready to support you.
                </p>
            </div>

            {/* Support Topics Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

                <Link to='/#faq'>
                    <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition">
                        <FaQuestionCircle className="text-3xl mx-auto mb-3 text-blue-600" />
                        <h3 className="text-lg font-semibold mb-2">FAQs</h3>
                        <p className="text-sm text-gray-600">Find answers to common questions about HobbyHub.</p>
                    </div>
                </Link>

                <Link to='/contact'>
                    <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition">
                        <FaBug className="text-3xl mx-auto mb-3 text-red-500" />
                        <h3 className="text-lg font-semibold mb-2">Report a Bug</h3>
                        <p className="text-sm text-gray-600">Spotted something broken? Let us know and we'll fix it fast.</p>
                    </div>
                </Link>

                <Link to='/contact'>
                    <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition">
                        <FaEnvelope className="text-3xl mx-auto mb-3 text-green-500" />
                        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                        <p className="text-sm text-gray-600">Reach out via our contact page for any direct inquiries.</p>
                    </div>
                </Link>

                <Link>
                    <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition">
                        <FaUserShield className="text-3xl mx-auto mb-3 text-purple-500" />
                        <h3 className="text-lg font-semibold mb-2">Account Help</h3>
                        <p className="text-sm text-gray-600">Need help accessing your account? We’ve got your back.</p>
                    </div>
                </Link>

            </div>

            {/* CTA */}
            <div className="text-center mt-16">
                <h2 className="text-2xl font-semibold mb-4">Still need help?</h2>
                <p className="text-gray-600 mb-6">Our support team is available 24/7 to answer your questions.</p>
                <Link
                    to="/contact"
                    className="inline-block bg-blue-100 font-semibold px-6 py-2 rounded-md hover:bg-blue-200  transition"
                >
                    Contact Support
                </Link>
            </div>
        </section>
    );
};

export default Support;

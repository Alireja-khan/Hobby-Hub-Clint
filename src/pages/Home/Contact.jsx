import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import Loading from '../Loading';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(true);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_r28enj9", "template_vqgxz3l", form.current, 'wkLmEE87aqOf86SJh')
            .then(
                () => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Message Sent!',
                        text: 'We’ll get back to you soon.',
                        timer: 3000,
                        showConfirmButton: false,
                    });
                    form.current.reset();
                },
                (error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong. Please try again later.',
                    });
                }
            );
    };


    

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
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-600 text-lg max-w-xl mx-auto">
                    Have a question or want to collaborate? Fill out the form below or reach us through our contact details.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Contact Info */}
                <div className="space-y-6 text-gray-700">
                    <div>
                        <h4 className="text-xl font-semibold mb-2">Email</h4>
                        <p>alirejakhan18.com</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-2">Phone</h4>
                        <p>+880 1234 567890</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-2">Location</h4>
                        <p>Habiganj, Sylhet, Bangladesh</p>
                    </div>
                </div>

                {/* Contact Form */}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="bg-white shadow-lg rounded-xl p-8 space-y-6"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Enter your name"
                            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Enter your email"
                            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            name="message"
                            rows="5"
                            required
                            placeholder="Write your message here..."
                            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-100 font-semibold px-6 py-2 rounded-md hover:bg-blue-200 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;

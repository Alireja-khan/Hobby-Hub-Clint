import React, { useEffect, useState } from 'react';
import Loading from '../Loading';
import Hero from './Hero';
import Featured from './Featured';
import OurAchievement from './OurAchievement';
import Blog from './Blog';
import FAQ from './FAQ';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        fetch('https://hobbyhub-server-three.vercel.app/featured-groups')
            .then(res => res.json())
            .then(data => {
                setGroups(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching featured groups:', error);
                setLoading(false);
            });
    }, []);


    useEffect(() => {
        if (location.hash) {
            const target = document.querySelector(location.hash);
            if (target) {
                // small timeout ensures the page has loaded
                setTimeout(() => {
                    target.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location]);



    if (loading) return <Loading />;

    return (
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Hero></Hero>
            <Featured groups={groups}></Featured>
            <Blog></Blog>
            <FAQ></FAQ>
            <OurAchievement></OurAchievement>
        </div>
    );
};

export default Home;

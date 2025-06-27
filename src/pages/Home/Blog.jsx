import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
// import './Blog.css';

const blogs = [
    {
        "id": "1",
        "title": "Top 5 Photography Spots in Dhaka",
        "category": "Photography",
        "tags": ["Photography", "Dhaka", "Outdoor"],
        "author": "Nusrat Jahan",
        "date": "2025-06-26",
        "readTime": "3 min",
        "authorImage": "https://i.ibb.co/fdnvYKCg/Pakhi2.png",
        "coverImage": "https://i.ibb.co/nqtVfcrd/banani-2978376.jpg",
        "excerpt": "Discover the most photogenic places in Dhaka, from the serene Hatirjheel to the colorful alleys of Old Town.",
        "content": "Dhaka, the heart of Bangladesh, is a treasure trove for photographers. Beyond its busy streets lies a canvas of vibrant life, architectural marvels, and serene escapes. Whether you’re an aspiring photographer or a seasoned shutterbug, these five spots will transform your portfolio:\n\n1. **Hatirjheel:** At sunrise or sunset, Hatirjheel becomes a dreamy landscape with mirrored reflections of the city lights dancing on the water. The modern bridges, curving roads, and tranquil lakeside views offer perfect compositions for cityscape lovers.\n\n2. **Lalbagh Fort:** Built in the 17th century, Lalbagh Fort stands as a majestic reminder of Mughal architecture. Its sandstone walls, ornate gates, and lush gardens provide both historical context and striking backdrops for portraits or dramatic architectural shots.\n\n3. **Old Dhaka (Puran Dhaka):** A walk through the narrow alleys of Old Dhaka feels like stepping back in time. Vibrant colors, bustling bazaars, colonial-era buildings, and street vendors offer endless opportunities for street photography. Don’t miss Shakhari Bazar for a riot of colors and textures.\n\n4. **Ahsan Manzil (Pink Palace):** This iconic pink palace on the Buriganga River is a photographer’s delight. Capture its grand façade from the river or frame the details of its ornate domes and halls from inside.\n\n5. **Curzon Hall:** Located within Dhaka University, Curzon Hall is a stunning example of Indo-Saracenic architecture. Its arched windows and red brick exteriors are especially captivating during golden hour.\n\nPhotography isn’t just about technique — it’s about storytelling. Dhaka’s diverse landscapes tell countless stories waiting to be captured through your lens. So grab your camera, join a HobbyHub photography group, and explore these gems together!"
    },
    {
        "id": "2",
        "title": "How Joining a Hobby Group Can Improve Mental Health",
        "category": "Lifestyle",
        "tags": ["Mental Health", "Community", "Well-being"],
        "author": "Alireja Khan",
        "date": "2025-06-24",
        "readTime": "4 min",
        "authorImage": "https://i.ibb.co/7d2G4NJq/Chat-GPT-Image-Apr-3-2025-11-52-09-AM.png",
        "coverImage": "https://i.ibb.co/cSbvwJRv/pexels-diva-plavalaguna-6150432.jpg",
        "excerpt": "Studies show that shared hobbies improve emotional well-being. Discover how HobbyHub can boost your mood and mindset.",
        "content": "In today’s fast-paced world, stress, anxiety, and feelings of isolation are all too common. But did you know that simply sharing a hobby with others can dramatically improve your mental health?\n\n**Here’s how joining a hobby group, like those on HobbyHub, can boost your well-being:**\n\n🔹 **Creates a Sense of Belonging:** When you join a group of like-minded people — whether you’re painting, cooking, gaming, or gardening — you instantly become part of a community. This reduces loneliness and creates a supportive environment.\n\n🔹 **Reduces Stress:** Engaging in creative or physical activities releases endorphins, our body’s natural stress relievers. Sharing these activities with others magnifies the positive effect, helping you unwind faster.\n\n🔹 **Boosts Self-Esteem:** Learning new skills, receiving encouragement, and sharing your progress build confidence. As you improve, you’ll feel a growing sense of accomplishment.\n\n🔹 **Improves Communication Skills:** Hobby groups encourage conversation. Over time, this helps you open up, share your feelings, and improve social interactions — crucial for emotional health.\n\n🔹 **Encourages Consistency:** When you’re part of a group, you’re more likely to stick with your hobby, creating routine and stability — both vital for mental wellness.\n\nResearch shows that even just a few hours a week dedicated to hobbies can significantly lower anxiety and depressive symptoms. So why wait? Start your journey toward a happier, healthier you by joining or creating a group on HobbyHub today. Your mind will thank you."
    },
    {
        "id": "3",
        "title": "Beginner’s Guide to Starting a Cooking Group",
        "category": "Cooking",
        "tags": ["Cooking", "How-To", "Beginners"],
        "author": "Onanto Ghosh",
        "date": "2025-06-20",
        "readTime": "3 min",
        "authorImage": "https://i.ibb.co/8JYyLLn/Chat-GPT-Image-Apr-4-2025-02-31-03-AM.png",
        "coverImage": "https://i.ibb.co/HLhLjvx4/pexels-mvdheuvel-2284166.jpg",
        "excerpt": "Ready to turn your love for cooking into a community experience? Here’s how to start your own HobbyHub cooking group.",
        "content": "Cooking is more than a daily necessity — it’s a creative, sensory experience that brings people together. If you’ve ever dreamed of sharing your culinary passion with others, starting a cooking group is the perfect way to do it. Here’s how to begin:\n\n1. **Define Your Theme:** Do you love Bengali cuisine, healthy meals, baking, or global flavors? Picking a specific theme makes your group unique and attracts people with similar tastes.\n\n2. **Choose the Perfect Venue:** Your kitchen at home can be cozy, a park picnic can be fun, or a café with a private area can offer a neutral, accessible location. Make sure there’s enough space for everyone to cook, share, and enjoy.\n\n3. **Set Group Rules and Size:** Decide how many members you’d like (5–10 is ideal for beginners), and set simple, clear rules on participation, sharing costs for ingredients, and scheduling meetups.\n\n4. **Post on HobbyHub:** Create an inviting group page on HobbyHub with details like your theme, location, meeting frequency, and a catchy description. Include some photos or recipes to attract food lovers!\n\n5. **Plan Fun Activities:** Rotate who hosts, have themed challenges (like “Best Biriyani Night”), organize potlucks, or plan cooking classes with local chefs. These activities keep your group engaged and excited.\n\n6. **Share & Grow Together:** Use each session to swap recipes, try new ingredients, and bond over cooking successes and fails. Sharing meals you made together creates deep connections and lasting memories.\n\nA cooking group is more than just learning new dishes — it’s about laughter, friendship, and celebrating life’s flavors. Ready to bring people together? Post your group on HobbyHub and start your culinary adventure today!"
    }
]


const Blog = () => {
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        setActiveId(blogs[0].id);
    }, []);

    const handleCardClick = (id) => {
        setActiveId(id);
    };

    return (
        <section className="max-w-screen-2xl mx-auto py-20 px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-800 leading-tight">
                Explore Our Latest Blogs
            </h2>
            <div className="flex gap-6 flex-col md:flex-row items-stretch">
                {blogs.map((blog) => {
                    const isActive = activeId === blog.id;
                    return (
                        <motion.div
                            key={blog.id}
                            layout="position"
                            transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
                            onClick={() => handleCardClick(blog.id)}
                            className={`rounded-3xl overflow-hidden border cursor-pointer shadow-sm hover:shadow-md transition-all 
                flex flex-col justify-between 
                ${isActive ? "flex-[2] bg-white" : "flex-1 bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200"}`}
                        >
                            <div className="p-6 flex flex-col justify-between h-full">
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {isActive ? blog.excerpt : blog.excerpt.slice(0, 60) + "..."}
                                    </p>
                                </div>
                                {isActive && (
                                    <>
                                        <motion.img
                                            layoutId={`img-${blog.id}`}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.4 }}
                                            src={blog.coverImage}
                                            alt={blog.title}
                                            className="w-full h-40 object-cover rounded-xl mb-4"
                                        />
                                        <div className="flex justify-between items-center text-sm text-gray-500">
                                            <span>{blog.readTime} read</span>

                                            <div className="flex justify-center items-center">
                                                <Link to={`/blogDetails/${blog.id}`}>
                                                    <p className="mr-5 gap-1 text-green-700 font-medium">
                                                        Read More
                                                    </p>
                                                </Link>
                                                <button className="btn rounded-full"><MdOutlineArrowOutward /></button>
                                            </div>

                                        </div>
                                    </>
                                )}
                                {!isActive && (
                                    <div className="flex justify-between items-center text-sm text-green-800 font-medium pt-2">
                                        <span>Read More</span>
                                        <button className="btn rounded-full"><MdOutlineArrowOutward /></button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Blog;
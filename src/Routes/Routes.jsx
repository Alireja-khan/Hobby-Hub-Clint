import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import Home from '../pages/Home/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import AllGroups from '../pages/AllGroups'
import CreateGroup from '../pages/CreateGroup'
import MyGroups from '../pages/MyGroups'
import UpdateGroup from '../pages/UpdateGroup'
import PrivateRoute from '../context/PrivateRoute';
import GroupDetails from '../pages/GroupDetails';
import NotFound from '../pages/NotFound';
import AboutUs from '../pages/Home/AboutUs';
import Contact from '../pages/Home/Contact';
import Support from '../pages/Home/Support';
import BlogDetails from '../pages/Home/BlogDetails';
import DashboardLayouts from '../pages/Layouts/DashboardLayout/DashboardLayouts';
import DashAllGroup from '../pages/Layouts/DashboardLayout/DashAllGroup';
import DashCreateGroup from '../pages/Layouts/DashboardLayout/DashCreateGroup';
import DashMyGroup from '../pages/Layouts/DashboardLayout/DashMyGroup';
import DashboardOverview from '../pages/Layouts/DashboardLayout/DashboardOverview';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                path: "/",
                loader: () => fetch('https://hobbyhub-server-three.vercel.app/groups'),
                element: <Home></Home>,
            },
            {
                path: "/allGroups",
                loader: ({ params }) => (`https://hobbyhub-server-three.vercel.app/groups?creatorEmail=${params.email}`),
                element: <AllGroups></AllGroups>,
            },
            {
                path: "/createGroup",
                element: <PrivateRoute>
                    <CreateGroup></CreateGroup>
                </PrivateRoute>,
            },
            {
                path: "/myGroup",
                loader: ({ params }) => (`https://hobbyhub-server-three.vercel.app/groups?creatorEmail=${params.email}`),
                element: <PrivateRoute>
                    <MyGroups></MyGroups>
                </PrivateRoute>,
            },
            {
                path: "/updateGroup/:id",
                loader: ({ params }) => fetch(`https://hobbyhub-server-three.vercel.app/groups/${params.id}`),
                element: <PrivateRoute>
                    <UpdateGroup></UpdateGroup>
                </PrivateRoute>,
            },
            {
                path: "/groupDetails/:id",
                loader: ({ params }) => fetch(`https://hobbyhub-server-three.vercel.app/groups/${params.id}`),
                element: <PrivateRoute>
                    <GroupDetails></GroupDetails>
                </PrivateRoute>,
            },
            {
                path: "/aboutUs",
                element: <AboutUs></AboutUs>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/support",
                element: <Support></Support>,
            },
            {
                path: "/blogDetails/:id",
                element: <BlogDetails></BlogDetails>,
            },
        ]
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/register",
        element: <Register></Register>,
    },
    {
        path: "*",
        element: <NotFound></NotFound>,
    },
    {
        path: '/dashboard',
        element: (
            <PrivateRoute>
                <DashboardLayouts />
            </PrivateRoute>
        ),
        children: [
            {
                index: true, // This will render the default overview component at /dashboard
                element: <DashboardOverview />, // ← make sure you import this
            },
            {
                path: 'dashAllGroup',
                loader: ({ params }) =>
                    fetch(`https://hobbyhub-server-three.vercel.app/groups?creatorEmail=${params.email}`),
                element: <DashAllGroup />,
            },
            {
                path: 'dashCreateGroup',
                element: <DashCreateGroup />,
            },
            {
                path: 'dashMyGroup',
                loader: ({ params }) =>
                    fetch(`https://hobbyhub-server-three.vercel.app/groups?creatorEmail=${params.email}`),
                element: <DashMyGroup />,
            },
        ],
    }


])
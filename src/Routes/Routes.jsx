import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import Home from '../pages/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import AllGroups from '../pages/AllGroups'
import CreateGroup from '../pages/CreateGroup'
import MyGroups from '../pages/MyGroups'
import UpdateGroup from '../pages/UpdateGroup'
import PrivateRoute from '../context/PrivateRoute';
import GroupDetails from '../pages/GroupDetails';
import NotFound from '../pages/NotFound';


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

])
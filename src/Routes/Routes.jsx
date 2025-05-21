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


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/allGroups",
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
                loader: async () => {
                    const email = localStorage.getItem('currentUserEmail'); // Or get from context
                    return fetch(`http://localhost:5000/groups?email=${email}`);
                },
                element: <PrivateRoute>
                    <MyGroups></MyGroups>
                </PrivateRoute>,
            },
            {
                path: "/updateGroup/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/groups/${params.id}`),
                element: <PrivateRoute>
                    <UpdateGroup></UpdateGroup>
                </PrivateRoute>,
            },
            {
                path: "/groupDetails/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/groups/${params.id}`),
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

])
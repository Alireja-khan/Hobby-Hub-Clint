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
                element: <PrivateRoute>
                    <MyGroups></MyGroups>
                </PrivateRoute>,
            },
            {
                path: "/updateGroup",
                element: <PrivateRoute>
                    <UpdateGroup></UpdateGroup>
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
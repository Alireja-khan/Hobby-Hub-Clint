import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import Home from '../pages/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import AllGroups from '../pages/AllGroups'
import CreateGroup from '../pages/CreateGroup'
import MyGroups from '../pages/MyGroups'


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                path: "/",
                Component: Home,
            },
            {
                path: "/allGroups",
                Component: AllGroups,
            },
            {
                path: "/createGroup",
                Component: CreateGroup,
            },
            {
                path: "/myGroup",
                Component: MyGroups,
            },
        ]
    },
    {
        path: "/login",
        Component: Login,
    },
    {
        path: "/register",
        Component: Register,
    },

])
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layout/Main/Main';
import Error from '../pages/Error/Error';
import ProjectDetails from '../parts/Projects/ProjectDetails/ProjectDetails';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            errorElement: <Error></Error>
        },
        {
            path: 'projectdetails/:projectId',
            loader: ({ params }) => fetch(`projectData.json`),
            element: <ProjectDetails></ProjectDetails>
        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;
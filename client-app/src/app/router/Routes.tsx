import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivityDashbard from "../../features/activities/dashboard/ActivityDashbard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import TestErrors from "../../features/errors/TestError";
import NotFound from "../../features/errors/NotFound";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: 'activities',
                element: <ActivityDashbard />
            },
            {
                path: 'activities/:id',
                element: <ActivityDetails />
            },
            {
                path: 'createActivity',
                element: <ActivityForm key='create' />
            },
            {
                path: 'manage/:id',
                element: <ActivityForm key='manage' />
            },
            {
                path: 'errors',
                element: <TestErrors />
            },
            {
                path: 'not-found',
                element: <NotFound />
            },
            {
                path: '*',
                element: <Navigate replace to='/not-found' />
            },
        ]
    }
]

export const router = createBrowserRouter(routes)
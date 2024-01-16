import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivityDashbard from "../../features/activities/dashboard/ActivityDashbard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";

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
                element: <ActivityForm />
            },
        ]
    }
]

export const router = createBrowserRouter(routes)
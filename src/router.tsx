import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from '@/pages/LoginPage';
import HomePage from '@/pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import DashboardLayout from './layouts/DashboardLayout';
import ProductsPage from './pages/ProductsPage.tsx';
import AuthLayout from './layouts/AuthLayout';
import CreateProduct from './pages/CreateProduct.tsx';
import ScamPage from './pages/ScamPage.tsx';
import ScammedPage from './pages/ScammedPage.tsx';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/dashboard/home" />,
    },
    {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: 'home',
                element: <HomePage />,
            },
            {
                path: 'products',
                element: <ProductsPage />,
            },
            {
                path: 'products/create',
                element: <CreateProduct />,
            },
          
        ],
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'register',
                element: <RegisterPage />,
            },
        ],
    },

    {
        path: 'scam',
        element: <ScamPage />,
    },
    {
        path: 'scammed',
        element: <ScammedPage />,
    },
]);

export default router;

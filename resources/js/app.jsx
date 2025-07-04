import './bootstrap';
import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

const appName = import.meta.env.VITE_APP_NAME
createInertiaApp({
    title: (title) => title ? `${title} - ${appName}` : appName,
    resolve: name => {
        const pages = import.meta.glob('./pages/**/*.jsx', { eager: true })
        return pages[`./pages/${name}.jsx`]
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})


import { RenderMode, ServerRoute } from '@angular/ssr';


export const serverRoutes: ServerRoute[] = [
    {
        path: 'shoe/:id',
        renderMode: RenderMode.Client,
    },
    {
        path: 'home',
        renderMode: RenderMode.Prerender,
    },
]


import { RenderMode, ServerRoute } from '@angular/ssr';


export const serverRoutes: ServerRoute[] = [
    {
        path: 'shoe/:id',
        renderMode: RenderMode.Server,
    },
    {
        path: 'home',
        renderMode: RenderMode.Prerender,
    },
]
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    compressHTML:false,
    devToolbar:{
        enabled:false
    },
    vite:{
        build:{
            minify:false,
            cssMinify:true
        }
    }
  
});

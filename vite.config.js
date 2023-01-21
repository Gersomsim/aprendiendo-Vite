import { defineConfig } from 'vite'

// export default defineConfig({
//   server:{
//     port: 8090
//   }
// });


export default defineConfig(()=>{
  const port = 3000;

  return {
    server: {
      port
    }
  }
})
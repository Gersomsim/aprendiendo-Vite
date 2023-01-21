import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path';


// export default defineConfig({
//   server:{
//     port: 8090
//   }
// });


export default defineConfig(({ command, mode })=>{
  const port = 3000;

  console.log(command, mode);
  const env = loadEnv(mode, process.cwd())

  console.log(env.VITE_NAME);

  if( mode === 'development'){
    return {
      server: {
        port
      }
    }
  }else{
    console.log('En modo Produccion');
    return {
      build: {
        rollupOptions: {
          input:{
            main: resolve(__dirname, 'index.html'),
            help: resolve(__dirname, 'help', 'help.html')
          }
        }
      }
    }
  }

  
})
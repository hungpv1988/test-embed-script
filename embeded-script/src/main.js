import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

var embededLink = document.createElement('link');
embededLink.onload = () => { console.log('link loaded!'); };
embededLink.href = "https://yourbib-space.sgp1.cdn.digitaloceanspaces.com/assets/ecopark/index.02998f7b.css";
embededLink.rel  = "stylesheet";
document.head.append(embededLink);

embededLink = document.createElement('link');
embededLink.onload = () => { console.log('link loaded!'); };
embededLink.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
embededLink.rel  = "stylesheet";
document.head.append(embededLink);

const embededSript = document.createElement('script');
embededSript.onload = () => { console.log('script loaded!'); };
embededSript.src = "https://yourbib-space.sgp1.cdn.digitaloceanspaces.com/assets/ecopark/index.b8939dcf.js";
embededSript.type  = "module";
embededSript.setAttribute("raceid", 40)  ;

document.head.append(embededSript);
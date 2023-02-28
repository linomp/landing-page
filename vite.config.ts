import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {nodePolyfills} from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
// https://waresix.engineering/react-web-notification-with-mqtt-and-vite-3-9b05863d4e65
export default defineConfig({
    plugins: [
        react(),
        nodePolyfills({
            protocolImports: true,
        }),
    ],
});
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ch.maple.maze',
  appName: 'maple-maze',
  webDir: 'dist/maple-maze',
  server: {
    androidScheme: 'https'
  }
};

export default config;

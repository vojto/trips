import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dev.vojto.Trips',
  appName: 'Trips',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;

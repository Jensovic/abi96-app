import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.abi96.nachtreffen',
  appName: 'ABI 96 Nachtreffen',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  ios: {
    contentInset: 'automatic',
    scrollEnabled: true,
    backgroundColor: '#2E86AB'
  },
  android: {
    backgroundColor: '#2E86AB',
    allowMixedContent: true
  },
  plugins: {
    StatusBar: {
      style: 'light',
      backgroundColor: '#2E86AB'
    },
    Keyboard: {
      resize: 'body',
      style: 'dark'
    }
  }
};

export default config;

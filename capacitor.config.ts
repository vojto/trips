import { CapacitorConfig } from "@capacitor/cli";
import { networkInterfaces } from "node:os";

const config: CapacitorConfig = {
  appId: "dev.vojto.Trips",
  appName: "Trips",
  webDir: "out",
  server: {
    androidScheme: "https",
  },
};

function findLocalIp() {
  const nets = networkInterfaces();
  const keys = Object.keys(nets).filter((key) => key.startsWith("en"));
  let network = keys
    .map((key) => {
      return nets[key]?.find((net) => net.family === "IPv4" && !net.internal);
    })
    .find((n) => n);
  return network?.address;
}
const localIp = findLocalIp();
if (localIp) {
  console.log(`[Dev Mode] Pointing Capacitor to local IP ${localIp}`);

  const url = `http://${localIp}:3000`;
  console.log();
  config.server = {
    url,
  };
}

export default config;

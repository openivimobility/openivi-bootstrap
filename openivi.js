/* This file is deployed in /usr/lib/iceweasel/browser/defaults/preferences,
   and sets the default configuration */

pref("browser.startup.homepage", "http://localhost/www/");
/* Get the Geolocation from a static file. This could be fetched dynamically
   using a GPS device and gpsd in the future */
pref("geo.wifi.uri", "file:///var/location.json");

/* Enable remote debugging */
pref("devtools.debugger.remote-enabled", true);
pref("devtools.debugger.remote-host", "0.0.0.0");
pref("devtools.debugger.force-local", false);
pref("devtools.chrome.enabled", true);
pref("devtools.debugger.chrome-enabled", true);

import { useEffect } from "react";

declare global {
  interface Window {
    hbspt: any;
  }
}

const HubspotContactForm = () => {
  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    document.head.appendChild(script);

    script.addEventListener("load", () => {
      // Create the form once the script is loaded
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "48483794",
          formId: "036adc45-2cb5-4b53-ab92-77cf292cecf4",
          target: "#hubspot-form-container"
        });
      }
    });

    // Cleanup
    return () => {
      script.remove();
    };
  }, []);

  return <div id="hubspot-form-container" className="w-full max-w-xl mx-auto" />;
};

export default HubspotContactForm;
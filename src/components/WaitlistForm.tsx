import { useEffect } from "react";

declare global {
  interface Window {
    hbspt: any;
  }
}

const WaitlistForm = () => {
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
          formId: "2450da0b-25e6-48d3-b8b5-983dacee22b6",
          target: "#waitlist-form-container"
        });
      }
    });

    // Cleanup
    return () => {
      script.remove();
    };
  }, []);

  return <div id="waitlist-form-container" className="max-w-xl mx-auto mt-8" />;
};

export default WaitlistForm;
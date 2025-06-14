import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  mt-4 text-center text-[rgba(120,119,198,0.8)]">
        About This App
      </h1>
      <div className="flex justify-center m-16">
        <div className="content w-full font-bold lg:w-3/4 md:text-xl transition-all duration-300">
        Welcome to the Passwords Manager — a simple and secure tool built with
        React to help you store and manage your website login credentials in one
        place. This app allows you to Add and save usernames, passwords, and
        website URLs. Easily toggle password visibility while entering. Copy any
        saved data to your clipboard with a single click. Remove entries that
        you no longer need. Keep your data persistent using your browser's local
        storage. All your information is stored locally on your device, ensuring
        privacy and fast access without requiring any account or cloud
        connection.
      </div>
        </div>
    </div>
  );
};

export default About;

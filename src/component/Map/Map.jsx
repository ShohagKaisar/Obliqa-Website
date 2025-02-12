import React from 'react';

const Map = () => {
  return (
    <div>
      <div className="flex flex-col">
        <h1 className="text-center text-5xl font-extrabold my-8">Our Location</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d271.0635248310439!2d90.41521722060378!3d23.925707704771792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1739353983528!5m2!1sen!2sbd"
          height={400}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </div>
  );
}

export default Map;

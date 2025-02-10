import React from 'react';

const Map = () => {
  return (
    <div>
      <div className="flex flex-col">
  <h1 className="text-center text-5xl font-extrabold my-8">Our Location</h1>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.489768640731!2d90.38152797442774!3d23.87224548408944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c519d4a951ad%3A0x426fa3cb923226dc!2sMaple%20Service%20Solution%20Limited!5e0!3m2!1sen!2sbd!4v1737111637895!5m2!1sen!2sbd"
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

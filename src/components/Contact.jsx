import React from "react";

const Contact = () => {
  return (
    <div className="Contact">
      <main>
        <h1>Contact Us !</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Abhishek" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" required placeholder="Abhishek@gmail.com" />
          </div>
          <div>
            <label>Message</label>
            <input type="text" required placeholder="Tell us your queries!" />
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;

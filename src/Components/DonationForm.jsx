import React from 'react';
import App from "../App.jsx";

const DonationForm = ({ donations }) => {
  // console.log(donations)
  return (
    <div>
      <section className="donation">
        <h4>
          You could be donation <span className="secondary">#{donations[4].id + 1}!</span>
        </h4>
        <form>
          <label htmlFor="name">
            Name
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name..."
            />
          </label>
          <label htmlFor="caption">
            Caption
            <input
              id="caption"
              name="caption"
              type="text"
              placeholder="Add a brief message..."
            />
          </label>
          <label htmlFor="amount">
            Amount
            <input id="amount" name="amount" type="number" placeholder="0" />
          </label>
          <button>Donate!</button>
        </form>
      </section>
    </div>
  );
};

export default DonationForm;

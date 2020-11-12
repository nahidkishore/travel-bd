import React from 'react';


const Contact = () => {
  return (
    <section>
      <div className="container d-flex align-items-center py-5 ">
        <div className="row">
          <div className="col-md-5">
            <h1>Let Us handle Your Booking, Professionally</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis culpa, necessitatibus quia ad quae ea!
            </p>
          </div>
          <div className="col-md-5 offset-md-1 mx-auto">
            <form action="">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your  email Address "
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name  "
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  className="form-control"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message "
                ></textarea>
              </div>
              <div className="form-group text-center">
                <button type="button" className="button">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Contact;
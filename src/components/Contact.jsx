import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              {/* phone Number */}
              <div className="contact_info_item d-flex justify-content-start align-items-center ">
                <img
                  src="https://img.icons8.com/office/24/000000/iphone.png"
                  alt="phone"
                ></img>
                <div className="px-2 contact_info_content">
                  <div className="contact_info_title">Phone</div>
                  <div className="contact_info_text">+91 1111 543 2198</div>
                </div>
              </div>
              {/* Email */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img
                  src="https://img.icons8.com/office/24/000000/iphone.png"
                  alt="phone"
                ></img>
                <div className="px-2  contact_info_content">
                  <div className="contact_info_title">Email</div>
                  <div className="contact_info_text">user@gmail.com</div>
                </div>
              </div>
              {/* Address */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img
                  src="https://img.icons8.com/office/24/000000/iphone.png"
                  alt="phone"
                ></img>
                <div className="px-2  contact_info_content">
                  <div className="contact_info_title">Address</div>
                  <div className="contact_info_text">India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact us form  */}

      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">Get in Touch</div>
                <form method="POST" id="contact_form">
                  <div className="contact_form_name d-flex justify-content-between align-items-center">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_filed"
                      name="name"
                      placeholder="Your Name"
                      required="true"
                      autocomplete="off"
                    ></input>

                    <input
                      type="email"
                      id="contact_form_email"
                      className="contact_form_email input_filed"
                      name="email"
                      placeholder="Your Email"
                      required="true"
                      autocomplete="off"
                    ></input>

                    <input
                      type="number"
                      id="contact_form_phone"
                      className="contact_form_phone input_filed"
                      name="phone"
                      placeholder="Your Phone Number"
                      required="true"
                      autocomplete="off"
                    ></input>
                  </div>

                  <div className="contact_form_text mt-5">
                    <textarea
                      className="text_field contact_form_message"
                      name="message"
                      placeholder="Message ..."
                      cols="70"
                      rows="10"
                      autocomplete="off"
                    ></textarea>
                  </div>

                  <div className="contact_form_button mt-2">
                    <button
                      type="submit"
                      className="button contact_submit_button"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

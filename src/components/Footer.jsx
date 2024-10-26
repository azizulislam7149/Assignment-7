import React from 'react';

const Footer = () => {
    return (
        <div>

           <div className='grid items-center justify-center mt-14 bg-gradient-to-r bg-red-200'>
           <label className="input input-bordered flex items-center gap-2">
 
  <input type="text" className="grow" placeholder="Subscribe to our Newsletter" />
</label>
<label className="input input-bordered flex items-center gap-2">
  
  <input type="text" className="grow" placeholder="Get the latest updates and news right in your inbox!" />
  </label>
  <div>
  <input type="text" className="input" placeholder="Email" />
    <input
  type="text"
  placeholder="Subscribe"
  className="input " />
  </div>



            </div>  

            <footer className="footer bg-neutral text-neutral-content p-10">
  <nav>
    <h6 className="footer-title">About Us</h6>
    <a className="link link-hover">We are a passionate team </a>
    <a className="link link-hover">dedicated to providing the best </a>
    <a className="link link-hover">services to our customers</a>
   
  </nav>
  <nav>
    <h6 className="footer-title">Quick Links</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Service</a>
    <a className="link link-hover">About</a>
  </nav>
  <nav>
    <h6 className="footer-title">Subscribe</h6>
    <a className="link link-hover">Subscribe to our newsletter for the</a>
    <a className="link link-hover">latest updates.</a>
    <div>
    <input type="text" className="input" placeholder="Email" />
    <input
  type="text"
  placeholder="Subscribe"
  className="input " />
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;
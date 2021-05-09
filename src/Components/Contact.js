import React, { useState } from 'react';

const Contact = ({ data }) => {
   const [url, setUrl] = useState('mailto:test@example.com?subject=subject&body=body');
   const [name, setName] = useState('');
   const [subject, setSubject] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');


    const handleClick = (e) => {
       e.preventDefault();
      window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
    }


    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{data?.message}</p>

            </div>

         </div>

         <div className="row">

             <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Contact Details</h4>
					   <p className="address">
						   {data?.name}<br />
						   {data?.address.street}
						   {data?.address.city}, {data?.address.state} {data?.address.zip}<br />
						   <span>{data?.email}</span>
					   </p>
				   </div>

               <div className="widget widget_tweets">

		         </div>
            </aside>
      </div>
   </section>
    );
}

export default Contact;

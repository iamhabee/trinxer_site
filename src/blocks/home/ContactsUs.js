import React from 'react';

import ContactForm from '../../components/form/ContactForm';

const ContactsUs = () => {
    return (
        <section id="contacts" className="block bg-dark spacer m-top-xl p-top-xl p-bottom-xl">
            <div className="wrapper">
                <div className="title text-max-width-2">
                    <h2 className="text-white">Any Questions? Contact us Freely and We'll Get Back to You Shortly</h2>
                </div>

                <div className="description text-max-width-2">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                </div>

                <div className="contact-form-shortcode spacer p-top-lg">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactsUs;

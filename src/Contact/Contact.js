import '../Styles/Home.css';
import emailjs from 'emailjs-com'


function Contact() {


    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_b03bhxe', 'template_h28vewp', e.target, 'user_hemxVajsRTQAXOdlZY1u3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
        e.target.reset();
        alert('Message Sent');
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center">Contact Me</h2>
                    <hr />
                </div>
            <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name" required/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" name="email" placeholder="Email" required/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" name="subject" placeholder="Subject"
                               required/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea type="text" className="form-control" id="" cols="30" rows="8" name="message"
                                  placeholder="Your message" required/>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                        <input type="submit" className="btn btn-info" value="Send Message"/>
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
}

export default Contact;

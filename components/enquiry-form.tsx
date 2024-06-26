import type { NextPage } from "next";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EnquiryForm: NextPage = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
      toast.success('Your message has been sent successfully!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });    
    if (form.current) {
      emailjs.sendForm('service_317uf8a', 'template_1gfzdci', form.current, 'XTr5WLJHRjlRdrpJC')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
  };
  
  return (
    <section className="self-stretch flex flex-row flex-wrap items-start justify-center py-[75px] px-[30px]">
      <form className="flex-1 rounded-xl bg-darkslategray shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] box-border flex flex-col justify-start py-7 px-[30px] gap-[20px] max-w-[1100px] border-[2px] border-solid border-gray-300" ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col justify-start py-5 px-0">
          <h2 className="m-0 text-13xl font-medium text-shade1 text-left">
            Enquiry Form
          </h2>
        </div>
        <div className="flex flex-col items-center justify-start gap-[10px]">
          <input
            className="w-full text-xl bg-[transparent] rounded box-border h-14 flex flex-col justify-center py-4 px-3 border-[1px] border-solid border-gray-200 text-white font-poppins"
            placeholder="Name"
            type="text"
            name="from_name"
          />
          <input
            className="w-full text-xl bg-[transparent] rounded box-border h-14 flex flex-col justify-center py-4 px-3 border-[1px] border-solid border-gray-200 text-white font-poppins"
            placeholder="Email id"
            type="email"
            name="email_id"
          />
          <textarea
            className="w-full text-xl bg-[transparent] block rounded box-border justify-start p-3 border-[1px] border-solid border-gray-200 text-white font-poppins"
            rows={3}
            placeholder="Comments or questions"
            name="message"
          />
          <button className="py-2.5 px-5 bg-blueviolet rounded-lg border-[1px] border-solid border-shade-3 text-xl text-shade1 font-poppins" type="submit">
              Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
};

export default EnquiryForm;

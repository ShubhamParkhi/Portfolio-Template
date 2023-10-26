import type { NextPage } from "next";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EnquiryForm: NextPage = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
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
      <form className="flex-1 rounded-xl bg-darkslategray shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] box-border flex flex-col justify-start py-7 px-[30px] gap-[17px] max-w-[1100px] border-[2px] border-solid border-gray-300" ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col justify-start py-5 px-0">
          <h2 className="m-0 text-13xl font-medium text-shade1 text-left">
            Enquiry Form
          </h2>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
          <input
            className="text-xl bg-[transparent] self-stretch rounded box-border h-14 flex flex-col justify-center py-4 px-3 border-[1px] border-solid border-gray-200 text-white  font-poppins"
            placeholder="Name"
            type="text"
            name="from_name"
          />
          <input
            className="text-xl bg-[transparent] self-stretch rounded flex flex-col justify-start py-4 px-3 border-[1px] border-solid border-gray-200 text-white  font-poppins"
            placeholder="Email id"
            type="email"
            name="email_id"
          />
          <input
            className="text-xl bg-[transparent] self-stretch rounded box-border h-[105px] flex flex-col justify-start p-3 border-[1px] border-solid border-gray-200 text-white  font-poppins"
            placeholder="Comments or questions"
            type="text"
            name="message"
          />
          <button className="py-2.5 px-5 bg-blueviolet rounded-lg border-[1px] border-solid border-shade-3 font-poppins text-xl text-shade1  font-poppins" type="submit">
              Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default EnquiryForm;

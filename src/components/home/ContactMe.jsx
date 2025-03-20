"use client";

import { contactInfo } from "@/src/staticData/home/home";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import SectionHeading from "../shared/SectionHeading";
import Input from "../ui/fields/Input";
import Textarea from "../ui/fields/TextArea";
import ContactInfo from "./ContactInfo";

const ContactMe = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const { fullName, email, message } = formValues;

  const reset = () => {
    setFormValues({
      fullName: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_p6zz7l5', 'template_nn2wz0d', form.current, {
        publicKey: 'jJdkHurbglNOEOLSg',
      })
      .then(
        () => {
          alert('Email enviado com sucesso!');
        },
        (error) => {
          alert('Email não foi enviado!');
        },
      );

    reset();
  };

  return (
    <div
      data-scroll-index="8"
      id="contact"
      className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="px-5 py-8 bg-white dark:bg-nightBlack rounded-2xl contact-section lg:p-13">
        <SectionHeading {...contactInfo.contactInfoHeading} />

        <div className="grid gap-12 mt-8 mb-10 md:my-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <ul className="space-y-6 md:space-y-10 2xl:space-y-12 contact-info">
              {contactInfo?.contactInfoData?.map((item) => (
                <ContactInfo key={item?.id} {...item} />
              ))}
            </ul>
          </div>

          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-4" ref={form}>
              <div className="form-group">
                <Input 
                  type="text"
                  handleChange={handleChange} 
                  placeholder="Nome" 
                  name="fullName" 
                  autoComplete="fullName"
                  value={fullName} 
                  className="w-full p-5 text-sm outline-none h-13 focus:border-theme dark:focus:border-theme dark:placeholder:text-white/40"  
                />
              </div>
              <div className="form-group">
                <Input
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  handleChange={handleChange}
                  name="email"
                  value={email}
                  className="w-full p-5 text-sm outline-none h-13 focus:border-theme dark:focus:border-theme dark:placeholder:text-white/40"
                />
              </div>
              <div className="form-group">
                <Textarea
                  handleChange={handleChange}
                  placeholder="Mensagem"
                  name="message"
                  value={message}
                  className="w-full px-5 py-4 text-sm outline-none focus:border-theme dark:placeholder:text-white/40"
                />
              </div>
              <div className=" form-group">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 text-[15px] font-medium border border-theme bg-theme text-white py-4.5 px-9 rounded-4xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover"
                  aria-label="Send Message"
                >
                  Enviar mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
        <iframe
          className="w-full overflow-hidden border-10 border-platinum dark:border-greyBlack embed-map h-80 2xl:h-96 rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58740.13018589902!2d-47.85982260000002!3d-23.050995999999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c6696c569ae7db%3A0x2ed98c26a5991379!2sLaranjal%20Paulista%2C%20SP%2C%2018500-000!5e0!3m2!1spt-BR!2sbr!4v1742427091885!5m2!1spt-BR!2sbr"
          aria-label="Contact Map"
        />
      </div>
    </div>
  );
};

export default ContactMe;

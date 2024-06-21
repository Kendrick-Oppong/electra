import dynamic from "next/dynamic";
import { Loader } from 'lucide-react';
import {ContactUsForm} from "@/components/contactUs"
import Image from "next/image"

const MapLocation = dynamic(
  () => import("@/components/contactUs/MapLocation"),
  {
    loading: () => <p className="flex justify-center items-center gap-1 text-primary">Loading Map <Loader className="animate-spin"/></p>,
  },
);

const ContactUsPage = ()=> {
    return (
      <>
        <section>
          <div
            className={`flex flex-col rounded-lg items-center justify-center bg-[url('https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FsbHxlbnwwfDB8MHx8fDA%3D')] bg-cover bg-no-repeat`}
          >
            <div className="flex h-full rounded-lg min-h-80 w-full flex-col items-center justify-center bg-[#00000065] text-white backdrop-blur-sm">
              <h1 className="text-4xl font-bold text-white">Contact Us</h1>
             
            </div>
          </div>
        </section>
        <section className="px-5 max-w-6xl mx-auto flex flex-wrap gap-5 text-center ">
          <div className="flex-1 border-gray rounded-xl  text-nowrap border p-3 pb-5 shadow-lg">
            <Image
            width={80}
            height={80}
            priority
            className="mx-auto" 
            src="/address-svgrepo-com.svg" alt="" />
            <h3 className="text-primary mb-2 font-bold">Address</h3>
            <p>Bostro 22, Labone Crescent, Accra</p>
          </div>
          <div className="flex-1 border-gray rounded-xl text-nowrap  border p-3 pb-5 shadow-lg">
            <Image
            width={80}
            height={80}
             priority
            className="mx-auto"
            src="/social-contact-svgrepo-com.svg"
            alt=""
            />
            <h3 className="text-primary mb-2 font-bold">Get in touch</h3>
            <p>
              E-mail:
              <strong>
                <a href="mailto:electra@gmail.com">electra@gmail.com</a>
              </strong>
            </p>
          </div>
          <div className="flex-1 border-gray rounded-xl text-nowrap  border p-3 pb-5 shadow-lg">
            <Image
            width={80}
            height={80}
            priority

              className="mx-auto"
              src="/time-stopwatch-watch-svgrepo-com.svg"
              alt=""
            />
            <h3 className="text-primary mb-2 font-bold">Opening days</h3>
            <div className="mb-2 flex justify-between border-b border-gray-400 pb-1">
              <p>Mon - Tue </p>
              <p>09:00 am - 4:00 pm</p>
            </div>
            <div className="flex justify-between">
              <p>Wed - Thu</p>
              <p>10:00 am - 11:00 pm</p>
            </div>
          </div>
        </section>
        <section className="border-gray sm:mx-auto max-w-6xl rounded-lg p-1">
            <MapLocation />
        </section>
        <section>
          <h1 className="text-subtitle text-primary">Got Any Questions?</h1>
          <p className="mb-4 text-center">
            Use this form below to get in touch with our team
          </p>
          <ContactUsForm />
        </section>
      </>
    );

}

export default ContactUsPage
"use client";
import { useEffect, useState } from "react";
import { NewsletterForm } from "@/components/footer";
import { Checkbox } from "@/components/ui/checkbox";
import { X } from "lucide-react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  getModalNewsletterState,
  removeModalNewsletter,
} from "@/redux/features/modalNewsLetterSlice";

const ModalNewsLetter = () => {
  const [hideModal, setHideModal] = useState(false);
  const dispatch = useAppDispatch();
  const modalPopup = useAppSelector(getModalNewsletterState);

  const handleClose = () => {
    dispatch(removeModalNewsletter()); // Update state and local storage
  };

  useEffect(() => {
    if (modalPopup) {
      const timeoutId = setTimeout(() => {
        setHideModal(true);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [modalPopup, dispatch]);

  return (
    modalPopup &&
    hideModal && (
      <div className="hidden lg:fixed inset-0 z-[110] flex w-full items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-full max-w-5xl rounded-lg bg-accent p-8 shadow-lg">
          <div className="">
            <X
              className="border-gray ml-auto cursor-pointer rounded-sm hover:bg-gray-200"
              size={30}
              onClick={() => setHideModal(!hideModal)}
            />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <Image
                src="/newsletter.svg"
                width={250}
                height={250}
                priority
                alt="Newsletter Image"
                className="w-[250px] md:w-[300px]"
              />
            </div>
            <div>
              <h1 className="text-subtitle !mt-0 mb-4 !text-left text-primary">
                {" "}
                Newsletter{" "}
              </h1>
              <div className="relative mb-4">
                <NewsletterForm handleClose={handleClose}/>
              </div>
              <p>
                Subscribe to the mailing list to receive updates on new
                arrivals, special offers and other discount information.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Checkbox id="terms1" onClick={handleClose} />
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Don&apos;t show this popup again
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ModalNewsLetter;

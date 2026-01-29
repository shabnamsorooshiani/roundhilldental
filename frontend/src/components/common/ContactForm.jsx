"use client";
import { makeAppointment } from "@/utils/apiCaller";
import { hasSubmitted, inIframe, setCookie } from "@/utils/spam";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm({ home }) {
  const form = useRef();

  const [dis, setDis] = useState({
    patientName: "",
    patientPhone: "",
    patientEmail: "",
    patientService: "",
    patientMessage: "",
    patientAge: "",
  });
  const [btnDis, setBtnDis] = useState(false);

  useEffect(() => {
    if (
      dis.patientName.length &&
      dis.patientPhone.length &&
      dis.patientEmail.length &&
      dis.patientService.length
    ) {
      setBtnDis(true);
      document.getElementById("mySubmit").disabled = false;
    } else {
      setBtnDis(false);
      document.getElementById("mySubmit").disabled = true;
    }
  }, [dis]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    if (data.patientName.trim().length === 0) {
      toast("Please Enter a correct Full Name");
      return;
    }
    if (!/^[a-z0-9.]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(data.patientEmail)) {
      toast(
        "Invalid email address. Please use lowercase letters, numbers and dots only.",
      );
      return;
    }
    if (data.patientPhone.length < 9 || data.patientPhone.length > 14) {
      toast("Please enter a correct length of phone number");
      return;
    } else if (data.patientMessage.length > 800) {
      toast("Write a correct message");
    } else {
      try {
        if (dis?.patientAge || inIframe() || hasSubmitted()) {
          toast("Thank you for contacting us!");
          reset();
          return;
        }

      await makeAppointment(
            process.env.NEXT_PUBLIC_EMAIL_URL,
        {
              to: process.env.NEXT_PUBLIC_EMAIL_TO,
              subject: "New Appointment Request",
              html: `
                <h3>New Appointment Request</h3>
                <p><strong>Name:</strong> ${data.patientName}</p>
                <p><strong>Email:</strong> ${data.patientEmail}</p>
                <p><strong>Phone:</strong> ${data.patientPhone.replace(/\D/g, "")}</p>
                <p><strong>Service:</strong> ${data.patientService}</p>
                <p><strong>Message:</strong> ${data.patientMessage || "No message"}</p>
              `,
            }
      );
        toast("Thank you for contacting us!");
        setBtnDis(false);
        document.getElementById("mySubmit").disabled = true;
        setCookie();
        reset();
      } catch (err) {
        console.log("sending error", err);
        toast.error("Something get wrong!", {});
        if (err?.request?.status === 500) {
          toast.error("Server problem ", {});
        } else if (err?.request?.status === 400) {
          toast.error(err?.response?.data?.message[0], {});
        }
      }
    }
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
      className="w-full pt-[75px] border-t-[1px] border-border1 mt-[75px] grid-col-2 text-left text-[16px] lg:text-[22px] xl:flex"
      method="POST"
    >
      <div className="grid md:grid-cols-2 gap-x-[24px] gap-y-[12px] mb-[12px]">
        <div>
          <label htmlFor="patientName" className="form-label">
            Name*
          </label>
          <input
            {...register("patientName", { required: true })}
            className="form-input"
            id="patientName"
            name="patientName"
            type="text"
            placeholder="Full Name"
            onChange={(e) => setDis({ ...dis, patientName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="patientPhone" className="form-label">
            Phone Number*
          </label>
          <input
            {...register("patientPhone", { required: true })}
            className="form-input"
            id="patientPhone"
            name="patientPhone"
            onKeyDown={(e) =>
              ["e", "E", "."].includes(e.key) && e.preventDefault()
            }
            type="text"
            placeholder="(423) 456-7890"
            onChange={(e) => setDis({ ...dis, patientPhone: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="patientEmail" className="form-label">
            Email Address*
          </label>
          <input
            {...register("patientEmail", { required: true })}
            className="form-input"
            id="patientEmail"
            name="patientEmail"
            type="patientEmail"
            placeholder="email@example.com"
            onChange={(e) => setDis({ ...dis, patientEmail: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="patientService" className="form-label">
            Service*
          </label>
          <input
            {...register("patientService", { required: true })}
            className="form-input"
            id="patientService"
            name="patientService"
            autoComplete="nope"
            type="text"
            placeholder="Teeth Straight"
            onChange={(e) => setDis({ ...dis, patientService: e.target.value })}
          />
        </div>
        <div className="patientAge">
          <input
            type="text"
            id="patientAge"
            name="patientAge"
            tabIndex={-1}
            autoComplete="off"
            value={dis.patientAge}
            onChange={(e) => setDis({ ...dis, patientAge: e.target.value })}
          />
        </div>
      </div>
      <div className="xl:flex-1 xl:ml-8">
        <div>
          <label htmlFor="patientMessage" className="form-label">
            Message
          </label>
          <textarea
            {...register("patientMessage")}
            className="form-input resize-none h-[111px]"
            id="patientMessage"
            name="patientMessage"
            placeholder="Please describe what patientService you are interested in"
            onChange={(e) => setDis({ ...dis, patientMessage: e.target.value })}
          />
        </div>

        <button
          type="submit"
          id="mySubmit"
          className={`${
            !btnDis && "cursor-not-allowed"
          } ${home ? "bg-red-beige" : "bg-dark-bl"} bg-dark-bl text-white rounded-xl text-[22px] font-semibold w-full mt-6 py-4`}
        >
          Submit
        </button>
        <ToastContainer />
      </div>
    </form>
  );
}

"use client";

import React, { FormEvent, useState } from "react";
import InputMessage from "./InputMessage";
import SendButton from "./SendButton";
import InputSlider from "./InputSlider";
import ModelSelect from "./ModelSelect";
import SecretInput from "./SecretInput";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { experimental_useFormState as useFormState } from "react-dom";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

interface FormData {
  apiKey: string;
  model: string;
  temperature: number;
  maxTokens: number;
  topK: number;
  message: string;
}

export default function ChatForm() {
  const [data, setData] = useState();

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget
    const formData = new FormData(form)
    const formDataObject = Object.fromEntries(formData)

    const data = await fetch('/api/chat', {
      method: "POST",
      body: JSON.stringify(formDataObject),
    }).then(res => res.json());

    setData(data);
    form.reset();
  }

  // TODO: Send formData to your API using an HTTP request library like axios or fetch.
  // Example:
  // try {
  //   const response = await axios.post("/your-api-endpoint", formData);
  //   console.log("API Response:", response.data);
  // } catch (error) {
  //   console.error("API Error:", error);
  // }

  // const handleInputChange = (
  //   e: React.ChangeEvent<
  //     HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  //   >
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]:
  //       name === "temperature" || name === "maxTokens" || name === "topK"
  //         ? parseFloat(value)
  //         : value,
  //   });
  // };

  return (
    <section className="container mx-auto p-4">
      <form
        onSubmit={handleFormSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* <div>
          <ModelSelect
            label="model"
            value={formData.model}
            onChange={handleInputChange}
          />
        </div> */}
        <div className="mt-4">
          <InputMessage
            label="Message"
            id="message"
          />
          <div className="flex justify-end mt-4">
            <SendButton />
          </div>
        </div>
      </form>
    </section>
  );
}

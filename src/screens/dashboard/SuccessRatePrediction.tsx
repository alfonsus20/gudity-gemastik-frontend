import React from "react";
import { ConversationalForm } from "conversational-form";
import "../../styles/myForm.css";

const SuccessRatePrediction = () => {
  const formRef = React.useRef<HTMLDivElement>(null);

  const formFields = [
    {
      tag: "cf-robot-message",
      "cf-questions": "Halo! Selamat datang di aplikasi Gudity.",
    },
    {
      tag: "cf-robot-message",
      "cf-questions":
        "Pada bagian ini anda dapat melakukan  prediksi apakah bisnis anda dapat dikatakan sebagai bisnis yang sukses dengan menjawab beberapa pertanyaan yang ada.",
    },
    {
      tag: "fieldset",
      "cf-questions": "Apakah anda sudah siap?",
      children: [
        {
          tag: "input",
          type: "radio",
          name: "persetujuan",
          "cf-label": "Ya",
          value: "1",
        },
      ],
    },
    {
      tag: "input",
      type: "text",
      name: "firstname",
      "cf-questions": "Pada bidang apakah industri usaha anda dijalankan?",
    },
    {
      tag: "input",
      type: "text",
      name: "firstname",
      "cf-questions": "Pada bidang apakah industri usaha anda dijalankan?",
    },
  ];

  React.useEffect(() => {
    const submitCallback = () => {
      var formDataSerialized = conversationalForm.getFormData(true);
      console.log("Formdata, obj:", formDataSerialized);
      conversationalForm.addRobotChatResponse(
        "You are done. Check the dev console for form data output."
      );
    };
    const conversationalForm = ConversationalForm.startTheConversation({
      options: {
        theme: "blue",
        showProgressBar: true,
        userImage: "/assets/pictures/user-random.jpg",
        robotImage: "/assets/icons/gudity.png",
        submitCallback,
        preventAutoFocus: true,
        preventAutoAppend: true,
      },
      tags: formFields,
    });
    formRef?.current?.appendChild(conversationalForm.el);
  });

  return (
    <div className="flex flex-col flex-auto">
      <h2 className="text-2xl font-semibold mb-5">
        Prediksi Kesuksesan Bisnismu
      </h2>
      <div ref={formRef} className="relative flex-auto"></div>
    </div>
  );
};

export default SuccessRatePrediction;

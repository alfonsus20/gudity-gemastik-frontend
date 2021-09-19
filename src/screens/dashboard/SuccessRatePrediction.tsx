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
      tag: "input",
      type: "number",
      name: "year_of_founding",
      "cf-questions": "Sejak tahun berapa bisnis Anda berdiri?",
    },
    {
      tag: "fieldset",
      "cf-questions":
        "Apakah dalam menjalankan bisnis atau usaha ini sudah memiliki pengalaman dalam menjual dan membangun produk?",
      children: [
        {
          tag: "input",
          type: "radio",
          name: "experience",
          "cf-label": "Sudah",
          value: "sudah",
        },
        {
          tag: "input",
          type: "radio",
          name: "experience",
          "cf-label": "Belum",
          value: "belum",
        },
      ],
    },
    {
      tag: "fieldset",
      "cf-questions": "Bagaimana status kepemilikan usaha Anda?",
      children: [
        {
          tag: "input",
          type: "radio",
          name: "is_subscription",
          "cf-label": "Kepemilikan",
          value: 1,
        },
        {
          tag: "input",
          type: "radio",
          name: "is_subscription",
          "cf-label": "Paten",
          value: 0,
        },
      ],
    },
    {
      tag: "input",
      type: "number",
      name: "employee_count",
      "cf-questions":
        "Berapa jumlah karyawan yang anda miliki dalam bisnis atau usaha ini?",
    },
    {
      tag: "input",
      type: "number",
      name: "number_of_direct_competitor",
      "cf-questions": "Berapa jumlah kompetitor usaha Anda?",
    },
    {
      tag: "input",
      type: "number",
      name: "employee_count",
      "cf-input-placeholder": "Skala 1 - 100",
      "cf-questions":
        "Berapa tingkat kepuasan customer terhadap pelayanan Anda?",
    },
  ];

  React.useEffect(() => {
    const submitCallback = () => {
      var formDataSerialized = conversationalForm.getFormData(true);
      console.log("Formdata, obj:", formDataSerialized);
      conversationalForm.addRobotChatResponse(
        "Kami sedang memproses data Anda..."
      );
      setTimeout(() => {
        conversationalForm.addRobotChatResponse(
          "Terima kasih karena sudah menggunakan aplikasi kami dan sampai pada  fitur ini."
        );
        conversationalForm.addRobotChatResponse(
          "Anda luar biasa karena sudah berhasil menjawab seluruh pertanyaan yang ada. Adapun hasil yang didapat dalam proses prediksi dengan mengacu pada data - data yang anda isikan, bahwa usaha anda sudah cukup mapan. "
        );
        conversationalForm.addRobotChatResponse(
          "Tetap semangat dalam meningkatkan usaha anda dan semoga usaha yang anda jalankan dapat terus berkembang ke arah yang positif terlebih bisa menjadi berkat bagi sekeliling maupun Indonesia."
        );
      }, 5000);
    };
    const conversationalForm = ConversationalForm.startTheConversation({
      options: {
        theme: "blue",
        showProgressBar: true,
        userImage: "/assets/icons/user.png",
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
    <div className="flex flex-col flex-auto ">
      <h2 className="text-2xl font-semibold mb-5">
        Prediksi Kesuksesan Bisnismu
      </h2>
      <div ref={formRef} className="relative flex-auto z-0"></div>
    </div>
  );
};

export default SuccessRatePrediction;

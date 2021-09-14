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
      type: "text",
      name: "businessType",
      "cf-questions": "Menu gold medal:\n• makan nasi goreng\n• makan red velvet",
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
      tag: "input",
      type: "number",
      name: "survivalTime",
      "cf-questions": "Sudah berapa tahun bisnis atau usaha anda berdiri?  ",
    },
    {
      tag: "fieldset",
      "cf-questions":
        "Bagaimana posisi kompetitif dari bisnis atau usaha anda?",
      children: [
        {
          tag: "input",
          type: "radio",
          name: "competitor",
          "cf-label": "Kepemilikan",
          value: "kepemilikan",
        },
        {
          tag: "input",
          type: "radio",
          name: "competitor",
          "cf-label": "Paten",
          value: "paten",
        },
      ],
    },
    {
      tag: "fieldset",
      "cf-questions": "Bagaimana basis atau usaha anda dijalankan?",
      children: [
        {
          tag: "input",
          type: "radio",
          name: "basis",
          "cf-label": "Online",
          value: "online",
        },
        {
          tag: "input",
          type: "radio",
          name: "basis",
          "cf-label": "Offline",
          value: "offline",
        },
      ],
    },
    {
      tag: "input",
      type: "number",
      name: "workerAmount",
      "cf-questions":
        "Berapa jumlah karyawan yang anda miliki dalam bisnis atau usaha ini?",
    },
    {
      tag: "input",
      type: "number",
      name: "partnerAmount",
      "cf-questions":
        "Berapa jumlah mitra usaha yang anda miliki dalam bisnis atau usaha ini?",
    },
    {
      tag: "input",
      type: "number",
      name: "income",
      "cf-questions":
        "Berapa jumlah Pemasukkan bisnis atau usaha anda tiap tahunnya?",
    },
    {
      tag: "input",
      type: "number",
      name: "expenses",
      "cf-questions":
        "Berapa jumlah Pengeluaran bisnis atau usaha anda tiap tahunnya?",
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

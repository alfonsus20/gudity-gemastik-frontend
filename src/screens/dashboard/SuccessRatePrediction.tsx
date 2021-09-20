import React from "react";
import { ConversationalForm } from "conversational-form";
import "../../styles/myForm.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const SuccessRatePrediction = () => {
  const formRef = React.useRef<HTMLDivElement>(null);
  const { userInfo } = useSelector((state: RootState) => state.auth);

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
      "cf-input-placeholder": "Contoh: 2012",
    },
    {
      tag: "fieldset",
      "cf-questions":
        "Apakah dalam menjalankan bisnis atau usaha ini Anda sudah memiliki pengalaman dalam menjual dan membangun produk?",
      children: [
        {
          tag: "input",
          type: "radio",
          name: "experience",
          "cf-label": "Tidak ada pengalaman",
          value: 0,
        },
        {
          tag: "input",
          type: "radio",
          name: "experience",
          "cf-label": "Belum terlalu berpengalaman",
          value: 2,
        },
        {
          tag: "input",
          type: "radio",
          name: "experience",
          "cf-label": "Sudah berpengalaman",
          value: 3,
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
          value: false,
        },
        {
          tag: "input",
          type: "radio",
          name: "is_subscription",
          "cf-label": "Paten",
          value: true,
        },
      ],
    },
    {
      tag: "input",
      type: "number",
      name: "employee_count",
      "cf-input-placeholder": "Contoh: 10",
      "cf-questions":
        "Berapa jumlah karyawan yang anda miliki dalam bisnis atau usaha ini?",
    },
    {
      tag: "input",
      type: "number",
      name: "number_of_investor",
      "cf-questions": "Berapa jumlah investor yang usaha Anda miliki?",
      "cf-input-placeholder": "Contoh: 2",
    },
    {
      tag: "input",
      type: "number",
      name: "number_of_direct_competitor",
      "cf-questions": "Berapa jumlah kompetitor usaha Anda?",
      "cf-input-placeholder": "Contoh: 4",
    },
    {
      tag: "fieldset",
      "cf-questions":
        "Berapa tingkat kepuasan customer terhadap pelayanan Anda?",
      children: [
        {
          tag: "input",
          type: "radio",
          name: "client_reputation",
          "cf-label": "Tidak Puas",
          value: 35,
        },
        {
          tag: "input",
          type: "radio",
          name: "client_reputation",
          "cf-label": "Cukup Puas",
          value: 70,
        },
        {
          tag: "input",
          type: "radio",
          name: "client_reputation",
          "cf-label": "Sangat Puas",
          value: 100,
        },
      ],
    },
    {
      tag: "fieldset",
      "cf-questions": "Seberapa baikkah kemampuan marketing Anda?",
      children: [
        {
          tag: "input",
          type: "radio",
          name: "percent_skill_marketing",
          "cf-label": "Kurang Baik",
          value: 35,
        },
        {
          tag: "input",
          type: "radio",
          name: "percent_skill_marketing",
          "cf-label": "Cukup Baik",
          value: 70,
        },
        {
          tag: "input",
          type: "radio",
          name: "percent_skill_marketing",
          "cf-label": "Sangat Baik",
          value: 100,
        },
      ],
    },
    {
      tag: "fieldset",
      "cf-questions": "Seberapa baik Anda dalam mengelola produk?",
      children: [
        {
          tag: "input",
          type: "radio",
          name: "percent_skill_product_management",
          "cf-label": "Kurang Baik",
          value: 35,
        },
        {
          tag: "input",
          type: "radio",
          name: "percent_skill_product_management",
          "cf-label": "Cukup Baik",
          value: 70,
        },
        {
          tag: "input",
          type: "radio",
          name: "percent_skill_product_management",
          "cf-label": "Sangat Baik",
          value: 100,
        },
      ],
    },
    {
      tag: "fieldset",
      "cf-questions": "Seberapa baik Anda dalam mengelola keuangan?",
      children: [
        {
          tag: "input",
          type: "radio",
          name: "percent_skill_finance",
          "cf-label": "Kurang Baik",
          value: 35,
        },
        {
          tag: "input",
          type: "radio",
          name: "percent_skill_finance",
          "cf-label": "Cukup Baik",
          value: 70,
        },
        {
          tag: "input",
          type: "radio",
          name: "percent_skill_finance",
          "cf-label": "Sangat Baik",
          value: 100,
        },
      ],
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
        userImage: userInfo.thumbnail
          ? userInfo.thumbnail
          : "/assets/icons/user.png",
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

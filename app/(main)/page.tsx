"use client"
import Image from "next/image";
import useTrackVisit from "@/hooks/useTrackVisit";

export default function Home() {
  useTrackVisit();
  
  const handleDownload = async () => {
    // optional: hit your backend for analytics
    await fetch("/api/download", { method: "POST" });

    // direct Google Drive download link (from the link you gave)
    const directLink = "https://github.com/Shihab221/apk_host/releases/download/app/app-release.apk";

    // create hidden <a> to force browser download/save
    const a = document.createElement("a");
    a.href = directLink;
    a.setAttribute("download", "app.apk"); // suggested filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a1020] text-white ">
     
     

      {/* Hero */}
      <section
        className="flex flex-col items-center justify-center text-center px-4 py-36 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/hero.jpg')",
        }}
      >
        <h1 className="text-3xl sm:text-5xl font-black max-w-2xl">
          RespiraNet+
        </h1>
        <p className="mt-3 text-sm sm:text-base max-w-xl">
          AI-powered respiratory health screening using cough audio, chest X-ray images, and symptoms.
        </p>
        <button className="mt-6 bg-[#2dcce8] px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-bold text-sm sm:text-base cursor-pointer hover:bg-[#2dcce8] hover:opacity-90 text-white"
        onClick={
          handleDownload
        }
        >
          Download APK
        </button>
      </section>

      {/* Reusable Card Grid */}
      {[
        {
  title: "Comprehensive Screening Features",
  items: [
    {
      title: "Multimodal Screening",
      desc: "Analyze cough audio, facial/thermal images, and symptoms with our sophisticated AI to provide a comprehensive preliminary screening.",
      img: "/multimodal.jpg",
    },
    {
      title: "Cloud-Based AI Engine",
      desc: "Leveraging a secure, scalable cloud infrastructure, our AI engine processes data with maximum efficiency and security.",
      img: "/cloud.jpg",
    },
    {
      title: "Real-Time Triage",
      desc: "Receive immediate feedback with clear urgency levels, helping you understand the potential severity and advised next steps.",
      img: "/realtime.jpg",
    },
    {
      title: "Actionable Next Steps",
      desc: "Get personalized guidance to nearby clinics, telehealth options, and downloadable reports to share with healthcare professionals.",
      img: "/nextstep.jpg",
    },
    {
      title: "Privacy & Encryption",
      desc: "Your data is yours. We employ end-to-end encryption and give you full control over your personal information.",
      img: "/privacy.jpg",
    },
    {
      title: "Historical Analysis",
      desc: "Track and compare past diagnostic results over time with an intuitive visual timeline, highlighting trends, improvements, or worsening respiratory health.",
      img: "/historical.jpg",
    }
  ],
},
        {
  title: "More Features",
  items: [
    {
      title: "Multilingual Support",
      desc: "Accessible to users worldwide with support for multiple languages.",
      img: "/home7.jpg",
    },
    {
      title: "Progress Tracking",
      desc: "View your screening history and track your respiratory health journey over time.",
      img: "/home8.jpg",
    },
    {
      title: "Educational Resources",
      desc: "Access a library of articles and information to illuminate respiratory health and disease.",
      img: "/home9.jpg",
    },
    {
      title: "Symptom Checker",
      desc: "An interactive tool to log and understand your symptoms.",
      img: "/home10.jpg",
    },
    {
      title: "Doctor Connect",
      desc: "Securely share your screening results with your healthcare provider.",
      img: "/home11.jpg",
    },
    {
      title: "Family Accounts",
      desc: "Manage and monitor the respiratory health of your entire family from a single account.",
      img: "/about2.jpg",
    },
    {
      title: "Personalized Insights",
      desc: "Receive AI-driven tips based on your health data and local environmental factors.",
      img: "/home13.jpg",
    },
    {
      title: "Community Forum",
      desc: "Connect with other users to share experiences and support in a moderated environment.",
      img: "/home14.jpg",
    }
  ],
},
        // {
        //   title: "Vision for the Future",
        //   items: [
        //     {
        //       title: "Accessibility",
        //       desc: "Offline-first design empowers remote communities.",
        //       img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzrHVOMozvTL1gI3V3QbyNd1-jQU_sREUEBzykdRYT_HQfXEGC1yMk62irSdzn1ruk-lrH4CAUm_xLPQUITpLx3PVNZB7iuQUBuNDgC5gN0uoX7H5jsSGnPp5yod2htfeTFMvyCcJ6ceWY7qzOl7lJED9Xjc6IPwGZmor6cEojfmOr9Q9mCAu0g7D6Os9Uu_EqfUjD7bwde6i5vmh1kLA_CbnYo5NNO1ilwkdqgo6TvrHOIuBJWykqNlnOCgApBHMd6dTBU5lAqwk",
        //     },
        //     {
        //       title: "Trust",
        //       desc: "100% on-device analysis ensures privacy.",
        //       img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNkpnQg9WM_DfRWVrkWfqq-Gm0RGOTYmKZ2qG5qDQ6aP6Z3fy7Rvtq3Zm6RmRUDmgzvtc1znYPz9zdVPufL0fEV2jJbolTlJuYrfCJzfE28tjUnCr7EjbZBb_aiWAie3qNbzzEaGOA2Rd7YxdFWBu3GUtaxoFNgELbii6LngPDZX_TUWksTQF6jBeqcVotAEPZW1iNGChEIwqdrFd95ANDGvas8tbaYdCjvop1fWRsjJ89eQOkVZgfEPqs_bs1Vl7SQORRgFrTNos",
        //     },
        //     {
        //       title: "Innovation",
        //       desc: "AI fused with healthcare to prevent complications.",
        //       img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn_vLB0cq2GpPOONQ3Mem0l6L41i7M5L8EiQwi94Q4mHjdSz6nFaARAr9jK9CElr7a6X0_yMCu4HJvqxl_klkzYZOyGru2B5c8QSsSKs_lS18EDoIuayBKnHchyGpJD1VlzWW0EI8ksrdefdZkDg3vTV2okUApwFHJV6eUP7OP4WpORnvV83hrGwOp6aF8sqD6eXWglSwr_uFiZtPJ8NX34T9D8IycuWBCzGCSOVSa0QUUKER0ldGhezaMS2LuvDBzJCaEXIOMSB4",
        //     },
        //     {
        //       title: "Future Expansion",
        //       desc: "Scaling to detect multiple conditions through biomarkers.",
        //       img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDMOK8Mj8bgULo5dj58w92NRblgveGkKEvYi5IR3je7JDKNqM9m7zxFyzUrJCRzeZWyHd9E6EJ_ny1ufOq_KDWkcsObEs8CU3Z8QRw0514blKG7LWksNsj5Dvn7865CC9ApAQ5SLgFCR4RWoOyfcOXByX7fF36_cu3ZiTAx2dhIukr9_dbbW-i1-7a3_6V2HdMGztUvKOGqKuVzakyoTqwx3Uqaqplv57F1QcqgZdAaJzj4VcPwHseKomBbFV3vhoJ5T_V5EuQkAU",
        //     },
        //   ],
        // },
      ].map((section, i) => (
        <section key={i} className="px-6 lg:px-50 py-10">
          <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {section.items.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <div
                  className="rounded-lg bg-cover bg-center aspect-square"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                <div>
                  <p className="text-base font-medium">{item.title}</p>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="py-10 text-center text-gray-400 text-sm">
        © 2025 RespiraNet+. All rights reserved.
      </footer>
    </div>
  );
}

import Header from "@/src/components/header/Header";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <main className="w-full bg-linear-to-br from-[#e0f7fa] via-[#f8fafc] to-[#e0f2fe] flex flex-col">
      <section
        id="section-1-header"
        aria-label="Header Section"
        className="bg-[#0c4423]"
      >
        <Header title={"Privacy Policy"} backgroundImage={""} />
      </section>
      <section className="flex justify-center my-10">
        <div className="max-w-3xl bg-white rounded-xl shadow-lg p-8 text-sm">
          <h1 className="text-3xl font-bold text-emerald-700 mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Last updated on Nov 5, 2025
          </p>
          <p className="mb-4">
            This privacy policy sets out how{" "}
            <span className="font-semibold text-emerald-700">
              OUTBOUND TRAVELERS
            </span>{" "}
            uses and protects any information that you give OUTBOUND TRAVELERS
            when you visit our website and/or agree to purchase from us.
          </p>
          <p className="mb-4">
            <span className="font-semibold text-emerald-700">
              OUTBOUND TRAVELERS
            </span>{" "}
            is committed to ensuring that your privacy is protected. Should we
            ask you to provide certain information by which you can be
            identified when using this website, you can be assured that it will
            only be used in accordance with this privacy statement.
          </p>
          <p className="mb-4">
            OUTBOUND TRAVELERS may change this policy from time to time by
            updating this page. You should check this page periodically to
            ensure that you are happy with any changes.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-emerald-700">
            Information We May Collect
          </h2>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Name</li>
            <li>Contact information including email address</li>
            <li>
              Demographic information such as postcode, preferences and
              interests, if required
            </li>
            <li>
              Other information relevant to customer surveys and/or offers
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-emerald-700">
            What We Do With The Information We Gather
          </h2>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Internal record keeping</li>
            <li>Improving our products and services</li>
            <li>
              Periodically sending promotional emails about new products,
              special offers, or other information which we think you may find
              interesting using the email address which you have provided
            </li>
            <li>
              Occasionally contacting you for market research purposes by email,
              phone, fax, or mail
            </li>
            <li>Customizing the website according to your interests</li>
          </ul>
          <p className="mb-4">
            We are committed to ensuring that your information is secure. In
            order to prevent unauthorised access or disclosure, we have put in
            place suitable measures.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-emerald-700">
            How We Use Cookies
          </h2>
          <p className="mb-4">
            A cookie is a small file which asks permission to be placed on your
            computer&apos;s hard drive. Once you agree, the file is added and
            the cookie helps analyze web traffic or lets you know when you visit
            a particular site. Cookies allow web applications to respond to you
            as an individual, tailoring operations to your needs, likes and
            dislikes by gathering and remembering information about your
            preferences.
          </p>
          <p className="mb-4">
            We use traffic log cookies to identify which pages are being used.
            This helps us analyze data about webpage traffic and improve our
            website in order to tailor it to customer needs. We only use this
            information for statistical analysis purposes and then the data is
            removed from the system.
          </p>
          <p className="mb-4">
            Overall, cookies help us provide you with a better website, by
            enabling us to monitor which pages you find useful and which you do
            not. A cookie in no way gives us access to your computer or any
            information about you, other than the data you choose to share with
            us.
          </p>
          <p className="mb-4">
            You can choose to accept or decline cookies. Most web browsers
            automatically accept cookies, but you can usually modify your
            browser setting to decline cookies if you prefer. This may prevent
            you from taking full advantage of the website.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-emerald-700">
            Controlling Your Personal Information
          </h2>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>
              Whenever you are asked to fill in a form on the website, look for
              the box that you can click to indicate that you do not want the
              information to be used by anybody for direct marketing purposes.
            </li>
            <li>
              If you have previously agreed to us using your personal
              information for direct marketing purposes, you may change your
              mind at any time by writing to or emailing us at{" "}
              <a
                href="mailto:support@outboundtravelers.com"
                className="text-emerald-700 underline"
              >
                support@outboundtravelers.com
              </a>
              .
            </li>
          </ul>
          <p className="mb-4">
            We will not sell, distribute or lease your personal information to
            third parties unless we have your permission or are required by law
            to do so. We may use your personal information to send you
            promotional information about third parties which we think you may
            find interesting if you tell us that you wish this to happen.
          </p>
          <p className="mb-4">
            If you believe that any information we are holding on you is
            incorrect or incomplete, please write to us at{" "}
            <span className="font-medium">
              2nd Floor, 112/1, Sree Sai Complex, Court Road, Veppamoodu
              Junction, Nagercoil, Kanyakumari, Tamil Nadu 629001
            </span>
            , call us at{" "}
            <a href="tel:8903629220" className="text-emerald-700 underline">
              8903629220
            </a>
            , or email us at{" "}
            <a
              href="mailto:support@outboundtravelers.com"
              className="text-emerald-700 underline"
            >
              support@outboundtravelers.com
            </a>{" "}
            as soon as possible. We will promptly correct any information found
            to be incorrect.
          </p>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;

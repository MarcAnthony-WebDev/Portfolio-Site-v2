// import React from "react";
// import { ContactForm } from "@/components";
//
// const Page = () => {
//   return (
//     <div className="main-color-styles h-full w-full">
//       <ContactForm />
//     </div>
//   );
// };
//
// export default Page;

'use client';

import React from "react";
import { ContactForm } from "@/components";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const Page = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="main-color-styles min-h-screen w-full"
    >
      <div className="center-container-styles flex flex-col gap-10">
        {/* Page Heading */}
        <motion.div variants={fadeInUp} className="heading-container text-center flex flex-col gap-4">
          <h2 className="page-heading">Let’s Connect</h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
            {`Whether you're looking to build a project, collaborate on an idea, or just want to say hello —
            feel free to drop me a line. I'll get back to you as soon as possible.`}
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={fadeInUp}>
          <ContactForm />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Page;

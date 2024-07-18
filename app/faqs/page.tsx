import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqPage = () => {
  const faqs = [
    {
      category: "Delivery",
      questions: [
        {
          question: "What are the delivery options?",
          answer:
            "We offer standard and express delivery options. Standard delivery typically takes 3-5 business days, while express delivery can arrive within 1-2 business days.",
        },
        {
          question: "Do you offer international shipping?",
          answer:
            "Yes, we offer international shipping to many countries. Please check our shipping policy for more details on the countries we ship to and the associated costs.",
        },
        {
          question: "Can I track my order?",
          answer:
            "Yes, once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website or the courier’s website.",
        },
      ],
    },
    {
      category: "Warranty",
      questions: [
        {
          question: "What is the warranty period for your products?",
          answer:
            "All our products come with a 1-year warranty covering manufacturing defects. For some products, extended warranty options are available at an additional cost.",
        },
        {
          question: "How do I claim a warranty?",
          answer:
            "To claim a warranty, please contact our customer service team with your order details and a description of the issue. We will guide you through the process.",
        },
        {
          question: "Are there any warranty exclusions?",
          answer:
            "Yes, the warranty does not cover damages caused by misuse, accidents, or unauthorized repairs. Please refer to our warranty policy for full details.",
        },
      ],
    },
    {
      category: "Payment",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept various payment methods including credit/debit cards, PayPal, bank transfers and pay on delivery. All transactions are securely processed.",
        },
        {
          question: "Is it safe to use my credit card on your website?",
          answer:
            "Yes, we use SSL encryption to ensure all transactions are secure. Your credit card information is never stored on our servers.",
        },
        {
          question: "Can I pay in installments?",
          answer:
            "Yes, we offer installment plans through our financing partners. You can choose this option at checkout and follow the instructions to apply for financing.",
        },
      ],
    },
    {
      category: "Other",
      questions: [
        {
          question: "Do you have a physical store?",
          answer:
            "Yes, we also operate  online to keep our prices competitive and provide the best possible value to our customers.",
        },
        {
          question: "Can I get a discount for bulk purchases?",
          answer:
            "Yes, we offer discounts for bulk purchases. Please contact our sales team for more information and to get a custom quote.",
        },
        {
          question: "How can I contact customer service?",
          answer:
            "You can contact our customer service team via email at support@example.com or by calling our hotline at 1-800-123-4567. Our support hours are Monday to Friday, 9 AM to 6 PM.",
        },
      ],
    },
  ];

  return (
    <section className="mt-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-subtitle !mt-0 font-bold">
          Frequently <span>Asked Questions</span>
        </h1>
        <Accordion type="single" collapsible>
          {faqs.map((faqCategory, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>
                <h2 className="mb-3 font-bold text-primary">
                  {faqCategory.category}
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                {faqCategory.questions.map((faq, idx) => (
                  <div key={idx} className="mb-4">
                    <h3 className="font-bold">{faq.question}</h3>
                    <p className="mt-2">{faq.answer}</p>
                    {idx !== faqCategory.questions.length - 1 && (
                      <hr className="mt-2" />
                    )}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqPage;

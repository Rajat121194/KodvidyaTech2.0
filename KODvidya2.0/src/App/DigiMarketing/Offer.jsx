import React from "react";

const services = [
  {
    title: "Search Engine Optimization",
    icon: "🔍",
    description:
      "To boost traffic and enhance your website's performance, We follow a strategic approach starting with an SEO audit, keyword research, and competitor analysis. Based on these insights. Utilising industry-leading tools such as Screaming Frog, SEMrush, Moz, Ubersuggest, and Ahrefs, We ensure precise analysis and effective implementation to drive your website's success. Let’s elevate your digital presence with a tailored strategy that delivers results.",
  },
  {
    title: "Social Media Marketing",
    icon: "👤",
    description:
      "Use expert social media marketing to showcase your business's unique offerings and engage with your target audience.We start by understanding your objectives, analysing your competitors, and studying your clients' online behaviour to develop a results-driven strategy. Let us help you stand out and build a deeper connection with your audience.",
  },
  {
    title: "Pay Per Click (PPC)",
    icon: "🖱️",
    description:
      "Eager to generate positive leads or boost your product sales quickly? In such cases, we prioritise SEM over SEO, implementing a specialised strategy. We focus on crafting targeted ad copies, optimising bidding strategies, and employing precise device targeting tactics. By closely monitoring the ROI for each keyword, we ensure our clients reach their ideal customers and see a daily increase in sales. Let us help you achieve immediate, impactful results.",
  },
  {
    title: "Content Writing",
    icon: "📝",
    description:
      "As you know, content is king. Whether you're doing SEO, SMO, PPC, email marketing, or other digital marketing efforts, content is what attracts customers. We develop custom strategies based on our research into what your customers are looking for. Using these insights, we craft a content strategy for each module that convinces people to purchase from or engage with your brand. Let’s create compelling content that drives results.",
  },
  {
    title: "Email Marketing",
    icon: "✉️",
    description:
      "Many believe that email marketing is dead, but we firmly believe it's still the most effective strategy. With email marketing, we can double our sales from existing customers. By leveraging comprehensive data on our past customers, we understand their behaviour and interests. This allows us to send targeted emails whenever we launch a new product or offer a discount. While not everyone will be interested, we can engage up to 40% of our audience effectively. Let us show you the power of email marketing in boosting your sales.",
  },
  {
    title: "Amazon Marketing Services",
    icon: "🏆",
    description:
      "Just listing your product on Amazon isn't enough to drive sales anymore. Competition on Amazon is fierce, and optimising your account is crucial for achieving top results in searches within your niche. We specialise in structuring your Amazon account effectively to ensure high visibility. Our approach includes two key strategies: first, running targeted ads for instant results, and second, organic optimization to maintain long-term success. Partner with us to outperform your competitors on Amazon and steadily grow your business.",
  },
];

const bgColors = [
  "bg-gold",
  "bg-gold",
  "bg-gold",
  "bg-gold",
  "bg-gold",
  "bg-gold",
];

export default function Services() {
  return (
    <div className="px-4 py-16 max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-6xl font-Bebas text-gold mb-1">
          What We offer in Digital Marketing Services ?
        </h2>
        <p className="text-blue font-Sans text-xl max-w-2xl mx-auto">
          Digital marketing cannot be limited to a single strategy...
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cursor-crosshair">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-xl p-3 shadow-md hover:shadow-xl transition-transform transform hover:scale-105 border border-blue ${
              bgColors[index % bgColors.length]
            }`}
          >
            <div className="text-4xl mb-2">{service.icon}</div>
            <h3 className="font-Bebas text-2xl text-blue">{service.title}</h3>
            <p className="text-blue font-Sans text-md">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

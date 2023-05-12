import styles from "../common/mainBanner.module.css";
import { AiFillChrome } from "react-icons/ai";
import { useState } from "react";


const Faq = () => {
    const questions = [
        {
          title: 'What is Tailwind?',
          answer: 'Tailwind is a utility-first CSS framework that allows developers to rapidly build custom user interfaces.'
        },
        {
          title: 'What is React.js?',
          answer: 'React.js is a popular JavaScript library used for building user interfaces.'
        },
        {
          title: 'What is React.js?',
          answer: 'React.js is a popular JavaScript library used for building user interfaces.'
        },
        {
          title: 'What is React.js?',
          answer: 'React.js is a popular JavaScript library used for building user interfaces.'
        },
        {
          title: 'What is React.js?',
          answer: 'React.js is a popular JavaScript library used for building user interfaces.'
        },
        {
          title: 'How can I use Tailwind with React.js to create an open and close functionality?',
          answer: 'You can use the `map` function in JavaScript to dynamically generate the HTML elements for your open and close functionality, and then use Tailwind classes'
        }]
    const [activeQuestion, setActiveQuestion] = useState(null);

    const handleClick = (index) => {
      setActiveQuestion(index === activeQuestion ? null : index);
    };
  return (
    <div className='lg:h-[100vh]'>
      <div className="h-[100%] flex flex-col md:flex-row justify-center items-center sm:flex flex-col-reverse">
        <div className="w-full text-[#1C344E] text-white md:w-1/2 py-6 px-6 md:px-16 text-center md:text-left">
          <h1>Add Block At one Click</h1>
          <h1 className="text-[3.5rem] font-bold mb-4  leading-[4rem]">
            One Extension
            <br /> For All Unsecure Websites
          </h1>
          <h1>One Extention,Unlimited potential</h1>
          <p className="text-[10px] pt-2">
            Network security is the practice of protecting computer networks
            from unauthorized access, attacks, and data breaches. It involves
            implementing various measures such as firewalls, encryption,
            intrusion detection systems, and access controls to ensure the
            confidentiality, integrity, and availability of network resources.
            Effective network security is essential for businesses,
            organizations, and individuals to prevent data theft, unauthorized
            access, and other cyber threats that can cause significant
            financial, reputational, and legal damages.
          </p>
          <a
            href="/home"
            className="mt-12 flex justify-center items-center gap-3 lg:w-[50%] md:text-white rounded-tr-lg rounded-bl-lg px-8 py-1 bg-[#5CA0E9] font-bold"
          >
            <AiFillChrome size={30} />
            Add to Chrome
          </a>
        </div>
        <div className="w-full md:w-1/2 py-6 px-6">
        <div className="max-w-lg mx-auto">
      {questions.map((question, index) => (
        <div
          key={index}
          className="border-b border-gray-200 py-4"
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <h3 className="text-lg font-medium text-gray-900">
              {question.title}
            </h3>
            <svg
              className={`${
                activeQuestion === index ? 'rotate-180' : ''
              } w-5 h-5 text-gray-400`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {activeQuestion === index && (
            <p className="mt-2 text-gray-600">
              {question.answer}
            </p>
          )}
        </div>
      ))}
    </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

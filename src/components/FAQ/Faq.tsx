import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Arrow from './faq-arrow.svg';
import './Faq.css';

const Faq = () => {
  const [displayAnswer, setDisplayAnswer] = useState<Array<boolean>>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const answerRef = useRef<Array<HTMLElement | null>>([]);

  const faqs: Array<{ q: string; a: string }> = [
    {
      q: 'What is FlightSim Career?',
      a: 'FlightSim Career is a hub for Flight Sim enthusiasts that want to immerse themselves into their virtual careers. They can get dispatches for their next flight, record their progress in the logbook and get promoted to senior ranks as their career progresses.',
    },
    {
      q: 'Is FlightSim Career free?',
      a: 'FlightSim Career is completely free of charge. If you would like to help with server and maintenance costs, you can use the Donate button in the footer. It would be highly appreciated.',
    },
    {
      q: 'What is Automatic Advancement?',
      a: 'Automatic Advancement is a FlightSim Career feature that allows users to get promoted to the next rank according to their total flight hours.',
    },
    {
      q: 'How does Automatic Advancement work?',
      a: "Each new logbook entry will aggregate the user's total flight hours by the entry's time of flight. For example, a flight entered in the logbook with a flight time of 2 hours will increase the user's flight hours by 2 hours. Similarly an edited older entry will adjust the user's total flight hours. The user can determine how many flight hours are required to advance to the next rank in the settings page. Note that the time of flight is always automatically added to the total flight hours regardless if the Automatic Advancement is enabled or not.",
    },
    {
      q: 'How does Dispatch work?',
      a: "The Dispatch system will take in account by default the aircraft and the company of the given career and generate flights that match with them, although you can choose to disregard the aircraft and/or the company. The Dispatch system will attempt to generate as many legs as chosen by the user, however there will be cases that it generates one more leg as it will always produce a last flight back to the pilot's base.",
    },
    {
      q: 'There is a message to check my settings and try again when I am trying to generate flights. What does it mean?',
      a: 'It means that the Dispatch system could not find flights in the database that matched the selected career aircraft, company and leg distance settings. You should try changing the leg distances, or unticking the Search by Aircraft and/or Search by Company fields, in order to generate flights.',
    },
    {
      q: 'Which sims are supported?',
      a: 'All sims are supported: MSFS, P3D, X-Plane, Aerofly etc. There are no restrictions.',
    },
    {
      q: 'Are helicopters supported?',
      a: 'Although FlightSim Career was designed with fixed wing aircraft in mind.',
    },
    {
      q: "I don't know how to create logbooks",
      a: 'Logbooks are created and deleted automatically with each new pilot/career.',
    },
    {
      q: 'Is there a mobile app?',
      a: 'There are no plans for a mobile app at this time',
    },
    {
      q: "Why can't I edit my rank and flight hours?",
      a: 'If Automatic Advancement is enabled, editing the rank and flight hours in the career page is not possible. FlightSim Career will keep track of the flight hours and will automatically advance the user to the next rank once the required flight hours are completed. If you want to manually edit the rank and flight hours, you will have to disable Automatic Advancement.',
    },
    {
      q: "I enabled Automatic Advancement but it doesn't work?",
      a: 'Make sure you press the Save Settings button',
    },
    {
      q: 'How many pilots/careers can I create?',
      a: 'You can create as many pilots/careers as you wish. There are no restrictions.',
    },
  ];

  return (
    <div className="faq-wrapper">
      <Helmet>
        <title>FAQ - FlightSim Career</title>
        <link rel="canonical" href="/dashboard/faq" />
        <meta
          name="description"
          content="Frequently Asked Questions section of FlightSim Career, your go-to solution for all your virtual flight needs!"
        />
      </Helmet>
      <h2>Frequently Asked Questions</h2>
      <div className="faq-content">
        {faqs.map((faq: any, index: number) => (
          <div
            className="faq-section"
            key={faq.q}
            ref={(ref) => (answerRef.current[index] = ref)}
            onClick={() => {
              setDisplayAnswer((oldDisplayAnswer) =>
                oldDisplayAnswer.map((faq: any, idx: number) =>
                  idx === index ? !faq : faq
                )
              );
              answerRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <section className="faq-question">
              <img
                className={`expand-question${
                  displayAnswer[index] ? ' active' : ''
                }`}
                src={Arrow}
                alt="Arrow revealing answer"
                aria-label="Arrow revealing answer"
              />{' '}
              <p>{faq.q}</p>
            </section>
            <article className="faq-answer" hidden={!displayAnswer[index]}>
              {faq.a}
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

import React, { useState } from "react";
import styles from '/Users/Farrukh Sajjad/Desktop/star/star/styles/nextpage.module.css'; // Make sure to adjust the path based on your project structure

interface nextPageProps {
  documentHeading: string;
}

const NextPage: React.FC<nextPageProps> = ({ documentHeading }) => {
  const [selectedSentence, setSelectedSentence] = useState<string | null>(null);

  const translations: { [key: string]: string } = {
    "User Interface - how users will consume and interact with your application.":
      "یوزر انٹرفیس - صارفین آپ کی ایپلیکیشن کے ساتھ کس طرح استعمال اور تعامل کریں گے۔",
    "Routing - how users navigate between different parts of your application.":
      "روٹنگ - صارف آپ کی درخواست کے مختلف حصوں کے درمیان کیسے تشریف لے جاتے ہیں۔",
    "Data Fetching - where your data lives and how to get it.":
      "ڈیٹا کی بازیافت - آپ کا ڈیٹا کہاں رہتا ہے اور اسے کیسے حاصل کیا جائے۔",
    "Rendering - when and where you render static or dynamic content.":
      "رینڈرنگ - آپ کب اور کہاں جامد یا متحرک مواد پیش کرتے ہیں۔",
    "Integrations - what third-party services you use (for CMS, auth, payments, etc.) and how you connect to them.":
      "انٹیگریشنز - آپ کونسی تھرڈ پارٹی سروسز استعمال کرتے ہیں (CMS، تصدیق، ادائیگی وغیرہ کے لیے) اور آپ ان سے کیسے جڑتے ہیں۔",
    "Infrastructure - where you deploy, store, and run your application code (serverless, CDN, edge, etc.).":
      "انفراسٹرکچر - جہاں آپ اپنا ایپلیکیشن کوڈ (سرور لیس، سی ڈی این، ایج، وغیرہ) لگاتے، اسٹور کرتے اور چلاتے ہیں۔",
    "Performance - how to optimize your application for end-users.":
      "کارکردگی - اختتامی صارفین کے لیے اپنی درخواست کو کیسے بہتر بنائیں۔",
    "Scalability - how your application adapts as your team, data, and traffic grow.":
      "اسکیل ایبلٹی - آپ کی ٹیم، ڈیٹا اور ٹریفک بڑھنے کے ساتھ ہی آپ کی ایپلیکیشن کس طرح ڈھلتی ہے۔",
    "Developer Experience - your team,s experience building and maintaining your application.":
      "ڈویلپر کا تجربہ - آپ کی ٹیم کا تجربہ آپ کی درخواست کی تعمیر اور اسے برقرار رکھنے کا۔",
  };

  const handleClick = (sentence: string) => {
    setSelectedSentence(sentence === selectedSentence ? null : sentence);
  };

  return (
    <div className={styles.container}>
      <h1>{documentHeading}</h1>
      <h1>Next.Js</h1>
      <p>
        Next.js is a flexible React Framework, that gives building blocks to
        create a fast, Full Stack web application.
      </p>
      <h2>Building Blocks of web application</h2>
      <div className={styles.translationsContainer}>
        <p>
          There are a few things you need to consider when building modern
          applications. Such as:
        </p>
        {Object.keys(translations).map((sentence) => (
          <div key={sentence} className={styles.sentenceContainer} onClick={() => handleClick(sentence)}>
            <p className={styles.englishSentence}>
              <span className={styles.bold}>{sentence.split(' ')[0]}</span> {sentence.slice(sentence.indexOf(' ') + 1)}
            </p>
            {sentence === selectedSentence && (
              <p className={styles.urduTranslation}>{translations[selectedSentence]}</p>
            )}
          </div>
        ))}
      </div>
      <p>
        For each part of your application, you will need to decide whether you
        will build a solution yourself or use other tools, such as packages,
        libraries, and frameworks.
      </p>
      <p>
        آپ کی درخواست کے ہر حصے کے لیے، آپ کو یہ فیصلہ کرنے کی ضرورت ہوگی کہ
        آیا آپ خود کوئی حل تیار کریں گے یا دوسرے ٹولز، جیسے پیکجز،
        لائبریریاں اور فریم ورک استعمال کریں گے۔
      </p>
    </div>
  );
};

export default NextPage;

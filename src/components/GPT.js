import React from "react"
import styles from '@/styles/GPT.module.css'
import { postCompletions } from "@/services/gpt";
import { useState } from "react";
import Loader from "./Loader";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export default function GPT({city, temp}) {
  const [textGenerated, setTextGenerated] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleGeneratePrompt = async () => {
    setLoading(true);
    setTextGenerated('');
    const data = await postCompletions(city, temp);
    setLoading(false);
    setTextGenerated(generatedText(data));
  }

  const generatedText = (text) => {
    const newText = text.replace(/['"]+/g, '');
    const hashtagIndex = newText.indexOf('#');
    return newText.slice(0, hashtagIndex);
  }

  return (
    <div className={styles.gpt}>
      {!textGenerated && (
        <button className={styles.generatePrompt} onClick={handleGeneratePrompt}>Gerar frase com IA</button>
      )}
      {loading && (
        <>
          <Loader></Loader>
        </>
      )}
      {textGenerated && (
        <div className={styles.textGenerated}>
          {textGenerated}
          <div className={styles.tweet}>
            <TwitterShareButton
              url={'https://clima-gpt.vercel.app/'}
              options={{ text: `${textGenerated}`, via: 'ClimaGPT', size: 'large' }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

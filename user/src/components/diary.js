import React, { useState, useEffect } from "react";

import "./diary.css";
export const Diary=()=>{
    return(
         <div className="manuletter">
      <div className="page-fold"></div>
      <div className="diary-date">June 30, 2025</div>
      <div className="ink-blot"></div>
      <div className="ink-blot"></div>
      <div className="coffee-stain"></div>

      <h1>Last Night of Summer Vacation</h1>

      <p>
        As this summer comes to an end and I prepare to return to university, I can't help but reflect on the past two months — possibly the most meaningful summer I've ever had. I lived fully, with energy, purpose, and consistency. Every day felt intentional, and looking back, I'm proud of who I was during this time.
      </p>

      <h2>The Gym Habit: A Promise to Myself</h2>
      <p>
        The best part of this summer? I didn't miss a single day at the gym. From someone who was once unsure and inconsistent, I now see muscle bumps where there used to be doubt. It's not about having a perfect body — it's about keeping a promise to myself. I followed a disciplined diet, listened to my trainer (to whom I'll always be grateful for his motivation and kindness), and built something that will last far beyond this summer: a habit, a mindset, a version of me who chooses to care.
      </p>

      <p>
        And of course, this wouldn't have been possible without my parents — their support gave me this precious window to focus on myself. For that, I am truly thankful.
      </p>

      <h2>
        The <span className="underline">Closure Project</span>: Healing an Old Chapter
      </h2>
      <p>
        Something even deeper happened this summer. I wrote a closure letter to someone I had quietly cared about for six years. It wasn't meant to reopen anything — only to find peace. I never expected a reply. But she responded, gracefully and kindly. That single message brought a strange calm to a pain I had carried for far too long.
      </p>

      <p>
        I called it <strong>"The Closure Project."</strong> But in reality, it was much more than closure — it was healing.
      </p>

      <p>
        Weeks later, I asked myself: <em>Have I really let her go?</em><br />
        The answer was honest: <em>Not entirely.</em><br />
        And so I made a quiet decision — if the feelings remain months from now, I'll allow myself to confess them, not for an outcome, but for honesty. After all, this was the first time I had ever truly opened up to a woman about how I felt.
      </p>

      <h2>Growth Beyond the Mirror</h2>
      <p>
        Beyond the gym and emotions, I also grew in my domain — continued my internship, worked on personal projects, and stayed productive. I learned a lot. I built. I moved forward.
      </p>

      <h2>The Monsoon, The Mood</h2>
      <p>
        And how could I forget the monsoon? It was beautiful — the kind of rain that makes you want to pause and just feel. I'll miss those days, and I know I'll never forget them.
      </p>

      <footer>
        To the Summer of 2025: Thank you. <br />
        You gave me strength, clarity, and the courage to keep going — physically, emotionally, and creatively.
      </footer>
    </div>
  );
};

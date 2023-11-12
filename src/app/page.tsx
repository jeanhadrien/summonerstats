'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function App() {
  const [summonerId, setSummonerId] = useState('');
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSummonerId(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      redirectToSummoner();
    }
  };

  const redirectToSummoner = () => {
    // Ensure that the input is not empty
    const sanitizedSummoner = summonerId.trim();
    if (sanitizedSummoner !== '' && sanitizedSummoner.length < 50) {
      router.push(`/summoner/${encodeURIComponent(summonerId)}`);
    }
  };

  return (
    <main>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(./saisons-league-of-legends-segments-classes.png)'}}>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there!</h1>
            <p className="py-6">We can provide valuable insights on your gameplay.</p>
            <div className="flex justify-center gap-2 items-center">
              <input
                type="text"
                placeholder="Summoner"
                className="input input-bordered input-primary w-full max-w-xs"
                value={summonerId}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />
              <button
                className="btn btn-primary"
                onClick={redirectToSummoner}
              >
                Get stats
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

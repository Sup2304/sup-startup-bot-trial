const ideas = {
  funny: [
    (p)=>`BreadMatch — an app that matches you to local people who also can't stop buying bread. Monetize with artisan loaf drops.`,
    (p)=>`PetGym — subscription boxes that give your dog weekly fitness puzzles. Market to busy pet parents.`
  ],
  practical: [
    (p)=>`QuickFix — a gig platform matching vetted students to 1-hour household help for "${p}". Start in your college dorm.`,
    (p)=>`ShelfScan — an app that scans your bookshelf and sells unused textbooks automatically.`
  ],
  viral: [
    (p)=>`ChallengeChain — turn your problem "${p}" into a 15-sec TikTok challenge and let brands sponsor the top creators.`,
    (p)=>`MemeMarket — crowdsourced meme creation platform where memes are minted as collectibles and winners split revenue.`
  ],
  tech: [
    (p)=>`LazyOps — tiny automation scripts bundle for students that automates boring workflows like enrollment emails for "${p}".`,
    (p)=>`OfflineSync — P2P data-sync for study groups in low-bandwidth zones.`
  ]
};

document.getElementById('go').addEventListener('click', ()=>{
  const problem = (document.getElementById('problem').value || 'daily annoyance').trim();
  const vibe = document.getElementById('vibe').value;
  const row = ideas[vibe][Math.floor(Math.random()*ideas[vibe].length)];
  const result = row(problem);
  const out = document.getElementById('output');
  out.innerHTML = `<div style="background:#f4f4f8;padding:14px;border-radius:8px">
    <strong>Idea:</strong> ${result}
    <div style="margin-top:8px">
      <button id="tweet">Tweet</button>
      <button id="copy">Copy</button>
    </div>
  </div>`;
  document.getElementById('tweet').onclick = ()=> {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(result)}`;
    window.open(url,'_blank');
  };
  document.getElementById('copy').onclick = ()=>{
    navigator.clipboard.writeText(result);
    alert('Copied!');
  };
});

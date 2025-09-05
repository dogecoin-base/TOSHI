import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Copy, Twitter, Send, Menu, X } from "lucide-react";
import "./index.css";

export default function App() {
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const contractAddress = "0xabc265cfa4a78d88e51b09e9da2e3784c85d8453";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMobileMenu(false);
  };

  return (
    <div className="app">

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="logo" onClick={() => scrollToSection("hero")}>$TOSHA</div>

          <div className="nav-links desktop">
            <button onClick={() => scrollToSection("hero")}>Home</button>
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("tokenomics")}>Tokenomics</button>
            <button onClick={() => scrollToSection("tokens")}>Tokens</button>
            <button onClick={() => scrollToSection("faq")}>FAQ</button>
            <a href="https://x.com/ToshaOnToshi" target="_blank" rel="noopener noreferrer"><Twitter size={18} /> Twitter</a>
            <a href="https://t.me/ToshaOnToshi" target="_blank" rel="noopener noreferrer"><Send size={18} /> Telegram</a>
            <a href="https://toshimart.xyz/0xabc265cfa4a78d88e51b09e9da2e3784c85d8453" target="_blank" rel="noopener noreferrer" className="buy-btn">Buy on ToshiMart</a>
            <button onClick={() => scrollToSection("chart")} className="chart-btn">Chart</button>
          </div>

          <div className="mobile-toggle" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>

        {mobileMenu && (
          <div className="mobile-menu">
            <button onClick={() => scrollToSection("hero")}>Home</button>
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("tokenomics")}>Tokenomics</button>
            <button onClick={() => scrollToSection("tokens")}>Tokens</button>
            <button onClick={() => scrollToSection("faq")}>FAQ</button>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><Twitter size={18} /> Twitter</a>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer"><Send size={18} /> Telegram</a>
            <a href="https://toshimart.com/" target="_blank" rel="noopener noreferrer" className="buy-btn">Buy on ToshiMart</a>
            <button onClick={() => scrollToSection("chart")} className="chart-btn">Chart</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="hero" className="hero-section">
        <motion.div
          className="hero-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.img src="/tosha.png" alt="Tosha" className="hero-img"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.h1 className="hero-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          $TOSHA
        </motion.h1>
        <motion.p className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          The most BASED girlfriend on Base. 💖
        </motion.p>
      </section>

      {/* About */}
      <motion.section id="about" className="section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2>ℹ️ About Tosha</h2>
        <p className="about-text">
          Tosha is the meme queen of Base chain. She’s cute, loyal, and fully BASED. While others chase hype, Tosha just wins. 💎
        </p>
        <div className="features">
          <motion.div className="feature" whileHover={{ scale: 1.05 }}>
            <h3>💖 Loyal</h3>
            <p>Tosha will always stay BASED with you.</p>
          </motion.div>
          <motion.div className="feature" whileHover={{ scale: 1.05 }}>
            <h3>🔥 Meme Energy</h3>
            <p>Powered by the community, made for degenerates.</p>
          </motion.div>
          <motion.div className="feature" whileHover={{ scale: 1.05 }}>
            <h3>⚡ BASED Spirit</h3>
            <p>The cultural girlfriend coin of the Base ecosystem.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Tokenomics */}
      <motion.section id="tokenomics" className="section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2>💰 Tokenomics</h2>
        <div className="grid">
          {["🔥 Total Supply: 1,000,000,000","💎 LP: Locked","🚀 Marketing: BASED shills only","🐸 100% Meme, 0% Utility"].map((text, idx)=>(
            <motion.div key={idx} className="card" whileHover={{ scale: 1.05 }} transition={{ type:"spring", stiffness:300 }}>
              {text}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tokens */}
      <motion.section id="tokens" className="section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2>🔎 About $TOSHA Token</h2>
        <p className="tokens-description">
          $TOSHA is the meme queen token of the Base ecosystem. It rewards holders with pure BASED vibes and meme energy.
        </p>
        <div className="tokens-features">
          <div className="token-feature">
            <h3>📊 Market Cap Weighted</h3>
            <p>Tracks the largest BASED holders and community engagement.</p>
          </div>
          <div className="token-feature">
            <h3>🌐 Broad Community Standard</h3>
            <p>Represents the most loyal and active members of the Base ecosystem.</p>
          </div>
          <div className="token-feature">
            <h3>❌ Excludes Stablecoins</h3>
            <p>Pure meme-token exposure, 100% BASED, 0% boring utility.</p>
          </div>
        </div>
      </motion.section>

      {/* Chart */}
      <motion.section id="chart" className="section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}>
        <h2>📊 Live Chart</h2>
        <iframe src="https://dexscreener.com/base/0xYOURPAIR?embed=1&theme=dark" className="live-chart" allowFullScreen></iframe>
      </motion.section>

      {/* Contract */}
      <motion.section id="contract" className="section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}>
        <h2>📝 Official Contract</h2>
        <div className="contract-box">
          <code>{contractAddress}</code>
          <button onClick={copyToClipboard}>{copied ? "✅ Copied!" : <Copy size={18} />}</button>
        </div>
      </motion.section>
        {/* FAQ */}
      <motion.section id="faq" className="section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2>❓ FAQ</h2>
        <div className="faq-item">
          <h3>🔹 Are you the same as Coinbase's COIN50 Index?</h3>
          <p>❌ No, we are NOT the same. We are a separate memecoin project that aims to outperform the official index through community-driven strategies.</p>
        </div>
        <div className="faq-item">
          <h3>🔹 How do you aim to outperform the index?</h3>
          <p>📈 Through community-driven strategies, innovative tokenomics, and quick decisions that traditional indices cannot.</p>
        </div>
        <div className="faq-item">
          <h3>🔹 What makes you different from the official index?</h3>
          <p>🚀 We can adapt quickly to market conditions, leverage community insights, and implement strategies that traditional indices cannot.</p>
        </div>
        <div className="faq-item">
          <h3>🔹 Is this a safe investment?</h3>
          <p>⚠️ As with any cryptocurrency investment, there are risks. Always do your own research and invest only what you can afford to lose.</p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        <div className="scrolling-text">
          Stay BASED 💖 Stay TOSHA 💖 Stay Winning 💖
        </div>
      </footer>
    </div>
  );
}


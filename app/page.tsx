import Image from 'next/image'

export default function Home() {
  return (
    <div style={{ background: '#F2F1ED', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <main
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          padding: '0 clamp(1.25rem, 5vw, 2.5rem)',
          paddingBottom: '6rem',
        }}
      >
        <About />
        <Work />
        <Now />
        <Connect />
      </main>
      <Footer />
    </div>
  )
}

/* ── Nav ─────────────────────────────────────────── */

function Nav() {
  return (
    <header
      style={{
        position: 'fixed',
        top: '1.25rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        whiteSpace: 'nowrap',
      }}
    >
      <nav
        className="glass-nav"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          padding: '0.55rem 1.4rem',
        }}
      >
        <span
          style={{
            fontSize: '13.5px',
            fontWeight: 300,
            color: 'rgba(0,0,0,0.78)',
            letterSpacing: '0.04em',
            paddingRight: '0.6rem',
          }}
        >
          博子
        </span>
        <span style={{ color: 'rgba(0,0,0,0.14)', fontSize: '10px', paddingRight: '0.35rem' }}>
          ·
        </span>
        <a href="#about" className="nav-link" style={{ padding: '0.1rem 0.5rem' }}>关于</a>
        <a href="#work" className="nav-link" style={{ padding: '0.1rem 0.5rem' }}>作品</a>
        <a href="#connect" className="nav-link" style={{ padding: '0.1rem 0.5rem' }}>联系</a>
      </nav>
    </header>
  )
}

/* ── Hero ────────────────────────────────────────── */

function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '7rem 1.5rem 5rem',
      }}
    >
      {/* Ambient background orbs */}
      <div
        className="orb"
        style={{
          width: 560,
          height: 560,
          background: 'radial-gradient(circle, rgba(60,110,255,0.07) 0%, transparent 70%)',
          top: '-80px',
          left: '-100px',
          filter: 'blur(0px)',
          animation: 'orb-a 18s ease-in-out infinite alternate',
        }}
      />
      <div
        className="orb"
        style={{
          width: 440,
          height: 440,
          background: 'radial-gradient(circle, rgba(130,60,210,0.06) 0%, transparent 70%)',
          bottom: '-80px',
          right: '-80px',
          filter: 'blur(0px)',
          animation: 'orb-b 22s ease-in-out infinite alternate',
        }}
      />
      <div
        className="orb"
        style={{
          width: 280,
          height: 280,
          background: 'radial-gradient(circle, rgba(255,160,50,0.05) 0%, transparent 65%)',
          top: '40%',
          left: '55%',
          filter: 'blur(0px)',
          animation: 'orb-a 28s ease-in-out infinite alternate-reverse',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '640px',
        }}
      >
        {/* Meta label */}
        <p className="label fu d1" style={{ marginBottom: '2.5rem' }}>
          2026 &ensp;·&ensp; 杭州 Hangzhou
        </p>

        {/* Name */}
        <h1 className="name-cn fu d2" style={{ marginBottom: '0.65rem' }}>
          博子
        </h1>
        <p className="name-en-sub fu d2" style={{ marginBottom: '2.2rem' }}>
          B &nbsp; O &nbsp; Z
        </p>

        {/* Role pills */}
        <div
          className="fu d3"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '2.4rem',
          }}
        >
          <span className="glass-pill">亚马逊运营</span>
          <span className="glass-pill">AI 产品探索者</span>
          <span className="glass-pill">出海实践者</span>
        </div>

        {/* Tagline */}
        <p className="tagline fu d4">
          在不确定里先做一件小事，先跑起来再说。
        </p>
        <p
          className="fu d5"
          style={{
            fontSize: '13px',
            color: 'rgba(0,0,0,0.26)',
            letterSpacing: '0.01em',
            marginTop: '0.5rem',
          }}
        >
          Build small, move fast, learn by shipping.
        </p>

        {/* Scroll cue */}
        <p
          className="fu d6"
          style={{
            marginTop: '3.5rem',
            fontSize: '11px',
            color: 'rgba(0,0,0,0.18)',
            letterSpacing: '0.06em',
          }}
        >
          ↓
        </p>
      </div>
    </section>
  )
}

/* ── About ───────────────────────────────────────── */

function About() {
  return (
    <section
      id="about"
      className="glass-panel"
      style={{ padding: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1.25rem' }}
    >
      <p className="label" style={{ marginBottom: '1.25rem' }}>01 &ensp;/&ensp; About</p>

      <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
        关于我
      </h2>

      {/* Two columns on desktop */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.75rem 2.5rem',
        }}
      >
        <div>
          <p className="muted" style={{ marginBottom: '0.65rem', letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '10px' }}>
            背景
          </p>
          <p className="body" style={{ lineHeight: 1.85 }}>
            在浙江大华做了 12 年 Android 应用开发，去年离职创业。现在在一家亚马逊跨境电商创业公司全职创业——发货、广告、选品、Listing，在真实店铺里边打边学。教务员出身，Java 培训班自学进移动互联网，这条路从来不是规划好的。
          </p>
          <p
            style={{
              fontSize: '12.5px',
              color: 'rgba(0,0,0,0.28)',
              marginTop: '0.65rem',
              lineHeight: 1.7,
            }}
          >
            Former Android Engineer · 12yr · Now building an Amazon cross-border e-commerce startup · Hangzhou.
          </p>
        </div>

        <div>
          <p className="muted" style={{ marginBottom: '0.65rem', letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '10px' }}>
            方法论
          </p>
          <p className="body" style={{ lineHeight: 1.85 }}>
            先 MVP 再迭代，带真实项目去学，把跑通的方法整理成 SOP。比身边人早进新领域，踩坑然后沉淀。Web3、鸿蒙、出海 SEO、AI 工具——每次都是从"先做一件能用的小东西"开始。
          </p>
          <p
            style={{
              fontSize: '12.5px',
              color: 'rgba(0,0,0,0.28)',
              marginTop: '0.65rem',
              lineHeight: 1.7,
            }}
          >
            MVP-first · Systems thinker · Early adopter · SOP builder.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ── Work ────────────────────────────────────────── */

function Work() {
  return (
    <section id="work" style={{ marginBottom: '1.25rem' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '0.75rem',
          marginBottom: '1.25rem',
          padding: '0 0.25rem',
        }}
      >
        <p className="label">02 &ensp;/&ensp; Selected Work</p>
      </div>

      {/* Featured card: ReelKey */}
      <div
        className="glass-card"
        style={{
          marginBottom: '0.85rem',
          padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
          borderTop: '1px solid rgba(80,120,255,0.20)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle top accent gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '80px',
            background: 'linear-gradient(180deg, rgba(80,130,255,0.05) 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <h3
              style={{
                fontSize: 'clamp(20px, 3vw, 26px)',
                fontWeight: 300,
                color: 'rgba(0,0,0,0.84)',
                letterSpacing: '-0.01em',
              }}
            >
              ReelKey
            </h3>
            <span className="badge-live">已上线</span>
          </div>
          <a
            href="https://reelkey.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn"
          >
            reelkey.app&ensp;↗
          </a>
        </div>

        <p
          style={{
            fontSize: '14px',
            color: 'rgba(0,0,0,0.52)',
            lineHeight: 1.8,
            marginBottom: '1.25rem',
            maxWidth: '520px',
          }}
        >
          BYOK AI 视频生成看板。自带 fal.ai API Key，不订阅、不囤积点数，按实际消耗付费。支持 Kling 2.5 Turbo Pro 和 Wan 2.5，终身买断制 $29。
        </p>
        <p
          style={{
            fontSize: '12.5px',
            color: 'rgba(0,0,0,0.26)',
            marginBottom: '1.25rem',
            maxWidth: '480px',
          }}
        >
          A BYOK AI video generation dashboard — bring your own fal.ai key, no subscription, pay per generation. Lifetime access. Kling 2.5 & Wan 2.5.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {['Next.js 15', 'fal.ai', 'Cloudflare R2', 'Neon DB', 'Creem'].map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>

      {/* Two smaller cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '0.85rem',
        }}
      >
        {/* 出海工具站 */}
        <div
          className="glass-card"
          style={{ padding: 'clamp(1.25rem, 3vw, 1.75rem)' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.85rem',
            }}
          >
            <h3
              style={{
                fontSize: '17px',
                fontWeight: 300,
                color: 'rgba(0,0,0,0.82)',
                letterSpacing: '-0.01em',
              }}
            >
              出海工具站
            </h3>
            <span className="badge-wip">进行中</span>
          </div>
          <p
            style={{
              fontSize: '13.5px',
              color: 'rgba(0,0,0,0.46)',
              lineHeight: 1.8,
              marginBottom: '0.75rem',
            }}
          >
            2026 年核心项目：做 12 个出海工具站，沉淀一套可复用 SOP。AI 视频工具站是首个真实验证样本。
          </p>
          <p
            style={{ fontSize: '12px', color: 'rgba(0,0,0,0.24)', lineHeight: 1.7 }}
          >
            12 overseas web tools · Reusable SOP · First validated sample in production.
          </p>
        </div>

        {/* AI 亚马逊运营 */}
        <div
          className="glass-card"
          style={{ padding: 'clamp(1.25rem, 3vw, 1.75rem)' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.85rem',
            }}
          >
            <h3
              style={{
                fontSize: '17px',
                fontWeight: 300,
                color: 'rgba(0,0,0,0.82)',
                letterSpacing: '-0.01em',
              }}
            >
              AI 亚马逊运营
            </h3>
            <span className="badge-wip">进行中</span>
          </div>
          <p
            style={{
              fontSize: '13.5px',
              color: 'rgba(0,0,0,0.46)',
              lineHeight: 1.8,
              marginBottom: '0.75rem',
            }}
          >
            把运营学习工程化：AI 半自动化 Listing 文案、竞品分析、广告判断，在真实店铺中验证并沉淀 SOP。
          </p>
          <p
            style={{ fontSize: '12px', color: 'rgba(0,0,0,0.24)', lineHeight: 1.7 }}
          >
            AI-assisted Listing · Competitor analysis · Ad ops · Real store validation.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ── Now ─────────────────────────────────────────── */

function Now() {
  const items = [
    '深度参与亚马逊真实店铺运营——发货、广告、Listing、A+ 页面，边做边沉淀 AI 辅助 SOP。',
    'ReelKey 上线后持续迭代，收集真实用户反馈，验证出海工具站的产品方向。',
    '参加生财有术出海航海活动，带着真实项目去学，用真实结果检验方法。',
    '维护个人 AI 知识系统（Obsidian + 多 AI 协作），把每段对话提炼为可复用资产。',
  ]

  return (
    <section
      id="now"
      className="glass-panel"
      style={{ padding: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1.25rem' }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <p className="label">03 &ensp;/&ensp; Now</p>
        <p className="muted" style={{ fontSize: '11px', letterSpacing: '0.06em' }}>
          2026年5月 · 杭州
        </p>
      </div>

      <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
        当下在做
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              gap: '1rem',
              padding: '0.85rem 0',
              borderBottom: i < items.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
            }}
          >
            <span
              style={{
                fontSize: '12px',
                color: 'rgba(0,0,0,0.20)',
                flexShrink: 0,
                paddingTop: '0.1rem',
                fontVariantNumeric: 'tabular-nums',
                letterSpacing: '0.04em',
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.52)', lineHeight: 1.78, margin: 0 }}>
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Connect ─────────────────────────────────────── */

function Connect() {
  return (
    <section
      id="connect"
      className="glass-panel"
      style={{ padding: 'clamp(1.75rem, 4vw, 2.5rem)' }}
    >
      <p className="label" style={{ marginBottom: '1.25rem' }}>04 &ensp;/&ensp; Connect</p>

      <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
        找到我
      </h2>
      <p
        style={{
          fontSize: '13.5px',
          color: 'rgba(0,0,0,0.32)',
          marginBottom: '2rem',
        }}
      >
        Happy to connect about AI tools, overseas products, or building things from scratch.
      </p>

      {/* Links + WeChat QR */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
          alignItems: 'start',
        }}
      >
        {/* Links */}
        <div>
          <a href="mailto:bzfree2003@gmail.com" className="contact-row">
            <span className="contact-type">Email</span>
            <span className="contact-value">bzfree2003@gmail.com</span>
          </a>
          <a
            href="https://twitter.com/bzfree2003"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-row"
          >
            <span className="contact-type">Twitter</span>
            <span className="contact-value">@bzfree2003</span>
          </a>
          <a
            href="https://github.com/bzhz2023"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-row"
          >
            <span className="contact-type">GitHub</span>
            <span className="contact-value">bzhz2023</span>
          </a>
          <div className="contact-row" style={{ cursor: 'default' }}>
            <span className="contact-type">WeChat</span>
            <span className="contact-value">bz_hz2014</span>
          </div>
        </div>

        {/* WeChat QR */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <div
            style={{
              width: 160,
              height: 160,
              borderRadius: '14px',
              overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.08)',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src="/wechat-qr.png"
              alt="微信二维码"
              width={160}
              height={160}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <p
            style={{
              fontSize: '10px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(0,0,0,0.26)',
            }}
          >
            微信扫一扫
          </p>
        </div>
      </div>
    </section>
  )
}

/* ── Footer ──────────────────────────────────────── */

function Footer() {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '2.5rem 1.5rem 3rem',
        borderTop: '1px solid rgba(0,0,0,0.07)',
        marginTop: '2rem',
      }}
    >
      <p
        style={{
          fontSize: '11px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(0,0,0,0.24)',
        }}
      >
        博子 · Boz &ensp;·&ensp; 杭州 2026 &ensp;·&ensp; Built with Next.js
      </p>
    </footer>
  )
}

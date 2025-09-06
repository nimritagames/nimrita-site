import { useState } from 'react'

export const Contact = () => {
  const [templateType, setTemplateType] = useState('founders')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [customMessage, setCustomMessage] = useState('')



  const getEmailTemplate = () => {
    const displayName = name || '[Your Name]'
    const displayCompany = company || '[Your Company]'
    const displayEmail = email ? `\n- Email: ${email}` : ''
    
    const templates = {
      founders: {
        subject: `${displayName} - Join Founders List Request`,
        body: `Hi Kamshu,

I'd like to join the Nimrita Games founders list for early access!

About me:
- Name: ${displayName}${displayCompany !== '[Your Company]' ? `\n- Company: ${displayCompany}` : ''}${displayEmail}
- Gaming interests: Love multiplayer games and innovative tech
- Why interested: Your proprietary engine and multiplayer-first approach sounds amazing!

${customMessage ? `\nAdditional message:\n${customMessage}\n` : ''}
Looking forward to early access and seeing what you're building!

Best regards,
${displayName}`
      },
      business: {
        subject: `${displayCompany} - Business Inquiry`,
        body: `Hi Nimrita Games Team,

I'm reaching out regarding a potential business opportunity.

Details:
- Company: ${displayCompany}
- Contact: ${displayName}${displayEmail}
- Inquiry: Partnership/Investment/Press opportunity

${customMessage ? `Details:\n${customMessage}\n` : 'Let\'s discuss how we can work together!'}

I look forward to hearing from you.

Best regards,
${displayName}${displayCompany !== '[Your Company]' ? `\n${displayCompany}` : ''}`
      },
      general: {
        subject: `${displayName} - Inquiry`,
        body: `Hi Kamshu,

${customMessage || 'I\'d love to learn more about Nimrita Games and what you\'re building!'}

Best regards,
${displayName}${displayEmail}`
      }
    }
    return templates[templateType as keyof typeof templates]
  }

  const generateEmailLink = () => {
    const template = getEmailTemplate()
    const email = templateType === 'business' ? 'nimritagames@gmail.com' : 'kamshu@nimritagames.com'
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(template.subject)}&body=${encodeURIComponent(template.body)}`
    return mailtoLink
  }


  return (
    <section id="contact" className="cta" aria-labelledby="contact-title">
      <div className="container">
        <div className="card tilt" data-animate>
          <span className="kicker">Chapter 05 — Contact</span>
          <h2 className="section-title" id="contact-title">Talk to the team</h2>
          <p className="lead" style={{ fontSize: '1.2rem', color: '#cfd4da', textAlign: 'center' }}>
            Fill out your info below and we'll generate a professional email for you.
          </p>
          
          {/* Quick Info Form */}
          <div className="quick-form" style={{ maxWidth: '500px', margin: '0 auto 24px' }}>
            
            {/* Template Type - Big obvious buttons */}
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ margin: '0 0 12px', color: '#e8f3ff', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Orbitron, monospace', letterSpacing: '1px' }}>SELECT INQUIRY TYPE</h3>
              <div style={{ display: 'grid', gap: '12px' }}>
                <button 
                  className={`contact-option ${templateType === 'founders' ? 'active' : ''}`}
                  onClick={() => setTemplateType('founders')}
                >
                  <div className="option-text">JOIN FOUNDERS LIST</div>
                  <div className="option-sub">Early access program</div>
                </button>
                <button 
                  className={`contact-option ${templateType === 'business' ? 'active' : ''}`}
                  onClick={() => setTemplateType('business')}
                >
                  <div className="option-text">BUSINESS PARTNERSHIP</div>
                  <div className="option-sub">Investment, press, collaboration</div>
                </button>
                <button 
                  className={`contact-option ${templateType === 'general' ? 'active' : ''}`}
                  onClick={() => setTemplateType('general')}
                >
                  <div className="option-text">GENERAL INQUIRY</div>
                  <div className="option-sub">Questions, feedback, other</div>
                </button>
              </div>
            </div>

            {/* Simple Input Fields */}
            <div style={{ display: 'grid', gap: '16px', marginBottom: '24px' }}>
              <div>
                <input
                  type="text"
                  placeholder="Your name (required)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your email (optional)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="form-input"
                />
              </div>

              {templateType === 'business' && (
                <div>
                  <input
                    type="text"
                    placeholder="Company name (optional)"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    autoComplete="organization"
                    className="form-input"
                  />
                </div>
              )}

              {templateType !== 'founders' && (
                <div>
                  <textarea
                    placeholder="Additional message (optional)"
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    className="form-textarea"
                  />
                </div>
              )}
            </div>

            {/* Big Send Button */}
            <div style={{ textAlign: 'center' }}>
              <a 
                className={`contact-send-btn ${name ? 'ready' : 'disabled'}`}
                href={name ? generateEmailLink() : '#'}
                style={{ 
                  textDecoration: 'none',
                  pointerEvents: name ? 'auto' : 'none'
                }}
                title={name ? "Opens your email app with pre-filled template" : "Please enter your name first"}
              >
                <div className="send-text">SEND EMAIL</div>
                <div className="send-status">{name ? 'READY TO DEPLOY' : 'AWAITING INPUT'}</div>
              </a>
              
              {/* Quick Preview - Only show if name is filled */}
              {name && (
                <details style={{ marginTop: '16px', textAlign: 'left' }}>
                  <summary style={{ 
                    cursor: 'pointer', 
                    color: 'var(--primary)', 
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    padding: '8px',
                    borderRadius: '8px',
                    background: 'rgba(0,255,136,0.1)'
                  }}>
                    Preview email
                  </summary>
                  <div style={{ 
                    marginTop: '12px', 
                    padding: '12px', 
                    background: 'rgba(0,224,255,0.05)', 
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    color: '#cfd4da'
                  }}>
                    <strong>Subject:</strong> {getEmailTemplate().subject}<br/>
                    <strong>To:</strong> {templateType === 'business' ? 'nimritagames@gmail.com' : 'kamshu@nimritagames.com'}<br/><br/>
                    <div style={{ whiteSpace: 'pre-wrap', color: '#9aa0a6', fontSize: '0.75rem' }}>
                      {getEmailTemplate().body}
                    </div>
                  </div>
                </details>
              )}
            </div>
          </div>


          <div className="founder-note">
            <h3>From Kamshu (Founder)</h3>
            <p>
              We're builders first. If you want loud marketing, we're not it. If you want a small team that <em>really cares</em> about feel, clarity, and multiplayer reliability—let's talk.
            </p>
            <div style={{ marginTop: '12px', padding: '8px', background: 'rgba(0,255,136,0.1)', borderRadius: '8px', fontSize: '0.9rem' }}>
              📧 <strong>kamshu@nimritagames.com</strong> - Personal contact<br/>
              📧 <strong>nimritagames@gmail.com</strong> - Business inquiries
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
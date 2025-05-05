---
type: PageLayout
title: Contact
sections:
  - type: GenericSection
    title:
      type: TitleBlock
      text: Clarity Starts with a Conversation.
      color: text-dark
    subtitle: >-
      Whether you're navigating change, refining your brand, or just thinking
      out loud—reach out.
    text: >
      We’ll help you make sense of what matters, and move forward with focus.

      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <p><label>Name<br />
          <input type="text" name="name" required />
        </label></p>

        <p><label>Email<br />
          <input type="email" name="email" required />
        </label></p>

        <p><label>Message<br />
          <textarea name="message" required></textarea>
        </label></p>

        <p><button type="submit">Send</button></p>
      </form>
    actions: []
    badge:
      type: Badge
      label: Contact Us
      color: text-primary
    colors: bg-light-fg-dark
    elementId: contact-form
slug: /contact
isDraft: false
seo:
  type: Seo
  metaTitle: Contact
  metaDescription: Reach out to discuss clarity, strategy, or collaboration.
  addTitleSuffix: true
  socialImage: /images/main-hero.jpg
  metaTags: []
---

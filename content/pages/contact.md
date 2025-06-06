---
type: PageLayout
title: Contact
sections:
  - type: GenericSection
    title:
      type: TitleBlock
      text: Clarity Unlocks What's Next
      color: text-dark
      styles:
        self:
          textAlign: left
    subtitle: Let's uncover it together.
    text: ''
    actions: []
    colors: bg-neutral-fg-dark
    styles:
      self:
        flexDirection: row
        justifyContent: center
      subtitle:
        textAlign: left
  - type: GenericSection
    title:
      type: TitleBlock
      text: Clarity Starts with a Conversation.
      color: text-dark
    subtitle: >-
      Whether you're navigating change, refining your brand, or just thinking
      out loud—reach out.
    text: |
      We’ll help you make sense of what matters, and move forward with focus.
    actions: []
    media:
      type: FormBlock
      fields:
        - type: TextFormControl
          name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
        - type: TextareaFormControl
          name: message
          label: Message
          hideLabel: true
          placeholder: Your message
          width: full
      submitButton:
        type: SubmitButtonFormControl
        label: Send Message
        icon: arrowRight
        iconPosition: right
        style: primary
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
    badge:
      type: Badge
      label: Let's Connect
      color: text-primary
    colors: bg-light-fg-dark
    elementId: contact-form
  - type: DividerSection
    title: Divider
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-3
          - pl-3
          - pb-3
          - pr-3
  - type: GenericSection
    title:
      type: TitleBlock
      text: ''
      color: text-dark
    subtitle: >-
      If forms aren’t your thing — or you already know what you need — here are
      a few other ways to connect.
    text: ''
    actions:
      - type: Button
        label: Book a Discovery Call
        url: >-
          https://calendly.com/hellolifstudio/discovery-call-clone?share_attribution=expiring_link
        icon: arrowRight
        iconPosition: right
        style: primary
      - type: Link
        label: Send email
        altText: ''
        url: 'mailto:hello@lifstudio.com'
        showIcon: true
        icon: mail
        iconPosition: left
        style: secondary
        elementId: ''
      - type: Link
        label: Leave Feedback
        url: 'https://tally.so/r/mVd86y'
        showIcon: true
        icon: arrowRight
        iconPosition: left
        style: primary
    media:
      type: ImageBlock
      altText: Fun feature preview
    badge:
      type: Badge
      label: OTHER WAYS TO REACH US
      color: text-primary
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
slug: /contact
isDraft: false
seo:
  type: Seo
  metaTitle: Contact | Lif Studio
  metaDescription: Connect with Lif Studio — clarity starts with a conversation.
  addTitleSuffix: false
  socialImage: /images/Lif Website Image.png
  metaTags: []
---

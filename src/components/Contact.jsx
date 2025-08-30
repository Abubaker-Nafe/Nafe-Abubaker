import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Notification from './Notification'

export default function Contact() {
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [note, setNote] = useState({ msg: '', type: 'success' })
  const [copied, setCopied] = useState(false)

  const validate = (fd) => {
    const errs = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!fd.get('name')?.trim()) errs.name = 'This field is required'
    if (!fd.get('email')?.trim()) errs.email = 'This field is required'
    else if (!emailRegex.test(fd.get('email'))) errs.email = 'Please enter a valid email address'
    if (!fd.get('subject')?.trim()) errs.subject = 'This field is required'
    const msg = (fd.get('message')||'').trim()
    if (!msg) errs.message = 'This field is required'
    else if (msg.length < 10) errs.message = 'Message must be at least 10 characters long'
    return errs
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const fd = new FormData(formRef.current)
    const errs = validate(fd)
    // mark input classes
    ;['name','email','subject','message'].forEach(id => {
      const input = formRef.current.querySelector('#'+id)
      input.classList.remove('error','success')
      if (errs[id]) input.classList.add('error')
      else if (fd.get(id)?.trim()) input.classList.add('success')
      const errEl = formRef.current.querySelector('#'+id+'-error')
      if (errEl) {
        errEl.textContent = errs[id] || ''
        errEl.classList.toggle('show', !!errs[id])
      }
    })
    if (Object.keys(errs).length) {
      setNote({ msg: 'Please fix the errors in the form', type: 'error' })
      return
    }

    setLoading(true)
    try {
      await emailjs.send('service_cqzof7r', 'template_8tpygvw', {
        from_name: fd.get('name'),
        reply_to: fd.get('email'),
        subject: fd.get('subject'),
        message: fd.get('message')
      }, 'v9aQo-MM8x3JLGIrs')

      setNote({ msg: 'Message sent successfully!', type: 'success' })
      formRef.current.reset()
      ;['name','email','subject','message'].forEach(id => {
        const input = formRef.current.querySelector('#'+id)
        input.classList.remove('error','success')
        const errEl = formRef.current.querySelector('#'+id+'-error')
        if (errEl) errEl.classList.remove('show')
      })
    } catch (err) {
      setNote({ msg: 'Failed to send message. Please try again.', type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('nafeabubaker@gmail.com')
      setCopied(true)
      setTimeout(()=>setCopied(false), 2000)
      setNote({ msg: 'Email copied to clipboard!', type: 'success' })
    } catch {
      setNote({ msg: 'Failed to copy email', type: 'error' })
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <Notification message={note.msg} type={note.type} onHide={()=>setNote({msg:'', type:'success'})} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-primary">Touch</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="contact-form">
            <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
              <div className="form-group">
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input type="text" id="name" name="name" required className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Nafe Abubaker" />
                <div className="error-message" id="name-error"></div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" name="email" required className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Nafe@example.com" />
                <div className="error-message" id="email-error"></div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input type="text" id="subject" name="subject" required className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Project Inquiry" />
                <div className="error-message" id="subject-error"></div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea id="message" name="message" rows="5" required className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Hello Nafe..."></textarea>
                <div className="error-message" id="message-error"></div>
              </div>

              <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:opacity-90 transition" disabled={loading}>
                {loading ? (<><span className="spinner"></span><span>Sending...</span></>) : 'Send Message'}
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8">I'm currently available for freelance work and full-time positions. Feel free to reach out to discuss potential opportunities or just to say hello!</p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-gray-600">Palestine, Ramallah</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <i className="fas fa-envelope text-primary"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-600">nafeabubaker@gmail.com</p>
                  <button className={`copy-email-btn ${copied ? 'copied' : ''}`} onClick={copyEmail}>
                    <i className="fas fa-copy mr-1"></i>
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <i className="fas fa-phone text-primary"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-gray-600">+972-597785625</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-bold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/nafe-abubaker-0182a5298/" target="_blank" rel="noreferrer" className="social-icon w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/Abubaker-Nafe" target="_blank" rel="noreferrer" className="social-icon w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

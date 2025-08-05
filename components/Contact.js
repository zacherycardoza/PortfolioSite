export default function Contact() {
  return (
    <section
      id="contact-section"
      className="p-8 min-h-[400px] scroll-mt-[4rem]"
    >
      <h3 className="px-8 text-5xl font-semibold text-center">
        <span className="">Contact</span>
      </h3>
      <div className="flex items-center justify-center p-6">
        <form className="p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 border rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full p-2 border rounded"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full accent-background text-white p-2 rounded hover:bg-red-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

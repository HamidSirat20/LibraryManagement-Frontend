const AboutPage = () => {
  return (
    <div className="relative h-screen">
      <img
        className="absolute w-full h-full inset-0 object-cover opacity-70"
        src="src/assets/textbook.jpg"
        alt="Underlay image for decorative purposes."
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative flex flex-col items-center h-full font-mono justify-center text-white px-4">
        <p className="absolute text-lg text-white/70 z-10 max-w-2xl font-medium leading-relaxed text-justify ">
          Welcome to our digital library hub – a place where knowledge meets
          convenience. Our platform lets you browse thousands of titles across
          every genre, from timeless classics to the latest bestsellers. With
          just a few clicks, you can reserve a book that catches your eye,
          ensuring it's waiting for you when you visit. Already reading? Easily
          manage your borrowed items, renew them online, or return them at any
          of our partner locations. Whether you're a student, a casual reader,
          or a researcher, our system is designed to make your library
          experience seamless and enjoyable. Join our community of readers today
          and discover the joy of borrowing, reserving, and returning – all at
          your fingertips.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

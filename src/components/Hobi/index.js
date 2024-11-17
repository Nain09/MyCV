const Hobi = () => {
  const testimonials = [
    { name: "Hobi 1", profession: "Developer" },
    { name: "Hobi 2", profession: "Designer" },
    { name: "Hobi 3", profession: "Manager" }
  ];

  return (
    <div className="container py-5" id="testimonial">
      <h1 className="text-center text-uppercase text-primary mb-5">hobi</h1>
      <div className="row justify-content-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="col-lg-4 text-center mb-4">
            <i className="fa fa-3x fa-quote-left text-primary mb-3" />
            {/* Ganti gambar dengan teks */}
            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 80, height: 80 }}>
              <span className="text-primary font-weight-bold">{testimonial.name.charAt(0)}</span>
            </div>
            <h5 className="font-weight-bold">{testimonial.name}</h5>
            <span>{testimonial.profession}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobi;

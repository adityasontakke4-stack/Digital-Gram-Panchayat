import { useState } from "react";

function BirthCertificateForm() {
  const [data, setData] = useState({
    childName: "",
    fatherName: "",
    motherName: "",
    dob: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    alert("Birth Certificate Application Submitted");
    console.log(data);
  };

  return (
    <div className="container mt-5">
      <h3>Birth Certificate Form</h3>

      <form onSubmit={submit}>
        <input className="form-control mb-3" name="childName" placeholder="Child Name" onChange={handleChange} />
        <input className="form-control mb-3" name="fatherName" placeholder="Father Name" onChange={handleChange} />
        <input className="form-control mb-3" name="motherName" placeholder="Mother Name" onChange={handleChange} />
        <input type="date" className="form-control mb-3" name="dob" onChange={handleChange} />

        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}

export default BirthCertificateForm;

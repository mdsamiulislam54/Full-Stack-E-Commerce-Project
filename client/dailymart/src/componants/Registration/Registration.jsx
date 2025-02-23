import  { useState } from 'react';
import { Link } from 'react-router-dom';


const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
      <div>
        <div className=''>
        <form onSubmit={handleSubmit} className="space-y-4 ">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border-b rounded outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border-b rounded outline-none"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border-b rounded outline-none"
          required
        />
        <button
          type="submit"
          className="w-full bg-primary text-white p-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
        <div>
            <p className='py-2 text-sm text-center tracking-wide'>Already have an account? Please <Link className='font-bold text-primary hover:underline transition-all duration-300 hover:opacity-85 '>login.</Link></p>
        </div>
      </form>
        </div>
      </div>
    );
};

export default Registration;
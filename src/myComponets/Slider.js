import { useAuth0 } from "@auth0/auth0-react";
import { loadStripe } from "@stripe/stripe-js/pure";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
export default function Slider({ className }) {
  let navigate = useNavigate();
  const { user, logout } = useAuth0();
  const userEmail = user.email;
  const userName = user.given_name;
  const [data, setData] = useState([]);
  const [cerdit, setCerdit] = useState([]);
  // const [showSidebar, setShowSidebar] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://aiblog-mu.vercel.app/post?email=${user.email}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const userDataDb = async () => {
    try {
      const datadb = await fetch(
        `https://aiblog-mu.vercel.app/userdata?email=${user.email}`
      );
      if (!datadb.ok) {
        throw new Error("Failed to fetch data");
      }
      const userCerdit = await datadb.json();
      setCerdit(userCerdit);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const userData = async () => {
    try {
      const uData = await fetch(
        `https://aiblog-mu.vercel.app/user?email=${user.email}`,
        {
          method: "POST",
          body: JSON.stringify({ userEmail, userName }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!uData.ok) {
        throw new Error("Failed to generate content");
      }

      const userData = await uData.json();
      console.log(userData);
      navigate("/", {
        state: {
          post: userData,
        },
      });
    } catch (error) {
      // Handle errors and display an error toast
      console.error("An error occurred. Please try again later.");
    }
  };
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    userData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    userDataDb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkOutBtn = async () => {
    const stripe = await loadStripe(
      "pk_test_51NnIorCqPnESIcUCUezx9Ae1Tfcxrnhqaxi0KYluXByG3dEuMUMlLY8FcJG3eUzajEWLL8oyS7OJuzUgMKcOpGlH00QwR1IcOn"
    );

    const body = {
      user: user,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      `https://aiblog-mu.vercel.app/api/create-checkout-session?email=${user.email}`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };
  return (
    <div>
      <div className="d-flex flex-column flex-shrink-0 p-3 Slider">
        <Link
          to="/"
          className="logoApp d-flex align-items-center mb-3 mb-md-0 me-md-auto mx-auto"
        >
          <i className="bi bi-chat-left-fill fs-4"></i>&nbsp;
          <span className="fs-4">AI Bot</span>&nbsp;
        </Link>
        <hr className="text-light" />
        <Link to="/" className="newchatbtn">
          New Chat
        </Link>
        <hr className="text-light" />
        <button className="newchatbtn mb-2" onClick={checkOutBtn}>
          <i class="fa-solid fa-coins" style={{ color: "#e6d40a" }}></i>{" "}
          {cerdit ? cerdit.token : 0}
        </button>
        <ul className="nav flex-column mb-auto">
          {data.map((item) => (
            <div key={item._id}>
              <li className="nav-item">
                <button
                  to="/postdata"
                  className={`nav-link mb-2 sidePostTitle ${className}`}
                  aria-current="page"
                  onClick={() =>
                    navigate("/postdata", {
                      state: {
                        post: item,
                      },
                    })
                  }
                >
                  {item.title}
                </button>
              </li>
            </div>
          ))}
        </ul>
        <hr className="text-light" />
        <div className="dropdown">
          <Link
            to="/"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={user.picture}
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>{cerdit.email}</strong>
          </Link>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <Link className="dropdown-item" onClick={(e) => logout()}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

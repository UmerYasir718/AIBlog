import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Slider2 from './Slider2';
export default function Form2() {
    let navigate = useNavigate();
    const { user } = useAuth0();
    const userEmail = user.email;
    const [topic, setTopic] = useState('');
    const [keyWords, setKeyWords] = useState('');
    const [cerdit, setCerdit] = useState([]);

    const handleTopic = (event) => {
        setTopic(event.target.value);
    };

    const handleKeyWords = (event) => {
        setKeyWords(event.target.value);
    };

    const userDataDb = async () => {
        try {
            const datadb = await fetch(`https://aiblog-mu.vercel.app/userdata?email=${user.email}`);
            if (!datadb.ok) {
                throw new Error('Failed to fetch data');
            }
            const userCerdit = await datadb.json();
            setCerdit(userCerdit);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        userDataDb(); // Fetch Cerdit when the component mounts (page load)
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const GetData = async () => {
        let toasterId = toast.loading("Your post is being generated...");
        if (cerdit.token === 0) {
            setTopic('');
            setKeyWords('');
            alert("Cerdit is Zero");
            toast.remove(toasterId);
        } else {
            try {
                const response = await fetch(`https://aiblog-mu.vercel.app/post?email=${user.email}`, {
                    method: "POST",
                    body: JSON.stringify({ topic, keyWords }),
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": userEmail
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to generate content");
                }

                const json = await response.json();
                console.log(json);

                // Display a success toast
                toast.success("Content generated successfully!", {
                    id: toasterId, // Use the same ID to replace the loading toast
                });

                setTimeout(() => {
                    navigate("/post", {
                        state: {
                            post: json,
                        },
                    });
                }, 1000);
            } catch (error) {
                // Handle errors and display an error toast
                toast.error("An error occurred. Please try again later.");
            } finally {
                toast.remove(toasterId);
            }
        }
    };

    return (
        <div className='CompletePage'>
            <Slider2 />
            <section className='form container my-4'>
                <div className="mb-3">
                    <label htmlFor="Topic" className="form-label">Topic</label>
                    <textarea type="text" className="form-control" id="topic" onChange={handleTopic}
                        placeholder='Web Development....' />
                </div>
                <div className="mb-3">
                    <label htmlFor="Words" className="form-label">Key Words</label>
                    <textarea type="text" className="form-control" id="words" onChange={handleKeyWords}
                        placeholder='JavaScript,React.....' />
                </div>
                <button type="submit" className="btn btnGenerate" onClick={GetData}>
                    Generate
                </button>
            </section>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
}

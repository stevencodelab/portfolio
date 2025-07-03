// src/components/Ratings.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../supabaseClient'; 
import './Ratings.css'; 

const Ratings = () => {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRatings = async () => {
      setLoading(true);
      try {

        const { data, error } = await supabase
          .from('ratings')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(6); 

        if (error) throw error;
        
        setRatings(data);
      } catch (error) {
        console.error("Error fetching ratings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRatings();
  }, []);

  const createStarRating = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section id="ratings">
      <h2>// Apa Kata Mereka</h2>
      <div className="ratings-grid">
        {loading && <p>Memuat rating...</p>}
        {!loading && ratings.map((item, index) => (
          <motion.div
            className="rating-card"
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="rating-content">
              <div className="rating-stars">{createStarRating(item.rating)}</div>
              <p className="rating-comment">"{item.comment || 'Tidak ada komentar.'}"</p>
              <span className="rating-date">
                {new Date(item.created_at).toLocaleDateString('id-ID', {
                  day: 'numeric', month: 'long', year: 'numeric'
                })}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Ratings;
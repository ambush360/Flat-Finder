import React, { useState, useEffect } from 'react';
import { propertyService } from '../services/api';

import PropertyCard from './PropertyCard'; // The component from the first response


const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const response = await propertyService.getAllProperties();
        setProperties(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch properties. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []); // The empty array [] means this effect runs only once when the component mounts

  if (loading) {
    return <div>Loading properties...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <div className="property-list-container">
      <h2>Available Properties</h2>
      <div className="property-grid">
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))
        ) : (
          <p>No properties found.</p>
        )}
      </div>
    </div>
  );
};

export default PropertyList;
import React from 'react';
import './PropertyCard.css'; // For styling

const PropertyCard = ({ property }) => {
  return (
    <div className="card">
      <img src={property.images[0] || 'default-image.jpg'} alt={property.title} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{property.title}</h3>
        <p className="card-price">${property.price.toLocaleString()}{property.listingType === 'Rent' ? ' / month' : ''}</p>
        <p className="card-address">{property.address}</p>
        <div className="card-details">
          <span>{property.bedrooms} beds</span>
          <span>{property.bathrooms} baths</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
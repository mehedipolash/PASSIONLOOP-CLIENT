import React from 'react';
import { Link } from 'react-router';

const GroupCard = ({ group }) => {
  const {
    _id,
    groupName,
    hobbyCategory,
    description,
    meetingLocation,
    maxMembers,
    startDate,
    imageUrl,
    userName,
    userEmail,
  } = group;

  // Truncate description for card view
  const shortDescription =
    description.length > 80 ? description.slice(0, 80) + "..." : description;

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-300">
      <figure className="relative h-48 overflow-hidden">
        <img
          src={imageUrl || "https://via.placeholder.com/400x200?text=Group+Image"}
          alt={groupName}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 badge badge-primary text-white font-semibold">
          {hobbyCategory}
        </div>
      </figure>

      <div className="card-body p-5">
        <h2 className="card-title text-xl font-bold text-accent line-clamp-1">
          {groupName}
        </h2>

        <p className="text-sm text-base-content/80 mt-1 line-clamp-2">
          {shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mt-2 text-xs text-base-content/70">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{meetingLocation}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>Max {maxMembers} members</span>
          </div>
        </div>

        <div className="card-actions justify-end mt-4">
          <Link
            to={`/group/${_id}`}
            className="btn btn-secondary-custom text-sm px-4 py-1"
          >
            See More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
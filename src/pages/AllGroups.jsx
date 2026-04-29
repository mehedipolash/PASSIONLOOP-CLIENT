// import React, { useState } from "react";
// import { useLoaderData } from "react-router";
// import GroupCard from "../components/GroupCard"; // adjust path if needed

// const AllGroups = () => {
//   const initialGroups = useLoaderData();
//   const [groups, setGroups] = useState(initialGroups);

//   return (
//     <div className="py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center text-black mb-2">
//           All Hobby Groups
//         </h2>
//         <p className="text-center text-base-content/80 mb-10">
//           Discover and join local groups that match your passion
//         </p>

//         {groups.length === 0 ? (
//           <div className="text-center py-20">
//             <p className="text-lg text-base-content/70">
//               No groups available yet. Be the first to create one!
//             </p>
//             <Link to="/createGroup" className="btn btn-secondary-custom mt-4">
//               Create a Group
//             </Link>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {groups.map((group) => (
//               <GroupCard
//                 key={group._id}
//                 group={group}
//                 groups={groups}
//                 setGroups={setGroups}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllGroups;


import React, { useState, useRef } from "react";
import { useLoaderData, Link } from "react-router";
import GroupCard from "../components/GroupCard";

const AllGroups = () => {
  const initialGroups = useLoaderData();
  const [groups, setGroups] = useState(initialGroups);
  const [showAll, setShowAll] = useState(false);
  const topRef = useRef(null);

  const visibleGroups = showAll ? groups : groups.slice(0, 6);

  const handleShowLess = () => {
    setShowAll(false);
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 ref={topRef} className="text-4xl font-bold text-center text-black mb-2">
          All Hobby Groups
        </h2>
        <p className="text-center text-base-content/80 mb-10">
          Discover and join local groups that match your passion
        </p>

        {groups.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-base-content/70">
              No groups available yet. Be the first to create one!
            </p>
            <Link to="/createGroup" className="btn btn-primary mt-4">
              Create a Group
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleGroups.map((group) => (
                <GroupCard
                  key={group._id}
                  group={group}
                  groups={groups}
                  setGroups={setGroups}
                />
              ))}
            </div>

            {/* Show More / Show Less Button */}
            {groups.length > 6 && (
              <div className="text-center mt-10">
                {!showAll ? (
                  <button
                    onClick={() => setShowAll(true)}
                    className="btn btn-outline-custom px-8"
                  >
                    Show More Groups ({groups.length - 6} more)
                  </button>
                ) : (
                  <button
                    onClick={handleShowLess}
                    className="btn btn-outline-custom px-8"
                  >
                    Show Less
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllGroups;
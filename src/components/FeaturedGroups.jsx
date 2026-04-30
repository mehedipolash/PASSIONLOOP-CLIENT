

// import { Link } from "react-router";
// import { Fade, Slide, Zoom } from "react-awesome-reveal";
// import { Typewriter } from "react-simple-typewriter";

// const FeaturedGroups = ({ groups = [] }) => {
//   const featured = [...groups].reverse().slice(0, 6);

//   return (
//     <section className="py-16">

//       {/* Header */}
//       <Fade triggerOnce>
//         <div className="text-center mb-12 space-y-3">
//           <Zoom triggerOnce>
//             <span className="inline-block bg-primary/10 text-primary border border-primary/30 text-xs font-semibold px-4 py-1.5 rounded-full">
//               🔥 Trending Now
//             </span>
//           </Zoom>
//           <h2 className="text-4xl font-extrabold text-accent">
//             Featured{" "}
//             <span className="text-primary">
//               <Typewriter
//                 words={["Groups", "Communities", "Hobbies"]}
//                 loop
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={70}
//                 deleteSpeed={50}
//                 delaySpeed={2000}
//               />
//             </span>
//           </h2>
//           <p className="text-base-content/60 max-w-md mx-auto text-sm">
//             Join an ongoing group and start your journey today
//           </p>
//         </div>
//       </Fade>

//       {/* Empty State */}
//       {featured.length === 0 ? (
//         <Zoom triggerOnce>
//           <div className="text-center py-16 space-y-3">
//             <div className="text-6xl">😕</div>
//             <p className="text-lg text-base-content/60">No groups yet. Be the first to create one!</p>
//             <Link to="/createGroup" className="btn btn-primary mt-2">
//               + Create a Group
//             </Link>
//           </div>
//         </Zoom>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {featured.map((group, i) => {
//             const spotsLeft = Math.max(0, group.maxMembers - (group.members || 0));
//             const fillPercent = Math.min(
//               100,
//               Math.round(((group.members || 0) / group.maxMembers) * 100)
//             );
//             const isAlmostFull = fillPercent >= 80;
//             const isExpired = new Date(group.startDate) < new Date();

//             return (
//               <Fade key={group._id} triggerOnce delay={i * 80}>
//                 <div className="group bg-base-100 rounded-2xl overflow-hidden border border-base-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

//                   {/* Image */}
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={group.imageUrl || "https://placehold.co/400x200?text=No+Image"}
//                       alt={group.groupName}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     />

//                     {/* Gradient overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

//                     {/* Category badge */}
//                     <span className="absolute top-3 left-3 bg-primary text-primary-content text-xs font-semibold px-3 py-1 rounded-full">
//                       {group.hobbyCategory}
//                     </span>

//                     {/* Status badge */}
//                     <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full border ${
//                       isExpired
//                         ? "bg-error/20 text-error border-error/30"
//                         : "bg-success/20 text-success border-success/30"
//                     }`}>
//                       {isExpired ? "Expired" : "Active"}
//                     </span>

//                     {/* Group name on image */}
//                     <div className="absolute bottom-3 left-3 right-3">
//                       <h3 className="text-white font-bold text-lg leading-tight drop-shadow">
//                         {group.groupName}
//                       </h3>
//                     </div>
//                   </div>

//                   {/* Body */}
//                   <div className="p-4 space-y-3">

//                     {/* Location & Date */}
//                     <div className="flex items-center justify-between text-xs text-base-content/60">
//                       <span>📍 {group.meetingLocation}</span>
//                       <span>📅 {new Date(group.startDate).toLocaleDateString("en-US", {
//                         month: "short", day: "numeric", year: "numeric"
//                       })}</span>
//                     </div>

//                     {/* Description */}
//                     {group.description && (
//                       <p className="text-xs text-base-content/60 line-clamp-2">
//                         {group.description}
//                       </p>
//                     )}

//                     {/* Member progress bar */}
//                     <div>
//                       <div className="flex justify-between text-xs mb-1">
//                         <span className="text-base-content/60">{group.members || 0} members</span>
//                         <span className={isAlmostFull ? "text-warning font-semibold" : "text-base-content/60"}>
//                           {isAlmostFull ? "⚠️ Almost full!" : `${spotsLeft} spots left`}
//                         </span>
//                       </div>
//                       <div className="w-full bg-base-300 rounded-full h-1.5">
//                         <div
//                           className={`h-1.5 rounded-full transition-all duration-500 ${
//                             isAlmostFull ? "bg-warning" : "bg-primary"
//                           }`}
//                           style={{ width: `${fillPercent}%` }}
//                         />
//                       </div>
//                     </div>

//                     {/* Button */}
//                     <Link
//                       to={`/group/${group._id}`}
//                       className="btn btn-primary btn-sm w-full rounded-xl"
//                     >
//                       View Details →
//                     </Link>
//                   </div>
//                 </div>
//               </Fade>
//             );
//           })}
//         </div>
//       )}

//       {/* See All Button */}
//       <Zoom triggerOnce delay={200}>
//         <div className="text-center mt-12">
//           <Link
//             to="/allGroups"
//             className="btn btn-outline btn-primary px-10 rounded-xl bg-[#E8EDF2] border border-base-300 hover:bg-[#D1D9E6] transition-all duration-300"
//           >
//             See All Groups →
//           </Link>
//         </div>
//       </Zoom>

//     </section>
//   );
// };

// export default FeaturedGroups;



import { Link } from "react-router";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const FeaturedGroups = ({ groups = [] }) => {
  const featured = [...groups].reverse().slice(0, 6);

  const isExpiredFn = (startDate) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(startDate) < today;
  };

  return (
    <section className="py-16">
      <Fade triggerOnce>
        <div className="text-center mb-12 space-y-3">
          <Zoom triggerOnce>
            <span className="inline-block bg-primary/10 text-primary border border-primary/30 text-xs font-semibold px-4 py-1.5 rounded-full">
              🔥 Trending Now
            </span>
          </Zoom>
          <h2 className="text-4xl font-extrabold text-accent">
            Featured{" "}
            <span className="text-primary">
              <Typewriter
                words={["Groups", "Communities", "Hobbies"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h2>
          <p className="text-base-content/60 max-w-md mx-auto text-sm">
            Join an ongoing group and start your journey today
          </p>
        </div>
      </Fade>

      {featured.length === 0 ? (
        <Zoom triggerOnce>
          <div className="text-center py-16 space-y-3">
            <div className="text-6xl">😕</div>
            <p className="text-lg text-base-content/60">No groups yet. Be the first to create one!</p>
            <Link to="/createGroup" className="btn btn-primary mt-2">+ Create a Group</Link>
          </div>
        </Zoom>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((group, i) => {
            const spotsLeft = Math.max(0, group.maxMembers - (group.members || 0));
            const fillPercent = Math.min(100, Math.round(((group.members || 0) / group.maxMembers) * 100));
            const isAlmostFull = fillPercent >= 80;
            const isExpired = isExpiredFn(group.startDate);

            return (
              <Fade key={group._id} triggerOnce delay={i * 80}>
                <div className="group bg-base-100 rounded-2xl overflow-hidden border border-base-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={group.imageUrl || "https://placehold.co/400x200?text=No+Image"}
                      alt={group.groupName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute top-3 left-3 bg-primary text-primary-content text-xs font-semibold px-3 py-1 rounded-full">
                      {group.hobbyCategory}
                    </span>
                    <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full border ${
                      isExpired
                        ? "bg-error/20 text-error border-error/30"
                        : "bg-success/20 text-success border-success/30"
                    }`}>
                      {isExpired ? "Expired" : "Active"}
                    </span>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg leading-tight drop-shadow">
                        {group.groupName}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs text-base-content/60">
                      <span>📍 {group.meetingLocation}</span>
                      <span>📅 {new Date(group.startDate).toLocaleDateString("en-US", {
                        month: "short", day: "numeric", year: "numeric"
                      })}</span>
                    </div>
                    {group.description && (
                      <p className="text-xs text-base-content/60 line-clamp-2">{group.description}</p>
                    )}
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-base-content/60">{group.members || 0} members</span>
                        <span className={isAlmostFull ? "text-warning font-semibold" : "text-base-content/60"}>
                          {isAlmostFull ? "⚠️ Almost full!" : `${spotsLeft} spots left`}
                        </span>
                      </div>
                      <div className="w-full bg-base-300 rounded-full h-1.5">
                        <div
                          className={`h-1.5 rounded-full transition-all duration-500 ${isAlmostFull ? "bg-warning" : "bg-primary"}`}
                          style={{ width: `${fillPercent}%` }}
                        />
                      </div>
                    </div>
                    <Link to={`/group/${group._id}`} className="btn btn-primary btn-sm w-full rounded-xl">
                      View Details →
                    </Link>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      )}

      <Zoom triggerOnce delay={200}>
        <div className="text-center mt-12">
          <Link to="/allGroups" className="btn btn-outline btn-primary px-10 rounded-xl">
            See All Groups →
          </Link>
        </div>
      </Zoom>
    </section>
  );
};

export default FeaturedGroups;
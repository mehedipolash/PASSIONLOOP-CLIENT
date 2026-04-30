

// import { useState, useRef } from "react";
// import { useLoaderData, Link } from "react-router";
// import GroupCard from "../components/GroupCard";
// import { Fade, Slide, Zoom } from "react-awesome-reveal";
// import { Typewriter } from "react-simple-typewriter";

// const AllGroups = () => {
//   const initialGroups = useLoaderData();
//   const [groups, setGroups] = useState(initialGroups);
//   const [showAll, setShowAll] = useState(false);
//   const [search, setSearch] = useState("");
//   const topRef = useRef(null);

//   const filtered = groups.filter(
//     (g) =>
//       g.groupName?.toLowerCase().includes(search.toLowerCase()) ||
//       g.hobbyCategory?.toLowerCase().includes(search.toLowerCase()) ||
//       g.meetingLocation?.toLowerCase().includes(search.toLowerCase())
//   );

//   const visibleGroups = showAll ? filtered : filtered.slice(0, 6);

//   const handleShowLess = () => {
//     setShowAll(false);
//     topRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="min-h-screen bg-base-200 pb-20">

//       {/* ── Hero Banner ── */}
//       <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-base-100 to-secondary/20 py-16 px-4 border-b border-base-300">
//         <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
//         <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

//         <Fade triggerOnce>
//           <div className="relative text-center max-w-2xl mx-auto space-y-4">
//             <Zoom triggerOnce>
//               <span className="inline-block bg-primary/10 text-primary border border-primary/30 text-xs font-semibold px-4 py-1.5 rounded-full">
//                 🌍 Explore Communities
//               </span>
//             </Zoom>

//             <h1
//               ref={topRef}
//               className="text-4xl lg:text-6xl font-extrabold text-accent leading-tight"
//             >
//               Find Your{" "}
//               <span className="text-primary">
//                 <Typewriter
//                   words={["Hobby Group", "Community", "Passion", "People"]}
//                   loop
//                   cursor
//                   cursorStyle="|"
//                   typeSpeed={70}
//                   deleteSpeed={50}
//                   delaySpeed={1800}
//                 />
//               </span>
//             </h1>

//             <p className="text-base-content/60 max-w-lg mx-auto text-sm leading-relaxed">
//               Discover and join local groups that match your passion. {groups.length} groups and counting!
//             </p>

//             {/* Search */}
//             <Slide direction="up" triggerOnce delay={200}>
//               <div className="relative max-w-md mx-auto mt-2">
//                 <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 text-lg">🔍</span>
//                 <input
//                   type="text"
//                   value={search}
//                   onChange={(e) => { setSearch(e.target.value); setShowAll(false); }}
//                   placeholder="Search by name, category, or location..."
//                   className="w-full pl-11 pr-4 py-3 rounded-2xl border border-base-300 bg-base-100 focus:outline-none focus:border-primary text-sm shadow-sm"
//                 />
//               </div>
//             </Slide>

//             {/* Stats row */}
//             <Fade triggerOnce delay={300}>
//               <div className="flex flex-wrap justify-center gap-3 pt-2">
//                 <div className="bg-base-100 border border-base-300 rounded-2xl px-5 py-2.5 text-center shadow-sm">
//                   <p className="text-xs text-base-content/50">Total Groups</p>
//                   <p className="text-xl font-bold text-primary">{groups.length}</p>
//                 </div>
//                 <div className="bg-base-100 border border-base-300 rounded-2xl px-5 py-2.5 text-center shadow-sm">
//                   <p className="text-xs text-base-content/50">Active Groups</p>
//                   <p className="text-xl font-bold text-success">
//                     {groups.filter((g) => new Date(g.startDate) >= new Date()).length}
//                   </p>
//                 </div>
//                 <div className="bg-base-100 border border-base-300 rounded-2xl px-5 py-2.5 text-center shadow-sm">
//                   <p className="text-xs text-base-content/50">Total Capacity</p>
//                   <p className="text-xl font-bold text-accent">
//                     {groups.reduce((sum, g) => sum + Number(g.maxMembers || 0), 0)}
//                   </p>
//                 </div>
//               </div>
//             </Fade>
//           </div>
//         </Fade>
//       </div>

//       {/* ── Content ── */}
//       <div className="max-w-7xl mx-auto px-4 mt-12">

//         {filtered.length === 0 ? (
//           <Zoom triggerOnce>
//             <div className="text-center py-20 space-y-4">
//               <div className="text-7xl">😕</div>
//               <h3 className="text-2xl font-bold text-accent">
//                 {search ? `No results for "${search}"` : "No groups yet!"}
//               </h3>
//               <p className="text-base-content/60">
//                 {search
//                   ? "Try a different keyword."
//                   : "Be the first to create a hobby group!"}
//               </p>
//               {!search && (
//                 <Link to="/createGroup" className="btn btn-primary px-8 rounded-xl">
//                   + Create a Group
//                 </Link>
//               )}
//             </div>
//           </Zoom>
//         ) : (
//           <>
//             {/* Results count */}
//             <Fade triggerOnce>
//               <div className="flex items-center justify-between mb-6">
//                 <p className="text-sm text-base-content/50">
//                   Showing <span className="font-semibold text-base-content">{visibleGroups.length}</span> of{" "}
//                   <span className="font-semibold text-base-content">{filtered.length}</span> groups
//                   {search && (
//                     <span className="ml-2 text-primary font-medium">for "{search}"</span>
//                   )}
//                 </p>
//                 {search && (
//                   <button
//                     onClick={() => setSearch("")}
//                     className="text-xs text-error hover:underline"
//                   >
//                     ✕ Clear search
//                   </button>
//                 )}
//               </div>
//             </Fade>

//             {/* Cards Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {visibleGroups.map((group, i) => (
//                 <Fade key={group._id} triggerOnce delay={i * 60}>
//                   <GroupCard
//                     group={group}
//                     groups={groups}
//                     setGroups={setGroups}
//                   />
//                 </Fade>
//               ))}
//             </div>

//             {/* Show More / Less */}
//             {filtered.length > 6 && (
//               <Zoom triggerOnce>
//                 <div className="text-center mt-12">
//                   {!showAll ? (
//                     <button
//                       onClick={() => setShowAll(true)}
//                       className="btn text-2xl btn-primary px-10 rounded-xl text-bold lg:text-3xl text-black bg-[#E8EDF2] border border-base-300 hover:bg-[#D1D9E6] transition-all duration-300"
//                     >
//                       Show More Groups ({filtered.length - 6} more)
//                     </button>
//                   ) : (
//                     <button
//                       onClick={handleShowLess}
//                       className="btn btn-outline btn-primary px-10 rounded-xl text-bold lg:text-3xl border border-base-300 hover:bg-[#D1D9E6] transition-all duration-300"
//                     >
//                       Show Less
//                     </button>
//                   )}
//                 </div>
//               </Zoom>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllGroups;



import { useState, useRef } from "react";
import { useLoaderData, Link } from "react-router";
import GroupCard from "../components/GroupCard";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const AllGroups = () => {
  const initialGroups = useLoaderData();
  const [groups, setGroups] = useState(initialGroups);
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");
  const topRef = useRef(null);

  const isActiveFn = (startDate) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(startDate) >= today;
  };

  const filtered = groups.filter(
    (g) =>
      g.groupName?.toLowerCase().includes(search.toLowerCase()) ||
      g.hobbyCategory?.toLowerCase().includes(search.toLowerCase()) ||
      g.meetingLocation?.toLowerCase().includes(search.toLowerCase())
  );

  const visibleGroups = showAll ? filtered : filtered.slice(0, 6);

  const handleShowLess = () => {
    setShowAll(false);
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-base-200 pb-20">

      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-base-100 to-secondary/20 py-16 px-4 border-b border-base-300">
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

        <Fade triggerOnce>
          <div className="relative text-center max-w-2xl mx-auto space-y-4">
            <Zoom triggerOnce>
              <span className="inline-block bg-primary/10 text-primary border border-primary/30 text-xs font-semibold px-4 py-1.5 rounded-full">
                🌍 Explore Communities
              </span>
            </Zoom>

            <h1 ref={topRef} className="text-4xl lg:text-6xl font-extrabold text-accent leading-tight">
              Find Your{" "}
              <span className="text-primary">
                <Typewriter
                  words={["Hobby Group", "Community", "Passion", "People"]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1800}
                />
              </span>
            </h1>

            <p className="text-base-content/60 max-w-lg mx-auto text-sm leading-relaxed">
              Discover and join local groups that match your passion. {groups.length} groups and counting!
            </p>

            <Slide direction="up" triggerOnce delay={200}>
              <div className="relative max-w-md mx-auto mt-2">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 text-lg">🔍</span>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setShowAll(false); }}
                  placeholder="Search by name, category, or location..."
                  className="w-full pl-11 pr-4 py-3 rounded-2xl border border-base-300 bg-base-100 focus:outline-none focus:border-primary text-sm shadow-sm"
                />
              </div>
            </Slide>

            <Fade triggerOnce delay={300}>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <div className="bg-base-100 border border-base-300 rounded-2xl px-5 py-2.5 text-center shadow-sm">
                  <p className="text-xs text-base-content/50">Total Groups</p>
                  <p className="text-xl font-bold text-primary">{groups.length}</p>
                </div>
                <div className="bg-base-100 border border-base-300 rounded-2xl px-5 py-2.5 text-center shadow-sm">
                  <p className="text-xs text-base-content/50">Active Groups</p>
                  <p className="text-xl font-bold text-success">
                    {groups.filter((g) => isActiveFn(g.startDate)).length}
                  </p>
                </div>
                <div className="bg-base-100 border border-base-300 rounded-2xl px-5 py-2.5 text-center shadow-sm">
                  <p className="text-xs text-base-content/50">Total Capacity</p>
                  <p className="text-xl font-bold text-accent">
                    {groups.reduce((sum, g) => sum + Number(g.maxMembers || 0), 0)}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </Fade>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        {filtered.length === 0 ? (
          <Zoom triggerOnce>
            <div className="text-center py-20 space-y-4">
              <div className="text-7xl">😕</div>
              <h3 className="text-2xl font-bold text-accent">
                {search ? `No results for "${search}"` : "No groups yet!"}
              </h3>
              <p className="text-base-content/60">
                {search ? "Try a different keyword." : "Be the first to create a hobby group!"}
              </p>
              {!search && (
                <Link to="/createGroup" className="btn btn-primary px-8 rounded-xl">+ Create a Group</Link>
              )}
            </div>
          </Zoom>
        ) : (
          <>
            <Fade triggerOnce>
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-base-content/50">
                  Showing <span className="font-semibold text-base-content">{visibleGroups.length}</span> of{" "}
                  <span className="font-semibold text-base-content">{filtered.length}</span> groups
                  {search && <span className="ml-2 text-primary font-medium">for "{search}"</span>}
                </p>
                {search && (
                  <button onClick={() => setSearch("")} className="text-xs text-error hover:underline">
                    ✕ Clear search
                  </button>
                )}
              </div>
            </Fade>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleGroups.map((group, i) => (
                <Fade key={group._id} triggerOnce delay={i * 60}>
                  <GroupCard group={group} groups={groups} setGroups={setGroups} />
                </Fade>
              ))}
            </div>

            {filtered.length > 6 && (
              <Zoom triggerOnce>
                <div className="text-center mt-12">
                  {!showAll ? (
                    <button
                      onClick={() => setShowAll(true)}
                      className="btn btn-success-custom px-10 rounded-xl"
                    >
                      Show More Groups ({filtered.length - 6} more)
                    </button>
                  ) : (
                    <button
                      onClick={handleShowLess}
                      className="btn btn-success-custom px-10 rounded-xl"
                    >
                      Show Less
                    </button>
                  )}
                </div>
              </Zoom>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllGroups;
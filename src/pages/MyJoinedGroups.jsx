// import { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router";
// import Swal from "sweetalert2";
// import { AuthContext } from "../provider/AuthProvider";
// import { Fade, Zoom, Slide } from "react-awesome-reveal";

// const MyJoinedGroups = () => {
//   const { user } = useContext(AuthContext);
//   const [joinedGroups, setJoinedGroups] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user?.email) return;
//     fetch(`https://passion-loop-server.vercel.app/joins?email=${user.email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setJoinedGroups(data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, [user]);

//   const handleLeave = (joinId, groupName) => {
//     Swal.fire({
//       title: `Leave "${groupName}"?`,
//       text: "You can rejoin later if the group is still active.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#e3342f",
//       cancelButtonColor: "#6c757d",
//       confirmButtonText: "Yes, leave",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`https://passion-loop-server.vercel.app/joins/${joinId.toString()}`, { // ✅ fixed
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then(() => {
//             setJoinedGroups((prev) =>
//               prev.filter((j) => j._id.toString() !== joinId) // ✅ fixed
//             );
//             Swal.fire({
//               icon: "success",
//               title: "You left the group!",
//               timer: 1500,
//               showConfirmButton: false,
//             });
//           })
//           .catch(() => {
//             Swal.fire({ icon: "error", title: "Failed to leave group." });
//           });
//       }
//     });
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-base-200">
//         <span className="loading loading-spinner loading-lg text-primary"></span>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-base-200 py-12 px-4">
//       <div className="max-w-5xl mx-auto">

//         {/* Header */}
//         <Fade triggerOnce>
//           <div className="mb-10">
//             <h1 className="text-4xl font-extrabold text-accent mb-2">
//               🎯 My Joined Groups
//             </h1>
//             <p className="text-base-content/60 text-sm">
//               {joinedGroups.length > 0
//                 ? `You are a member of ${joinedGroups.length} group${joinedGroups.length > 1 ? "s" : ""}.`
//                 : "You haven't joined any groups yet."}
//             </p>
//           </div>
//         </Fade>

//         {/* Empty State */}
//         {joinedGroups.length === 0 ? (
//           <Zoom triggerOnce>
//             <div className="flex flex-col items-center justify-center py-32 text-center">
//               <span className="text-7xl mb-6">🙁</span>
//               <h2 className="text-2xl font-bold text-base-content mb-2">
//                 No joined groups yet
//               </h2>
//               <p className="text-base-content/50 mb-6 max-w-sm">
//                 Explore available groups and join the ones that match your
//                 interests!
//               </p>
//               <button
//                 onClick={() => navigate("/allGroups")}
//                 className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-lg hover:scale-105 transition-all duration-300"
//               >
//                 🌍 Browse All Groups
//               </button>
//             </div>
//           </Zoom>
//         ) : (
//           <Slide direction="up" triggerOnce>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {joinedGroups.map((join, i) => (
//                 <Zoom triggerOnce delay={i * 60} key={join._id}>
//                   <div className="bg-base-100 rounded-2xl border border-base-300 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">

//                     {/* Card top accent */}
//                     <div className="h-1.5 w-full bg-gradient-to-r from-primary via-accent to-secondary" />

//                     <div className="p-5 flex flex-col gap-4 flex-1">

//                       {/* Group Name & Badge */}
//                       <div>
//                         <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
//                           Joined
//                         </span>
//                         <h2 className="text-lg font-extrabold text-base-content leading-snug">
//                           {join.groupName}
//                         </h2>
//                       </div>

//                       {/* Join Date */}
//                       <div className="flex items-center gap-2 text-sm text-base-content/50">
//                         <span>📅</span>
//                         <span>
//                           Joined on{" "}
//                           {new Date(join.joinedAt).toLocaleDateString("en-US", {
//                             year: "numeric",
//                             month: "long",
//                             day: "numeric",
//                           })}
//                         </span>
//                       </div>

//                       {/* Spacer */}
//                       <div className="flex-1" />

//                       {/* Action Buttons */}
//                       <div className="flex gap-2 mt-2">
//                         <button
//                           onClick={() => navigate(`/group/${join.groupId}`)}
//                           className="flex-1 py-2 rounded-xl bg-primary/10 text-primary font-semibold text-sm hover:bg-primary/20 transition-colors duration-200"
//                         >
//                           👁 View Group
//                         </button>
//                         <button
//                           onClick={() => handleLeave(join._id.toString(), join.groupName)} // ✅ fixed
//                           className="flex-1 py-2 rounded-xl bg-error/10 text-error font-semibold text-sm hover:bg-error/20 transition-colors duration-200"
//                         >
//                           🚪 Leave
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </Zoom>
//               ))}
//             </div>
//           </Slide>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyJoinedGroups;

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { Fade, Zoom, Slide } from "react-awesome-reveal";

const MyJoinedGroups = () => {
  const { user } = useContext(AuthContext);
  const [joinedGroups, setJoinedGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) return;
    fetch(`https://passion-loop-server.vercel.app/joins?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJoinedGroups(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user]);

  const handleLeave = (joinId, groupName) => {
    Swal.fire({
      title: `Leave "${groupName}"?`,
      text: "You can rejoin later if the group is still active.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e3342f",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, leave",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://passion-loop-server.vercel.app/joins/${joinId}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error(`HTTP ${res.status}: ${res.statusText}`);
            }
            return res.json();
          })
          .then(() => {
            setJoinedGroups((prev) => prev.filter((j) => j._id !== joinId));
            Swal.fire({
              icon: "success",
              title: "You left the group!",
              timer: 1500,
              showConfirmButton: false,
            });
          })
          .catch((err) => {
            console.error("Leave group error:", err); // 🔍 Now you'll see the real problem
            Swal.fire({
              icon: "error",
              title: "Failed to leave group.",
              text: err.message,
            });
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Fade triggerOnce>
          <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-accent mb-2">
              🎯 My Joined Groups
            </h1>
            <p className="text-base-content/60 text-sm">
              {joinedGroups.length > 0
                ? `You are a member of ${joinedGroups.length} group${joinedGroups.length > 1 ? "s" : ""}.`
                : "You haven't joined any groups yet."}
            </p>
          </div>
        </Fade>

        {joinedGroups.length === 0 ? (
          <Zoom triggerOnce>
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <span className="text-7xl mb-6">🙁</span>
              <h2 className="text-2xl font-bold text-base-content mb-2">
                No joined groups yet
              </h2>
              <p className="text-base-content/50 mb-6 max-w-sm">
                Explore available groups and join the ones that match your
                interests!
              </p>
              <button
                onClick={() => navigate("/allGroups")}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-lg hover:scale-105 transition-all duration-300"
              >
                🌍 Browse All Groups
              </button>
            </div>
          </Zoom>
        ) : (
          <Slide direction="up" triggerOnce>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {joinedGroups.map((join, i) => (
                <Zoom triggerOnce delay={i * 60} key={join._id}>
                  <div className="bg-base-100 rounded-2xl border border-base-300 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
                    <div className="h-1.5 w-full bg-gradient-to-r from-primary via-accent to-secondary" />
                    <div className="p-5 flex flex-col gap-4 flex-1">
                      <div>
                        <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                          Joined
                        </span>
                        <h2 className="text-lg font-extrabold text-base-content leading-snug">
                          {join.groupName}
                        </h2>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-base-content/50">
                        <span>📅</span>
                        <span>
                          Joined on{" "}
                          {new Date(join.joinedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex-1" />
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => navigate(`/group/${join.groupId}`)}
                          className="flex-1 py-2 rounded-xl bg-primary/10 text-primary font-semibold text-sm hover:bg-primary/20 transition-colors duration-200"
                        >
                          👁 View Group
                        </button>
                        <button
                          onClick={() => handleLeave(join._id, join.groupName)}
                          className="flex-1 py-2 rounded-xl bg-error/10 text-error font-semibold text-sm hover:bg-error/20 transition-colors duration-200"
                        >
                          🚪 Leave
                        </button>
                      </div>
                    </div>
                  </div>
                </Zoom>
              ))}
            </div>
          </Slide>
        )}
      </div>
    </div>
  );
};

export default MyJoinedGroups;
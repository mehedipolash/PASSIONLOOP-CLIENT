import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { Fade, Slide, Zoom, JackInTheBox } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import { Tooltip } from "react-tooltip";

const MyGroups = () => {
  const { user } = useContext(AuthContext);
  const [myGroups, setMyGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  const isExpiredFn = (startDate) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(startDate) < today;
  };

  const isActiveFn = (startDate) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(startDate) >= today;
  };

  useEffect(() => {
    if (user?.email) {
      fetch(`https://passion-loop-server.vercel.app/groups?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => { setMyGroups(data); setLoading(false); })
        .catch((err) => { console.error(err); setLoading(false); });
    }
  }, [user]);

  const handleDelete = (id, groupName) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Delete "${groupName}"? This cannot be undone.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://passion-loop-server.vercel.app/groups/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setMyGroups((prev) => prev.filter((g) => g._id !== id));
              Swal.fire({ position: "top-end", icon: "success", title: "Group deleted!", timer: 1500, showConfirmButton: false });
            }
          })
          .catch(() => Swal.fire({ icon: "error", title: "Failed to delete group." }));
      }
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <span className="loading loading-ring loading-lg text-primary" style={{ width: 64, height: 64 }} />
        <p className="text-base-content/50 text-sm animate-pulse">Fetching your groups...</p>
      </div>
    );
  }

  if (myGroups.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <JackInTheBox triggerOnce>
          <div className="text-center space-y-5 max-w-md mx-auto">
            <div className="text-8xl">😕</div>
            <h2 className="text-2xl font-bold text-accent">No groups yet!</h2>
            <p className="text-base-content/60">You haven't created any hobby groups. Start one and build your community!</p>
            <Link to="/createGroup" className="btn btn-primary px-8 rounded-xl">+ Create Your First Group</Link>
          </div>
        </JackInTheBox>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 pb-20">

      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-base-100 to-secondary/20 py-16 px-4 border-b border-base-300">
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

        <Fade triggerOnce>
          <div className="relative text-center max-w-2xl mx-auto space-y-4">
            <Zoom triggerOnce>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-sm font-semibold">
                🗂️ My Dashboard
              </div>
            </Zoom>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-accent leading-tight">
              <Typewriter
                words={["My Groups", "My Communities", "My Hobbies"]}
                loop={0}
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={2000}
                cursor
                cursorStyle="|"
              />
            </h1>
            <p className="text-base-content/60 max-w-lg mx-auto leading-relaxed">
              Manage, update, or remove the hobby groups you've created.
            </p>
            <Fade triggerOnce delay={300}>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <div className="bg-base-100 border border-base-300 rounded-2xl px-6 py-3 shadow-sm text-center">
                  <p className="text-xs text-base-content/50 mb-1">Total Groups</p>
                  <p className="text-2xl font-bold text-primary">{myGroups.length}</p>
                </div>
                <div className="bg-base-100 border border-base-300 rounded-2xl px-6 py-3 shadow-sm text-center">
                  <p className="text-xs text-base-content/50 mb-1">Total Capacity</p>
                  <p className="text-2xl font-bold text-secondary">
                    {myGroups.reduce((sum, g) => sum + Number(g.maxMembers || 0), 0)}
                  </p>
                </div>
                <div className="bg-base-100 border border-base-300 rounded-2xl px-6 py-3 shadow-sm text-center">
                  <p className="text-xs text-base-content/50 mb-1">Active Groups</p>
                  <p className="text-2xl font-bold text-accent">
                    {myGroups.filter((g) => isActiveFn(g.startDate)).length}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </Fade>
      </div>

      {/* Table */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <Slide direction="up" triggerOnce>
          <div className="bg-base-100 border border-base-300 rounded-2xl shadow-lg overflow-hidden">

            <div className="flex items-center justify-between px-6 py-4 border-b border-base-300">
              <p className="font-semibold text-base-content text-sm">
                📋 {myGroups.length} group{myGroups.length > 1 ? "s" : ""}
              </p>
              <Link
                to="/createGroup"
                className="btn btn-primary btn-sm rounded-lg"
                data-tooltip-id="new-tip"
                data-tooltip-content="Create a new group"
              >
                + New Group
              </Link>
              <Tooltip id="new-tip" place="left" />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-base-200 text-base-content/70 text-xs uppercase tracking-wide border-b border-base-300">
                    <th className="px-5 py-3 text-left font-semibold w-10">#</th>
                    <th className="px-5 py-3 text-left font-semibold w-16">Image</th>
                    <th className="px-5 py-3 text-left font-semibold">Group Name</th>
                    <th className="px-5 py-3 text-left font-semibold">Category</th>
                    <th className="px-5 py-3 text-left font-semibold">Location</th>
                    <th className="px-5 py-3 text-center font-semibold">Max</th>
                    <th className="px-5 py-3 text-left font-semibold">Start Date</th>
                    <th className="px-5 py-3 text-center font-semibold">Status</th>
                    <th className="px-5 py-3 text-center font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {myGroups.map((group, index) => {
                    const isExpired = isExpiredFn(group.startDate);
                    return (
                      <tr
                        key={group._id}
                        className={`border-b border-base-200 hover:bg-base-200/60 transition-colors duration-150 ${
                          index % 2 === 0 ? "bg-base-100" : "bg-base-50"
                        }`}
                      >
                        <td className="px-5 py-3 text-base-content/40 font-medium">{index + 1}</td>
                        <td className="px-5 py-3">
                          <img
                            src={group.imageUrl || "https://placehold.co/48x48?text=N/A"}
                            alt={group.groupName}
                            className="w-10 h-10 rounded-lg object-cover border border-base-300"
                          />
                        </td>
                        <td className="px-5 py-3">
                          <p className="font-semibold text-base-content">{group.groupName}</p>
                          <p className="text-xs text-base-content/40 line-clamp-1 max-w-[180px] mt-0.5">{group.description}</p>
                        </td>
                        <td className="px-5 py-3">
                          <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                            {group.hobbyCategory}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-base-content/70 whitespace-nowrap">📍 {group.meetingLocation}</td>
                        <td className="px-5 py-3 text-center font-semibold text-base-content">{group.maxMembers}</td>
                        <td className="px-5 py-3 text-base-content/70 whitespace-nowrap">
                          {new Date(group.startDate).toLocaleDateString("en-US", {
                            year: "numeric", month: "short", day: "numeric",
                          })}
                        </td>
                        <td className="px-5 py-3 text-center">
                          {isExpired ? (
                            <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-error/10 text-error border border-error/20">Expired</span>
                          ) : (
                            <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-success/10 text-success border border-success/20">Active</span>
                          )}
                        </td>
                        <td className="px-5 py-3">
                          <div className="flex items-center justify-center gap-2">
                            <Link
                              to={`/updateGroup/${group._id}`}
                              className="btn btn-warning btn-sm rounded-lg px-3 text-xs"
                              data-tooltip-id={`edit-${group._id}`}
                              data-tooltip-content="Edit this group"
                            >✏️ Update</Link>
                            <Tooltip id={`edit-${group._id}`} place="top" />
                            <button
                              onClick={() => handleDelete(group._id, group.groupName)}
                              className="btn btn-error btn-sm rounded-lg px-3 text-xs"
                              data-tooltip-id={`del-${group._id}`}
                              data-tooltip-content="Delete this group"
                            >🗑️ Delete</button>
                            <Tooltip id={`del-${group._id}`} place="top" />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-3 border-t border-base-300 text-xs text-base-content/40 text-center">
              Showing all {myGroups.length} group{myGroups.length > 1 ? "s" : ""} · {user?.displayName || user?.email}
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default MyGroups;
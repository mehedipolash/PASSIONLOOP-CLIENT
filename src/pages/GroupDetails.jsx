import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import { Tooltip } from "react-tooltip";

const GroupDetails = () => {
  const group = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

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

  // ✅ Check if start date has passed
  const isExpired = new Date(startDate) < new Date();

  const handleJoinGroup = () => {
    if (isExpired) return; // extra safety guard

    const joinData = {
      groupId: _id,
      groupName,
      userEmail: user.email,
      userName: user.displayName,
      joinedAt: new Date().toISOString(),
    };

    fetch("http://localhost:3000/joins", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(joinData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `You joined "${groupName}"!`,
            timer: 1500,
            showConfirmButton: false,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "info",
            title: data.message || "Already joined this group.",
            timer: 1500,
            showConfirmButton: false,
          });
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Failed to join group.",
          confirmButtonText: "Try again",
        });
      });
  };

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Hero Image with overlay */}
        <Fade triggerOnce>
          <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl mb-8">
            <img
              src={imageUrl || "https://placehold.co/800x400?text=No+Image"}
              alt={groupName}
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <Zoom triggerOnce>
                <span className="inline-block mb-2 px-3 py-1 rounded-full bg-primary text-primary-content text-xs font-bold uppercase tracking-widest">
                  {hobbyCategory}
                </span>
                {/* ✅ Expired badge on image */}
                {isExpired && (
                  <span className="ml-2 inline-block mb-2 px-3 py-1 rounded-full bg-error text-error-content text-xs font-bold uppercase tracking-widest">
                    Expired
                  </span>
                )}
                <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                  <Typewriter
                    words={[groupName]}
                    loop={1}
                    typeSpeed={60}
                    cursor
                    cursorStyle="|"
                  />
                </h1>
              </Zoom>
            </div>
          </div>
        </Fade>

        {/* Main Card */}
        <Slide direction="up" triggerOnce>
          <div className="bg-base-100 rounded-3xl shadow-2xl border border-base-300 p-6 md:p-10">

            {/* Join + Back row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">

              {/* Back button */}
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-200 hover:bg-base-300 text-black font-semibold text-sm transition border border-base-300"
                data-tooltip-id="back-tip"
                data-tooltip-content="Go back to previous page"
              >
                ← Back to Groups
              </button>
              <Tooltip id="back-tip" place="bottom" />

              {/* ✅ Join Button — disabled if expired */}
              {isExpired ? (
                <div
                  data-tooltip-id="join-tip"
                  data-tooltip-content="This group's start date has already passed"
                >
                  <button
                    disabled
                    className="flex items-center gap-2 px-8 py-3 rounded-xl bg-base-300 text-base-content/40 font-bold text-black cursor-not-allowed"
                  >
                    ❌ Group Expired
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleJoinGroup}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-black font-bold text-base shadow-lg hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
                  data-tooltip-id="join-tip"
                  data-tooltip-content={`Join ${groupName} now!`}
                >
                  🚀 Join Group
                </button>
              )}
              <Tooltip id="join-tip" place="bottom" />
            </div>

            {/* Description */}
            <Fade triggerOnce direction="up" delay={100}>
              <div className="mb-8 bg-base-200 rounded-2xl p-5 border border-base-300">
                <h2 className="text-lg font-bold text-accent mb-2 flex items-center gap-2">
                  📖 About this Group
                </h2>
                <p className="text-base-content/70 leading-relaxed">{description}</p>
              </div>
            </Fade>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

              <Zoom triggerOnce delay={0}>
                <div
                  className="bg-gradient-to-br from-base-200 to-base-100 rounded-2xl p-5 flex items-start gap-4 border border-base-300 hover:shadow-md transition-shadow cursor-default"
                  data-tooltip-id="location-tip"
                  data-tooltip-content="Where the group meets"
                >
                  <span className="text-3xl">📍</span>
                  <div>
                    <p className="text-xs text-base-content/50 font-bold uppercase tracking-widest mb-1">Meeting Location</p>
                    <p className="text-base-content font-bold text-base">{meetingLocation}</p>
                  </div>
                </div>
                <Tooltip id="location-tip" place="top" />
              </Zoom>

              <Zoom triggerOnce delay={100}>
                <div
                  className="bg-gradient-to-br from-base-200 to-base-100 rounded-2xl p-5 flex items-start gap-4 border border-base-300 hover:shadow-md transition-shadow cursor-default"
                  data-tooltip-id="members-tip"
                  data-tooltip-content="Maximum group capacity"
                >
                  <span className="text-3xl">👥</span>
                  <div>
                    <p className="text-xs text-base-content/50 font-bold uppercase tracking-widest mb-1">Max Members</p>
                    <p className="text-base-content font-bold text-base">{maxMembers} people</p>
                  </div>
                </div>
                <Tooltip id="members-tip" place="top" />
              </Zoom>

              <Zoom triggerOnce delay={200}>
                <div
                  className="bg-gradient-to-br from-base-200 to-base-100 rounded-2xl p-5 flex items-start gap-4 border border-base-300 hover:shadow-md transition-shadow cursor-default"
                  data-tooltip-id="date-tip"
                  data-tooltip-content="When the group activity starts"
                >
                  <span className="text-3xl">📅</span>
                  <div>
                    <p className="text-xs text-base-content/50 font-bold uppercase tracking-widest mb-1">Start Date</p>
                    <p className={`font-bold text-base ${isExpired ? "text-error" : "text-base-content"}`}>
                      {new Date(startDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      {isExpired && " (Expired)"}
                    </p>
                  </div>
                </div>
                <Tooltip id="date-tip" place="top" />
              </Zoom>

              <Zoom triggerOnce delay={300}>
                <div
                  className="bg-gradient-to-br from-base-200 to-base-100 rounded-2xl p-5 flex items-start gap-4 border border-base-300 hover:shadow-md transition-shadow cursor-default"
                  data-tooltip-id="category-tip"
                  data-tooltip-content="Hobby category of this group"
                >
                  <span className="text-3xl">🎯</span>
                  <div>
                    <p className="text-xs text-base-content/50 font-bold uppercase tracking-widest mb-1">Category</p>
                    <p className="text-base-content font-bold text-base">{hobbyCategory}</p>
                  </div>
                </div>
                <Tooltip id="category-tip" place="top" />
              </Zoom>
            </div>

            {/* Organizer */}
            <Slide direction="up" triggerOnce delay={200}>
              <div className="border-t border-base-300 pt-6">
                <h2 className="text-lg font-bold text-accent mb-4 flex items-center gap-2">
                  🧑‍💼 Organizer
                </h2>
                <div
                  className="flex items-center gap-4 bg-base-200 rounded-2xl p-4 border border-base-300 w-fit"
                  data-tooltip-id="organizer-tip"
                  data-tooltip-content={`Contact: ${userEmail}`}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-extrabold text-xl shadow-md">
                    {userName?.charAt(0)?.toUpperCase() || "?"}
                  </div>
                  <div>
                    <p className="font-bold text-base-content text-base">{userName}</p>
                    <p className="text-sm text-base-content/50">{userEmail}</p>
                  </div>
                </div>
                <Tooltip id="organizer-tip" place="right" />
              </div>
            </Slide>

          </div>
        </Slide>
      </div>
    </div>
  );
};

export default GroupDetails;
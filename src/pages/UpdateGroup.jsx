import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { Fade, Zoom, Slide, JackInTheBox } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import { Tooltip } from "react-tooltip";

const UpdateGroup = () => {
  const group = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateGroup = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedGroup = {
      groupName: form.groupName.value,
      hobbyCategory: form.hobbyCategory.value,
      meetingLocation: form.meetingLocation.value,
      maxMembers: form.maxMembers.value,
      startDate: form.startDate.value,
      imageUrl: form.imageUrl.value,
      description: form.description.value,
    };

    fetch(`https://passion-loop-server.vercel.app/groups/${group._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedGroup),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Group updated successfully!",
            timer: 1500,
            showConfirmButton: false,
          });
          navigate("/myGroups");
        } else {
          Swal.fire({
            icon: "info",
            title: "No changes detected.",
            timer: 1500,
            showConfirmButton: false,
          });
        }
      })
      .catch((err) => {
        
        Swal.fire({
          title: "Failed to update group.",
          icon: "error",
          confirmButtonText: "Try again",
        });
      });
  };

  const fields = [
    { icon: "✏️", label: "Group Name", content: (
      <input type="text" name="groupName" defaultValue={group.groupName}
        className="input w-full" placeholder="e.g. Weekend Painters" required />
    )},
    { icon: "🎯", label: "Hobby Category", content: (
      <select name="hobbyCategory" defaultValue={group.hobbyCategory} className="select w-full" required>
        <option value="" disabled>Select a category</option>
        {["Drawing & Painting","Photography","Video Gaming","Fishing","Running",
          "Cooking","Reading","Writing","Gardening","Music","Hiking","Cycling"
        ].map(cat => <option key={cat}>{cat}</option>)}
      </select>
    )},
    { icon: "📍", label: "Meeting Location", content: (
      <input type="text" name="meetingLocation" defaultValue={group.meetingLocation}
        className="input w-full" placeholder="e.g. Central Park, NYC" required />
    )},
    { icon: "👥", label: "Max Members", content: (
      <input type="number" name="maxMembers" defaultValue={group.maxMembers}
        className="input w-full" min={2} required />
    )},
    { icon: "📅", label: "Start Date", content: (
      <input type="date" name="startDate" defaultValue={group.startDate}
        className="input w-full" required />
    )},
    { icon: "🖼️", label: "Image URL", content: (
      <input type="url" name="imageUrl" defaultValue={group.imageUrl}
        className="input w-full" placeholder="https://example.com/image.jpg" />
    )},
    { icon: "🙍", label: "Your Name", content: (
      <input type="text" name="userName" value={user?.displayName || ""}
        className="input w-full bg-base-300 cursor-not-allowed" readOnly />
    )},
    { icon: "📧", label: "Your Email", content: (
      <input type="email" name="userEmail" value={user?.email || ""}
        className="input w-full bg-base-300 cursor-not-allowed" readOnly />
    )},
  ];

  return (
    <div className="min-h-screen bg-base-200 pb-20">

      {/* ── Hero Banner ── */}
      <div className="relative w-full overflow-hidden bg-gradient-to-br from-primary/20 via-base-100 to-secondary/20 py-16 px-4 border-b border-base-300">

        {/* decorative blobs */}
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

        <Fade triggerOnce direction="down">
          <div className="relative text-center space-y-4 max-w-2xl mx-auto">

            <JackInTheBox triggerOnce>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-2">
                ✏️ Edit Mode
              </div>
            </JackInTheBox>

            <h1 className="text-4xl lg:text-6xl font-extrabold text-accent leading-tight">
              <Typewriter
                words={[`Updating: ${group.groupName}`]}
                loop={1}
                typeSpeed={50}
                cursor
                cursorStyle="|"
              />
            </h1>

            <p className="text-base-content/60 text-base max-w-lg mx-auto leading-relaxed">
              Fine-tune your group details below. Your community is counting on you!
            </p>

            {/* preview pill row */}
            <Fade triggerOnce delay={400}>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                <span className="badge badge-outline badge-primary">{group.hobbyCategory}</span>
                <span className="badge badge-outline badge-secondary">📍 {group.meetingLocation}</span>
                <span className="badge badge-outline">👥 {group.maxMembers} max</span>
              </div>
            </Fade>

          </div>
        </Fade>
      </div>

      {/* ── Form Card ── */}
      <div className="max-w-4xl mx-auto px-4 mt-10">
        <Slide direction="up" triggerOnce>
          <div className="bg-base-100 border border-base-300 rounded-3xl shadow-2xl overflow-hidden">

            {/* card header stripe */}
            <div className="h-2 w-full bg-gradient-to-r from-primary via-accent to-secondary" />

            <form onSubmit={handleUpdateGroup} className="p-6 md:p-10">

              {/* ── Fields Grid ── */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {fields.map((f, i) => (
                  <Zoom key={f.label} triggerOnce delay={i * 60}>
                    <fieldset
                      className="fieldset bg-base-200 border border-base-300 rounded-2xl p-4 hover:border-primary/50 hover:shadow-md transition-all duration-300"
                      data-tooltip-id={`tip-${i}`}
                      data-tooltip-content={`Edit ${f.label}`}
                    >
                      <label className="label font-semibold flex items-center gap-2">
                        <span>{f.icon}</span> {f.label}
                      </label>
                      {f.content}
                    </fieldset>
                    <Tooltip id={`tip-${i}`} place="top" />
                  </Zoom>
                ))}
              </div>

              {/* ── Description ── */}
              <Fade triggerOnce delay={500} direction="up">
                <fieldset className="fieldset bg-base-200 border border-base-300 rounded-2xl p-4 mt-5 hover:border-primary/50 hover:shadow-md transition-all duration-300">
                  <label className="label font-semibold flex items-center gap-2">
                    📝 Description
                  </label>
                  <textarea
                    name="description"
                    defaultValue={group.description}
                    className="textarea w-full h-36 resize-none"
                    placeholder="Describe what your group is about..."
                    required
                  />
                </fieldset>
              </Fade>

              {/* ── Divider ── */}
              <div className="divider my-8 text-base-content/30 text-xs">Ready to save?</div>

              {/* ── Action Buttons ── */}
              <Fade triggerOnce delay={600}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => navigate("/myGroups")}
                    className="btn btn-ghost w-full sm:w-auto px-10 py-3 rounded-xl text-base font-semibold border border-base-300 hover:bg-base-200 transition"
                    data-tooltip-id="cancel-tip"
                    data-tooltip-content="Discard changes and go back"
                  >
                    ← Cancel
                  </button>
                  <Tooltip id="cancel-tip" place="top" />

                  <button
                    type="submit"
                    className="btn btn-primary w-full sm:w-auto px-10 py-3 rounded-xl text-base font-bold shadow-lg hover:scale-105 hover:shadow-primary/40 transition-all duration-300"
                    data-tooltip-id="submit-tip"
                    data-tooltip-content="Save all your changes"
                  >
                    💾 Update Group
                  </button>
                  <Tooltip id="submit-tip" place="top" />
                </div>
              </Fade>

            </form>
          </div>
        </Slide>
      </div>

    </div>
  );
};

export default UpdateGroup;
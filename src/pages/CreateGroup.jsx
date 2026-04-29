




// import { useContext } from "react";
// import { useNavigate } from "react-router";
// import Swal from "sweetalert2";
// import { AuthContext } from "../provider/AuthProvider";

// const CreateGroup = () => {
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleCreateGroup = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const groupData = new FormData(form);
//     const newGroup = Object.fromEntries(groupData.entries());

//     fetch("http://localhost:3000/groups", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newGroup),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.insertedId) {
//           Swal.fire({
//             title: "Group created successfully!",
//             icon: "success",
//             timer: 1500,
//             showConfirmButton: false,
//           });
//           form.reset();
//           navigate("/allGroups");
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//         Swal.fire({
//           title: "Failed to create group.",
//           icon: "error",
//           confirmButtonText: "Try again",
//         });
//       });
//   };

//   return (
//     <div className="py-16 px-4">
//       {/* Header */}
//       <div className="text-center space-y-3 mb-10">
//         <h1 className="text-4xl lg:text-5xl font-bold text-accent">
//           Create a New Group
//         </h1>
//         <p className="text-base-content/70 max-w-xl mx-auto">
//           Start a hobby group and connect with people who share your passion.
//           Fill in the details below to get started.
//         </p>
//       </div>

//       {/* Form */}
//       <form onSubmit={handleCreateGroup} className="max-w-4xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//           {/* Group Name */}
//           <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box p-4">
//             <label className="label font-medium">Group Name</label>
//             <input
//               type="text"
//               name="groupName"
//               className="input w-full"
//               placeholder="e.g. Weekend Painters"
//               required
//             />
//           </fieldset>

//           {/* Hobby Category */}
//           <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box p-4">
//             <label className="label font-medium">Hobby Category</label>
//             <select name="hobbyCategory" className="select w-full" required defaultValue="">
//               <option value="" disabled>Select a category</option>
//               <option>Drawing & Painting</option>
//               <option>Photography</option>
//               <option>Video Gaming</option>
//               <option>Fishing</option>
//               <option>Running</option>
//               <option>Cooking</option>
//               <option>Reading</option>
//               <option>Writing</option>
//               <option>Gardening</option>
//               <option>Music</option>
//               <option>Hiking</option>
//               <option>Cycling</option>
//             </select>
//           </fieldset>

//           {/* Meeting Location */}
//           <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box p-4">
//             <label className="label font-medium">Meeting Location</label>
//             <input
//               type="text"
//               name="meetingLocation"
//               className="input w-full"
//               placeholder="e.g. Central Park, NYC"
//               required
//             />
//           </fieldset>

//           {/* Max Members */}
//           <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box p-4">
//             <label className="label font-medium">Max Members</label>
//             <input
//               type="number"
//               name="maxMembers"
//               className="input w-full"
//               placeholder="e.g. 20"
//               min={2}
//               required
//             />
//           </fieldset>

//           {/* Start Date */}
//           <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box p-4">
//             <label className="label font-medium">Start Date</label>
//             <input
//               type="date"
//               name="startDate"
//               className="input w-full"
//               required
//             />
//           </fieldset>

//           {/* Image URL */}
//           <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box p-4">
//             <label className="label font-medium">Image URL</label>
//             <input
//               type="url"
//               name="imageUrl"
//               className="input w-full"
//               placeholder="https://example.com/image.jpg"
//             />
//           </fieldset>

//           {/* User Name (readonly) */}
//           <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box p-4">
//             <label className="label font-medium">Your Name</label>
//             <input
//               type="text"
//               name="userName"
//               className="input w-full bg-base-300 cursor-not-allowed"
//               value={user?.displayName || ""}
//               readOnly
//             />
//           </fieldset>

//           {/* User Email (readonly) */}
//           <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box p-4">
//             <label className="label font-medium">Your Email</label>
//             <input
//               type="email"
//               name="userEmail"
//               className="input w-full bg-base-300 cursor-not-allowed"
//               value={user?.email || ""}
//               readOnly
//             />
//           </fieldset>
//         </div>

//         {/* Description */}
//         <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box p-4 mt-6">
//           <label className="label font-medium">Description</label>
//           <textarea
//             name="description"
//             className="textarea w-full h-32 resize-none"
//             placeholder="Describe what your group is about, what members will do, and who should join..."
//             required
//           />
//         </fieldset>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="btn btn-primary-custom mt-6 mx-auto block px-8 py-3 rounded-lg text-lg font-semibold"
//         >
//           Create Group
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateGroup;



// -----------------------------------------------


import { useContext } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const hobbyCategories = [
  "Drawing & Painting",
  "Photography",
  "Video Gaming",
  "Fishing",
  "Running",
  "Cooking",
  "Reading",
  "Writing",
  "Gardening",
  "Music",
  "Hiking",
  "Cycling",
];

const CreateGroup = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const newGroup = Object.fromEntries(new FormData(form).entries());

    fetch("http://localhost:3000/groups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGroup),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Group created!",
            text: "Your hobby group is now live 🎉",
            icon: "success",
            timer: 1800,
            showConfirmButton: false,
          });
          form.reset();
          navigate("/allGroups");
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Failed to create group.",
          icon: "error",
          confirmButtonText: "Try again",
        });
      });
  };

  const inputClass =
    "w-full px-4 py-2.5 rounded-xl border border-base-300 bg-base-100 focus:outline-none focus:border-primary text-base-content text-sm transition";

  return (
    <div className="min-h-screen bg-base-200 py-16 px-4">

      {/* ── Hero Header ── */}
      <Fade triggerOnce>
        <div className="text-center space-y-3 mb-12">
          <Zoom triggerOnce>
            <span className="inline-block bg-primary/10 text-primary border border-primary/30 text-xs font-semibold px-4 py-1.5 rounded-full">
              🚀 Start Something New
            </span>
          </Zoom>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-accent leading-tight">
            Create a{" "}
            <span className="text-primary">
              <Typewriter
                words={["Hobby Group", "Community", "Movement", "Team"]}
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
            Bring passionate people together. Fill in the details below and launch your group in seconds.
          </p>
        </div>
      </Fade>

      {/* ── Form Card ── */}
      <Slide direction="up" triggerOnce>
        <div className="max-w-4xl mx-auto bg-base-100 border border-base-300 rounded-3xl shadow-xl overflow-hidden">

          {/* top accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-primary via-accent to-secondary" />

          <form onSubmit={handleCreateGroup} className="p-8 space-y-6">

            {/* ── Section: Group Info ── */}
            <Fade triggerOnce delay={100}>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-base-content/40 mb-4">
                  Group Info
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {/* Group Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-base-content">Group Name</label>
                    <input
                      type="text"
                      name="groupName"
                      className={inputClass}
                      placeholder="e.g. Weekend Painters"
                      required
                    />
                  </div>

                  {/* Hobby Category */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-base-content">Hobby Category</label>
                    <select
                      name="hobbyCategory"
                      className={inputClass}
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>Select a category</option>
                      {hobbyCategories.map((cat) => (
                        <option key={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  {/* Meeting Location */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-base-content">Meeting Location</label>
                    <input
                      type="text"
                      name="meetingLocation"
                      className={inputClass}
                      placeholder="e.g. Central Park, NYC"
                      required
                    />
                  </div>

                  {/* Max Members */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-base-content">Max Members</label>
                    <input
                      type="number"
                      name="maxMembers"
                      className={inputClass}
                      placeholder="e.g. 20"
                      min={2}
                      required
                    />
                  </div>

                  {/* Start Date */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-base-content">Start Date</label>
                    <input
                      type="date"
                      name="startDate"
                      className={inputClass}
                      required
                    />
                  </div>

                  {/* Image URL */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-base-content">Image URL</label>
                    <input
                      type="url"
                      name="imageUrl"
                      className={inputClass}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>
              </div>
            </Fade>

            {/* divider */}
            <div className="h-px bg-base-300" />

            {/* ── Section: Description ── */}
            <Fade triggerOnce delay={200}>
              <div className="flex flex-col gap-1.5">
                <p className="text-xs font-bold uppercase tracking-widest text-base-content/40 mb-1">
                  Description
                </p>
                <textarea
                  name="description"
                  className={`${inputClass} h-28 resize-none`}
                  placeholder="Describe what your group is about, what members will do, and who should join..."
                  required
                />
              </div>
            </Fade>

            {/* divider */}
            <div className="h-px bg-base-300" />

            {/* ── Section: Creator Info ── */}
            <Fade triggerOnce delay={300}>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-base-content/40 mb-4">
                  Creator Info
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {/* User Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-base-content">Your Name</label>
                    <input
                      type="text"
                      name="userName"
                      className={`${inputClass} bg-base-200 cursor-not-allowed opacity-70`}
                      value={user?.displayName || ""}
                      readOnly
                    />
                  </div>

                  {/* User Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-base-content">Your Email</label>
                    <input
                      type="email"
                      name="userEmail"
                      className={`${inputClass} bg-base-200 cursor-not-allowed opacity-70`}
                      value={user?.email || ""}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </Fade>

            {/* ── Submit ── */}
            <Zoom triggerOnce delay={400}>
              <button
                type="submit"
                className="w-full p-3 rounded-xl bg-blue-200 text-primary-content font-bold text-base hover:opacity-90 active:scale-95 transition-all duration-150"
              >
                🚀 Launch Group
              </button>
            </Zoom>

          </form>
        </div>
      </Slide>
    </div>
  );
};

export default CreateGroup;





import { useContext } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const CreateGroup = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const groupData = new FormData(form);
    const newGroup = Object.fromEntries(groupData.entries());

    fetch("http://localhost:3000/groups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGroup),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Group created successfully!",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });
          form.reset();
          navigate("/allGroups");
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          title: "Failed to create group.",
          icon: "error",
          confirmButtonText: "Try again",
        });
      });
  };

  return (
    <div className="py-16 px-4">
      {/* Header */}
      <div className="text-center space-y-3 mb-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-accent">
          Create a New Group
        </h1>
        <p className="text-base-content/70 max-w-xl mx-auto">
          Start a hobby group and connect with people who share your passion.
          Fill in the details below to get started.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleCreateGroup} className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Group Name */}
          <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box p-4">
            <label className="label font-medium">Group Name</label>
            <input
              type="text"
              name="groupName"
              className="input w-full"
              placeholder="e.g. Weekend Painters"
              required
            />
          </fieldset>

          {/* Hobby Category */}
          <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box p-4">
            <label className="label font-medium">Hobby Category</label>
            <select name="hobbyCategory" className="select w-full" required defaultValue="">
              <option value="" disabled>Select a category</option>
              <option>Drawing & Painting</option>
              <option>Photography</option>
              <option>Video Gaming</option>
              <option>Fishing</option>
              <option>Running</option>
              <option>Cooking</option>
              <option>Reading</option>
              <option>Writing</option>
              <option>Gardening</option>
              <option>Music</option>
              <option>Hiking</option>
              <option>Cycling</option>
            </select>
          </fieldset>

          {/* Meeting Location */}
          <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box p-4">
            <label className="label font-medium">Meeting Location</label>
            <input
              type="text"
              name="meetingLocation"
              className="input w-full"
              placeholder="e.g. Central Park, NYC"
              required
            />
          </fieldset>

          {/* Max Members */}
          <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box p-4">
            <label className="label font-medium">Max Members</label>
            <input
              type="number"
              name="maxMembers"
              className="input w-full"
              placeholder="e.g. 20"
              min={2}
              required
            />
          </fieldset>

          {/* Start Date */}
          <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box p-4">
            <label className="label font-medium">Start Date</label>
            <input
              type="date"
              name="startDate"
              className="input w-full"
              required
            />
          </fieldset>

          {/* Image URL */}
          <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box p-4">
            <label className="label font-medium">Image URL</label>
            <input
              type="url"
              name="imageUrl"
              className="input w-full"
              placeholder="https://example.com/image.jpg"
            />
          </fieldset>

          {/* User Name (readonly) */}
          <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box p-4">
            <label className="label font-medium">Your Name</label>
            <input
              type="text"
              name="userName"
              className="input w-full bg-base-300 cursor-not-allowed"
              value={user?.displayName || ""}
              readOnly
            />
          </fieldset>

          {/* User Email (readonly) */}
          <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box p-4">
            <label className="label font-medium">Your Email</label>
            <input
              type="email"
              name="userEmail"
              className="input w-full bg-base-300 cursor-not-allowed"
              value={user?.email || ""}
              readOnly
            />
          </fieldset>
        </div>

        {/* Description */}
        <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box p-4 mt-6">
          <label className="label font-medium">Description</label>
          <textarea
            name="description"
            className="textarea w-full h-32 resize-none"
            placeholder="Describe what your group is about, what members will do, and who should join..."
            required
          />
        </fieldset>

        {/* Submit */}
        <button
          type="submit"
          className="btn btn-primary-custom mt-6 mx-auto block px-8 py-3 rounded-lg text-lg font-semibold"
        >
          Create Group
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
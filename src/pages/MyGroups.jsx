import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const MyGroups = () => {
  const { user } = useContext(AuthContext);
  const [myGroups, setMyGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/groups?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyGroups(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
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
        fetch(`http://localhost:3000/groups/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setMyGroups((prev) => prev.filter((g) => g._id !== id));
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Group deleted successfully!",
                timer: 1500,
                showConfirmButton: false,
              });
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire({ icon: "error", title: "Failed to delete group." });
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="py-12 px-4">
      {/* Header */}
      <div className="text-center space-y-3 mb-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-accent">My Groups</h1>
        <p className="text-base-content/70 max-w-xl mx-auto">
          Manage the hobby groups you have created.
        </p>
      </div>

      {myGroups.length === 0 ? (
        <div className="text-center py-20 text-base-content/60">
          <p className="text-5xl mb-4">😕</p>
          <p className="text-lg font-medium">You haven't created any groups yet.</p>
          <Link to="/createGroup" className="btn btn-primary mt-5">
            Create Your First Group
          </Link>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto overflow-x-auto rounded-2xl border border-base-300 shadow-lg">
          <table className="table table-zebra w-full">
            {/* Head */}
            <thead className="bg-primary text-primary-content text-sm">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Group Name</th>
                <th>Category</th>
                <th>Location</th>
                <th>Max Members</th>
                <th>Start Date</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myGroups.map((group, index) => (
                <tr key={group._id} className="hover">
                  {/* Index */}
                  <td className="text-base-content/60 font-medium">{index + 1}</td>

                  {/* Image */}
                  <td>
                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-base-300">
                      <img
                        src={group.imageUrl || "https://placehold.co/48x48?text=N/A"}
                        alt={group.groupName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </td>

                  {/* Group Name */}
                  <td>
                    <div>
                      <p className="font-semibold text-base-content">{group.groupName}</p>
                      <p className="text-xs text-base-content/50 line-clamp-1 max-w-[180px]">
                        {group.description}
                      </p>
                    </div>
                  </td>

                  {/* Category */}
                  <td>
                    <span className="badge badge-outline badge-primary text-xs">
                      {group.hobbyCategory}
                    </span>
                  </td>

                  {/* Location */}
                  <td className="text-sm text-base-content/70">
                    📍 {group.meetingLocation}
                  </td>

                  {/* Max Members */}
                  <td className="text-sm text-center">{group.maxMembers}</td>

                  {/* Start Date */}
                  <td className="text-sm text-base-content/70 whitespace-nowrap">
                    {new Date(group.startDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>

                  {/* Actions */}
                  <td>
                    <div className="flex items-center justify-center gap-2">
                      <Link
                        to={`/updateGroup/${group._id}`}
                        className="btn btn-sm btn-warning text-blue px-3"
                      >
                        ✏️ Update
                      </Link>
                      <button
                        onClick={() => handleDelete(group._id, group.groupName)}
                        className="btn btn-sm btn-error text-red px-3"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyGroups;
import { Link } from "react-router";

const FeaturedGroups = ({ groups = [] }) => {
  // Show latest 6 — assumes newest are last in array
  const featured = [...groups].reverse().slice(0, 6);

  return (
    <section className="py-14">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-accent">Featured Groups</h2>
        <p className="text-base-content/70 mt-2">
          Join an ongoing group and start your journey today
        </p>
      </div>

      {featured.length === 0 ? (
        <div className="text-center py-16 text-base-content/60">
          <p className="text-lg">No groups yet. Be the first to create one!</p>
          <Link to="/createGroup" className="btn btn-primary mt-4">Create a Group</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((group) => {
            const spotsLeft = group.maxMembers - (group.members || 0);
            const fillPercent = Math.round(((group.members || 0) / group.maxMembers) * 100);

            return (
              <div
                key={group._id}
                className="bg-base-100 rounded-2xl overflow-hidden border border-base-300 hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={group.imageUrl || "https://placehold.co/400x200?text=No+Image"}
                    alt={group.groupName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-primary text-primary-content text-xs font-semibold px-3 py-1 rounded-full">
                    {group.hobbyCategory}
                  </span>
                </div>

                {/* Body */}
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-bold text-accent">{group.groupName}</h3>
                  <p className="text-sm text-base-content/60">📍 {group.meetingLocation}</p>

                  {/* Member progress bar */}
                  <div>
                    <div className="flex justify-between text-xs text-base-content/60 mb-1">
                      <span>{group.members || 0} members</span>
                      <span>{spotsLeft} spots left</span>
                    </div>
                    <div className="w-full bg-base-300 rounded-full h-1.5">
                      <div
                        className="bg-primary h-1.5 rounded-full"
                        style={{ width: `${fillPercent}%` }}
                      />
                    </div>
                  </div>

                  <Link
                    to={`/groups/${group._id}`}
                    className="btn btn-outline btn-info bg-[#7DA78C] rounded-md p-1 btn-sm w-full mt-2"
                  >
                    View Group
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="text-center mt-10">
        <Link to="/allGroups" className="btn btn-secondary-custom btn-info px-10">
          See All Groups
        </Link>
      </div>
    </section>
  );
};

export default FeaturedGroups;
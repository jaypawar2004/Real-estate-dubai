import React from "react";

const MeetTheTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      image: "https://plus.unsplash.com/premium_photo-1732569105933-cd9903231867?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDR8fHxlbnwwfHx8fHw%3D",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Graphic Designer",
      image: "https://spacema-dev.com/elevate/assets/images/team/4.jpg",
    },
    {
      id: 3,
      name: "Alex Johnson",
      role: "Marketing Manager",
      image: "https://spacema-dev.com/elevate/assets/images/team/3.jpg",
    },
    {
      id: 4,
      name: "Peter Johnson",
      role: "SEO Specialist",
      image: "https://spacema-dev.com/elevate/assets/images/team/2.jpg",
    },
    {
      id: 5,
      name: "Emily Brown",
      role: "UX Designer",
      image: "https://spacema-dev.com/elevate/assets/images/team/5.jpg",
    },
    {
      id: 6,
      name: "Michael Davis",
      role: "Frontend Developer",
      image: "https://spacema-dev.com/elevate/assets/images/team/6.jpg",
    },
    {
      id: 7,
      name: "Sarah Johnson",
      role: "Content Writer",
      image: "https://spacema-dev.com/elevate/assets/images/team/7.jpg",
    },
    {
      id: 8,
      name: "David Wilson",
      role: "Project Manager",
      image: "https://spacema-dev.com/elevate/assets/images/team/8.jpg",
    },
  ];

  return (
    <section id="our-team" className="bg-gray-400 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary mt-10">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md p-6 my-6 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;

const skills = [
  {
    title: "Javascript",
    competency: 4,
    category: ["Web Development", "Languages", "Javascript"],
  },
  {
    title: "Node.JS",
    competency: 4,
    category: ["Web Development", "Javascript"],
  },
  {
    title: "React",
    competency: 4,
    category: ["Web Development", "Javascript"],
  },
  {
    title: "Express.JS",
    competency: 3,
    category: ["Web Development", "Javascript"],
  },
  {
    title: "HTML + CSS",
    competency: 4,
    category: ["Web Development", "Languages"],
  },
  {
    title: "Python",
    competency: 3,
    category: ["Languages", "Python"],
  },
  {
    title: "C",
    competency: 3,
    category: ["Languages"],
  },
  {
    title: "C#",
    competency: 3,
    category: ["Languages"],
  },
  {
    title: "SQL",
    competency: 3,
    category: ["Languages", "Databases"],
  },
  {
    title: "Git",
    competency: 3,
    category: ["Tools"],
  },
  {
    title: "Linux",
    competency: 3,
    category: ["Tools", "Operating Systems"],
  },
  {
    title: "VS Code",
    competency: 4,
    category: ["Tools"],
  },
  {
    title: "WordPress",
    competency: 3,
    category: ["Web Development", "CMS"],
  },
  {
    title: "Pandas",
    competency: 3,
    category: ["Data Science", "Python"],
  },
  {
    title: "Numpy",
    competency: 3,
    category: ["Data Science", "Python"],
  },
  {
    title: "Matplotlib",
    competency: 3,
    category: ["Data Science", "Python"],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  "#6968b3",
  "#37b1f5",
  "#40494e",
  "#515dd4",
  "#e47272",
  "#cc7b94",
  "#3896e2",
  "#c3423f",
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };

import React, { useEffect, useState } from "react";
const projectsJSON = require('../data/projects.json'); // tem que usar o FileReader...

export const Projects = () => {
  const [projects, setProjects] = useState(false);
  const [stacks, setStacks] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  
  useEffect(() => { //set projects on load
    setProjects(projectsJSON.projects);
    setFilteredProjects(projectsJSON.projects);
  }, []);

  useEffect(() => { // get stack list
    if (projects) {
      const _stacks = projects.reduce((prev, cur) => {
        for (let stack of cur.stacks) {
          if (!prev.contains(stack)) {
             prev.push(stack);
          }
        }
        return prev;
      }, []);
      setStacks(_stacks);
    }
  },[projects])

  useEffect(() => {

  }, filters)

    return (
    <article id="projects">
      <h2>Projects</h2>
      <div class="filter-bar">
        {stacks.map((s) => (
          <button 
            key={s}
            type="button"
            class="filter-btn"
            onClick={(e) => {
              setFilters([...filters, s])
            }}
          >
            {s}
          </button>
        ))}
      </div>
      {filteredProjects.map((p) => (
        <section class="project-tile" key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <a href={p.link}>{ p.link.includes('github') ? 'Live Version' : 'Code' }</a>
          <ul>{p.stacks.map((s) => <li key={s}>{s}</li>)}</ul>
        </section>
      ))}
      <h2>Exercises</h2>
    </article>
  )
}
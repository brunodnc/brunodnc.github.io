import React, { useEffect, useState } from "react";
import projects from '../data/projects';

export const Projects = () => {
  const [proj, setProjects] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [stacks, setStacks] = useState([]);
  const [filters, setFilters] = useState([]);
  
  
  useEffect(() => { //set projects on load
    setProjects(projects.projects);
    setFilteredProjects(projects.projects);
    console.log('rodou, fp é array vazio? ' + JSON.stringify(filteredProjects));
  }, []);

  useEffect(() => { // get stack list
    if (proj) {
      const _stacks = proj.reduce((prev, cur) => {
        if (cur.stacks) {
          for (const st of cur.stacks) {
            if (!prev.includes(st)) {
              prev.push(st);
              };
            };
        }
        return prev;
      }, []);
      setStacks(_stacks);
    }
  },[proj]);

  useEffect(() => { //filters projects
    if (filters === []) {
      setFilteredProjects(projects);
    } else{
      setFilteredProjects(filteredProjects.filter((p) => !p.stacks.includes(filters[-1])));
    }
  }, [filters]);

    return (      
    <article id="projects">
      <h2>Projects</h2>
      <div className="filter-bar">
        {stacks.map((s) => (
          <button 
            key={s}
            type="button"
            className="filter-btn"
            onClick={(e) => {
              setFilters([...filters, s])
            }}
          >
            {s}
          </button>
        ))}
        <button
          type="button"
          onClick={() => {
            setFilters([]);
          }}>
          Clear
        </button>
      </div>
      {filteredProjects.map((p) => (
        <section className="project-tile" key={p.id}>
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
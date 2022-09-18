import React, { useEffect, useState } from "react";
import projects from '../data/projects';

export const Projects = () => {
  const [proj, setProjects] = useState([]);
  const [stacks, setStacks] = useState([]);
  const [filters, setFilters] = useState([]);
  
  let loaded = false;
  
  useEffect(() => { //set projects on load
    setProjects(projects.projects);
    loaded = true;
  }, []);

  useEffect(() => { // get stack list
    if (proj instanceof Array && proj.length !== 0) {
      const _stacks = proj.reduce((prev, cur) => {
        if (cur.stacks) {
          for (const st of cur.stacks) {
            if (prev.indexOf(st) === -1) {
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
      setProjects(projects.projects);
    }
    if (proj instanceof Array && proj.length !== 0) {
      const filteredProjects = filters.reduce((prev, cur) => {
        return prev.filter((currentProject) => currentProject.stacks.indexOf(cur) !== -1)
      }, proj);
      setProjects(filteredProjects);
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
            id={s}
            className="filter-btn"
            onClick={(e) => {
              if (filters.indexOf(e.target.id) === -1) {
                setFilters([...filters, s])
              } else {
                setFilters(filters.filter((f) => f !== e.target.id));
              }
            }}
          >
            {s}
          </button>
        ))}
        <button
          type="button"
          className='clear-btn'
          onClick={() => {
            setFilters([]);
          }}>
          Clear Filters
        </button>
      </div>
      <div id='projects'>
      {proj.map((p) => (
        <section className="project-tile" key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <a href={p.link}>{ p.link.includes('github') ? 'Code' : 'Live Version' }</a>
          <ul>{p.stacks?.map((s) => <li key={s}>{s}</li>)}</ul>
        </section>
      ))}
      </div>
    </article>
  )
}
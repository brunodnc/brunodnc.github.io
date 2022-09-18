import React, { useEffect, useState } from "react";
import projects from '../data/projects';

export const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects.projects);
  const [stacks, setStacks] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(function getStacksList() {
      const projectStacks = filteredProjects.reduce((stackList, currentProject) => {
        console.log('currentprojectstacks = ' + currentProject.stacks);
        for (const st of currentProject.stacks) {
          if (stackList.indexOf(st) === -1) {
            stackList.push(st);
          };
        };
  
        return stackList;
      }, []);
     setStacks(projectStacks);
  },[filteredProjects]);

  useEffect(function filterProjectsByStack() {
    if (!filters.length) {
      setFilteredProjects(projects.projects);
    } else {
      const filteredProjects = projects.filter(project => {
         for (const filter of filters) {
            if (!project.stacks.includes(filter)) {
              return false
            }
         }
         return true
      });
      setFilteredProjects(filteredProjects)
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
      {filteredProjects.map((p) => (
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
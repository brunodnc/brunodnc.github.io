  import React, { useEffect, useState } from "react";
  import projects from '../data/projects';
  import { generateIcon } from "../helper";



  export const Projects = () => {
    const [filteredProjects, setFilteredProjects] = useState(projects.projects);
    const [stacks, setStacks] = useState([]);
    const [filters, setFilters] = useState([]);

    useEffect(function getStacksList() {
        const projectStacks = filteredProjects.reduce((stackList, currentProject) => {
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
        const filteredProjects = projects.projects.filter(project => {
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
                  setFilters([...filters, s]);
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
            Clear
          </button>
        </div>
        <div id='projects'>
        {filteredProjects.map((p) => (
          <details className="project-tile" key={p.id}>
            <summary>{p.name}</summary>
            <div className="project-card">
              <p>{p.description}</p>
              <a href={p.link} rel="noreferrer" target="_blank">{ p.link.includes('github') ? 'Code' : 'Open' }</a>
              <div>
                <ul className="svgs">{p.stacks?.map((s) => <div key={s}>{generateIcon(s)}</div>)}</ul>
              </div>
            </div>
          </details>
        ))}
        </div>
      </article>
    )
  }
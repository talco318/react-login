import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {PersonalDetails} from "../types/PersonalDetails";
import {apiLogin, apiTableData} from "../utils/authApi";
import {dataReceived, loginSuccess} from "../actions/authActions";


interface Project {
    id: string;
    name: string;
    score: number;
    durationInDays: number;
    bugsCount: number;
    madeDeadline: boolean;
}

const ProjectList: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    const [deadlinePercentage, setDeadlinePercentage] = useState<number>(0);
    const [averageScore, setAverageScore] = useState<number>(0);


    const fetchProjects = async () => {
        try {
            const token = 'YOUR_TOKEN'; // Replace with your actual token
            const response = await axios.get('https://private-052d6-testapi4528.apiary-mock.com/info', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data: Project[] = response.data;
            setProjects(data);
            setFilteredProjects(data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    const calculateMetrics = () => {
        const totalProjects = projects.length;
        const projectsMetDeadline = projects.filter((project) => project.madeDeadline).length;
        const projectsAbove90 = projects.filter((project) => project.score > 90).length;

        setDeadlinePercentage((projectsMetDeadline / totalProjects) * 100 || 0);
        setAverageScore(
            projects.reduce((sum, project) => sum + project.score, 0) / totalProjects || 0
        );
    };

    const handleSort = (key: keyof Project) => {
        const sortedProjects = [...filteredProjects].sort((a, b) =>
            a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0
        );
        setFilteredProjects(sortedProjects);
    };

    const handleFilter = (minScore: number, maxScore: number) => {
        const filtered = projects.filter(
            (project) => project.score >= minScore && project.score <= maxScore
        );
        setFilteredProjects(filtered);
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    useEffect(() => {
        calculateMetrics();
    }, [projects]);

    return (
        <div>
            <div>
                <p>Deadline Percentage: {deadlinePercentage}%</p>
                <p>Average Score: {averageScore}</p>
            </div>
            <table>
                <thead>
                <tr>
                    <th onClick={() => handleSort('name')}>Name</th>
                    <th onClick={() => handleSort('score')}>Score</th>
                    <th onClick={() => handleSort('durationInDays')}>Duration (Days)</th>
                    <th onClick={() => handleSort('bugsCount')}>Bugs Count</th>
                    <th onClick={() => handleSort('madeDeadline')}>Made Deadline</th>
                </tr>
                </thead>
                <tbody>
                {filteredProjects.map((project) => (
                    <tr
                        key={project.id}
                        style={{
                            backgroundColor: project.score < 70 ? 'red' : project.score > 90 ? 'green' : 'white',
                        }}
                    >
                        <td>{project.name}</td>
                        <td>{project.score}</td>
                        <td>{project.durationInDays}</td>
                        <td>{project.bugsCount}</td>
                        <td>{project.madeDeadline ? 'Yes' : 'No'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectList;

// ProjectsTable.tsx
import React, {useState, useEffect} from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {fetchProjects} from '../utils/authApi';

interface Project {
    id: string;
    name: string;
    score: number;
    durationInDays: number;
    bugsCount: number;
    madeDadeline: boolean;
}



const ProjectList: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    const [deadlinePercentage, setDeadlinePercentage] = useState<number>(0);
    const [averageScore, setAverageScore] = useState<number>(0);

    const fetchData = async () => {
        try {
            const data = await fetchProjects();
            setProjects(data);
            setFilteredProjects(data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    const calculateMetrics = () => {
        const totalProjects = projects.length;
        const projectsMetDeadline = projects.filter((project) => project.madeDadeline).length;

        console.log(projectsMetDeadline)
        // const projectsAbove90 = projects.filter((project) => project.score > 90).length;

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
        fetchData();
    }, []);

    useEffect(() => {
        calculateMetrics();
    }, [projects]);

    return (
        <div>
            <center>

            <p>Deadline Percentage: {deadlinePercentage}%</p>
            <p>Average Score: {averageScore}</p>

        <TableContainer style={{ width: '80%' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell onClick={() => handleSort('name')}>Name</TableCell>
                        <TableCell onClick={() => handleSort('score')}>Score</TableCell>
                        <TableCell onClick={() => handleSort('durationInDays')}>Duration (Days)</TableCell>
                        <TableCell onClick={() => handleSort('bugsCount')}>Bugs Count</TableCell>
                        <TableCell onClick={() => handleSort('madeDadeline')}>Made Deadline</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredProjects.map((project) => (
                        <TableRow
                            key={project.id}
                            style={{
                                backgroundColor: project.score < 70 ? 'red' : project.score > 90 ? 'green' : 'white',
                            }}
                        >
                            <TableCell>{project.name}</TableCell>
                            <TableCell>{project.score}</TableCell>
                            <TableCell>{project.durationInDays}</TableCell>
                            <TableCell>{project.bugsCount}</TableCell>
                            <TableCell>{project.madeDadeline ? 'Yes' : 'No'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <br/>
        </TableContainer >
        </center>
        </div>

    );
};

export default ProjectList;

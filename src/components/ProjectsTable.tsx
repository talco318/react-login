import { useMemo, useState, useEffect } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from 'material-react-table';
import {fetchProjects} from "../utils/authApi";

interface Project {
    id: string;
    name: string;
    score: number;
    durationInDays: number;
    bugsCount: number;
    madeDadeline: boolean;
}

export default function App() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    const [deadlinePercentage, setDeadlinePercentage] = useState<number>(0);
    const [averageScore, setAverageScore] = useState<number>(0);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetchProjects();
            setProjects(data);
            setFilteredProjects(data);

            // Calculate deadlinePercentage
            const deadlineProjects = data.filter((project: Project) => project.madeDadeline);
            const percentage = (deadlineProjects.length / data.length) * 100;
            setDeadlinePercentage(percentage);

            // Calculate averageScore
            const totalScore = data.reduce((sum: number, project: Project) => sum + project.score, 0);
            const average = totalScore / data.length;
            setAverageScore(average);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };


    const columns = useMemo<MRT_ColumnDef<Project>[]>(
        () => [
            {
                accessorKey: 'name',
                header: 'Name',
                enableHiding: false,
            },
            {
                accessorKey: 'score',
                header: 'Score',
            },
            {
                accessorKey: 'durationInDays',
                header: 'Duration (Days)',
            },
            {
                accessorKey: 'bugsCount',
                header: 'Bugs Count',
            },
            {
                accessorKey: 'madeDadeline',
                header: 'Made Deadline',
                Cell: ({ renderedCellValue }) => (renderedCellValue ? 'Yes' : 'No'),
            },
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data: filteredProjects,
        enableRowSelection: true,
        enableColumnOrdering: true,
        enableGlobalFilter: false,
    });

    return (
    <div>
        <center>
        <div>
            <br/>
            <br/>
            <p>Deadline Percentage: {deadlinePercentage}%</p>
            <p>Average Score: {averageScore}</p>
        </div>
        <MaterialReactTable table={table} />;
        </center>
    </div>
    );
}

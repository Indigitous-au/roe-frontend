import React, {useState, useEffect} from 'react'

import PageTitle from '../components/Typography/PageTitle'
import response from '../utils/demo/tableData'
import {
    TableBody,
    TableContainer,
    Table,
    TableHeader,
    TableCell,
    TableRow,
    TableFooter,
    Pagination,
} from '@windmill/react-ui'

import {Link} from "react-router-dom";

function Dashboard({token}) {
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])

    // pagination setup
    const resultsPerPage = 10
    const totalResults = response.length

    // pagination change control
    function onPageChange(p) {
        setPage(p)
    }

    // on page change, load new sliced data
    // here you would make another server request for new data
    useEffect(() => {
        setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
    }, [page])

    return (
        <>
            <PageTitle>Dashboard</PageTitle>

            {/* <!-- Cards --> */}
            <TableContainer>
                <Table>
                    <TableHeader>
                        <tr>
                            <TableCell>Report ID</TableCell>
                            <TableCell>Platform</TableCell>
                            <TableCell>Reported On</TableCell>
                            <TableCell>Reporter</TableCell>
                            <TableCell>Suspect</TableCell>
                            <TableCell>IP Address</TableCell>
                            <TableCell>Screenshot</TableCell>
                        </tr>
                    </TableHeader>
                    <TableBody>
                        {data.map((report, i) => (
                            <TableRow key={i}>
                                <TableCell>
                                    <Link to={"/report"}>
                                        <span className="text-sm">{report.id}</span>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link to={"/report"}>
                                        <span className="text-sm">{report.platform}</span>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link to={"/report"}>
                                        <span
                                            className="text-sm">{new Date(report.created_datetime).toLocaleDateString()}</span>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link to={"/report"}>
                                        <span className="text-sm">{report.user_report}</span>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link to={"/report"}>
                                        <span className="text-sm">{report.user_suspect}</span>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link to={"/report"}>
                                        <span className="text-sm">{report.ip_address}</span>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link to={"/report"}>
                                        <span className="text-sm"><img
                                            src={"data:image/jpeg;base64," + report.screenshot}
                                            alt="Screenshot"/></span>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TableFooter>
                    <Pagination
                        totalResults={totalResults}
                        resultsPerPage={resultsPerPage}
                        label="Table navigation"
                        onChange={onPageChange}
                    />
                </TableFooter>
            </TableContainer>
        </>
    )
}

export default Dashboard

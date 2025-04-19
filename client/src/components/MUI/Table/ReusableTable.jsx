import PropTypes from 'prop-types';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination
} from '@mui/material';

const ReusableTable = ({
    columns = [],
    rows = [],
    page,
    rowsPerPage,
    onPageChange,
    onRowsPerPageChange,
    renderRow
}) => {
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: '16px' }}>
            <TableContainer>
                <Table stickyHeader size="small" aria-label="sticky table ">
                    <TableHead>
                        <TableRow >
                            {columns.map((column, index) => (
                                <TableCell
                                    key={index}
                                    align={column.align || 'left'}
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                            <TableRow hover key={row.id || index}>
                                {renderRow(row, index)}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
            />
        </Paper>
    )
}

ReusableTable.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            align: PropTypes.oneOf(['left', 'right', 'center']),
        })
    ).isRequired,
    rows: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    onRowsPerPageChange: PropTypes.func.isRequired,
    renderRow: PropTypes.func.isRequired,
};

export default ReusableTable
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { useMemo } from "react";
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import InputField from "../FormComponents/InputField";

const useStyles = makeStyles(() => ({
  scrollbar: {
    "&::-webkit-scrollbar": {
      width: "12px",
      backgroundColor: "#F5F5F5",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "20px",
      boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
      backgroundColor: "rgb(223 221 221)",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "rgb(198 197 197)",
    },
  },
}));

function GenericTable({
  columns,
  data,
  search,
  recordsPerPage,
  tableHeight = "432px",
}) {
  const classes = useStyles();
  const defaultColumn = useMemo(
    () => ({
      Filter: () => null,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    rows,
    setGlobalFilter,
    page,
    gotoPage,
    pageCount,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: recordsPerPage || 5 },
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const maxHeight =
    (isSmallScreen ? "auto" : tableHeight) === "auto" ? "none" : tableHeight;
  const tableOverflowY =
    rows.length > 0 && rows.length * 50 > maxHeight ? "scroll" : "auto";

  return (
    <Box sx={{ marginY: 2 }}>
      {search && (
        <Grid container>
          <InputField
            label="Search"
            name="name"
            value={globalFilter || ""}
            type="text"
            cols={3}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </Grid>
      )}
      <TableContainer
        className={classes.scrollbar}
        sx={{
          border: "1px solid rgb(223 221 221)",
          marginY: 2,
          height: tableHeight,
          maxHeight: tableHeight,
          overflowY: tableOverflowY,
        }}
        component={Paper}
      >
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span>{column.render("Header")}</span>
                      {column.isSorted ? (
                        <TableSortLabel
                          active={column.isSorted}
                          direction={column.isSortedDesc ? "desc" : "asc"}
                        />
                      ) : null}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>

          {rows.length > 0 && (
            <TableBody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <TableRow {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <TableCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          )}

          {rows.length <= 0 && (
            <TableBody>
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  No data available
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {pageCount > 0 && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          count={data.length}
          rowsPerPage={pageSize}
          page={pageIndex}
          onPageChange={(e, newPage) => gotoPage(newPage)}
          onRowsPerPageChange={(event) => {
            setPageSize(Number(event.target.value));
          }}
        />
      )}
    </Box>
  );
}

GenericTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  search: PropTypes.bool,
  recordsPerPage: PropTypes.number,
};

export default GenericTable;

import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getSortedRowModel, getFilteredRowModel, useGlobalFilter } from '@tanstack/react-table';
import useCoinData from '../utils/useCoinData';
import { useMemo, useState } from 'react';

const BasicTable = () => {
  const apiResponse = useCoinData();

  const data = apiResponse?.data || [];

  /** @type import('@tanstack/react-table').ColumnDef<any>[] */
  const columns = useMemo(
    () => [
      {
        header: 'RANK',
        accessorKey: 'cmc_rank',
      },
      {
        header: 'NAME',
        accessorKey: 'name',
      },
      {
        header: 'SYMBOL',
        accessorKey: 'symbol',
      },
      {
        header: 'PRICE',
        accessorKey: 'quote.USD.price',
        cell: ({ getValue }) => {
            const price = getValue();
            return price.toFixed(2);
          },
      },
      {
        header: '1HR',
        accessorKey: 'quote.USD.percent_change_1h',
        cell: ({ getValue }) => {
            const percentChange = getValue();
            const emoji = percentChange < 0 ? '🔴' : '🟢';
            return `${emoji} ${percentChange.toFixed(2)}`;
          },
      },
      {
        header: '24HR',
        accessorKey: 'quote.USD.percent_change_24h',
        cell: ({ getValue }) => {
            const percentChange = getValue();
            const emoji = percentChange < 0 ? '🔴' : '🟢';
            return `${emoji} ${percentChange.toFixed(2)}`;
          },
      },
      {
        header: '7D',
        accessorKey: 'quote.USD.percent_change_7d',
        cell: ({ getValue }) => {
            const percentChange = getValue();
            const emoji = percentChange < 0 ? '🔴' : '🟢';
            return `${emoji} ${percentChange.toFixed(2)}`;
          },
      },
      {
        header: '30D',
        accessorKey: 'quote.USD.percent_change_30d',
        cell: ({ getValue }) => {
            const percentChange = getValue();
            const emoji = percentChange < 0 ? '🔴' : '🟢';
            return `${emoji} ${percentChange.toFixed(2)}`;
          },
      },
    ],
    []
  );

  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state:{
        sorting: sorting,
        globalFilter: filtering
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    globalFilterFn: (row, columnId, filterValue) => {
        const value = row.getValue(columnId);
        return String(value).toLowerCase().includes(String(filterValue).toLowerCase());
      },
  });

  if (!apiResponse) {
    return <div>Loading...</div>;
  }

  return (
    <div className='py-[25vh] dark:bg-black px-32'>
        <input placeholder='Search' type='text' value={filtering} onChange={e => setFiltering(e.target.value)} className="border border-black"/>
    <table className='table-fixed dark:bg-black'>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr className="px-4 py-2 text-center dark:bg-black" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th className="px-4 py-2 text-center dark:bg-black text-3xl" key={header.id} onClick={header.column.getToggleSortingHandler()}>
                {flexRender(header.column.columnDef.header, header.getContext())}
                {
                    {asc: '˄', desc: '˅'}[header.column.getIsSorted() ?? null]
                }
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr className="px-4 py-2 text-center dark:bg-black" key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td className="px-4 py-2 text-center dark:bg-black" key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <div className='dark:bg-black'>
        <button onClick={() => table.setPageIndex(0)} className='text-3xl mx-2'>˱˱</button>
        <button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage() }className='text-3xl mx-2'>˱</button>
        <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}className='text-3xl mx-2'>˲</button>
        <button onClick={() => table.setPageIndex(table.getPageCount() - 1) }className='text-3xl mx-2'>˲˲</button>
    </div>
    </div>
  );
};

export default BasicTable;

import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react';
import styles from './TableContent.module.css';
import { StatusPoint } from '../StatusPoint/StatusPoint.tsx';
import DeleteForm from '../DeleteForm/DeleteForm.tsx';

TableContent.propTypes = {};

function TableContent({
  head,
  body,
}: {
  head: Array<string>;
  body: Array<{
    id: string;
    slug: string;
    category: string;
    required: string;
    title: string;
    status: string;
    action: string;
  }>;
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <>
      <div className={styles.wrapper}>
        <Table
          sx={{ minWidth: 650 }}
          // className={styles.table}
        >
          <TableHead>
            <TableRow className={styles.table_header_row}>
              {head.map((item) => (
                <TableCell
                  className={`${styles.table_cell} ${styles.table_cell_header} ${styles.table_header_action}`}
                >
                  <div className={styles.table_header}>
                    {item}
                    <span>
                      <svg
                        width='15'
                        height='15'
                        viewBox='0 0 15 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M7.64231 1.90736C7.79322 1.71708 8.08885 1.71708 8.23975 1.90736L11.3915 5.88141C11.5823 6.12203 11.4056 6.47053 11.0928 6.47053L4.78929 6.47053C4.47646 6.47053 4.29975 6.12203 4.49057 5.88141L7.64231 1.90736Z'
                          fill='#808080'
                        />
                        <path
                          d='M7.64231 12.7985C7.79322 12.9888 8.08885 12.9888 8.23975 12.7985L11.3915 8.82447C11.5823 8.58386 11.4056 8.23535 11.0928 8.23535L4.78929 8.23535C4.47646 8.23535 4.29975 8.58386 4.49057 8.82447L7.64231 12.7985Z'
                          fill='#808080'
                        />
                      </svg>
                    </span>
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {body.map((item, idx) => (
              <TableRow
                key={item.id}
                className={styles.row}
              >
                <TableCell className={styles.table_cell}>{item.slug}</TableCell>
                <TableCell className={styles.table_cell}>{item.category}</TableCell>
                <TableCell className={styles.table_cell}>{item.required}</TableCell>
                <TableCell className={styles.table_cell}>{item.title}</TableCell>
                <TableCell className={styles.table_cell}>
                  <StatusPoint status={item.status} />
                  {item.status}
                </TableCell>
                <TableCell
                  aria-label='sticky'
                  className={`${styles.table_cell} ${styles.table_cell_action}`}
                >
                  <div className={styles.action}>
                    <span className='update-btn'>
                      <svg
                        width='34'
                        height='26'
                        viewBox='0 0 34 26'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M6.91652 14.0002C6.91652 13.586 7.25231 13.2502 7.66652 13.2502H14.4165C14.8307 13.2502 15.1665 13.586 15.1665 14.0002C15.1665 14.4144 14.8307 14.7502 14.4165 14.7502H7.66652C7.25231 14.7502 6.91652 14.4144 6.91652 14.0002Z'
                          fill='#0FA4C5'
                        />
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M12.1665 1.90918C11.9435 1.90918 11.7296 1.99778 11.5718 2.1555L2.34374 11.3836L1.9473 12.9694L3.53308 12.5729L12.7612 3.34484C12.8393 3.26675 12.9012 3.17404 12.9435 3.072C12.9858 2.96997 13.0075 2.86061 13.0075 2.75017C13.0075 2.63973 12.9858 2.53037 12.9435 2.42834C12.9012 2.3263 12.8393 2.23359 12.7612 2.1555C12.6831 2.07741 12.5904 2.01546 12.4884 1.9732C12.3863 1.93093 12.277 1.90918 12.1665 1.90918ZM10.5112 1.09484C10.9502 0.655819 11.5457 0.40918 12.1665 0.40918C12.4739 0.40918 12.7784 0.469731 13.0624 0.587377C13.3464 0.705023 13.6045 0.877459 13.8218 1.09484C14.0392 1.31222 14.2117 1.57029 14.3293 1.85431C14.447 2.13833 14.5075 2.44275 14.5075 2.75017C14.5075 3.05759 14.447 3.36201 14.3293 3.64603C14.2117 3.93005 14.0392 4.18812 13.8218 4.4055L4.44685 13.7805C4.35073 13.8766 4.2303 13.9448 4.09842 13.9778L1.09842 14.7278C0.84284 14.7917 0.572475 14.7168 0.38619 14.5305C0.199904 14.3442 0.125018 14.0739 0.188913 13.8183L0.938913 10.8183C0.971882 10.6864 1.04007 10.566 1.13619 10.4698L10.5112 1.09484Z'
                          fill='#0FA4C5'
                        />
                      </svg>
                    </span>
                    <span
                      className='delete-btn'
                      onClick={() => (setOpen(true), setIndex(idx))}
                    >
                      <svg
                        width='34'
                        height='26'
                        viewBox='0 0 34 26'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M0.166504 4.5C0.166504 4.08579 0.50229 3.75 0.916504 3.75H14.4165C14.8307 3.75 15.1665 4.08579 15.1665 4.5C15.1665 4.91421 14.8307 5.25 14.4165 5.25H0.916504C0.50229 5.25 0.166504 4.91421 0.166504 4.5Z'
                          fill='#114252'
                        />
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M6.1665 2.25C5.96759 2.25 5.77683 2.32902 5.63617 2.46967C5.49552 2.61032 5.4165 2.80109 5.4165 3V3.75H9.9165V3C9.9165 2.80109 9.83749 2.61032 9.69683 2.46967C9.55618 2.32902 9.36542 2.25 9.1665 2.25H6.1665ZM11.4165 3.75V3C11.4165 2.40326 11.1795 1.83097 10.7575 1.40901C10.3355 0.987053 9.76324 0.75 9.1665 0.75H6.1665C5.56977 0.75 4.99747 0.987053 4.57551 1.40901C4.15356 1.83097 3.9165 2.40326 3.9165 3V3.75H2.4165C2.00229 3.75 1.6665 4.08579 1.6665 4.5V15C1.6665 15.5967 1.90356 16.169 2.32551 16.591C2.74747 17.0129 3.31977 17.25 3.9165 17.25H11.4165C12.0132 17.25 12.5855 17.0129 13.0075 16.591C13.4294 16.169 13.6665 15.5967 13.6665 15V4.5C13.6665 4.08579 13.3307 3.75 12.9165 3.75H11.4165ZM3.1665 5.25V15C3.1665 15.1989 3.24552 15.3897 3.38617 15.5303C3.52683 15.671 3.71759 15.75 3.9165 15.75H11.4165C11.6154 15.75 11.8062 15.671 11.9468 15.5303C12.0875 15.3897 12.1665 15.1989 12.1665 15V5.25H3.1665Z'
                          fill='#114252'
                        />
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M6.1665 7.5C6.58072 7.5 6.9165 7.83579 6.9165 8.25V12.75C6.9165 13.1642 6.58072 13.5 6.1665 13.5C5.75229 13.5 5.4165 13.1642 5.4165 12.75V8.25C5.4165 7.83579 5.75229 7.5 6.1665 7.5Z'
                          fill='#114252'
                        />
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M9.1665 7.5C9.58072 7.5 9.9165 7.83579 9.9165 8.25V12.75C9.9165 13.1642 9.58072 13.5 9.1665 13.5C8.75229 13.5 8.4165 13.1642 8.4165 12.75V8.25C8.4165 7.83579 8.75229 7.5 9.1665 7.5Z'
                          fill='#114252'
                        />
                      </svg>
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <DeleteForm
        isOpen={open}
        index={index}
      />
    </>
  );
}

export default TableContent;

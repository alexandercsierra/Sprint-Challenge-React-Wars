import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Pages = (props) => {
    const {setPage} = props;

  return (
    <Pagination aria-label="Page navigation example">
    {/* <PaginationItem>
        <PaginationLink first href="#"  />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem> */}
      <PaginationItem>
        <PaginationLink href="#" onClick={e => {
           e.preventDefault();
           setPage(1); 
        }}>
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={e => {
           e.preventDefault();
           setPage(2); 
        }}>
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={e => {
           e.preventDefault();
           setPage(3); 
        }}>
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={e => {
           e.preventDefault();
           setPage(4); 
        }}>
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={e => {
           e.preventDefault();
           setPage(5); 
        }}>
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={e => {
           e.preventDefault();
           setPage(6); 
        }}>
          6
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={e => {
           e.preventDefault();
           setPage(7); 
        }}>
          7
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={e => {
           e.preventDefault();
           setPage(8); 
        }}>
          8
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={e => {
           e.preventDefault();
           setPage(9); 
        }}>
          9
        </PaginationLink>
      </PaginationItem>
      {/* <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" />
    //   </PaginationItem> */}
    </Pagination>
  );
}

export default Pages;
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

interface PaginationProps {
  totalCount: number;
  limit: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  totalCount,
  limit,
  onPageChange,
}: PaginationProps) {
  const [active, setActive] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  const getItemProps = (index: any) =>
    ({
      className: `bg-${
        active === index ? "sky-800 text-white" : "transparent text-gray"
      } `,
      variant: active === index ? "filled" : "text",
      color: "gray",
      bg: active === index ? "black" : "transparent",
      onClick: () => {
        setActive(index);
        onPageChange(index);
      },
    } as any);

  const next = () => {
    if (active === totalPages) return;

    setActive(active + 1);
    onPageChange(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
    onPageChange(active - 1);
  };

  useEffect(() => {
    const pages = Math.ceil(totalCount / limit);
    setTotalPages(pages);
  }, [totalCount, limit]);

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2 text-gray-800">
        {Array.from({ length: totalPages }, (_, index) => (
          <IconButton key={index + 1} {...getItemProps(index + 1)}>
            {index + 1}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === 5}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}

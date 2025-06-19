import { Link } from "@inertiajs/react";
import React from 'react'; // Make sure to import React

const Pagination = ({ total, page, url }) => {
    // Define how many page numbers you want to show around the current page
    const maxPagesToShow = 5; // e.g., 2 before, current, 2 after

    const getPageNumbers = () => {
        const pages = [];
        const startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
        const endPage = Math.min(total, page + Math.floor(maxPagesToShow / 2));

        if (startPage > 1) {
            pages.push(1);
            if (startPage > 2) {
                pages.push('...');
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        if (endPage < total) {
            if (endPage < total - 1) {
                pages.push('...');
            }
            pages.push(total);
        }

        // Adjust for cases where there aren't enough pages to fill maxPagesToShow
        // This ensures you always get at least maxPagesToShow (if total allows)
        if (pages.length < maxPagesToShow && total > maxPagesToShow) {
            // Re-calculate to show more pages if space available
            const newPages = [];
            let newStart = 1;
            let newEnd = total;

            if (page <= Math.ceil(maxPagesToShow / 2)) { // Near the beginning
                newEnd = maxPagesToShow;
            } else if (page >= total - Math.floor(maxPagesToShow / 2)) { // Near the end
                newStart = total - maxPagesToShow + 1;
            } else { // In the middle
                newStart = page - Math.floor(maxPagesToShow / 2);
                newEnd = page + Math.floor(maxPagesToShow / 2);
            }

            for (let i = newStart; i <= newEnd; i++) {
                newPages.push(i);
            }

            if (newStart > 1) {
                if (newStart > 2) newPages.unshift('...');
                newPages.unshift(1);
            }
            if (newEnd < total) {
                if (newEnd < total - 1) newPages.push('...');
                newPages.push(total);
            }
            return [...new Set(newPages)]; // Remove duplicates
        }

        return [...new Set(pages)]; // Use Set to remove potential duplicates if logic overlaps
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="join flex justify-end">
            {pageNumbers.map((item, index) => (
                <React.Fragment key={index}> {/* Using React.Fragment for key on outer element */}
                    {item === '...' ? (
                        <button className="join-item btn btn-sm btn-disabled">...</button>
                    ) : (
                        <Link
                            href={`${url}?page=${item}`} // Important: append ?page=${item} to the URL
                            preserveScroll // Optional: keeps scroll position after navigation
                            preserveState  // Optional: keeps component state after navigation
                        >
                            <button
                                className={"join-item btn btn-sm" + (item === page ? " btn-active" : "")}
                            >
                                {item}
                            </button>
                        </Link>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Pagination;
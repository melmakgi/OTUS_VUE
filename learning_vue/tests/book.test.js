import {describe, it, expect} from "vitest";
import {addBook, book, books, delBookItem} from "@/utils/book";

describe('Books', () => {
    it('Add Item', () => {
        const items = books;
        expect(addBook(book));
    })
    it('Delete Item', () => {
        const items = books;
        expect(delBookItem(1));
    })
})
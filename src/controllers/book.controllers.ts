import { Request, Response } from "express";
import { BookInterface } from "../interface/Book.interface";
import { Book } from "../entitys/Book";


export const createBook = async (
      req: Request<any, any, BookInterface>,
      res: Response,
      next: any
) => {

      try {
            const { name, author, completed } = req.body;

            const book = new Book();
            book.name = name;
            book.author = author;
            book.completed = completed;
            book.user = Number(req.headers.authorization)

            await book.save();

            res.status(201).json({
                  message: 'Se ha creado un nuevo libro',
                  book
            });

      } catch (e) {
            next(e);
      }
}

export const findAllBooks = async (req: Request, res: Response, next: any) => {

      try {
            const listBooks = await Book.find({ relations: { user: true } });
            res.status(200).json({ message: 'Todos los libros', info: listBooks });

      } catch (error) {
            next(error);
      }
}


export const deleteBook = async (req: Request, res: Response, next: any) => {

      const { id } = req.params;

      try {
            const result = await Book.delete({ id: parseInt(id) });
            console.log(result);

            if (result.affected === 0)
                  return res.status(404).json({ message: 'Libro no encontrado' });

            return res.status(204);

      } catch (error) {
            next(error);
      }

}

export const editBook = async (req: Request, res: Response, next: any) => {
      const { id } = req.params;

      try {
            const book = await Book.findOneBy({ id: parseInt(id) });

            if (!book) return res.status(404).json({ message: 'libro no encontrado' });

            await Book.update({ id: parseInt(id) }, req.body);
            res.status(200).json({ message: 'Se ha actualizado libro' });

      } catch (error) {
            next(error);
      }


}
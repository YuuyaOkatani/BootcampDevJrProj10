import { booleanAttribute, Component } from '@angular/core';
import { Book } from '../../book';
// Componente pai
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  book: Book = {} as Book;
  isUpdate: boolean = false;

  isDelete: Boolean = false;
  idCount: number = 0;

  books: Book[] = [
    { id: 1, title: 'Java 24 horas', author: 'Glauco Todesco', price: 40.50 },
    { id: 2, title: 'Angular 24 horas', author: 'Fernanda Maria', price: 36.50 },
    { id: 3, title: 'AWS 24 horas', author: 'Juliana Silva', price: 20.99 },
    { id: 4, title: 'Node.js 24 horas', author: 'André Silva', price: 39.99 },
    { id: 5, title: 'React Native 24 horas', author: 'Carlos Siqueira', price: 45.99 },
    { id: 6, title: 'Python 24 horas', author: 'Maria Maria', price: 30.00 }
  ];

  atualizarArray(){
    

      for(let book of this.books){
        if(this.book.id === book.id || this.book.id === this.idCount){
          this.idCount++;
          this.book.id = this.idCount;
          this.atualizarArray()
     
          
          break;
     
          
        }
 
  
      
    }



  }

  //Ao receber eventEmitter, ele salva usando esta função pegando o objeto recebido do pai
  saveBook() {



    //Correção 
    if(!this.isUpdate){
      console.log(this.books)
      // Refatorar essa joça depois
      this.atualizarArray()
      
      console.log(this.book.id)
      
      // 
      
      this.books.push(this.book);

    }

    this.book = {} as Book;
    this.isUpdate = false;






    //Entendi agora. Não precisava de procurar se o variável existe no array
    //entretanto, como o update já coloca o próprio objeto para se modificado e será modificado
    // não seria necessário para procurar.



    /*
          var state = 1; 
    
          for (let book of this.books) {
            if (book.id === this.book.id) {
              state = 0;
              book.title = this.book.title;
              book.author = this.book.author;
              book.price = this.book.price;
    
            }
    
    
          }
          if (state === 1) {
            this.book.id = this.books.length + 1;
            this.books.push(this.book);
            
          }
    
          this.book = {} as Book;
    
        
    */




  }

  updateBook(selectedBook: Book) {
    // pega o objeto iniciado
    this.book = selectedBook;
    this.isUpdate = true
    console.log("Alterando: " + selectedBook.title)

  }

  removeBook(selectedBook: Book) {
  
    this.books = this.books.filter(book => book !== selectedBook);

    console.log("Removendo: " + selectedBook.title)

  }


}

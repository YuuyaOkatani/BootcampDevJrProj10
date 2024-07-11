import { Component, Input,Output , EventEmitter } from '@angular/core';
import { Book } from '../../book';

// Componente filho

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
 

  // Receber o objeto "book" do formulario que foi cadastrado
  @Input()
  book: Book = {} as Book; 


  //  Envia o objeto "book" para componente pai, avisando que recebeu o objeto pronto
  @Output()
  saveEmitter = new EventEmitter();


  // Ao clicar o botão salvar do formulário
  save(){
    this.saveEmitter.emit();
  }

  


}
